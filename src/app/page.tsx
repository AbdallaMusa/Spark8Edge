import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Spark8Edge — AI Branding & Youth Development Agency in Kenya",
  description: "Spark8Edge helps Kenyan brands grow globally and trains the next generation of creative talent through AI-powered strategy and brand intelligence.",
  keywords: ["brand agency Kenya", "digital marketing Kenya", "AI branding agency Nairobi", "youth development Kenya"],
  openGraph: {
    title: "Spark8Edge — AI Branding & Youth Development Agency in Kenya",
    description: "Spark8Edge helps Kenyan brands grow globally and trains the next generation of creative talent through AI-powered strategy and brand intelligence.",
    url: 'https://www.spark8edge.co.ke',
    siteName: 'Spark8Edge',
    locale: 'en_KE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.spark8edge.co.ke',
  },
};

export default function Home() {
  return (
    <div className="bg-[#040F2D] min-h-screen flex flex-col">
      <Navbar />
      <HomeClient />
    </div>
  );
}
