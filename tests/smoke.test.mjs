import assert from 'node:assert/strict';
import { test } from 'node:test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const routes = [
  ['/', 'Build skills. Find talent.', 'partner'],
  ['/organization', 'Find people for the work you need done.', 'talent'],
  ['/youth-hub', 'One training offer.', 'training'],
  ['/about-us', 'Vanessa Mwando', 'partner'],
  ['/partnerships', 'Work with Spark8Edge.', 'partner'],
];
for (const [path, heading, intent] of routes) {
  test(`${path} renders its offer and direct WhatsApp path`, async () => {
    const response = await fetch(base + path);
    assert.equal(response.status, 200);
    const text = await response.text();
    assert.ok(text.includes(heading), `Expected ${heading}`);
    const links = [...text.matchAll(/href="(https:\/\/wa\.me\/\d+\?text=[^"]+)"/g)].map(m => new URL(m[1]));
    assert.ok(links.some(link => link.searchParams.get('text')?.toLowerCase().includes(intent)), `Expected ${intent} contact link`);
    assert.doesNotMatch(text, /href="#"|\+254\*|Placeholder for client logos|FinTech Nairobi/);
  });
}
test('canonical sitemap includes the partnerships page', async () => {
  const response = await fetch(base + '/sitemap.xml');
  assert.equal(response.status, 200);
  assert.match(await response.text(), /<loc>https:\/\/www\.spark8edge\.co\.ke\/partnerships<\/loc>/);
});
