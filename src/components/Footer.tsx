"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Youth Hub", href: "/youth-hub" },
  { name: "For Organizations", href: "/organization" },
];

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const getDynamicCTA = () => {
    if (pathname === "/youth-hub") {
      return {
        text: "Ready to build your future? Apply to our next cohort and start your journey.",
        buttonText: "Apply Now",
        href: "/youth-hub#application-form",
      };
    }
    if (pathname === "/organization") {
      return {
        text: "Need to future-proof your narrative? Let's discuss a tailored strategy.",
        buttonText: "Request Consultation",
        href: "/organization#consultation-form",
      };
    }
    return {
      text: "Interested in our mission? Get in touch to learn more about our impact.",
      buttonText: "Contact Us",
      href: "/about-us",
    };
  };

  const cta = getDynamicCTA();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#040F2D] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <h3 className="font-montserrat font-bold text-2xl text-white">Spark8<span className="text-[#DFA236]">Edge</span></h3>
            </Link>
            <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-xs">
              Bridging the gap between ambitious youth seeking tech careers and organizations needing fresh talent.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-inter text-sm text-gray-400 hover:text-[#DFA236] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-[#DFA236] transition-colors duration-300">
                    <link.icon size={16} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-lg p-6">
            <h4 className="font-montserrat font-semibold text-base text-white mb-3">Take the Next Step</h4>
            <p className="font-inter text-sm text-gray-300 mb-4 leading-relaxed">{cta.text}</p>
            <Link href={cta.href} className="inline-flex items-center gap-2 px-4 py-2 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95">
              {cta.buttonText} <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left">
          <p className="font-inter text-xs text-gray-500">&copy; {year} Spark8Edge. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}