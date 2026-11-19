import type { Metadata } from "next";
import { ContactBand } from "@/components/OfferPage";
import { EditorialPhoto } from "@/components/EditorialPhoto";

export const metadata: Metadata = { title: "About", description: "Meet Vanessa Mwando, founder of Spark8Edge, a Nairobi training and talent business.", alternates: { canonical: "/about-us" } };
export default function About() {
  return <>
    <section className="wrap story-grid about-intro">
      <EditorialPhoto photo="founder" shape="square" preload />
      <div className="prose"><h1>About Spark8Edge</h1><p className="lede">We started Spark8Edge in Nairobi to help people learn practical skills and connect them with organisations that have work for them to do.</p><h2>Vanessa Mwando</h2><p>Vanessa is the founder and CEO. Before starting Spark8Edge, she worked in the NGO sector. She’s building the business around training, project work and relationships with local organisations.</p></div>
    </section>
    <ContactBand intent="partner" title="Get in touch with Spark8Edge" action="Message us on WhatsApp" />
  </>;
}
