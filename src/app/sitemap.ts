import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/youth-hub", "/organization", "/partnerships", "/about-us"].map(path => ({ url: new URL(path, siteConfig.url).href }));
}
