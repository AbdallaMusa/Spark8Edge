import Link from "next/link";
import ContactLink from "./ContactLink";
import { phone, displayPhone, email } from "@/config/contact.mjs";

import { navigationLinks as links } from "@/config/site";
import { HeaderNavigation } from "./HeaderNavigation";
export function SiteHeader() {
  return <><a href="#main" className="skip">Skip to content</a><header className="header"><div className="wrap header-inner">
    <Link prefetch={false} className="wordmark wordmark-reveal" href="/" aria-label="Spark8Edge home">
      <span className="wordmark-slot" aria-hidden="true"><span className="wordmark-left">Spark</span></span>
      <span className="wordmark-eight" aria-hidden="true">8</span>
      <span className="wordmark-slot" aria-hidden="true"><span className="wordmark-right">Edge</span></span>
    </Link>
    <HeaderNavigation />
  </div></header></>;
}
export function SiteFooter() {
  return <footer className="footer"><div className="wrap footer-grid"><div><Link prefetch={false} className="wordmark" href="/">Spark<span>8</span>Edge</Link><p>Training, talent and partnerships.<br/>Nairobi, Kenya.</p></div><div><h2>Explore</h2>{links.map(([name, url]) => <Link key={url} href={url} prefetch={false}>{name}</Link>)}</div><div><h2>Contact</h2><ContactLink intent="general" quiet>WhatsApp {displayPhone}</ContactLink><a href={`tel:${phone}`}>Call {displayPhone}</a><a href={`mailto:${email}`}>{email}</a></div></div></footer>;
}
