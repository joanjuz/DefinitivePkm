import { readFile, writeFile, rename } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const destination = new URL('../src/data/releases.json', import.meta.url);
export const approvedStableCommit = '533487a19ab345f8421e5ec912ed0cff69674af6';
export const repositories = {
  randomizer: {
    repo: 'joanjuz/Definitive-Randomizer', family: 'wpf-v1',
    asset: /^DefinitiveRandomizer-\d+\.\d+\.\d+(?:-[\w.]+)?-win-x64\.zip$/i,
    historicalAsset: /^(?:DefinitiveRandomizer|pk3DS-Progressive)-.+-win-x64\.zip$/i,
  },
  tracker: { repo: 'joanjuz/NuzlockeTracker', family: 'tracker', asset: /^PokemonTracker-Windows-x64\.zip$/i, historicalAsset: /^PokemonTracker-Windows-x64\.zip$/i },
};

function version(tag) {
  const match = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-preview\.(0|[1-9]\d*))?$/.exec(tag);
  return match ? { numbers: match.slice(1, 4).map(Number), preview: match[4] === undefined ? null : Number(match[4]) } : null;
}

export function eligible(release, config, preview = false) {
  const parsed = version(release.version);
  if (!parsed || release.prerelease !== preview || (parsed.preview !== null) !== preview) return false;
  if (config.family === 'wpf-v1' && (parsed.numbers[0] !== 1 || (preview && parsed.numbers[1] < 1))) return false;
  const root = `https://github.com/${config.repo}/releases`;
  return release.url === `${root}/tag/${release.version}` && Number.isFinite(Date.parse(release.publishedAt)) &&
    release.assets?.some(asset => config.asset.test(asset.name) &&
      (config.family !== 'wpf-v1' || asset.name.toLowerCase() === `DefinitiveRandomizer-${release.version.slice(1)}-win-x64.zip`.toLowerCase()) &&
      asset.url === `${root}/download/${release.version}/${asset.name}`);
}

function newest(releases) {
  return releases.sort((a, b) => {
    const av = version(a.version), bv = version(b.version);
    for (let i = 0; i < 3; i++) if (av.numbers[i] !== bv.numbers[i]) return bv.numbers[i] - av.numbers[i];
    return (bv.preview ?? 0) - (av.preview ?? 0);
  })[0] ?? null;
}

export function buildSummary(items, config, checkedAt = new Date().toISOString()) {
  const releases = items.filter(release => !release.draft && release.published_at);
  const assets = releases.flatMap(release => release.assets.filter(file => config.historicalAsset.test(file.name)));
  if (assets.some(file => !Number.isSafeInteger(file.download_count) || file.download_count < 0)) throw new Error(`Contador inválido para ${config.repo}`);
  const totalDownloads = assets.reduce((sum, file) => sum + file.download_count, 0);
  if (!Number.isSafeInteger(totalDownloads)) throw new Error('Total fuera de rango');
  const summaries = releases.map(release => ({
    version: release.tag_name, url: release.html_url, publishedAt: release.published_at, prerelease: release.prerelease,
    assets: release.assets.filter(file => config.asset.test(file.name) && file.state === 'uploaded' && file.size > 0).map(file => ({ name: file.name, url: file.browser_download_url })),
  }));
  return {
    schemaVersion: 2, family: config.family,
    repositoryUrl: `https://github.com/${config.repo}`, releasesUrl: `https://github.com/${config.repo}/releases`, checkedAt,
    stable: newest(summaries.filter(release => eligible(release, config))),
    preview: newest(summaries.filter(release => eligible(release, config, true))),
    totalDownloads, countedAssets: assets.length,
  };
}

export function cachedSummary(previous, config) {
  if (!previous || !Number.isFinite(Date.parse(previous.checkedAt)) ||
      !Number.isSafeInteger(previous.totalDownloads) || previous.totalDownloads < 0 ||
      !Number.isSafeInteger(previous.countedAssets) || previous.countedAssets < 0 || previous.repositoryUrl !== `https://github.com/${config.repo}`) {
    throw new Error(`No hay datos verificados para ${config.repo}`);
  }
  // Old snapshots keep their historical total, never their old recommendation.
  return {
    schemaVersion: 2, family: config.family,
    repositoryUrl: previous.repositoryUrl, releasesUrl: `https://github.com/${config.repo}/releases`, checkedAt: previous.checkedAt,
    stable: previous.schemaVersion === 2 && eligible(previous.stable ?? {}, config) &&
      (config.family !== 'wpf-v1' || previous.stable.version !== 'v1.0.0' || previous.stable.sourceCommit === approvedStableCommit) ? previous.stable : null,
    preview: previous.schemaVersion === 2 && eligible(previous.preview ?? {}, config, true) ? previous.preview : null,
    totalDownloads: previous.totalDownloads, countedAssets: previous.countedAssets,
  };
}

export async function fetchRepository(config, fetcher = fetch) {
  const { repo } = config;
  const releases = [];
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'PokeJuz-release-summary' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  for (let page = 1; page <= 20; page++) {
    const response = await fetcher(`https://api.github.com/repos/${repo}/releases?per_page=100&page=${page}`, {
      headers,
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error(`GitHub respondió ${response.status} para ${repo}`);
    const items = await response.json();
    if (!Array.isArray(items)) throw new Error(`Respuesta inválida para ${repo}`);
    releases.push(...items.filter(release => !release.draft));
    if (!response.headers.get('link')?.includes('rel="next"')) break;
    if (page === 20) throw new Error(`La paginación de ${repo} excede el límite; no se guardará un total parcial.`);
  }
  const summary = buildSummary(releases, config);
  if (config.family === 'wpf-v1' && summary.stable?.version === 'v1.0.0') {
    const response = await fetcher(`https://api.github.com/repos/${repo}/commits/v1.0.0`, { headers, signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error('No se pudo verificar el commit de v1.0.0');
    const commit = await response.json();
    if (commit.sha !== approvedStableCommit) throw new Error('v1.0.0 no corresponde al commit aprobado');
    summary.stable.sourceCommit = commit.sha;
  }
  return summary;
}

export async function synchronize(previous, fetcher = fetchRepository, requireLaunch = false) {
  const snapshot = {};
  for (const [key, config] of Object.entries(repositories)) {
    try { snapshot[key] = await fetcher(config); }
    catch (error) {
      if (requireLaunch && key === 'randomizer') throw error;
      snapshot[key] = cachedSummary(previous[key], config);
      console.warn(`${config.repo}: se conserva la consulta de ${snapshot[key].checkedAt}. ${error.message}`);
    }
  }
  if (requireLaunch && !snapshot.randomizer.stable) throw new Error('Publicación bloqueada: falta una release estable WPF v1.x verificada.');
  return snapshot;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  let previous;
  try { previous = JSON.parse(await readFile(destination, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; previous = {}; }
  const snapshot = await synchronize(previous, fetchRepository, process.argv.includes('--require-launch'));
  const temporary = new URL(`${destination.href}.tmp`);
  await writeFile(temporary, JSON.stringify(snapshot, null, 2) + '\n');
  await rename(temporary, destination);
  for (const [key, summary] of Object.entries(snapshot)) console.log(`${key}: ${summary.stable?.version ?? 'estable pendiente'}; ${summary.totalDownloads} descargas de ${summary.countedAssets} ZIP oficiales. Consulta: ${summary.checkedAt}`);
}
