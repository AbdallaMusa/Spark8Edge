import ContactLink from "./ContactLink";
import { displayPhone, phone } from "@/config/contact.mjs";

type Intent = "training" | "talent" | "partner";

export function ContactBand({ intent, title, action, note }: { intent: Intent; title: string; action: string; note?: string }) {
  const anchor = intent === "training" ? "application-form" : intent === "talent" ? "consultation-form" : "contact";
  const heading = `${anchor}-title`;
  return (
    <section className="contact-band" id={anchor} aria-labelledby={heading}>
      <div className="wrap contact-inner">
        <div><h2 id={heading}>{title}</h2>{note && <p>{note}</p>}</div>
        <div className="contact-actions">
          <ContactLink intent={intent}>{action}</ContactLink>
          <a className="call" href={`tel:${phone}`}>Call {displayPhone}</a>
        </div>
      </div>
    </section>
  );
}
