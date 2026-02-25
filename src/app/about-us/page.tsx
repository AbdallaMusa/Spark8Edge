import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Spark8Edge | Connecting Youth Talent with Corporate Innovation",
  description: "Learn how Spark8Edge bridges the gap between Nairobi's unemployed youth and corporations seeking innovative talent. Discover our mission, visionary leadership, and dual-impact training model.",
  openGraph: {
    title: "About Spark8Edge | Connecting Youth Talent with Corporate Innovation",
    description: "Bridging the talent gap through strategic youth development and corporate partnerships in Kenya and East Africa.",
    type: "website",
    url: "https://spark8edge.co.ke/about-us",
  },
};

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <div className="w-full border-t border-white/5 bg-[#040F2D] relative z-20">
        <Footer />
      </div>
    </>
  );
}
