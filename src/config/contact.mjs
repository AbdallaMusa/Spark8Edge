export const phone = '+254727712711';
export const displayPhone = '+254 727 712 711';
export const email = 'info@spark8edge.co.ke';

const drafts = {
  partner: 'Hi Spark8Edge, I’d like to discuss a partnership. Our organisation is … and we’re interested in …',
  talent: 'Hi Spark8Edge, I’m looking for talent. The work we need done is … and our timeline is …',
  training: 'Hi Spark8Edge, I’m interested in your training. Could you share the cost, format and next available dates?',
  general: 'Hi Spark8Edge, I’d like to learn more about what you do.',
};

/** @param {keyof typeof drafts} intent */
export function contactHref(intent) {
  return `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(drafts[intent])}`;
}
