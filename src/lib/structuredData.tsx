import { siteConfig } from "@/config/site";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": new URL("/#organization", siteConfig.url).href,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export function JsonLd({ data }: { data: typeof organization }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
