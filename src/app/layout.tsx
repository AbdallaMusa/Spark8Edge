import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { ThemeProvider } from "./ThemeProvider";

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
  metadataBase: new URL('https://spark8edge.co.ke'),
  title: {
    default: 'Spark8Edge',
    template: '%s | Spark8Edge'
  },
  description: 'Empowering Kenya’s Next Generation through AI & Strategic Brand Intelligence.',
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
    <html lang="en" className="snap-y snap-mandatory overflow-y-scroll">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}