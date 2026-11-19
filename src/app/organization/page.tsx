import type { Metadata } from "next";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = { title: "Find Talent", description: "Share a project brief with Spark8Edge and ask about finding creative and digital talent in Kenya.", alternates: { canonical: "/organization" } };
export default function Organisation() {
  return <>
    <section className="wrap story-grid inside-split">
      <div className="prose"><h1>Find someone for your next project</h1><p className="lede">We’re building a network of creative and digital talent. Send us a brief and we’ll discuss whether there’s a fit. You decide who to work with.</p><ContactLink intent="talent">Share a brief on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="desk" preload />
    </section>
    <section className="brief-section"><div className="wrap detail-grid">
      <div className="prose"><h2>What to include in your brief</h2><ul><li>What you need made or delivered</li><li>When you need it</li><li>Your budget or budget range</li></ul><p>A few lines on WhatsApp are enough to start.</p></div>
      <aside className="brief-example"><h3>Example brief</h3><p>“We’re running a community event and need someone to film it and edit a short highlight video. We have a date and a budget, but we’re open to ideas on the format.”</p></aside>
    </div></section>
    <ContactBand intent="talent" title="Have a project in mind?" action="Share a brief on WhatsApp" />
  </>;
}
