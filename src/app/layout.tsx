import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Spark8Edge | Training, Talent and Partnerships in Nairobi", template: "%s | Spark8Edge" },
  description: siteConfig.description,
  openGraph: { siteName: "Spark8Edge", type: "website", locale: "en_KE" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-KE"><body><SiteHeader/><main id="main" tabIndex={-1}>{children}</main><SiteFooter/></body></html>;
}
