import Link from "next/link";
import ContactLink from "@/components/ContactLink";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import { ContactBand } from "@/components/OfferPage";
import { organization, JsonLd } from "@/lib/structuredData";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata("/", "Creative Training and Talent in Nairobi", "Ask about creative training, find someone for a project or propose a partnership with Spark8Edge in Nairobi.", "home");

export default function Home() {
  return <>
    <JsonLd data={organization} />
    <section className="hero-field" aria-labelledby="home-title"><div className="wrap home-intro">
      <div className="home-copy">
        <p className="eyebrow">Spark8Edge · Nairobi</p>
        <h1 id="home-title">Creative training and talent in Nairobi</h1>
        <p className="lede">We offer practical creative training and are building a network for organisations that need help with video, design or digital projects.</p>
        <div className="hero-actions"><ContactLink intent="partner">Talk partnerships on WhatsApp</ContactLink><Link prefetch={false} className="text-link" href="/organization">Find project talent</Link></div>
      </div>
      <EditorialPhoto photo="conversation" priority />
    </div></section>
    <section className="wrap detail-grid section-rule" aria-labelledby="home-paths">
      <div className="prose"><p className="eyebrow">Where to start</p><h2 id="home-paths">Choose what you came for</h2></div>
      <ul className="index-list">
        <li><Link prefetch={false} href="/youth-hub">I want to learn</Link><p>Find out what’s covered, what you’ll need and how to get the latest dates.</p></li>
        <li><Link prefetch={false} href="/organization">I have a project</Link><p>Tell us what needs making and by when. You choose who works on it.</p></li>
        <li><Link prefetch={false} href="/partnerships">My organisation wants to partner</Link><p>Talk to us about helping learners access training, sharing a brief or giving feedback on their work.</p></li>
      </ul>
    </section>
    <section className="brief-section" aria-labelledby="home-example"><div className="wrap detail-grid">
      <div className="prose"><p className="eyebrow">Sample project · Not client work</p><h2 id="home-example">A short film for a community event</h2><p>A youth organisation wants a one-minute recap for social media. Before anyone picks up a camera, the brief needs a deadline, a budget and someone to handle filming permission.</p></div>
      <aside className="brief-example"><h3>Start with a one-page brief</h3><p>Use the same questions for a video, a poster or a set of photos.</p><Link prefetch={false} className="text-link" href="/guides/creative-project-brief">Read the brief guide</Link></aside>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="home-purpose">
      <div className="prose"><p className="eyebrow">Why Spark8Edge</p><h2 id="home-purpose">Help more people use what they learn</h2></div>
      <div className="prose"><p>We’re starting with one programme and a growing project network. The goal is for more people in Nairobi to get practice, feedback and a chance to use those skills on real work.</p><Link prefetch={false} className="text-link" href="/about-us">Read what we’re building</Link></div>
    </section>
    <ContactBand intent="partner" title="Have an idea for your community?" action="Discuss it on WhatsApp" note="Start with who it’s for and what you’d like them to be able to do." />
  </>;
}
