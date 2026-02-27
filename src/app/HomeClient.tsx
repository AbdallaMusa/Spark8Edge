"use client";

import { useState, useEffect, FormEvent, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Target, Zap, Users, Award } from "lucide-react";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Footer } from "@/components/Footer";
import { createNormalizedStyle } from "@/lib/style-utils";

// Lazy load non-critical sections (below the fold)
const NexusSection = dynamic(() => import("./home-sections/NexusSection").then(mod => mod.NexusSection), {
  loading: () => <div className="h-[50vh] bg-[#F4F4F9] animate-pulse" />,
  ssr: false,
});

const StatsSection = dynamic(() => import("./home-sections/StatsSection").then(mod => mod.StatsSection), {
  loading: () => <div className="h-[50vh] bg-gradient-to-br from-[#040F2D] via-[#1a2847] to-[#040F2D] animate-pulse" />,
  ssr: false,
});

const ServicesAccordionSection = dynamic(() => import("./home-sections/ServicesAccordionSection").then(mod => mod.ServicesAccordionSection), {
  loading: () => <div className="h-[50vh] bg-gradient-to-b from-white to-[#F4F4F9] animate-pulse" />,
  ssr: false,
});

const MarketGapSection = dynamic(() => import("./home-sections/MarketGapSection").then(mod => mod.MarketGapSection), {
  loading: () => <div className="h-[50vh] bg-[#F4F4F9] animate-pulse" />,
  ssr: false,
});

const NewsletterSection = dynamic(() => import("./home-sections/NewsletterSection").then(mod => mod.NewsletterSection), {
  loading: () => <div className="h-[50vh] bg-[#040F2D] animate-pulse" />,
  ssr: false,
});

export default function HomeClient() {
  return (
    <div className="bg-[#040F2D] flex-1">
      <main>
        <SplitHeroSection />
        <NexusSection />
        <StatsSection />
        <ServicesAccordionSection />
        <MarketGapSection />
        <NewsletterSection />
        <div className="md:snap-start w-full border-t border-white/5 bg-[#040F2D] relative">
          <Footer />
        </div>
      </main>
    </div>
  );
}

function SplitHeroSection() {
  return (
    <section className="min-h-screen md:h-screen md:snap-start w-full flex flex-col md:flex-row">
      <SplitHeroPanel
        side="left"
        image="https://images.unsplash.com/photo-1633114072836-15d933c6d3a7?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayColor="#DFA236"
        overlayOpacity={0.4}
        title="Empowering Kenya's Next Generation"
        description="World-Class Training in AI, Content Creation & Digital Innovation"
        link="/youth-hub"
        linkText="Discover Programs"
        textColor="#040F2D"
        btnBg="#040F2D"
        btnText="white"
        btnHoverBg="#DFA236"
        btnHoverText="#040F2D"
        priority={true}
        headingLevel="h1"
      />

      <SplitHeroPanel
        side="right"
        image="https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayColor="#040F2D"
        overlayOpacity={0.7}
        title="Strategic Brand Intelligence"
        description="AI-Enhanced PR & Reputation Management for Modern Enterprises"
        link="/organization"
        linkText="View Services"
        textColor="white"
        descColor="#DFA236"
        btnBg="#DFA236"
        btnText="#040F2D"
        btnHoverBg="white"
        btnHoverText="#040F2D"
        priority={true}
        headingLevel="h2"
      />
    </section>
  );
}

interface SplitHeroPanelProps {
  side: "left" | "right";
  image: string;
  overlayColor: string;
  overlayOpacity: number;
  title: string;
  description: string;
  link: string;
  linkText: string;
  textColor: string;
  descColor?: string;
  btnBg: string;
  btnText: string;
  btnHoverBg: string;
  btnHoverText: string;
  priority?: boolean;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function SplitHeroPanel({
  side,
  image,
  overlayColor,
  overlayOpacity,
  title,
  description,
  link,
  linkText,
  textColor,
  descColor,
  btnBg,
  btnText,
  btnHoverBg,
  btnHoverText,
  priority = false,
  headingLevel = "h1",
}: SplitHeroPanelProps) {
  const HeadingTag = headingLevel;
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only apply hover effects after component is mounted to avoid hydration mismatches
  const effectiveOpacity = isMounted ? (isButtonHovered ? overlayOpacity + 0.2 : 0) : 0;
  const effectiveBgColor = isMounted ? (isButtonHovered ? btnHoverBg : btnBg) : btnBg;
  const effectiveTextColor = isMounted ? (isButtonHovered ? btnHoverText : btnText) : btnText;

  return (
    <div className="relative flex-1 h-auto py-20 md:py-0 md:min-h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
        </div>
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={createNormalizedStyle({
          backgroundColor: overlayColor,
          opacity: effectiveOpacity,
        })}
      />

      <div className="relative z-10 text-center px-6 py-12 max-w-xl">
        <HeadingTag
          className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase mb-4 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          style={createNormalizedStyle({ color: textColor })}
        >
          {title}
        </HeadingTag>

        <div>
          <p
            className="font-inter text-lg mb-8 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
            style={createNormalizedStyle({ color: descColor || textColor })}
          >
            {description}
          </p>

          <Link
            href={link}
            className={`inline-flex items-center gap-3 px-8 py-4 font-montserrat font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300 active:scale-95 relative z-20`}
            style={createNormalizedStyle({ 
              backgroundColor: effectiveBgColor, 
              color: effectiveTextColor 
            })}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {linkText} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}




function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  }, []);

  return (
    <motion.div
      variants={fadeInUp}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white/80 backdrop-blur-sm p-5 rounded-lg border-2 border-[#040F2D]/20 transition-colors duration-300 cursor-pointer hover:border-[#DFA236]"
    >
      <motion.div layout="position" className="inline-block mb-3">
        <service.icon size={40} className="text-[#DFA236]" />
      </motion.div>

      <motion.span
        layout="position"
        className="block font-inter text-xs uppercase tracking-widest mb-1 text-[#6D8299] font-semibold"
      >
        {service.subtitle}
      </motion.span>

      <motion.h3
        layout="position"
        className="font-montserrat font-bold text-lg text-[#040F2D] uppercase tracking-wider mb-2"
      >
        {service.title}
      </motion.h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="font-inter text-sm text-[#6D8299] leading-relaxed mb-3">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {service.keywords.map((keyword: string) => (
                <span
                  key={keyword}
                  className="px-2 py-0.5 bg-[#DFA236]/10 rounded-full text-xs font-inter uppercase tracking-wide text-[#040F2D]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 flex items-center gap-2 text-xs font-bold text-[#DFA236] uppercase"
        >
          <span>Expand</span>
          <ArrowRight size={14} />
        </motion.div>
      )}
    </motion.div>
  );
}
