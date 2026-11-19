import type { Metadata } from "next";
import OfferPage from "@/components/OfferPage";
export const metadata: Metadata = { title: "Partnerships", description: "Talk to Spark8Edge about training, mentorship and real project opportunities for emerging talent in Kenya.", alternates: { canonical: "/partnerships" } };
export default function Partnerships() {
  return <OfferPage eyebrow="For partners" title="Work with Spark8Edge." description="If your organisation wants to help people build skills or give emerging talent a real brief to work on, tell us what you have in mind." intent="partner" action="Discuss a partnership on WhatsApp">
    <section className="wrap section"><p className="eyebrow">Ways we could work together</p><h2>Start with something concrete.</h2><div className="rows">
      <article><span>01</span><h3>Support training</h3><p>Explore sponsoring access to training for people in your community.</p></article>
      <article><span>02</span><h3>Share a real brief</h3><p>Bring a project that gives people a chance to practise on a real problem.</p></article>
      <article><span>03</span><h3>Offer mentorship</h3><p>Help people understand what good work looks like in your field and where they can improve.</p></article>
    </div></section>
  </OfferPage>;
}
