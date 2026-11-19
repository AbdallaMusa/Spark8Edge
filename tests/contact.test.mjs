import assert from 'node:assert/strict';
import { test } from 'node:test';

test('each contact intent opens the same WhatsApp number with a distinct draft', async () => {
  const { contactHref, phone } = await import('../src/config/contact.mjs');
  const drafts = ['partner', 'talent', 'training', 'general'].map(intent => {
    const link = new URL(contactHref(intent));
    assert.equal(link.origin, 'https://wa.me');
    assert.equal(link.pathname, '/' + phone.replace('+', ''));
    return link.searchParams.get('text');
  });
  assert.equal(new Set(drafts).size, 4);
  assert.match(drafts[0], /partner/i);
  assert.match(drafts[1], /talent/i);
  assert.match(drafts[2], /training/i);
});
