import assert from 'node:assert/strict';
import { test } from 'node:test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const routes = [
  ['/', 'Creative training and talent in Nairobi', 'partner', 'nairobi-conversation'],
  ['/organization', 'Find someone for your next project', 'talent', 'nairobi-desk'],
  ['/youth-hub', 'Training for creative and digital work', 'training', 'nairobi-desk'],
  ['/about-us', 'Vanessa Mwando', 'partner', 'vanessa-mwando-portrait'],
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
test('the homepage and About page show the updated founder portrait', async () => {
  for (const path of ['/', '/about-us']) {
    const html = await (await fetch(base + path)).text();
    assert.ok(/<img(?=[^>]*alt="Vanessa Mwando")(?=[^>]*vanessa-mwando-portrait\.webp)[^>]*>/.test(html), `Updated founder portrait missing on ${path}`);
  }
  const portrait = await fetch(base + '/photos/vanessa-mwando-portrait.webp');
  assert.equal(portrait.status, 200);
  assert.match(portrait.headers.get('content-type'), /image\/webp/);
});
test('the About page has a dedicated founder sharing image and linked founder data', async () => {
  const html = await (await fetch(base + '/about-us')).text();
  assert.ok(/property="og:image" content="[^\"]*founder\.jpg"/.test(html), 'Missing founder sharing image');
  const shareImage = await fetch(base + '/share/founder.jpg');
  assert.equal(shareImage.status, 200);
  assert.match(shareImage.headers.get('content-type'), /image\/jpeg/);
  const values = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)].map(match => JSON.parse(match[1]));
  const person = values.find(value => value['@type'] === 'Person');
  assert.equal(person?.name, 'Vanessa Mwando');
  assert.equal(person?.worksFor?.['@id'], 'https://www.spark8edge.co.ke/#organization');
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
