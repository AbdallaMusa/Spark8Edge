import { pageMetadata } from "@/lib/pageMetadata";
import ContactLink from "@/components/ContactLink";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata = pageMetadata("/partnerships", "Training and Community Partnerships in Kenya", "Partner with Spark8Edge in Nairobi. Explore training sponsorship, mentorship, and creative project briefs with local organisations.", "partnerships");
export default function Partnerships() {
  return <>
    <section className="wrap story-grid inside-split">
      <div className="prose"><h1>Partner with Spark8Edge</h1><p className="lede">We’re looking to work with organisations in Kenya that want to help people learn a skill and get experience using it.</p><ContactLink intent="partner">Discuss a partnership on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="skyline" preload />
    </section>
    <section className="wrap detail-grid partner-detail">
      <h2>Ways to work together</h2>
      <dl className="partner-list"><div><dt>Sponsor training</dt><dd>Help make the training available to people in your community.</dd></div><div><dt>Bring a project brief</dt><dd>Share a problem your organisation needs help solving, and we can talk about who might work on it.</dd></div><div><dt>Mentor someone</dt><dd>Share what you know or give feedback on work in progress.</dd></div></dl>
    </section>
    <section className="brief-section" id="partner-brief"><div className="wrap detail-grid"><div className="prose"><h2>What to bring to the first conversation</h2><p>Tell us who you support, what you want to make possible, and what your organisation can contribute. If you have a date or budget in mind, send that too.</p></div><aside className="brief-example"><h3>Example partnership</h3><p>A youth organisation could provide a venue and help reach learners. Together we could discuss whether Spark8Edge’s existing training suits the group. This is an example, not a current partnership.</p></aside></div></section>
    <ContactBand intent="partner" title="Tell us what you’d like to work on" action="Message us on WhatsApp" />
  </>;
}
