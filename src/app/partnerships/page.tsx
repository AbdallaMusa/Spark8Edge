import { pageMetadata } from "@/lib/pageMetadata";
import ContactLink from "@/components/ContactLink";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata = pageMetadata("/partnerships", "Training and Community Partnerships in Kenya", "Discuss training sponsorship, a community project or mentoring with Spark8Edge in Nairobi.", "partnerships");

export default function Partnerships() {
  return <>
    <section className="hero-field" aria-labelledby="partners-title"><div className="wrap story-grid inside-split">
      <div className="prose"><p className="eyebrow">Partnerships · Kenya</p><h1 id="partners-title">Partner with Spark8Edge</h1><p className="lede">If you work with people who want to learn creative skills, tell us what would help them get started and what your organisation could bring.</p><ContactLink intent="partner">Discuss a partnership on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="skyline" priority />
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="partners-roles">
      <div><p className="eyebrow">Ways to contribute</p><h2 id="partners-roles">What could your organisation bring?</h2></div>
      <dl className="partner-list"><div><dt>Help people attend training</dt><dd>Consider contributing to the cost of training, offering a suitable space or helping reach learners in your community.</dd></div><div><dt>Bring a real brief</dt><dd>Share something your organisation actually needs made, and identify who can give feedback.</dd></div><div><dt>Make time to mentor</dt><dd>Talk with us about reviewing work or giving practical advice in a field you know.</dd></div></dl>
    </section>
    <section className="brief-section" id="partner-brief" aria-labelledby="partners-brief"><div className="wrap detail-grid">
      <div className="prose"><p className="eyebrow">A possible starting point</p><h2 id="partners-brief">Start small enough to learn from</h2><p>A youth organisation could help reach a group of learners and bring a venue. Before agreeing to run anything, we’d check the group’s needs, equipment and availability against the programme.</p></div>
      <aside className="brief-example"><h3>Example, not a current partnership</h3><p>The useful first decision is whether the programme fits the group and who would be responsible for each part.</p></aside>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="partners-message">
      <h2 id="partners-message">What to bring to the first conversation</h2><div className="prose"><p>Tell us who you support and what you’d like them to be able to do. Add what you can contribute, any practical limits, and the dates you have in mind.</p><p>If there’s a fit, the next step is to agree on who does what and how we’ll know the work was useful.</p></div>
    </section>
    <ContactBand intent="partner" title="Tell us about your organisation" action="Start a conversation on WhatsApp" note="You don’t need a full proposal to get in touch." />
  </>;
}
