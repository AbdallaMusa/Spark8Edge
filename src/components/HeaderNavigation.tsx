"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import ContactLink from "./ContactLink";
import { navigationLinks } from "@/config/site";

export function HeaderNavigation() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);
  const items = navigationLinks.map(([label, href]) => (
    <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
      onClick={() => { if (menu.current?.open) menu.current.open = false; }}>{label}</Link>
  ));

  return <>
    <nav className="desktop-nav" aria-label="Main navigation">{items}</nav>
    <div className="desktop-contact"><ContactLink intent="partner">Talk to us</ContactLink></div>
    <details className="mobile-menu" ref={menu} onBlur={(event) => {
      if (menu.current?.open && !event.currentTarget.contains(event.relatedTarget)) menu.current.open = false;
    }} onKeyDown={(event) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        toggle.current?.focus();
      }
    }}>
      <summary ref={toggle}>Menu <span className="menu-glyph" aria-hidden="true"><i/><i/></span></summary>
      <nav aria-label="Mobile navigation">{items}<ContactLink intent="partner">Talk to us on WhatsApp</ContactLink></nav>
    </details>
  </>;
}
