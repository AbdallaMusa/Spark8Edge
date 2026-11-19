import ContactLink from "./ContactLink";
import { displayPhone, phone } from "@/config/contact.mjs";

type Intent = "training" | "talent" | "partner";

export function ContactBand({ intent, title, action }: { intent: Intent; title: string; action: string }) {
  const anchor = intent === "training" ? "application-form" : intent === "talent" ? "consultation-form" : "contact";
  return (
    <section className="contact-band" id={anchor}>
      <div className="wrap contact-inner">
        <h2>{title}</h2>
        <div className="contact-actions">
          <ContactLink intent={intent}>{action}</ContactLink>
          <a className="call" href={`tel:${phone}`}>Call {displayPhone}</a>
        </div>
      </div>
    </section>
  );
}
