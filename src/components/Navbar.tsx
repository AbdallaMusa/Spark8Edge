"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide navbar when scrolling down, show when scrolling up
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => { document.body.style.overflow = '' };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Youth Hub", href: "/youth-hub" },
    { name: "Organization", href: "/organization" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#040F2D]/10">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Left Section: Logo */}
        <div className="flex justify-start items-center">
          <Link href="/" className="flex flex-col group">
            <span className="font-montserrat font-extrabold text-2xl text-[#040F2D] tracking-tight leading-none">
              SPARK<span className="text-[#DFA236]">8</span>EDGE
            </span>
            <span className="block font-inter text-[0.55rem] sm:text-[0.6rem] font-semibold text-[#6D8299] uppercase tracking-widest mt-1 group-hover:text-[#DFA236] transition-colors duration-300">
              Spark your future, ignite your brand
            </span>
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex justify-center items-center">
          <div className="flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group font-inter md:text-xs lg:text-sm font-semibold transition-colors uppercase tracking-wide ${
                    isActive ? "text-[#DFA236]" : "text-[#040F2D] hover:text-[#DFA236]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#DFA236] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Section: CTA */}
        <div className="hidden md:flex justify-end items-center">
          <div className="flex items-center gap-4 lg:gap-6">
            <Link
              href="/youth-hub#application-form"
              className="px-3 lg:px-5 py-2 bg-transparent text-[#040F2D] font-montserrat font-bold text-[11px] lg:text-xs uppercase tracking-wider rounded border-2 border-[#040F2D] hover:bg-[#040F2D] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Apply Now
            </Link>
            <Link
              href="/organization#consultation-form"
              className="px-3 lg:px-5 py-2 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-[11px] lg:text-xs uppercase tracking-wider rounded hover:bg-[#040F2D] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg whitespace-nowrap"
            >
              Book a Consult
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#040F2D] p-2 hover:bg-[#040F2D]/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white/95 backdrop-blur-lg z-50 md:hidden"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-6 h-20 border-b border-[#040F2D]/10">
                  <Link href="/" className="font-montserrat font-extrabold text-xl text-[#040F2D] tracking-tight" onClick={() => setIsOpen(false)}>
                    SPARK<span className="text-[#DFA236]">8</span>EDGE
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-[#040F2D] p-2 hover:bg-[#040F2D]/5 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="px-6 py-8 flex flex-col gap-6 overflow-y-auto">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, ease: "easeOut" }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block font-montserrat font-bold text-lg transition-colors ${
                            isActive ? "text-[#DFA236]" : "text-[#040F2D] hover:text-[#DFA236]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + navLinks.length * 0.05, ease: "easeOut" }}
                  >
                    <div className="flex flex-col gap-4 pt-4 border-t border-[#040F2D]/10">
                      <Link
                        href="/youth-hub#application-form"
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-3 bg-white text-[#040F2D] border-2 border-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded text-center hover:bg-[#040F2D] hover:text-white transition-all duration-300"
                      >
                        Join Our Network
                      </Link>
                      <Link
                        href="/organization#consultation-form"
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-3 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded text-center hover:bg-[#040F2D] hover:text-white transition-all duration-300"
                      >
                        Book a Consultation
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}