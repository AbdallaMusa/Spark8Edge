"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * MobileCtaBar - Fixed bottom call-to-action bar for mobile devices only
 * 
 * Features:
 * - Only visible on mobile screens (hidden on md: and above)
 * - Fixed positioning at bottom of viewport
 * - Two side-by-side buttons: "Call Us" and "Book a Call"
 * - Brand primary color for the "Book a Call" button
 * - Subtle top border/shadow for separation
 * - iOS safe area padding support
 * - Animated entrance from below on mount
 * - Integrated with existing ContactPopover via scroll to contact section
 */
export default function MobileCtaBar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToContact = () => {
    // Find any contact section on the page
    const contactElements = document.querySelectorAll('[id*="contact"], [id*="form"], [href*="contact"]');
    
    // Try to find the first contact-related element
    for (const element of Array.from(contactElements)) {
      if (element.id && element.scrollIntoView) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Fallback to contact form or application form sections
    const contactSection = document.getElementById('application-form') || 
                          document.getElementById('consultation-form') ||
                          document.getElementById('contact-form');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Ultimate fallback: scroll to bottom where contact info typically is
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        delay: 0.2 
      }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0)'
      }}
    >
      {/* Background container with subtle top border and shadow */}
      <div className="relative">
        {/* Top border glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Main container */}
        <div className="bg-[#040F2D] backdrop-blur-lg border-t border-white/10 px-4 py-3">
          <div className="flex items-center justify-between gap-3 max-w-screen-md mx-auto">
            {/* Left Button: Call Us */}
            <Link
              href="tel:+254727712711"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 active:scale-95 group"
              aria-label="Call Spark8Edge at +254 727 712 711"
            >
              <Phone 
                size={18} 
                className="text-white group-hover:text-[#DFA236] transition-colors duration-300" 
              />
              <span className="font-montserrat font-semibold text-sm text-white group-hover:text-[#DFA236] transition-colors duration-300">
                Call Us
              </span>
            </Link>

            {/* Right Button: Book a Call (Primary Brand Color) */}
            <button
              onClick={scrollToContact}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#DFA236] hover:bg-white text-[#040F2D] font-montserrat font-semibold text-sm rounded-lg transition-all duration-300 active:scale-95 group shadow-lg hover:shadow-xl"
              aria-label="Book a consultation call with Spark8Edge"
            >
              <Calendar 
                size={18} 
                className="text-[#040F2D] group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="font-montserrat font-semibold text-sm">
                Book a Call
              </span>
            </button>
          </div>

          {/* Subtle shadow at the bottom for depth */}
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}