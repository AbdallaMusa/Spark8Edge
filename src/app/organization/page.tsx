import Link from "next/link";
import { pageMetadata } from "@/lib/pageMetadata";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import ContactLink from "@/components/ContactLink";

export const metadata = pageMetadata("/organization", "Find Creative and Digital Talent in Nairobi", "Need help with a video, design or campaign brief? Discuss your project with Spark8Edge and decide who you want to work with.", "talent");

export default function Organisation() {
  return <>
    <section className="hero-field" aria-labelledby="talent-title"><div className="wrap story-grid inside-split">
      <div className="prose"><p className="eyebrow">Find talent · Nairobi</p><h1 id="talent-title">Find someone for your next project</h1><p className="lede">Need a designer, an editor or someone to film an event? Tell us about the work. We’ll discuss whether there’s a fit in the network we’re building.</p><ContactLink intent="talent">Share a brief on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="desk" priority />
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="talent-work">
      <div><p className="eyebrow">The kind of work to bring</p><h2 id="talent-work">Start with what you need made</h2></div>
      <div className="prose"><p>A short event recap, graphics for a recruitment campaign or a set of photos for a website all make good starting points. You don’t need to know the exact job title of the person you’re looking for.</p><p>If you’re still working out the scope, say what the work needs to accomplish and what’s already decided.</p></div>
    </section>
    <section className="brief-section" id="brief" aria-labelledby="talent-brief"><div className="wrap detail-grid">
      <div className="prose"><p className="eyebrow">Your first message</p><h2 id="talent-brief">What to include in your brief</h2><ul><li>What you need made and who it’s for</li><li>When you need it and your budget range</li><li>Who can give feedback and approve the work</li></ul></div>
      <aside className="brief-example"><h3>Put it on one page</h3><p>Our example covers a community event video, including filming permissions and what needs to be handed over.</p><Link prefetch={false} className="text-link" href="/guides/creative-project-brief">Read the project brief guide</Link></aside>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="talent-process">
      <h2 id="talent-process">How a talent enquiry works</h2><ol className="process-list"><li><strong>Share the brief.</strong> A rough version is enough to begin.</li><li><strong>Discuss the fit.</strong> We’ll talk about the skills and availability the work calls for. If we don’t have a match, we’ll say so.</li><li><strong>Make the decision.</strong> Review relevant work and agree on the scope and terms before anyone starts.</li></ol>
    </section>
    <ContactBand intent="talent" title="Send us what you have" action="Share a brief on WhatsApp" note="A few lines about the work, the deadline and the budget are enough to start." />
  </>;
}
