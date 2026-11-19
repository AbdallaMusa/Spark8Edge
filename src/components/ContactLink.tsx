import { contactHref } from "@/config/contact.mjs";
export default function ContactLink({ intent, children, quiet = false }: { intent: Parameters<typeof contactHref>[0]; children: React.ReactNode; quiet?: boolean }) {
  return <a className={quiet ? "text-link" : "button"} href={contactHref(intent)}>{children} <span aria-hidden="true">↗</span></a>;
}
