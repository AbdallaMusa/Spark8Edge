import Link from "next/link";
import ContactLink from "@/components/ContactLink";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata("/guides/creative-project-brief", "How to Write a Creative Project Brief", "A practical brief template for video, design or community campaigns. Define the audience, deliverables, budget and approvals before finding talent.", "talent");

export default function CreativeProjectBrief() {
  return <article>
    <section className="hero-field" aria-labelledby="guide-title"><div className="wrap guide">
      <Link prefetch={false} className="text-link" href="/organization">Back to finding talent</Link>
      <p className="eyebrow">Spark8Edge field guide</p><h1 id="guide-title">How to write a creative project brief</h1>
      <p className="lede">A brief can be a short WhatsApp message. Say what you want made, who it’s for and what’s already decided.</p>
      <a className="button" href="/downloads/creative-project-brief.txt" download>Download the brief template</a>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="guide-audience"><h2 id="guide-audience">Start with the audience</h2><p>Who should see this, and what do you want them to do afterwards? A recap for people who came to an event calls for different footage from a video inviting people to the next one.</p></section>
    <section className="wrap detail-grid section-rule" aria-labelledby="guide-deliverables"><h2 id="guide-deliverables">List what you need back</h2><p>A 60-second vertical video with captions and a landscape cut are two outputs. Give each its own line. Say where you’ll publish them and whether you need the editable files.</p></section>
    <section className="brief-section" aria-labelledby="guide-constraints"><div className="wrap detail-grid">
      <div className="prose"><h2 id="guide-constraints">Share what’s fixed</h2><p>Include the date, budget range and location. Name one person to collect feedback and approve the work. Say who will arrange consent, venue access or brand files before work starts.</p></div>
      <aside className="brief-example"><h3>Sample: a community event recap</h3><p>A Nairobi youth organisation needs one 60-second vertical video and three stills for its social channels. The organisation will handle venue access and filming permission. The brief includes the event date and first-cut deadline. This is a sample, not client work.</p></aside>
    </div></section>
    <section className="wrap detail-grid" aria-labelledby="guide-send"><h2 id="guide-send">Ready to share yours?</h2><div className="prose"><p>Send the rough version. We can discuss what kind of experience the brief calls for and whether there’s a fit in the network.</p><ContactLink intent="talent">Send your brief on WhatsApp</ContactLink></div></section>
  </article>;
}
