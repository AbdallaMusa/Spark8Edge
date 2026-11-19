import assert from 'node:assert/strict';
import { test } from 'node:test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const routes = [
  ['/', 'Creative training and talent in Nairobi', 'partner', 'nairobi-conversation'],
  ['/organization', 'Find someone for your next project', 'talent', 'nairobi-desk'],
  ['/youth-hub', 'Training for creative and digital work', 'training', 'nairobi-desk'],
  ['/about-us', 'Vanessa Mwando', 'partner', 'vanessa-mwando'],
  ['/partnerships', 'Partner with Spark8Edge', 'partner', 'nairobi-skyline'],
];
for (const [path, heading, intent, photo] of routes) {
  test(`${path} renders its offer and direct WhatsApp path`, async () => {
    const response = await fetch(base + path);
    assert.equal(response.status, 200);
    const text = await response.text();
    assert.ok(text.includes(heading), `Expected ${heading}`);
    assert.match(text, new RegExp(`<img[^>]+${photo}\\.webp`));
    const image = await fetch(`${base}/photos/${photo}.webp`);
    assert.equal(image.status, 200);
    assert.match(image.headers.get('content-type'), /image\/webp/);
    const links = [...text.matchAll(/href="(https:\/\/wa\.me\/\d+\?text=[^"]+)"/g)].map(m => new URL(m[1]));
    assert.ok(links.some(link => link.searchParams.get('text')?.toLowerCase().includes(intent)), `Expected ${intent} contact link`);
    assert.doesNotMatch(text, /href="#"|\+254\*|Placeholder for client logos|FinTech Nairobi/);
  });
}
test('header wordmark has an accessible home link and independent reveal layers', async () => {
  const text = await (await fetch(base + '/')).text();
  assert.ok(/<a[^>]*aria-label="Spark8Edge home"[^>]*href="\/"/.test(text));
  for (const part of ['left', 'eight', 'right']) {
    assert.ok(new RegExp(`<span[^>]*class="[^\"]*wordmark-${part}[^\"]*"`).test(text), `Missing ${part} reveal layer`);
  }
});
test('canonical sitemap includes the partnerships page', async () => {
  const response = await fetch(base + '/sitemap.xml');
  assert.equal(response.status, 200);
  assert.match(await response.text(), /<loc>https:\/\/www\.spark8edge\.co\.ke\/partnerships<\/loc>/);
});
