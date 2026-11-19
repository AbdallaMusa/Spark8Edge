import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ContactLink from "@/components/ContactLink";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const organisation = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, description: siteConfig.description };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation).replace(/</g, "\\u003c") }} />
    <section className="wrap home-intro">
      <div className="home-copy">
        <h1>Creative training and talent in Nairobi</h1>
        <p className="lede">Spark8Edge offers practical training and is building a network of people you can work with on creative and digital projects.</p>
        <ContactLink intent="partner">Talk partnerships on WhatsApp</ContactLink>
      </div>
      <EditorialPhoto photo="conversation" preload />
    </section>
    <section className="pathways" aria-label="Ways to work with Spark8Edge">
      <div className="wrap pathway-grid">
        <article><h2><Link href="/youth-hub">Explore the training</Link></h2><p>Ask what’s covered, when it runs and how to enrol.</p></article>
        <article><h2><Link href="/organization">Find someone for a project</Link></h2><p>Share a brief. You decide who you want to work with.</p></article>
        <article><h2><Link href="/partnerships">Work with us</Link></h2><p>Talk to us about sponsoring training, mentoring or sharing a project brief.</p></article>
      </div>
    </section>
    <section className="wrap content-section"><h2>What could we work on together?</h2><p className="section-intro">Two example briefs to help you start a conversation. These aren’t past Spark8Edge projects.</p><div className="example-grid"><article><h3>A short film for a community event</h3><p>An NGO needs someone to film the event and edit a short recap. The brief would cover the audience, where the video will appear and who can be filmed.</p><Link className="text-link" href="/organization#brief">See what to put in a brief</Link></article><article><h3>Practical training for a youth group</h3><p>A community organisation wants to support learners who are new to digital work. It could bring the group’s goals and availability so we can discuss whether the training fits.</p><Link className="text-link" href="/partnerships#partner-brief">Explore training partnerships</Link></article></div></section>
    <section className="wrap story-grid home-story">
      <EditorialPhoto photo="founder" shape="square" />
      <div className="prose"><h2>Meet Vanessa Mwando</h2><p>Vanessa worked in the NGO sector before starting Spark8Edge. She’s now looking to work with organisations that can give people a chance to put their skills to use.</p><Link className="text-link" href="/about-us">Read about Spark8Edge</Link></div>
    </section>
  </>;
}
