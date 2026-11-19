import { siteConfig } from "@/config/site";

const organizationId = new URL("/#organization", siteConfig.url).href;
const founderId = new URL("/about-us#vanessa-mwando", siteConfig.url).href;

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  founder: { "@id": founderId },
};

export const founder = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": founderId,
  name: siteConfig.founder.name,
  jobTitle: siteConfig.founder.role,
  url: new URL("/about-us", siteConfig.url).href,
  image: new URL(`/photos/${siteConfig.founder.portrait}.webp`, siteConfig.url).href,
  worksFor: { "@id": organizationId },
};

export function JsonLd({ data }: { data: typeof organization | typeof founder }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
