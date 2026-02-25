import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import OrganizationClient from "./OrganizationClient";

export const metadata: Metadata = {
  title: "Corporate Solutions | AI-Powered PR & Brand Intelligence for Enterprises",
  description: "Future-proof your corporate narrative with Spark8Edge's AI-driven crisis management, automated content engines, and predictive analytics for measurable ROI.",
  openGraph: {
    title: "Corporate Solutions | AI-Powered PR & Brand Intelligence for Enterprises",
    description: "Enterprise-grade AI solutions for crisis management, content automation, and impact analytics.",
    type: "website",
    url: "https://spark8edge.co.ke/organization",
  },
};

export default function Organization() {
  return (
    <div className="bg-[#040F2D]">
      <Navbar />
      <OrganizationClient />
      <Footer />
    </div>
  );
}