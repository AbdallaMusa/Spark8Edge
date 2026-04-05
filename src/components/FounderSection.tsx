"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Award, 
  Mic, 
  BookOpen, 
  Users,
  Quote
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function FounderSection() {
  return (
    <section className="w-full bg-[#040F2D] py-16 md:py-24 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Image with Sophisticated Frame */}
          <motion.div variants={fadeInUp} className="relative order-1 lg:order-1">
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/22.png"
                alt="Vanessa Mwando - Founder and CEO of Spark8Edge, youth empowerment and corporate training expert"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040F2D]/80 via-transparent to-transparent" />
            </div>

            {/* Offset Accent Border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#DFA236]/30 rounded-2xl -z-10" />

            {/* Quote Mark Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#DFA236]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#DFA236]/20">
              <Quote className="text-[#DFA236]" size={24} />
            </div>

            {/* Social Proof Badge */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <Mic className="text-[#DFA236]" size={16} />
                <span className="font-inter text-xs text-white font-semibold">
                  Featured Speaker at Sportsview Hotel — Nairobi, 2026
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Founder Bio & Credentials */}
          <motion.div variants={fadeInUp} className="space-y-8 order-2 lg:order-2">
            {/* Title & Intro */}
            <div>
              <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Vanessa Mwando
              </h2>
              <p className="font-inter text-lg text-[#DFA236] font-semibold uppercase tracking-wider mb-6">
                Founder & CEO
              </p>
              <p className="font-inter text-gray-300 leading-relaxed mb-6">
                Vanessa founded Spark8Edge with a mission to bridge the critical gap between Nairobi's 
                unemployed youth and corporations seeking innovative talent. With over a decade of 
                experience in youth development and corporate training, she has personally mentored 
                hundreds of young professionals into successful careers.
              </p>
              <p className="font-inter text-gray-300 leading-relaxed">
                Her innovative dual-impact model transforms potential into professional excellence 
                while providing enterprises with a pipeline of job-ready talent that drives business 
                growth and innovation.
              </p>
            </div>

            {/* Key Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#DFA236]/50 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFA236]/10 flex items-center justify-center group-hover:bg-[#DFA236] transition-colors">
                    <Award className="text-[#DFA236] group-hover:text-[#040F2D]" size={20} />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-white">Industry Recognition</h4>
                </div>
                <p className="font-inter text-sm text-gray-400">
                  Awarded "Youth Empowerment Leader of the Year" by Kenyan Digital Innovation Council.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#DFA236]/50 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFA236]/10 flex items-center justify-center group-hover:bg-[#DFA236] transition-colors">
                    <BookOpen className="text-[#DFA236] group-hover:text-[#040F2D]" size={20} />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-white">Educational Impact</h4>
                </div>
                <p className="font-inter text-sm text-gray-400">
                  Designed curriculum that has trained 500+ youth in AI, branding, and digital skills.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#DFA236]/50 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFA236]/10 flex items-center justify-center group-hover:bg-[#DFA236] transition-colors">
                    <Users className="text-[#DFA236] group-hover:text-[#040F2D]" size={20} />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-white">Corporate Partnerships</h4>
                </div>
                <p className="font-inter text-sm text-gray-400">
                  Established strategic partnerships with 25+ enterprises for talent placement.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#DFA236]/50 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFA236]/10 flex items-center justify-center group-hover:bg-[#DFA236] transition-colors">
                    <Mic className="text-[#DFA236] group-hover:text-[#040F2D]" size={20} />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-white">Public Speaking</h4>
                </div>
                <p className="font-inter text-sm text-gray-400">
                  Keynote speaker at major tech and youth development conferences across East Africa.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="pl-6 border-l-4 border-[#DFA236] italic text-gray-300 font-inter text-lg bg-white/5 p-6 rounded-r-xl">
              "Every unemployed youth represents untapped potential. Spark8Edge is the catalyst that 
              transforms potential into success — creating value for individuals, organizations, and 
              the entire East African ecosystem."
            </blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}