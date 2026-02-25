import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Spark8Edge | Empowering Kenya's Next Generation through AI & Strategic Brand Intelligence",
  description: "World-class AI training, strategic brand intelligence, and curated creative talent for Kenya and East Africa. Bridge the gap between youth talent and corporate innovation.",
  openGraph: {
    title: "Spark8Edge | Empowering Kenya's Next Generation through AI & Strategic Brand Intelligence",
    description: "World-class AI training, strategic brand intelligence, and curated creative talent for Kenya and East Africa.",
    type: "website",
    url: "https://spark8edge.co.ke",
  },
};

export default function Home() {
  return (
    <div className="bg-[#040F2D]">
      <Navbar />
      <HomeClient />
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}
