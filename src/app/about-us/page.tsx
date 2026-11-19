import { pageMetadata } from "@/lib/pageMetadata";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata = pageMetadata("/about-us", "Vanessa Mwando and the Spark8Edge Story", "Meet Vanessa Mwando, founder of Spark8Edge in Nairobi, and learn how her NGO experience informs the business’s approach to training and partnerships.", "home");
export default function About() {
  return <>
    <section className="wrap story-grid about-intro">
      <EditorialPhoto photo="founder" shape="square" preload />
      <div className="prose"><h1>About Spark8Edge</h1><p className="lede">We started Spark8Edge in Nairobi to help people learn practical skills and connect them with organisations that have work for them to do.</p><h2>Vanessa Mwando</h2><p>Vanessa is the founder and CEO. Before starting Spark8Edge, she worked in the NGO sector. She’s building the business around training, project work and relationships with local organisations.</p></div>
    </section>
    <section className="wrap content-section prose"><h2>What we’re building first</h2><p>We’re starting with one training programme and a project network. At this stage, a conversation is the most useful first step: it tells us what learners want to practise and what local organisations need done.</p><p>For a community organisation, that could mean helping people access training or bringing a project brief they can practise on. We start by talking about what the organisation needs and what would be useful for the people involved.</p></section>
    <ContactBand intent="partner" title="Get in touch with Spark8Edge" action="Message us on WhatsApp" />
  </>;
}
