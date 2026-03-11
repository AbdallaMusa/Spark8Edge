"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { TRANSITIONS, buttonHoverAnimation } from "@/lib/animations";
import { IconWrapper } from "./HydrationSafeIcon";

interface ContactPopoverProps {
  /** The CTA button text */
  buttonText: string;
  /** Optional className for the button */
  className?: string;
}

export function ContactPopover({ buttonText, className = "" }: ContactPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Click outside detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-controls="contact-popover"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const contactOptions = [
    {
      icon: Mail,
      label: "Email Us",
      value: "info@spark8edge.co.ke",
      href: "mailto:info@spark8edge.co.ke",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+254727712711",
      href: "tel:+254727712711",
    },
  ];

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* CTA Button */}
      <button
        type="button"
        onClick={togglePopover}
        aria-expanded={isOpen}
        aria-controls="contact-popover"
        aria-haspopup="dialog"
        className={`inline-flex items-center gap-2 px-4 py-2 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95 ${className}`}
      >
        {buttonText}{" "}
        <IconWrapper>
          <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}>
            →
          </span>
        </IconWrapper>
      </button>

      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="contact-popover"
            role="dialog"
            aria-label="Contact options"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={TRANSITIONS.FAST}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-64"
          >
            {/* Arrow pointer */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#040F2D] border border-white/10 transform rotate-45 border-t-0 border-l-0" />
            
            {/* Popover content with glassmorphism effect */}
            <div className="bg-gradient-to-br from-[#040F2D]/90 via-[#040F2D]/95 to-[#040F2D]/90 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl p-4 relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#DFA236]/5 via-transparent to-[#DFA236]/5 opacity-30" />
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-white mb-3">
                  Contact Us
                </h4>
                
                <div className="space-y-2">
                  {contactOptions.map((option, index) => (
                    <div key={option.label}>
                      <motion.a
                        href={option.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 group backdrop-blur-sm bg-white/5 border border-white/5 hover:border-white/20"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={TRANSITIONS.FAST}
                      >
                        <div className="flex-shrink-0">
                          <IconWrapper>
                            <option.icon size={16} className="text-gray-300 group-hover:text-[#DFA236] transition-colors duration-200" />
                          </IconWrapper>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-inter text-xs text-gray-300 group-hover:text-white transition-colors duration-200">
                            {option.label}
                          </div>
                          <div className="font-inter text-sm text-white truncate">
                            {option.value}
                          </div>
                        </div>
                      </motion.a>
                      
                      {/* Divider between items */}
                      {index < contactOptions.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}