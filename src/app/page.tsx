import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "/photos/nairobi-conversation.webp", width: 1440, height: 960, alt: "People talking outdoors in Nairobi" }] },
};

export default function Home() {
  return <>
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
    <section className="wrap story-grid home-story">
      <EditorialPhoto photo="founder" shape="square" />
      <div className="prose"><h2>Meet Vanessa Mwando</h2><p>Vanessa worked in the NGO sector before starting Spark8Edge. She’s now looking to work with organisations that can give people a chance to put their skills to use.</p><Link className="text-link" href="/about-us">Read about Spark8Edge</Link></div>
    </section>
  </>;
}
