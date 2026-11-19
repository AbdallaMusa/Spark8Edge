import type { Metadata } from "next";
import Image from "next/image";
import OfferPage from "@/components/OfferPage";
export const metadata: Metadata = { title: "About", description: "Meet Vanessa Mwando and learn why Spark8Edge is building a training and talent network in Kenya.", alternates: { canonical: "/about-us" } };
export default function About() {
  return <OfferPage eyebrow="About Spark8Edge" title="Skills need somewhere to go." description="Spark8Edge is a new project in Nairobi. We want practical training to lead into real work and make it easier for organisations to find people for a specific brief." intent="partner" action="Talk to us on WhatsApp">
    <section className="wrap section founder"><Image src="/Images/22.png" width={1024} height={916} sizes="(max-width: 680px) 100vw, 400px" alt="Vanessa Mwando"/><div><p className="eyebrow">Founder & CEO</p><h2>Vanessa Mwando</h2><p>Vanessa worked in the NGO sector before starting Spark8Edge. That experience informs the kinds of partnerships she wants to build: ones where organisations can bring a specific need and people can put their skills to work.</p><p>Spark8Edge is at an early stage. If you’re interested in training, have work that needs doing or want to build something with us, we’d like to hear from you.</p></div></section>
  </OfferPage>;
}
