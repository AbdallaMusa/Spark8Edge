"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function AboutClient() {
  return (
    <>
      <main>
        <CinematicHeroSection />
        <ScrollytellingSection />
        <ArchitectsSection />
        <PartnersSection />
        <DualCTASection />
      </main>
    </>
  );
}

const HERO_FEATURES = [
  { label: "Youth Development Programs" },
  { label: "Corporate Training Solutions" },
  { label: "Talent Recruitment Services" },
] as const;

function CinematicHeroSection() {
  return (
    <section className="min-h-screen md:snap-start w-full flex items-center justify-center relative overflow-hidden px-6 py-16 md:py-24">
      <motion.div
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070"
          alt="Team working together on laptops in a bright, modern workspace"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#040F2D] via-[#040F2D]/95 to-[#040F2D]/90" />
      <div className="absolute inset-0 bg-[#040F2D] opacity-50" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-block px-6 py-2 bg-[#DFA236]/10 border border-[#DFA236]/30 rounded-full mb-6 md:mb-8"
        >
          <span className="font-inter text-xs md:text-sm text-[#DFA236] uppercase tracking-widest font-semibold">
            About Spark8Edge
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-montserrat font-extrabold text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-tight"
        >
          Connecting Youth Talent
          <br />
          <span className="text-[#DFA236]">With Corporate Innovation</span>
        </motion.h1>

        <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
          <p className="font-inter text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12">
            Spark8Edge bridges the gap between ambitious youth seeking tech
            careers and organizations needing fresh talent. We transform
            Nairobi's untapped potential into skilled professionals ready
            to drive business growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
            {HERO_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 text-white"
              >
                <div className="w-2 h-2 bg-[#DFA236] rounded-full" />
                <span className="font-inter">{feature.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const SCROLLYTELLING_STEPS = [
  {
    number: "01",
    title: "The Challenge",
    subtitle: "Youth Unemployment Crisis",
    description:
      "Despite 60% youth unemployment in Nairobi, technology companies struggle to fill critical technical positions. This talent gap represents both a social challenge and a business opportunity.",
    icon: "⚠️",
  },
  {
    number: "02",
    title: "The Barrier",
    subtitle: "Communication Disconnect",
    description:
      "Organizations seek innovative talent but lack effective channels to reach, engage, and develop young professionals. Traditional recruitment methods fail to bridge this generational divide.",
    icon: "🔌",
  },
  {
    number: "03",
    title: "Our Solution",
    subtitle: "Dual-Impact Model",
    description:
      "Spark8Edge transforms unemployed youth into skilled professionals while providing corporations with a pipeline of job-ready talent. Our training hub serves as an innovation laboratory for enterprise clients.",
    icon: "⚡",
  },
] as const;

function ScrollytellingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SCROLLYTELLING_STEPS.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + SCROLLYTELLING_STEPS.length) % SCROLLYTELLING_STEPS.length,
    );
  };

  const currentStep = SCROLLYTELLING_STEPS[currentIndex];

  return (
    <section className="min-h-screen md:snap-start w-full bg-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] mb-4">
            How Spark8Edge Works
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] max-w-3xl mx-auto">
            Bridging the talent gap through strategic youth development and
            corporate partnerships
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white hover:bg-[#DFA236] text-[#040F2D] transition-all shadow-lg border border-[#040F2D]/10"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white hover:bg-[#DFA236] text-[#040F2D] transition-all shadow-lg border border-[#040F2D]/10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-8 md:p-12 border-2 border-[#040F2D] shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-montserrat font-bold text-6xl md:text-7xl text-[#DFA236]/20">
                    {currentStep.number}
                  </span>
                  <span className="text-5xl md:text-6xl">
                    {currentStep.icon}
                  </span>
                </div>

                <h3 className="font-montserrat font-extrabold text-2xl md:text-4xl text-[#040F2D] mb-3">
                  {currentStep.title}
                </h3>

                <h4 className="font-inter font-semibold text-base md:text-lg text-[#DFA236] uppercase tracking-wide mb-6">
                  {currentStep.subtitle}
                </h4>

                <p className="font-inter text-base md:text-xl text-[#6D8299] leading-relaxed">
                  {currentStep.description}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {SCROLLYTELLING_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-[#DFA236] w-8" : "bg-[#040F2D]/20 w-2 hover:bg-[#040F2D]/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ArchitectsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen md:snap-start w-full bg-[#040F2D] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 relative">
            <div className="relative aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/Images/22.png"
                alt="Vanessa Mwando - Founder and CEO of Spark8Edge, youth empowerment and corporate training expert"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040F2D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-1">
                  Vanessa Mwando
                </h3>
                <p className="font-inter text-sm text-[#DFA236] font-semibold uppercase tracking-wider">
                  Founder & CEO
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border border-[#DFA236]/20 rounded-2xl hidden md:block" />
          </motion.div>

          {/* Content Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Visionary Leadership
              </h2>
              <p className="font-inter text-lg text-gray-300 leading-relaxed">
                Vanessa Mwando founded Spark8Edge with a clear mission: to
                bridge the critical gap between Nairobi's unemployed youth
                and corporations seeking innovative talent. Her vision
                transforms potential into professional excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#DFA236]/50 transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#DFA236]/10 flex items-center justify-center mb-4 group-hover:bg-[#DFA236] transition-colors">
                  <Users
                    className="text-[#DFA236] group-hover:text-[#040F2D]"
                    size={20}
                  />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-white mb-2">
                  For Youth
                </h4>
                <p className="font-inter text-sm text-gray-400">
                  Free technical training & mentorship pathways to employment.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#DFA236]/50 transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#DFA236]/10 flex items-center justify-center mb-4 group-hover:bg-[#DFA236] transition-colors">
                  <Briefcase
                    className="text-[#DFA236] group-hover:text-[#040F2D]"
                    size={20}
                  />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-white mb-2">
                  For Organizations
                </h4>
                <p className="font-inter text-sm text-gray-400">
                  Access to pre-vetted, job-ready talent pools.
                </p>
              </div>
            </div>

            <blockquote className="pl-6 border-l-4 border-[#DFA236] italic text-gray-300 font-inter text-lg">
              "Every unemployed youth represents untapped potential.
              Spark8Edge is the catalyst that transforms potential into
              success."
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

const TECHNOLOGIES_DATA = [
  {
    name: "DaVinci Resolve",
    category: "Video Production",
    description: "Professional color grading, editing, and visual effects",
  },
  {
    name: "Generative AI",
    category: "Prompt Engineering",
    description: "Mastering LLMs (ChatGPT, Claude) for workflow automation",
  },
  {
    name: "Figma",
    category: "Product Design",
    description: "End-to-end UI/UX design and interactive prototyping",
  },
  {
    name: "Next.js & React",
    category: "Web Development",
    description: "Building modern, high-performance digital platforms",
  },
  {
    name: "Python",
    category: "AI & Data",
    description: "Scripting for automation, data analysis, and AI agents",
  },
  {
    name: "Adobe Creative Cloud",
    category: "Visual Design",
    description: "Industry-standard suite for graphic design and content",
  },
  {
    name: "Drone Operations",
    category: "Cinematography",
    description: "Aerial photography and videography for storytelling",
  },
  {
    name: "Social Media Strategy",
    category: "Digital Marketing",
    description: "Data-driven content distribution and audience growth",
  },
  {
    name: "Brand Storytelling",
    category: "Content Strategy",
    description: "Crafting compelling narratives for corporate identity",
  },
  {
    name: "Data Analytics",
    category: "Business Intelligence",
    description: "Turning raw data into actionable strategic insights",
  },
  {
    name: "Cloud Infrastructure",
    category: "DevOps",
    description: "Scalable deployment using AWS and containerization",
  },
  {
    name: "Agile Management",
    category: "Operations",
    description: "Modern project management methodologies for teams",
  },
] as const;

function PartnersSection() {
  return (
    <section className="min-h-screen md:snap-start w-full bg-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #040F2D 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            variants={fadeInUp}
            className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] mb-6"
          >
            Enterprise-Grade Training
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-inter text-lg text-[#6D8299]"
          >
            A multidisciplinary curriculum blending creative artistry, AI
            innovation, and technical engineering to build the workforce of
            tomorrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Benefits List */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <h3 className="font-montserrat font-bold text-xl text-[#040F2D] mb-6 flex items-center gap-2">
                <span className="text-[#DFA236]">●</span> Program Impact
              </h3>
              <ul className="space-y-4">
                {[
                  "12-week intensive cohort-based learning",
                  "Hands-on project experience",
                  "Direct employment pathways",
                  "Custom corporate training modules",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#6D8299] font-inter text-sm md:text-base"
                  >
                    <CheckCircle2
                      className="text-[#DFA236] shrink-0 mt-0.5"
                      size={18}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Tech Stack Grid */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TECHNOLOGIES_DATA.slice(0, 12).map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#DFA236] hover:shadow-md transition-all group"
                >
                  <div className="font-montserrat font-bold text-[#040F2D] group-hover:text-[#DFA236] transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-xs text-[#6D8299] mt-1 font-inter">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function DualCTASection() {
  return (
    <section className="min-h-screen md:h-screen md:snap-start w-full flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row relative">
        <motion.div
          variants={fadeInUp}
          className="relative flex-1 py-16 md:py-0 h-auto md:h-full flex items-center justify-center overflow-hidden group bg-[#DFA236]"
        >
          <div className="absolute inset-0 bg-[#DFA236] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 text-center px-6 max-w-xl">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-6 md:mb-8 leading-tight">
              I Want To Build.
            </h2>

            <Link
              href="/youth-hub"
              className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#040F2D] text-white font-montserrat font-semibold text-xs md:text-sm uppercase tracking-wider rounded hover:bg-white hover:text-[#040F2D] transition-all duration-300 active:scale-95"
            >
              Join Youth Hub
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative flex-1 py-16 md:py-0 h-auto md:h-full flex items-center justify-center overflow-hidden group bg-[#040F2D]"
        >
          <div className="absolute inset-0 bg-[#040F2D] opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 text-center px-6 max-w-xl">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-6 md:mb-8 leading-tight">
              I Want To Hire.
            </h2>

            <Link
              href="/organization"
              className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs md:text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95"
            >
              Hire The Squad
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}