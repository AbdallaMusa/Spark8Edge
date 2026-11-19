import ContactLink from "./ContactLink";
import { displayPhone, phone } from "@/config/contact.mjs";

type Intent = "training" | "talent" | "partner";
export default function OfferPage({ eyebrow, title, description, intent, action, children }: { eyebrow: string; title: string; description: string; intent: Intent; action: string; children: React.ReactNode }) {
  return <><section className="subhero"><div className="wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro">{description}</p><ContactLink intent={intent}>{action}</ContactLink></div></section>{children}<section className="contact-band" id={intent === "training" ? "application-form" : intent === "talent" ? "consultation-form" : "contact"}><div className="wrap contact-inner"><div><p className="eyebrow">Start a conversation</p><h2>Tell us what you have in mind.</h2></div><div><ContactLink intent={intent}>{action}</ContactLink><a className="call" href={`tel:${phone}`}>Call {displayPhone}</a></div></div></section></>;
}
