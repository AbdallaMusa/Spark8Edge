import type { Metadata } from "next";
import OfferPage from "@/components/OfferPage";
export const metadata: Metadata = { title: "Training", description: "Ask Spark8Edge about its practical training offer, cost and upcoming availability.", alternates: { canonical: "/youth-hub" } };
export default function Training() {
  return <OfferPage eyebrow="For learners and early-career talent" title="One training offer." description="If you want to develop practical skills for creative or digital work, tell us what you want to learn. We’ll share the current training details so you can decide whether it’s right for you." intent="training" action="Ask about training on WhatsApp">
    <section className="wrap section"><p className="eyebrow">Before you enrol</p><h2>Know what you’re signing up for.</h2><div className="rows"><article><span>01</span><h3>What you’ll learn</h3><p>Ask about the topics covered, the work you’ll practise and any equipment or experience you’ll need.</p></article><article><span>02</span><h3>When and where</h3><p>Ask when training is next available, how it’s delivered and how much time to set aside.</p></article><article><span>03</span><h3>What it costs</h3><p>Get the current fee and enrolment steps directly from the team before you commit.</p></article></div></section>
  </OfferPage>;
}
