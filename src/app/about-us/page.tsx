import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Spark8Edge — Bridging Africa & Global Markets",
  description: "Learn about Spark8Edge's mission to empower East Africa's creative ecosystem with AI tools and strategic brand intelligence.",
  openGraph: {
    title: "About Spark8Edge — Bridging Africa & Global Markets",
    description: "Learn about Spark8Edge's mission to empower East Africa's creative ecosystem with AI tools and strategic brand intelligence.",
    url: 'https://www.spark8edge.co.ke/about-us',
    siteName: 'Spark8Edge',
    locale: 'en_KE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.spark8edge.co.ke/about-us',
  },
};

export default function AboutUs() {
  return (
    <div className="bg-[#040F2D] min-h-screen flex flex-col">
      <Navbar />
      <AboutClient />
    </div>
  );
}
