import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import OrganizationClient from "./OrganizationClient";

export const metadata: Metadata = {
  title: "Enterprise Brand Intelligence — Spark8Edge Kenya",
  description: "Strategic brand intelligence and AI-powered marketing solutions for Kenyan enterprises competing in global markets.",
  openGraph: {
    title: "Enterprise Brand Intelligence — Spark8Edge Kenya",
    description: "Strategic brand intelligence and AI-powered marketing solutions for Kenyan enterprises competing in global markets.",
    url: 'https://www.spark8edge.co.ke/organization',
    siteName: 'Spark8Edge',
    locale: 'en_KE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.spark8edge.co.ke/organization',
  },
};

export default function Organization() {
  return (
    <div className="bg-[#040F2D] min-h-screen flex flex-col">
      <Navbar />
      <OrganizationClient />
    </div>
  );
}
