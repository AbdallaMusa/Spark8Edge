"use client";

import { motion } from "framer-motion";
import { Sparkles, Target } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function NexusSection() {
  return (
    <section className="min-h-screen md:snap-start w-full bg-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
            Where Talent Meets Opportunity
          </h2>
          <p className="font-inter text-lg md:text-xl text-[#6D8299] max-w-3xl mx-auto leading-relaxed">
            Spark8Edge bridges East Africa's creative ecosystem with global
            markets. We cultivate exceptional talent through cutting-edge
            training while delivering enterprise-grade brand solutions powered
            by artificial intelligence and human creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            variants={fadeInUp}
            className="relative p-10 bg-white rounded-lg border-4 border-transparent transition-all duration-500 overflow-hidden"
          >
            <Sparkles size={48} className="text-[#DFA236] mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">
              Youth Development
            </h3>
            <p className="font-inter text-[#6D8299] text-lg leading-relaxed">
              Intensive bootcamps in emerging technologies, creative production,
              and business strategy designed to transform ambitious youth into
              industry leaders.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative p-10 bg-white rounded-lg border-4 border-transparent transition-all duration-500 overflow-hidden"
          >
            <Target size={48} className="text-[#040F2D] mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">
              Enterprise Solutions
            </h3>
            <p className="font-inter text-[#6D8299] text-lg leading-relaxed">
              Intelligent PR systems, strategic communications, and curated
              talent networks that give organizations competitive advantage in
              the digital age.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}