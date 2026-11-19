import type { Metadata } from "next";
import OfferPage from "@/components/OfferPage";
export const metadata: Metadata = { title: "Find Talent", description: "Share a project brief with Spark8Edge and ask about finding talent for your organisation in Kenya.", alternates: { canonical: "/organization" } };
export default function Organization() {
  return <OfferPage eyebrow="For businesses and organisations" title="Find people for the work you need done." description="Tell us what you’re working on. We’ll discuss the skills you need and whether there’s a fit in the Spark8Edge network. You decide who you work with." intent="talent" action="Discuss a brief on WhatsApp">
    <section className="wrap section"><p className="eyebrow">How to get started</p><h2>Bring a brief, even if it’s rough.</h2><div className="rows"><article><span>01</span><h3>Describe the work</h3><p>Tell us what needs to be delivered, when you need it and what budget you’re working with.</p></article><article><span>02</span><h3>Talk through the fit</h3><p>We’ll discuss the skills that matter and what might be possible for your timeline.</p></article><article><span>03</span><h3>Make your own choice</h3><p>Where there’s a fit, you decide whether to move forward and agree on the scope before work begins.</p></article></div></section>
    <section className="feature"><div className="wrap feature-grid"><div><p className="eyebrow">Illustrative briefs</p><h2>What could you bring?</h2></div><ul><li>A short video for an upcoming campaign.</li><li>Social content around a product launch or event.</li><li>A simple design brief for a community programme.</li></ul></div></section>
  </OfferPage>;
}
