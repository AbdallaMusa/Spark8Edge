"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Users, Award, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function ServicesAccordionSection() {
  const services = [
    {
      title: "AI & Digital Skills Training",
      subtitle: "Kenya Professional Development",
      description:
        "Master AI tools, video production, content creation, social media marketing, and digital entrepreneurship at our Nairobi innovation hub.",
      keywords: ["AI Training", "Digital Skills", "Kenya Bootcamps"],
      icon: Sparkles,
    },
    {
      title: "AI-Powered PR & Brand Services",
      subtitle: "Strategic Communications",
      description:
        "Real-time media monitoring, sentiment analysis, reputation management, and data-driven brand positioning for East African businesses.",
      keywords: ["PR Services", "Brand Management", "AI Marketing"],
      icon: Target,
    },
    {
      title: "Vetted Creative Talent Network",
      subtitle: "Pre-Trained Professionals",
      description:
        "Connect with AI specialists, content creators, video editors, social media managers, and brand strategists ready to deliver results.",
      keywords: ["Hire Talent", "Creative Professionals", "Outsourcing"],
      icon: Users,
    },
  ];

  return (
    <section className="min-h-screen md:snap-start w-full bg-gradient-to-b from-white to-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6 relative overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <div className="inline-block mb-2">
            <Award size={36} className="text-[#DFA236] mx-auto" />
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-[#040F2D] uppercase mb-3">
            Digital Transformation Services
          </h2>
          <p className="font-inter text-base text-[#6D8299] max-w-3xl mx-auto">
            World-class AI training, strategic brand intelligence, and curated
            creative talent for Kenya and East Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  }, []);

  const Icon = service.icon;

  return (
    <motion.div
      variants={fadeInUp}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white/80 backdrop-blur-sm p-5 rounded-lg border-2 border-[#040F2D]/20 transition-colors duration-300 cursor-pointer hover:border-[#DFA236]"
    >
      <motion.div layout="position" className="inline-block mb-3">
        <Icon size={40} className="text-[#DFA236]" />
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