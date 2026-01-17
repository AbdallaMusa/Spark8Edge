"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const [numSections, setNumSections] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // 1. Dynamically count the number of snap-scroll sections on the page.
  useEffect(() => {
    // This logic assumes that each full-page section has the 'snap-start' class.
    // For this to work consistently, ensure all snap sections across all pages have this class.
    const sections = document.querySelectorAll("section.snap-start");
    setNumSections(sections.length > 1 ? sections.length : 0); // Only show for pages with more than one snap section.
  }, [pathname]); // Re-run when the page changes.

  // 2. Update the active dot and visibility based on scroll progress.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (numSections > 0) {
      // Calculate which section is currently the most visible.
      // This snaps the active dot to the current section, matching the page's scroll-snap behavior.
      const newActiveIndex = Math.round(latest * (numSections - 1));
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    }
    // Fade in the indicator after a small amount of scrolling.
    setIsVisible(latest > 0.01);
  });

  // Don't render the component if there are no snap sections found.
  if (numSections === 0) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-1/2 right-4 md:right-6 transform -translate-y-1/2 z-50 hidden md:flex"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-3">
        {Array.from({ length: numSections }).map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor: isActive ? "#DFA236" : "#9DB3CC",
                scale: isActive ? 1.75 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
