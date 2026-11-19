import Link from "next/link";
import ContactLink from "@/components/ContactLink";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata("/guides/creative-project-brief", "How to Write a Creative Project Brief", "A practical brief template for video, design or community campaigns. Define the audience, deliverables, budget and approvals before finding talent.", "talent");

export default function CreativeProjectBrief() {
  return <article className="wrap guide">
    <Link className="text-link" href="/organization">Back to finding talent</Link>
    <h1>How to write a creative project brief</h1>
    <p className="lede">A brief can be a short WhatsApp message. Give the person reading it enough to estimate the work: what you want made, who it’s for, and what’s already decided.</p>
    <a className="button" href="/downloads/creative-project-brief.txt" download>Download the brief template</a>
    <div className="guide-body prose">
      <h2>Start with the audience</h2><p>Who should see this, and what do you want them to do afterwards? For an event video, a recap for attendees calls for different footage from a recruitment video for the next event.</p>
      <h2>List what you need back</h2><p>Give each deliverable its own line. A 60-second vertical video with captions and a landscape cut are two outputs. Say where you’ll publish them, and whether you need editable files.</p>
      <h2>Share what’s fixed</h2><p>Add the date, budget range and location. Name one person to collect feedback and approve the work. If permissions, filming consent or brand assets are needed, say who’s handling those before work starts.</p>
      <aside className="brief-example"><h3>Example: a community event recap</h3><p>A Nairobi youth organisation wants one 60-second vertical video and three stills for its socials. The organisation will handle venue access and filming permissions. The brief gives the event date, the first-cut deadline, a budget range and one contact for approvals. This is a sample brief, not client work.</p></aside>
      <h2>Ready to share yours?</h2><p>Send the rough version. We can discuss what kind of experience the brief calls for and whether there’s a fit in the network.</p>
      <ContactLink intent="talent">Send your brief on WhatsApp</ContactLink>
    </div>
  </article>;
}
