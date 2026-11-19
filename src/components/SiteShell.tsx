import Link from "next/link";
import ContactLink from "./ContactLink";
import { phone, displayPhone, email } from "@/config/contact.mjs";

const links = [["Training", "/youth-hub"], ["Find talent", "/organization"], ["Partnerships", "/partnerships"], ["About", "/about-us"]];
export function SiteHeader() {
  return <><a href="#main" className="skip">Skip to content</a><header className="header"><div className="wrap header-inner">
    <Link className="wordmark" href="/" aria-label="Spark8Edge home">Spark<span>8</span>Edge</Link>
    <nav aria-label="Main navigation">{links.map(([name, url]) => <Link key={url} href={url}>{name}</Link>)}</nav>
    <ContactLink intent="partner">Talk to us</ContactLink>
  </div></header></>;
}
export function SiteFooter() {
  return <footer className="footer"><div className="wrap footer-grid"><div><Link className="wordmark" href="/">Spark<span>8</span>Edge</Link><p>Training, talent and partnerships.<br/>Nairobi, Kenya.</p></div><div><h2>Explore</h2>{links.map(([name, url]) => <Link key={url} href={url}>{name}</Link>)}</div><div><h2>Contact</h2><ContactLink intent="general" quiet>WhatsApp {displayPhone}</ContactLink><a href={`tel:${phone}`}>Call {displayPhone}</a><a href={`mailto:${email}`}>{email}</a></div></div></footer>;
}
