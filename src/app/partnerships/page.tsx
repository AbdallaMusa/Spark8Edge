import type { Metadata } from "next";
import ContactLink from "@/components/ContactLink";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata: Metadata = { title: "Partnerships", description: "Discuss training sponsorship, mentorship or project briefs with Spark8Edge in Nairobi.", alternates: { canonical: "/partnerships" } };
export default function Partnerships() {
  return <>
    <section className="wrap story-grid inside-split">
      <div className="prose"><h1>Partner with Spark8Edge</h1><p className="lede">We’re looking to work with organisations in Kenya that want to help people learn a skill and get experience using it.</p><ContactLink intent="partner">Discuss a partnership on WhatsApp</ContactLink></div>
      <EditorialPhoto photo="skyline" preload />
    </section>
    <section className="wrap detail-grid partner-detail">
      <h2>Ways to work together</h2>
      <dl className="partner-list"><div><dt>Sponsor training</dt><dd>Help make the training available to people in your community.</dd></div><div><dt>Bring a project brief</dt><dd>Share a problem your organisation needs help solving, and we can talk about who might work on it.</dd></div><div><dt>Mentor someone</dt><dd>Share what you know or give feedback on work in progress.</dd></div></dl>
    </section>
    <ContactBand intent="partner" title="Tell us what you’d like to work on" action="Message us on WhatsApp" />
  </>;
}
