import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";
export const metadata: Metadata = { alternates: { canonical: "/" } };
const routes = [["01", "Learn a skill", "Ask about our practical training, what you’ll work on and how to get started.", "/youth-hub"], ["02", "Find talent", "Bring us a brief. Tell us what you need and stay in control of who you choose.", "/organization"], ["03", "Partner with us", "Bring a brief, offer mentorship or help more people access training.", "/partnerships"]];
export default function Home() {
  return <>
    <section className="hero"><div className="wrap hero-grid"><div><p className="eyebrow"><i/> Nairobi, Kenya</p><h1>Build skills. Find talent.</h1><p className="intro">Spark8Edge offers practical training and is building a network to connect emerging creative talent with businesses and partner organisations.</p><div className="actions"><ContactLink intent="partner">Talk to us on WhatsApp</ContactLink><Link className="text-link" href="#ways">Explore your options <span aria-hidden="true">↓</span></Link></div></div><div className="hero-mark" aria-hidden="true"><span>8</span><small>SPARK8EDGE / NAIROBI</small></div></div></section>
    <section className="wrap section" id="ways"><p className="eyebrow">Start here</p><h2>What are you here to do?</h2><div className="rows">{routes.map(([num, title, body, url]) => <article key={url}><span>{num}</span><h3><Link href={url}>{title} <span aria-hidden="true">↗</span></Link></h3><p>{body}</p></article>)}</div></section>
    <section className="feature"><div className="wrap feature-grid"><div><p className="eyebrow">Illustrative use case</p><h2>A brief gives everyone a place to start.</h2></div><div><p>An NGO planning a community campaign might need a short video. It could bring the brief to Spark8Edge, discuss the skills and timeline, and decide who it wants to work with.</p><Link className="text-link" href="/organization">See how talent enquiries work <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="wrap section story"><p className="eyebrow">Meet the founder</p><h2>Vanessa Mwando</h2><p>Before starting Spark8Edge, Vanessa worked in the NGO sector. That experience informs how she approaches partnerships and practical opportunities for emerging talent.</p><Link className="text-link" href="/about-us">About Spark8Edge <span aria-hidden="true">↗</span></Link></section>
  </>;
}
