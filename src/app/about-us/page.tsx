import Link from "next/link";
import { ContactBand } from "@/components/OfferPage";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata("/about-us", "About Spark8Edge and What We’re Building", "Learn what Spark8Edge is building in Nairobi: practical creative training, a local project network, and partnerships that connect the two.");

export default function About() {
  return <>
    <section className="hero-field" aria-labelledby="about-title"><div className="wrap detail-grid about-hero">
      <div><p className="eyebrow">About Spark8Edge · Nairobi</p><h1 id="about-title">More ways to learn and do creative work</h1></div>
      <div className="prose"><p className="lede">We want more people in Nairobi to have somewhere to practise a skill, get useful feedback and take on work they can point to.</p><Link prefetch={false} className="text-link" href="#building">See what we’re building first</Link></div>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="about-gap">
      <div><p className="eyebrow">The gap we see</p><h2 id="about-gap">The first project can be the hardest to get</h2></div>
      <div className="prose"><p>If you’re learning how to edit video or design for a client, you need practice that goes beyond following a tutorial. If you run a small organisation, you may have work ready to give someone but no clear place to look.</p><p>Spark8Edge is building a way for those two needs to meet.</p></div>
    </section>
    <section className="brief-section" id="building" aria-labelledby="about-building"><div className="wrap detail-grid">
      <div><p className="eyebrow">What we’re building</p><h2 id="about-building">One programme and a local project network</h2></div>
      <dl className="partner-list">
        <div><dt>Practical training</dt><dd>Start with a skill you want to use. Ask what the programme covers before you decide whether to enrol.</dd></div>
        <div><dt>Creative project briefs</dt><dd>Organisations bring work they need done. We discuss the skills it calls for; the organisation makes the final decision on who to work with.</dd></div>
        <div><dt>Local partnerships</dt><dd>A community group might bring a venue or reach learners we couldn’t reach on our own. We work out what to test together before making commitments.</dd></div>
      </dl>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="about-progress">
      <div><p className="eyebrow">What progress would look like</p><h2 id="about-progress">Work people can build on</h2></div>
      <div className="prose"><p>For a learner, progress could be an edited piece they can show someone and explain. For a partner, it could be a brief that’s clear enough to commission, or training that fits the people they support.</p><p>Those are the outcomes we want to work towards, not results we claim to have delivered.</p><Link prefetch={false} className="text-link" href="/partnerships">See how to get involved</Link></div>
    </section>
    <ContactBand intent="partner" title="Help shape what we build next" action="Talk to Spark8Edge on WhatsApp" note="Tell us about your group, the work you need done, or an idea worth trying." />
  </>;
}
