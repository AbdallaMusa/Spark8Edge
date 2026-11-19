import { pageMetadata } from "@/lib/pageMetadata";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import { founder, JsonLd } from "@/lib/structuredData";
import Link from "next/link";

export const metadata = pageMetadata("/about-us", "Vanessa Mwando and the Spark8Edge Story", "Meet Vanessa Mwando, founder of Spark8Edge in Nairobi, and learn how her NGO experience informs the business’s approach to training and partnerships.", "founder");
export default function About() {
  return <>
    <JsonLd data={founder} />
    <section className="wrap story-grid about-intro">
      <EditorialPhoto photo="founder" preload />
      <div className="prose">
        <h1>About Spark8Edge</h1>
        <p className="lede">Spark8Edge is a Nairobi business for people learning creative skills and organisations that need help with real projects.</p>
        <h2 id="vanessa-mwando">Vanessa Mwando</h2>
        <p className="founder-role">Founder and CEO</p>
        <p>Vanessa worked in the NGO sector before starting Spark8Edge. That background informs how she approaches new partnerships: understand what the community needs first, then work out where training or creative talent can help.</p>
        <Link className="text-link" href="/partnerships">Explore a partnership</Link>
      </div>
    </section>
    <section className="wrap content-section prose"><h2>What we’re building first</h2><p>We’re starting with one training programme and a project network. At this stage, a conversation is the most useful first step: it tells us what learners want to practise and what local organisations need done.</p><p>For a community organisation, that could mean helping people access training or bringing a project brief they can practise on. We start by talking about what the organisation needs and what would be useful for the people involved.</p></section>
    <ContactBand intent="partner" title="Get in touch with Spark8Edge" action="Message us on WhatsApp" />
  </>;
}
