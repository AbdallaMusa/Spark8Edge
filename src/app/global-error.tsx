"use client";

import { useEffect } from "react";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

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

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased bg-[#040F2D] text-white flex items-center justify-center min-h-screen`}>
        <div className="text-center px-6 max-w-2xl">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-6xl text-[#DFA236] mb-6">
            Something went wrong!
          </h2>
          <p className="font-inter text-lg text-gray-300 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 shadow-lg"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}