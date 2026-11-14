import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSummary, cachedSummary, fetchRepository, repositories, synchronize, approvedStableCommit } from './sync-releases.mjs';

const config = repositories.randomizer;
function release(tag, overrides = {}, repo = config.repo) {
  const name = repo === config.repo ? `DefinitiveRandomizer-${tag.slice(1)}-win-x64.zip` : 'PokemonTracker-Windows-x64.zip';
  return {
    tag_name: tag, html_url: `https://github.com/${repo}/releases/tag/${tag}`,
    published_at: '2026-11-13T12:00:00Z', draft: false, prerelease: tag.includes('-'),
    assets: [{ name, browser_download_url: `https://github.com/${repo}/releases/download/${tag}/${name}`, state: 'uploaded', size: 42, download_count: 7 }],
    ...overrides,
  };
}
const response = (body, next = false, status = 200) => new Response(JSON.stringify(body), { status, headers: next ? { link: '<next>; rel="next"' } : {} });

test('stable WPF wins over newer previews and legacy WinForms', () => {
  const legacy = release('v4.17.1');
  legacy.assets[0].name = 'pk3DS-Progressive-v4.17.1-win-x64.zip';
  const summary = buildSummary([legacy, release('v0.15.0-preview.2'), release('v1.1.0-preview.1'), release('v1.0.0')], config);
  assert.equal(summary.stable.version, 'v1.0.0');
  assert.equal(summary.preview.version, 'v1.1.0-preview.1');
  assert.equal(summary.totalDownloads, 28);
  assert.equal(summary.countedAssets, 4);
});
test('missing stable never promotes an old preview', () => {
  const summary = buildSummary([release('v0.8.0-preview.1'), release('v4.17.1'), release('v1.1.0-preview.1')], config);
  assert.equal(summary.stable, null);
  assert.equal(summary.preview.version, 'v1.1.0-preview.1');
});
test('future versions use numeric order rather than publication dates', () => {
  const summary = buildSummary([release('v1.9.0'), release('v1.10.0', { published_at: '2026-11-12T12:00:00Z' }), release('v1.11.0-preview.2'), release('v1.11.0-preview.10')], config);
  assert.equal(summary.stable.version, 'v1.10.0');
  assert.equal(summary.preview.version, 'v1.11.0-preview.10');
});
for (const [label, mutate] of [
  ['draft', r => { r.draft = true; }],
  ['unpublished', r => { r.published_at = null; }],
  ['empty assets', r => { r.assets = []; }],
  ['upload incomplete', r => { r.assets[0].state = 'new'; }],
  ['empty ZIP', r => { r.assets[0].size = 0; }],
  ['wrong family', r => { r.assets[0].name = 'pk3DS-Progressive-v4.17.1-win-x64.zip'; }],
  ['wrong asset version', r => { r.assets[0].name = 'DefinitiveRandomizer-0.8.0-preview.1-win-x64.zip'; }],
  ['foreign download', r => { r.assets[0].browser_download_url = 'https://example.com/download.zip'; }],
  ['foreign release', r => { r.html_url = 'https://example.com/release'; }],
  ['channel mismatch', r => { r.prerelease = true; }],
  ['invalid tag', r => { r.tag_name = 'v1.0.0-rc.1'; }],
]) test(`rejects unusable stable: ${label}`, () => {
  const item = release('v1.0.0'); mutate(item);
  assert.equal(buildSummary([item], config).stable, null);
});
test('historical totals exclude drafts, sources and checksums', () => {
  const stable = release('v1.0.0');
  stable.assets.push({ name: 'DefinitiveRandomizer-1.0.0-source.zip', download_count: 99 }, { name: 'SHA256SUMS.txt', download_count: 99 });
  const summary = buildSummary([stable, release('v1.2.0', { draft: true })], config);
  assert.equal(summary.totalDownloads, 7); assert.equal(summary.countedAssets, 1);
});
for (const [label, count] of [['negative', -1], ['missing', undefined], ['fractional', 1.5], ['unsafe', Number.MAX_SAFE_INTEGER + 1]]) {
  test(`rejects invalid download counts: ${label}`, () => {
    const item = release('v1.0.0'); item.assets[0].download_count = count;
    assert.throws(() => buildSummary([item], config), /Contador/);
  });
}
test('rejects an overflowing total', () => {
  const item = release('v1.0.0'); item.assets[0].download_count = Number.MAX_SAFE_INTEGER;
  assert.throws(() => buildSummary([item, release('v1.1.0')], config), /rango/);
});
test('tracker selects its own stable independently', () => {
  const tracker = repositories.tracker;
  const summary = buildSummary([release('v1.4.0', {}, tracker.repo), release('v1.5.0-preview.1', {}, tracker.repo), release('v1.0.0')], tracker);
  assert.equal(summary.stable.version, 'v1.4.0');
  assert.equal(summary.totalDownloads, 14);
  assert.equal(summary.repositoryUrl, 'https://github.com/joanjuz/NuzlockeTracker');
});
test('migration keeps old counts and dates but removes old recommendations', () => {
  const old = { ...buildSummary([release('v4.17.1')], config, '2026-10-16T12:00:00Z'), schemaVersion: 1 };
  const migrated = cachedSummary(old, config);
  assert.equal(migrated.stable, null); assert.equal(migrated.preview, null);
  assert.equal(migrated.totalDownloads, 7); assert.equal(migrated.checkedAt, '2026-10-16T12:00:00Z');
});
test('cache cannot claim approved v1.0.0 without verified source commit', () => {
  const cached = buildSummary([release('v1.0.0')], config);
  assert.equal(cachedSummary(cached, config).stable, null);
  cached.stable.sourceCommit = approvedStableCommit;
  assert.equal(cachedSummary(cached, config).stable.version, 'v1.0.0');
});
test('pagination includes every page and verifies approved commit', async () => {
  const seen = [];
  const summary = await fetchRepository(config, async url => {
    seen.push(url);
    if (url.endsWith('/commits/v1.0.0')) return response({ sha: approvedStableCommit });
    return url.endsWith('page=1') ? response([release('v0.8.0-preview.1')], true) : response([release('v1.0.0')]);
  });
  assert.equal(summary.totalDownloads, 14); assert.equal(summary.stable.sourceCommit, approvedStableCommit);
  assert.equal(seen.length, 3);
});
test('wrong approved commit blocks stable verification', async () => {
  await assert.rejects(fetchRepository(config, async url => response(url.includes('/commits/') ? { sha: 'different' } : [release('v1.0.0')])), /commit aprobado/);
});
test('incomplete pagination rejects a partial total', async () => {
  await assert.rejects(fetchRepository(config, async () => response([release('v0.8.0-preview.1')], true)), /paginación/i);
});
test('API errors and malformed responses reject instead of returning zero', async () => {
  await assert.rejects(fetchRepository(config, async () => response({}, false, 403)), /403/);
  await assert.rejects(fetchRepository(config, async () => response({})), /inválida/);
});
test('network failure preserves verified totals while tracker still updates', async () => {
  const old = { randomizer: buildSummary([release('v0.8.0-preview.1')], config, '2026-10-16T12:00:00Z') };
  const updated = await synchronize(old, async c => {
    if (c === config) throw new Error('offline');
    return buildSummary([release('v1.4.0', {}, c.repo)], c);
  });
  assert.equal(updated.randomizer.totalDownloads, 7);
  assert.equal(updated.randomizer.checkedAt, '2026-10-16T12:00:00Z');
  assert.equal(updated.tracker.stable.version, 'v1.4.0');
});
test('missing cache fails without inventing statistics', async () => {
  await assert.rejects(synchronize({}, async () => { throw new Error('offline'); }), /datos verificados/);
});
test('deployment gate requires a fresh published stable', async () => {
  const pending = c => Promise.resolve(buildSummary([], c));
  await assert.rejects(synchronize({}, pending, true), /Publicación bloqueada/);
  const cached = { randomizer: buildSummary([release('v1.0.0')], config) };
  await assert.rejects(synchronize(cached, async () => { throw new Error('offline'); }, true), /offline/);
  const result = await synchronize({}, async c => buildSummary([release(c === config ? 'v1.0.0' : 'v1.4.0', {}, c.repo)], c), true);
  assert.equal(result.randomizer.stable.version, 'v1.0.0');
});
