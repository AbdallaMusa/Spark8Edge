"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function MarketGapSection() {
  const gaps = [
    {
      title: "Capability Acceleration",
      problem:
        "Technology evolves faster than traditional education. Yesterday's skills become obsolete tomorrow.",
      solution: "Agile, industry-aligned training that evolves with markets.",
    },
    {
      title: "Digital Reputation",
      problem:
        "Brand perception forms instantly online. Reactive PR strategies arrive too late to control narratives.",
      solution: "Proactive AI monitoring and instant response systems.",
    },
    {
      title: "Hidden Potential",
      problem:
        "Africa's creative brilliance remains invisible to international markets seeking diverse, affordable talent.",
      solution: "Verified talent marketplace connecting continents.",
    },
  ];

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
            Solving Critical Market Challenges
          </h2>
          <p className="font-inter text-lg text-[#6D8299] max-w-2xl mx-auto">
            Our platform addresses the disconnect between talent, training, and
            market demand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gaps.map((gap, index) => (
            <motion.div
              key={gap.title}
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg border-2 border-[#040F2D] transition-all duration-300"
            >
              <div>
                <h3 className="font-montserrat font-bold text-xl text-[#040F2D] uppercase mb-4">
                  {gap.title}
                </h3>
              </div>

              <p className="font-inter text-[#6D8299] text-base mb-4 italic">
                "{gap.problem}"
              </p>
              <div className="flex items-center gap-2 mt-6">
                <div>
                  <Zap size={20} className="text-[#DFA236]" />
                </div>
                <p className="font-inter font-medium text-[#040F2D] text-base">
                  {gap.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}