import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { ThemeProvider } from "./ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spark8edge.co.ke"),
  title: {
    default: "Spark8Edge",
    template: "%s | Spark8Edge",
  },
  description:
    "Empowering Kenya’s Next Generation through AI & Strategic Brand Intelligence.",
  icons: {
    icon: [{ url: "/icons.svg", type: "image/svg+xml" }],
    shortcut: ["/icons.svg"],
    apple: [{ url: "/icons.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll md:snap-y md:snap-mandatory">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
