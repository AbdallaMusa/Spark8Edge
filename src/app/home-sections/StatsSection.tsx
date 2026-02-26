"use client";

import { motion } from "framer-motion";
import { Target, Users, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function StatsSection() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "Pioneering the intersection of African creativity and global technology standards",
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description:
        "Building bridges between untapped potential and transformative opportunities",
    },
    {
      icon: Sparkles,
      title: "Excellence Driven",
      description:
        "Delivering world-class training and services that exceed international benchmarks",
    },
  ];

  return (
    <section className="min-h-screen md:snap-start w-full bg-gradient-to-br from-[#040F2D] via-[#1a2847] to-[#040F2D] flex items-center justify-center py-16 md:py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DFA236 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white uppercase mb-6">
            Our Foundation
          </h2>
          <p className="font-inter text-lg text-[#DFA236] max-w-2xl mx-auto">
            The core principles driving Spark8Edge as we build the future of
            African talent development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border-2 border-[#DFA236]/20 transition-all duration-300"
            >
              <div className="inline-block mb-6">
                <value.icon size={64} className="text-[#DFA236]" />
              </div>

              <h3 className="font-montserrat font-bold text-2xl text-white uppercase tracking-wider mb-4">
                {value.title}
              </h3>

              <p className="font-inter text-base text-[#DFA236]/90 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}