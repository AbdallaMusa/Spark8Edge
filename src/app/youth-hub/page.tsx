import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import YouthHubClient from "./YouthHubClient";

export const metadata: Metadata = {
  title: "Youth Development Programs Kenya — Spark8Edge",
  description: "Join Spark8Edge's youth programs. Hands-on training in AI, branding, and digital skills for Kenya's next generation of creative professionals.",
  openGraph: {
    title: "Youth Development Programs Kenya — Spark8Edge",
    description: "Join Spark8Edge's youth programs. Hands-on training in AI, branding, and digital skills for Kenya's next generation of creative professionals.",
    url: 'https://www.spark8edge.co.ke/youth-hub',
    siteName: 'Spark8Edge',
    locale: 'en_KE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.spark8edge.co.ke/youth-hub',
  },
};

export default function YouthHub() {
  return (
    <div className="bg-[#040F2D] min-h-screen flex flex-col">
      <Navbar />
      <YouthHubClient />
    </div>
  );
}
