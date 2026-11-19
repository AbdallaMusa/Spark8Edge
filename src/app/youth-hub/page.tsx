import type { Metadata } from "next";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = { title: "Training", description: "Ask Spark8Edge about practical creative training, what it covers and upcoming availability.", alternates: { canonical: "/youth-hub" } };
export default function Training() {
  return <>
    <section className="wrap inside-head prose">
      <h1>Training for creative and digital work</h1>
      <p className="lede">We offer one practical training programme. If you’re starting out or looking to build on what you already know, tell us what you’d like to learn.</p>
      <ContactLink intent="training">Ask about training on WhatsApp</ContactLink>
    </section>
    <section className="wrap story-grid training-body">
      <EditorialPhoto photo="desk" />
      <div className="prose"><h2>Before you enrol</h2><p>We’ll share what the programme covers, what you’ll practise, and the current fee and dates.</p><p>Tell us about any experience or equipment you already have. We can talk through what you’ll need before you decide.</p></div>
    </section>
    <ContactBand intent="training" title="Ask about the next training dates" action="Message us on WhatsApp" />
  </>;
}
