"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Shield, Zap, BarChart3, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, FormEvent } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { siteConfig } from "@/config/site";

export default function OrganizationClient() {
  return (
    <main>
      <HeroSection />
      <DataGapSection />
      <ServicesSuiteSection />
      <CaseStudiesSection />
      <ConsultationFormSection />
    </main>
  );
}

function DataGapSection() {
  const stats = [
    {
      value: "40%",
      label: "Reduction in operational costs",
      subtext: "with AI-driven workflows",
    },
    {
      value: "3x",
      label: "Faster content production",
      subtext: "vs traditional PR campaigns",
    },
    {
      value: "Real-Time",
      label: "Sentiment tracking & analysis",
      subtext: "for proactive reputation management",
    },
  ];

  return (
    <section className="min-h-screen md:snap-start w-full bg-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto w-full text-center"
      >
        <motion.header variants={fadeInUp}>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-6 md:mb-8">
            Bridging the Corporate Data Gap.
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] leading-relaxed max-w-3xl mx-auto mb-12">
            In today's fast-paced digital landscape, organizations face critical challenges in managing their narrative, scaling content production, and measuring true impact. Spark8Edge provides the tools to transform these challenges into opportunities.
          </p>
        </motion.header>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-white p-5 md:p-6 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] transition-all duration-300 hover:shadow-xl"
            >
              <p className="font-montserrat font-bold text-3xl md:text-4xl text-[#DFA236] mb-2">
                {stat.value}
              </p>
              <h3 className="font-montserrat font-bold text-base md:text-lg text-[#040F2D] uppercase mb-1">
                {stat.label}
              </h3>
              <p className="font-inter text-xs text-[#6D8299] mt-1">
                {stat.subtext}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Shield,
    title: "AI Crisis Management",
    description: "Our predictive reputation monitoring technology identifies potential brand threats before they escalate. Using advanced machine learning algorithms and real-time social listening, we detect emerging crises within minutes, enabling proactive response strategies that protect your corporate reputation and minimize negative impact on stakeholder trust.",
    keywords: ["Crisis Management", "Reputation Monitoring", "Brand Protection", "Risk Mitigation"],
  },
  {
    icon: Zap,
    title: "Automated Content",
    description: "Scale your corporate communications with AI-powered content production systems. Our automated workflows generate high-quality video assets, infographics, and multimedia content at unprecedented speed—delivering professional-grade materials in days instead of weeks while maintaining brand consistency and reducing production costs by up to 60%.",
    keywords: ["Content Automation", "Corporate Communications", "Multimedia Production", "Cost Efficiency"],
  },
  {
    icon: BarChart3,
    title: "Impact Analytics",
    description: "Transform raw data into actionable insights with our comprehensive analytics dashboard. Track campaign performance metrics, audience engagement rates, sentiment scores, and ROI in real-time. Our advanced reporting tools provide granular visibility into content reach, emotional resonance, and conversion attribution across all communication channels.",
    keywords: ["Analytics Dashboard", "ROI Tracking", "Performance Metrics", "Data Insights"],
  },
];

function ServicesSuiteSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const Icon = SERVICES[currentIndex].icon;

  return (
    <section 
      className="min-h-screen md:snap-start w-full bg-gradient-to-b from-[#040F2D] to-[#0a1847] flex items-center justify-center px-6 py-16 md:py-24 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.header
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            id="services-heading"
            className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4 md:mb-6"
          >
            Corporate Intelligence Suite.
          </h2>
          <p className="font-inter text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Our integrated suite of <strong className="text-white">AI-powered communication tools</strong> combines{" "}
            <strong className="text-white">crisis management</strong>, <strong className="text-white">automated content production</strong>, 
            and <strong className="text-white">predictive analytics</strong> to give enterprise organizations complete control over their 
            corporate narrative.
          </p>
        </motion.header>

        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20">
            <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 hover:bg-[#DFA236] text-white hover:text-[#040F2D] transition-all backdrop-blur-sm border border-white/10">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20">
            <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 hover:bg-[#DFA236] text-white hover:text-[#040F2D] transition-all backdrop-blur-sm border border-white/10">
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
                className="group bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#DFA236]/50 hover:bg-white/10"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-3 bg-[#DFA236]/10 rounded-lg border border-[#DFA236]/20">
                    <Icon
                      size={40} 
                      className="text-[#DFA236] group-hover:scale-110 transition-transform duration-500" 
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-xl md:text-2xl text-white uppercase mb-3 group-hover:text-[#DFA236] transition-colors duration-300">
                      {SERVICES[currentIndex].title}
                    </h3>
                    <p className="font-inter text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                      {SERVICES[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2" role="list" aria-label={`Key features of ${SERVICES[currentIndex].title}`}>
                      {SERVICES[currentIndex].keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-gray-300 font-inter text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {SERVICES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-[#DFA236] w-8" : "bg-white/20 w-2 hover:bg-white/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
            aria-label="Request a consultation about our services"
          >
            Discuss Your Needs <ArrowDown size={20} aria-hidden="true" />
          </button>
          <p className="mt-4 font-inter text-sm text-gray-400">
            Free consultation • Tailored solutions • Measurable ROI
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CaseStudiesSection() {
  const testimonials = [
    {
      quote: "Spark8Edge transformed our product launch. Their youth network created a buzz we simply couldn't buy with traditional ads.",
      author: "Marketing Director",
      company: "FinTech Nairobi",
    },
    {
      quote: "The speed of delivery is unmatched. What used to take 2 weeks now takes 2 days.",
      author: "CEO",
      company: "Logistics Firm",
    },
  ];

  return (
    <section className="min-h-screen md:snap-start w-full bg-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto w-full"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#040F2D] uppercase mb-4 md:mb-6">
            Proven Impact.
          </h2>
          <p className="font-inter text-base md:text-lg text-[#6D8299] leading-relaxed max-w-4xl mx-auto">
            Our clients see <strong className="text-[#040F2D]">measurable results</strong> through our{" "}
            <strong className="text-[#040F2D]">data-driven PR campaigns</strong> and{" "}
            <strong className="text-[#040F2D]">AI-powered reputation management</strong> solutions. From accelerating{" "}
            <strong className="text-[#040F2D]">product launches</strong> to reducing{" "}
            <strong className="text-[#040F2D]">content production timelines</strong>, enterprise organizations trust our{" "}
            <strong className="text-[#040F2D]">integrated communication platform</strong> to deliver{" "}
            <strong className="text-[#040F2D]">ROI-focused outcomes</strong> at scale.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 md:p-8 rounded-lg border-2 border-[#040F2D] hover:border-[#DFA236] hover:shadow-xl transition-all duration-300"
            >
              <p className="font-inter text-base md:text-lg text-[#6D8299] italic mb-4 md:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-montserrat font-bold text-sm md:text-base text-[#040F2D] uppercase">
                  {testimonial.author}
                </p>
                <p className="font-inter text-xs md:text-sm text-[#6D8299]">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ConsultationFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleVerification = (token: string) => {
    setTurnstileToken(token);
    setIsVerified(true);
    setError(""); // Clear any previous verification errors
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!isVerified) {
      setError("Please complete the security check before submitting.");
      return;
    }

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);

      const companyName = formData.get("company-name")?.toString() || "A Company";
      formData.append("_subject", `New Corporate Inquiry from ${companyName}`);
      formData.append("cf-turnstile-response", turnstileToken);
      
      // Using FormSubmit.co endpoint with the email from our site config
      const response = await fetch(`https://formsubmit.co/${siteConfig.emails.corporate}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.status !== 200) {
        const data = await response.json();
        throw new Error(data.message || "Submission failed. Please try again.");
      }
      
      setSubmitted(true);
      form.reset();
      setIsVerified(false); // Reset verification status for the next submission
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error("Form submission error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="min-h-screen md:snap-start bg-[#040F2D] relative flex flex-col overflow-hidden pb-0">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#DFA236]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="flex-grow w-full flex flex-col">
        <div className="flex-grow w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10 px-6 py-16 lg:py-24">
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#DFA236]/30 bg-[#DFA236]/10 text-[#DFA236] font-montserrat text-xs font-bold uppercase tracking-widest mb-6">
              Let's Collaborate
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-tight mb-6">
              Request a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFA236] to-amber-500">Consultation</span>
            </h2>
            <p className="font-inter text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              Let's discuss how our AI-powered solutions can future-proof your brand's narrative and deliver measurable ROI.
            </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 w-full">
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#DFA236] via-amber-500 to-[#DFA236]" />

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company-name" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200 mb-2">Company Name</label>
                <input type="text" id="company-name" name="company-name" required placeholder="Your Company Inc." className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236]"/>
              </div>
              <div>
                <label htmlFor="email" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200 mb-2">Work Email</label>
                <input type="email" id="email" name="email" required placeholder="you@company.com" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236]"/>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="objective" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200 mb-2">Primary Objective</label>
              <select id="objective" name="objective" required className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236]">
                <option className="text-black" value="">Select an objective...</option>
                <option className="text-black" value="AI-Driven Crisis Management">AI-Driven Crisis Management</option>
                <option className="text-black" value="Automated Content Engines">Automated Content Engines</option>
                <option className="text-black" value="Impact Analytics">Impact Analytics</option>
                <option className="text-black" value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200 mb-2">Project Details</label>
              <textarea id="message" name="message" rows={4} required placeholder="Briefly describe your project or challenge..." className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236] resize-none"></textarea>
            </div>

            <TurnstileWidget onVerify={handleVerification} />

            <button
              type="submit"
              disabled={!isVerified || isSubmitting}
              className="w-full mt-4 py-4 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Brief"}
            </button>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center font-inter text-sm"
              >
                {error}
              </motion.div>
            )}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center font-inter text-sm"
              >
                ✓ Thank you! Your consultation request has been sent.
              </motion.div>
            )}
          </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen md:snap-start w-full flex items-center justify-center relative overflow-hidden px-6 py-16 md:py-24"
    >
      <motion.div
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070"
          alt="Business team collaborating in a modern office"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          loading="eager"
        />
      </motion.div>
      <div 
        className="absolute inset-0 bg-[#040F2D] transition-opacity duration-500 ease-out"
        style={{ opacity: 0.85 }}
      />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-montserrat font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-4 md:mb-6 leading-tight"
        >
          Future-Proof Your Narrative.
        </motion.h1>
        
        <motion.div
          variants={fadeInUp}
          className="overflow-hidden"
        >
          <p
            className="font-inter text-lg md:text-xl lg:text-2xl text-[#F4F4F9] mb-8 md:mb-12 leading-relaxed"
          >
            We combine human creativity with AI efficiency to deliver measurable ROI.
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); scrollToForm(); }}
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-xs md:text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95"
          >
            Request Consultation <ArrowDown size={20} />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}