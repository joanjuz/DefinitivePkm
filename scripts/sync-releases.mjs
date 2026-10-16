import { readFile, writeFile } from 'node:fs/promises';

const destination = new URL('../src/data/releases.json', import.meta.url);
const repositories = {
  randomizer: { repo: 'joanjuz/Definitive-Randomizer', featuredTag: 'v0.8.0-preview.1', asset: /^(?:DefinitiveRandomizer|pk3DS-Progressive)-.+-win-x64\.zip$/i },
  tracker: { repo: 'joanjuz/NuzlockeTracker', asset: /^PokemonTracker-Windows-x64\.zip$/i },
};

function summarize(release, assetPattern) {
  return {
    version: release.tag_name,
    url: release.html_url,
    publishedAt: release.published_at,
    prerelease: release.prerelease,
    assets: release.assets.filter(asset => assetPattern.test(asset.name)).map(asset => ({
      name: asset.name,
      url: asset.browser_download_url,
    })),
  };
}

async function fetchRepository({ repo, asset, featuredTag }) {
  const releases = [];
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'PokeJuz-release-summary' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  for (let page = 1; page <= 20; page++) {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=100&page=${page}`, {
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
  releases.sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));
  const stable = releases.find(release => !release.prerelease && release.assets.some(file => asset.test(file.name)));
  const preview = releases.find(release => release.prerelease && release.assets.some(file => asset.test(file.name)));
  const featured = featuredTag ? releases.find(release => release.tag_name === featuredTag && release.assets.some(file => asset.test(file.name))) : null;
  if (featuredTag && !featured) throw new Error(`La versión destacada ${featuredTag} no está disponible en ${repo}.`);
  const assets = releases.flatMap(release => release.assets.filter(file => asset.test(file.name)));
  if (assets.some(file => !Number.isSafeInteger(file.download_count) || file.download_count < 0)) {
    throw new Error(`GitHub devolvió un contador inválido para ${repo}`);
  }
  return {
    repositoryUrl: `https://github.com/${repo}`,
    releasesUrl: `https://github.com/${repo}/releases`,
    checkedAt: new Date().toISOString(),
    stable: stable ? summarize(stable, asset) : null,
    preview: preview ? summarize(preview, asset) : null,
    featured: featured ? summarize(featured, asset) : null,
    totalDownloads: assets.reduce((sum, file) => sum + file.download_count, 0),
    countedAssets: assets.length,
  };
}

let snapshot;
try { snapshot = JSON.parse(await readFile(destination, 'utf8')); } catch { snapshot = {}; }
let updated = false;
for (const [key, config] of Object.entries(repositories)) {
  try {
    snapshot[key] = await fetchRepository(config);
    updated = true;
    console.log(`${config.repo}: ${snapshot[key].totalDownloads} descargas de ${snapshot[key].countedAssets} ZIP oficiales.`);
  } catch (error) {
    // Never replace a verified historical total with zero on a network failure.
    if (!snapshot[key]?.checkedAt) throw new Error(`No hay datos verificados para ${config.repo}.`, { cause: error });
    console.warn(`No se pudo actualizar ${config.repo}; se conserva la consulta de ${snapshot[key].checkedAt}. ${error.message}`);
  }
}
if (updated) await writeFile(destination, JSON.stringify(snapshot, null, 2) + '\n');
