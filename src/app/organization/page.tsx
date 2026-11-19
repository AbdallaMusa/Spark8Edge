import type { Metadata } from "next";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = { title: "Find Creative Talent in Nairobi", description: "Share a project brief with Spark8Edge and ask about finding creative and digital talent in Kenya.", alternates: { canonical: "/organization" } };
export default function Organisation() {
  return <>
    <section className="wrap story-grid inside-split">
      <div className="prose"><h1>Find someone for your next project</h1><p className="lede">We’re building a network of creative and digital talent. Send us a brief and we’ll discuss whether there’s a fit. You decide who to work with.</p><ContactLink intent="talent">Share a brief on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="desk" preload />
    </section>
    <section className="brief-section" id="brief"><div className="wrap detail-grid">
      <div className="prose"><h2>What to include in your brief</h2><ul><li>What you need made or delivered</li><li>When you need it</li><li>Your budget or budget range</li></ul><p>A few lines on WhatsApp are enough to start.</p></div>
      <aside className="brief-example"><h3>Example brief</h3><p>“We’re running a community event and need someone to film it and edit a short highlight video. We have a date and a budget, but we’re open to ideas on the format.”</p></aside>
    </div></section>
    <section className="wrap content-section"><h2>How a talent enquiry works</h2><ol className="steps"><li><h3>Send the brief</h3><p>A few lines about the work, deadline and budget are enough.</p></li><li><h3>Discuss the fit</h3><p>We’ll talk through the skills and availability the brief calls for. If there’s no fit, we’ll say so.</p></li><li><h3>Decide who to work with</h3><p>You make the final choice and agree on the scope before starting.</p></li></ol></section>
    <ContactBand intent="talent" title="Have a project in mind?" action="Share a brief on WhatsApp" />
  </>;
}
