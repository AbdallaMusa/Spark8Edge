import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { BrowserExtensionMitigation } from "@/components/BrowserExtensionMitigation";
import { ThemeProvider } from "./ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import MobileCtaBar from "@/components/MobileCtaBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect only to critical origins */}
        <link rel="preconnect" href="https://challenges.cloudflare.com" crossOrigin="anonymous" />
        {/* Cloudflare Turnstile script - load only when form is visible */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
          async={true}
          defer={true}
        />
        {/* Immediate extension cleanup script - runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // AGGRESSIVE cleanup of browser extension attributes before React hydrates
              (function() {
                if (typeof window === 'undefined') return;
                
                function aggressiveCleanup() {
                  // Phase 1: Remove ALL data-darkreader-* attributes
                  const elements = document.querySelectorAll('*');
                  for (const el of elements) {
                    // Remove data-darkreader-* attributes
                    for (const attr of el.getAttributeNames()) {
                      if (attr.startsWith('data-darkreader')) {
                        el.removeAttribute(attr);
                      }
                    }
                    
                    // Remove data-gramm*, data-adblock*, etc.
                    for (const attr of el.getAttributeNames()) {
                      if (attr.startsWith('data-gramm') || 
                          attr.startsWith('data-adblock') ||
                          attr.includes('gr-') ||
                          attr.includes('darkreader')) {
                        el.removeAttribute(attr);
                      }
                    }
                    
                    // Clean up style attributes
                    const style = el.getAttribute('style');
                    if (style) {
                      // Remove --darkreader-inline-* CSS custom properties
                      let cleaned = style.replace(/--darkreader-inline-[^;]+;?/g, '');
                      
                      // Normalize numeric values
                      cleaned = cleaned
                        .replace(/(\\d+\\.\\d+?)0+(?=\\D|$)/g, '$1')
                        .replace(/(\\d+)px(?=\\D|$)/g, '$1')
                        .replace(/:(\\s*)(\\d+)px(?=\\D|$)/g, ':$1$2')
                        .replace(/rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)/g, function(m, r, g, b) {
                          return '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
                        });
                      
                      // Remove empty style attribute
                      cleaned = cleaned.trim().replace(/;$/, '');
                      if (cleaned) {
                        el.setAttribute('style', cleaned);
                      } else {
                        el.removeAttribute('style');
                      }
                    }
                  }
                  
                  // Phase 2: Add suppressHydrationWarning to problematic elements
                  document.querySelectorAll('svg, [style], img, div, span, a, button').forEach(el => {
                    if (el.hasAttribute('data-darkreader') || 
                        el.getAttribute('style')?.includes('--darkreader') ||
                        el.tagName === 'SVG') {
                      el.setAttribute('suppressHydrationWarning', 'true');
                    }
                  });
                }
                
                // Run IMMEDIATELY - don't wait for anything
                aggressiveCleanup();
                
                // Run on every possible event to catch delayed modifications
                const events = ['DOMContentLoaded', 'load', 'readystatechange'];
                events.forEach(event => {
                  if (document.readyState === 'loading') {
                    document.addEventListener(event, aggressiveCleanup, { once: true });
                  }
                });
                
                // Run on next tick and animation frame
                setTimeout(aggressiveCleanup, 0);
                requestAnimationFrame(aggressiveCleanup);
                
                // Run repeatedly for first second to catch everything
                let runs = 0;
                const interval = setInterval(() => {
                  aggressiveCleanup();
                  runs++;
                  if (runs > 10) clearInterval(interval);
                }, 100);
              })();
            `,
          }}
        />
        {/* JSON-LD structured data for Organization and LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Spark8Edge",
              "alternateName": "Spark8 Edge",
              "url": "https://www.spark8edge.co.ke",
              "logo": "https://www.spark8edge.co.ke/logo.png",
              "description": "Spark8Edge empowers Kenya's next generation through AI and strategic brand intelligence.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KE",
                "addressRegion": "Nairobi",
                "addressLocality": "Nairobi"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254727712711",
                "contactType": "customer service",
                "email": "info@spark8edge.co.ke"
              },
              "sameAs": [
                "https://www.linkedin.com/company/spark8edge",
                "https://www.instagram.com/spark8edge",
                "https://twitter.com/spark8edge"
              ]
            })
          }}
        />
        {/* Vercel Analytics and Speed Insights are already async */}
      </head>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <BrowserExtensionMitigation />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        <MobileCtaBar />
      </body>
    </html>
  );
}
