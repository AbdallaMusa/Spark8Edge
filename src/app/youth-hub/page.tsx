import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import YouthHubClient from "./YouthHubClient";

export const metadata: Metadata = {
  title: "Youth Hub | Elite AI & Creative Training for Nairobi's Next Generation",
  description: "Join Spark8Edge's immersive 12-week bootcamp in AI, video production, product design, and digital storytelling. Transform your creative potential into a professional career.",
  openGraph: {
    title: "Youth Hub | Elite AI & Creative Training for Nairobi's Next Generation",
    description: "Intensive offline training in Westlands, Nairobi for aspiring creatives and tech professionals.",
    type: "website",
    url: "https://spark8edge.co.ke/youth-hub",
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
