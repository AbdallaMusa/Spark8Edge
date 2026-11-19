import { pageMetadata } from "@/lib/pageMetadata";
import Link from "next/link";
import { organization, JsonLd } from "@/lib/structuredData";
import ContactLink from "@/components/ContactLink";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata = pageMetadata("/", "Creative Training and Talent in Nairobi", "Spark8Edge offers practical creative training and helps Nairobi organisations find people for digital projects. Enquire about training, talent or partnerships.", "home");

export default function Home() {
  return <>
    <JsonLd data={organization} />
    <div className="hero-field"><section className="wrap home-intro">
      <div className="home-copy">
        <h1>Creative training and talent in Nairobi</h1>
        <p className="lede">Spark8Edge offers practical creative training and is building a network for Nairobi organisations that need help with projects. If you have a community training idea or a brief, let’s talk.</p>
        <div className="hero-actions"><ContactLink intent="partner">Discuss a partnership on WhatsApp</ContactLink><Link className="text-link" href="/organization">Find talent for a project</Link></div>
      </div>
      <EditorialPhoto photo="conversation" preload />
    </section></div>
    <section className="pathways" aria-label="Ways to work with Spark8Edge">
      <div className="wrap pathway-grid">
        <article><h2><Link href="/youth-hub">Explore the training</Link></h2><p>Ask what’s covered, when it runs and how to enrol.</p></article>
        <article><h2><Link href="/organization">Find someone for a project</Link></h2><p>Share a brief. You decide who you want to work with.</p></article>
        <article><h2><Link href="/partnerships">Work with us</Link></h2><p>Talk to us about sponsoring training, mentoring or sharing a project brief.</p></article>
      </div>
    </section>
    <section className="wrap content-section"><h2>What could we work on together?</h2><p className="section-intro">Two example briefs to help you start a conversation. These aren’t past Spark8Edge projects.</p><div className="example-grid"><article><h3>A short film for a community event</h3><p>An NGO needs someone to film the event and edit a short recap. The brief would cover the audience, where the video will appear and who can be filmed.</p><Link className="text-link" href="/guides/creative-project-brief">Read the brief guide</Link></article><article><h3>Practical training for a youth group</h3><p>A community organisation wants to support learners who are new to digital work. It could bring the group’s goals and availability so we can discuss whether the training fits.</p><Link className="text-link" href="/partnerships#partner-brief">Explore training partnerships</Link></article></div></section>
    <section className="wrap story-grid home-story">
      <EditorialPhoto photo="founder" />
      <div className="prose"><h2>Meet Vanessa Mwando</h2><p>Before founding Spark8Edge, Vanessa worked in the NGO sector. She now brings that experience to conversations about community training and creative project work in Nairobi.</p><Link className="text-link" href="/about-us">Read about Spark8Edge</Link></div>
    </section>
  </>;
}
