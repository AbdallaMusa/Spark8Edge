import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const images = {
  home: { url: "/share/home.jpg", alt: "People talking on a hillside in Nairobi" },
  talent: { url: "/share/talent.jpg", alt: "Creative work at a desk in Nairobi" },
  partnerships: { url: "/share/partnerships.jpg", alt: "The Nairobi skyline" },
};

export function pageMetadata(path: string, title: string, description: string, photo: keyof typeof images): Metadata {
  const image = { ...images[photo], width: 1200, height: 630 };
  const socialTitle = `${title} | ${siteConfig.name}`;
  return {
    title, description, alternates: { canonical: path },
    openGraph: { url: path, title: socialTitle, description, siteName: siteConfig.name, locale: "en_KE", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [image] },
  };
}
