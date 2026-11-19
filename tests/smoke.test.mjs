import assert from 'node:assert/strict';
import { test } from 'node:test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const routes = [
  ['/', 'Creative training and talent in Nairobi', 'partner', 'nairobi-conversation'],
  ['/organization', 'Find someone for your next project', 'talent', 'nairobi-desk'],
  ['/youth-hub', 'Training for creative and digital work', 'training', 'nairobi-desk'],
  ['/about-us', 'More ways to learn and do creative work', 'partner'],
  ['/partnerships', 'Partner with Spark8Edge', 'partner', 'nairobi-skyline'],
];
for (const [path, heading, intent, photo] of routes) {
  test(`${path} renders its offer and direct WhatsApp path`, async () => {
    const response = await fetch(base + path);
    assert.equal(response.status, 200);
    const text = await response.text();
    assert.ok(text.includes(heading), `Expected ${heading}`);
    if (photo) {
      assert.match(text, new RegExp(`<img[^>]+${photo}\\.webp`));
      const image = await fetch(`${base}/photos/${photo}.webp`);
      assert.equal(image.status, 200);
      assert.match(image.headers.get('content-type'), /image\/webp/);
    }
    const links = [...text.matchAll(/href="(https:\/\/wa\.me\/\d+\?text=[^"]+)"/g)].map(m => new URL(m[1]));
    assert.ok(links.some(link => link.searchParams.get('text')?.toLowerCase().includes(intent)), `Expected ${intent} contact link`);
    assert.doesNotMatch(text, /href="#"|\+254\*|Placeholder for client logos|FinTech Nairobi/);
  });
}
test('About is an image-free company page and the portrait is no longer served', async () => {
  const about = await (await fetch(base + '/about-us')).text();
  assert.doesNotMatch(about.match(/<main[^>]*>[\s\S]*?<\/main>/)?.[0] ?? '', /<img\b|<picture\b|Vanessa Mwando/);
  for (const path of ['/', '/about-us']) {
    const html = await (await fetch(base + path)).text();
    assert.doesNotMatch(html, /vanessa-mwando|\/share\/founder\.jpg/);
  }
  for (const path of ['/photos/vanessa-mwando-portrait.webp', '/photos/vanessa-mwando.webp', '/Images/22.png', '/share/founder.jpg']) {
    assert.equal((await fetch(base + path)).status, 404, `Old portrait should not be served at ${path}`);
  }
});
test('every public content page has four or five named sections', async () => {
  for (const path of [...routes.map(row => row[0]), '/guides/creative-project-brief']) {
    const html = await (await fetch(base + path)).text();
    const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
    const sections = [...main.matchAll(/<section\b[^>]*aria-labelledby="([^"]+)"/g)].map(m => m[1]);
    assert.ok(sections.length >= 4 && sections.length <= 5, `${path}: ${sections.length} named sections`);
    if (path === '/about-us') assert.equal(sections.length, 5);
    for (const id of sections) assert.ok(main.includes(`id="${id}"`), `${path}: missing ${id}`);
    assert.equal(new Set(sections).size, sections.length, `${path}: duplicate section labels`);
  }
});
test('production responses restrict resource origins and disable dynamic image optimisation', async () => {
  const home = await fetch(base + '/');
  const policy = home.headers.get('content-security-policy');
  for (const directive of ["default-src 'none'", "connect-src 'self'", "frame-ancestors 'none'"]) assert.ok(policy?.includes(directive), `Missing ${directive}`);
  assert.equal(home.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(home.headers.get('x-powered-by'), null);
  assert.equal((await fetch(base + '/_next/image')).status, 404);
  assert.doesNotMatch(await home.text(), /\/_next\/image\?/);
});
test('header wordmark has an accessible home link and independent reveal layers', async () => {
  const text = await (await fetch(base + '/')).text();
  assert.ok(/<a[^>]*aria-label="Spark8Edge home"[^>]*href="\/"/.test(text));
  for (const part of ['left', 'eight', 'right']) {
    assert.ok(new RegExp(`<span[^>]*class="[^\"]*wordmark-${part}[^\"]*"`).test(text), `Missing ${part} reveal layer`);
  }
});
test('mobile navigation exposes real links behind a labelled control', async () => {
  const html = await (await fetch(base + '/')).text();
  const menu = html.match(/<details[^>]*class="mobile-menu"[\s\S]*?<\/details>/)?.[0];
  assert.ok(menu, 'Expected a native disclosure for mobile navigation');
  assert.match(menu, /<summary[^>]*>[\s\S]*?Menu/);
  for (const path of ['/youth-hub', '/organization', '/partnerships', '/about-us']) {
    assert.ok(menu.includes(`href="${path}"`), `Menu is missing ${path}`);
  }
});
test('the project brief guide is linked and has a canonical search result', async () => {
  const home = await (await fetch(base + '/')).text();
  assert.ok(home.includes('href="/guides/creative-project-brief"'));
  const response = await fetch(base + '/guides/creative-project-brief');
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes('https://www.spark8edge.co.ke/guides/creative-project-brief'));
  assert.match(html, /property="og:image" content="[^\"]*talent\.jpg"/);
  assert.ok(html.includes('Download the brief template'));
});
test('canonical sitemap includes the partnerships page', async () => {
  const response = await fetch(base + '/sitemap.xml');
  assert.equal(response.status, 200);
  assert.match(await response.text(), /<loc>https:\/\/www\.spark8edge\.co\.ke\/partnerships<\/loc>/);
});
