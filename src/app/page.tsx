"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, Target, Zap, Users, Award } from "lucide-react";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Home() {
  return (
    <div className="bg-[#040F2D]">
      <Navbar />
      <main>
        <SplitHeroSection />
        <NexusSection />
        <StatsSection />
        <ServicesAccordionSection />
        <MarketGapSection />
        <NewsletterSection />
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
}

function SplitHeroPanel({ side, image, overlayColor, overlayOpacity, title, description, link, linkText, textColor, descColor, btnBg, btnText, btnHoverBg, btnHoverText }: SplitHeroPanelProps) {
  return (
    <div className="relative flex-1 h-auto py-20 md:py-0 md:min-h-full flex items-center justify-center overflow-hidden group">
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div 
        className="absolute inset-0 transition-all duration-500 ease-out" 
        style={{ 
          backgroundColor: overlayColor,
          opacity: overlayOpacity + 0.2 // A bit more opaque to ensure text is readable
        }} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 text-center px-6 py-12 max-w-xl"
      >
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase mb-4 leading-tight" style={{ color: textColor }}>
          {title}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-inter text-lg mb-8 font-semibold" style={{ color: descColor || textColor }}>
            {description}
          </p>
          
          <Link
            href={link}
            className={`inline-flex items-center gap-3 px-8 py-4 font-montserrat font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300 active:scale-95`}
            style={{ backgroundColor: btnBg, color: btnText }}
          >
            {linkText} <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

function NexusSection() {
  return (
    <section className="min-h-screen md:snap-start w-full bg-[#F4F4F9] flex items-center justify-center py-16 md:py-24 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
            Where Talent Meets Opportunity
          </h2>
          <p className="font-inter text-lg md:text-xl text-[#6D8299] max-w-3xl mx-auto leading-relaxed">
            Spark8Edge bridges East Africa's creative ecosystem with global markets. We cultivate exceptional talent through cutting-edge training while delivering enterprise-grade brand solutions powered by artificial intelligence and human creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            variants={fadeInUp}
            className="relative p-10 bg-white rounded-lg border-4 border-transparent transition-all duration-500 overflow-hidden"
          >
            <Sparkles size={48} className="text-[#DFA236] mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">Youth Development</h3>
            <p className="font-inter text-[#6D8299] text-lg leading-relaxed">
              Intensive bootcamps in emerging technologies, creative production, and business strategy designed to transform ambitious youth into industry leaders.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative p-10 bg-white rounded-lg border-4 border-transparent transition-all duration-500 overflow-hidden"
          >
            <Target size={48} className="text-[#040F2D] mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-[#040F2D] uppercase mb-4">Enterprise Solutions</h3>
            <p className="font-inter text-[#6D8299] text-lg leading-relaxed">
              Intelligent PR systems, strategic communications, and curated talent networks that give organizations competitive advantage in the digital age.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering the intersection of African creativity and global technology standards",
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Building bridges between untapped potential and transformative opportunities",
    },
    {
      icon: Sparkles,
      title: "Excellence Driven",
      description: "Delivering world-class training and services that exceed international benchmarks",
    },
  ];

  return (
    <section className="min-h-screen md:snap-start w-full bg-gradient-to-br from-[#040F2D] via-[#1a2847] to-[#040F2D] flex items-center justify-center py-16 md:py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #DFA236 1px, transparent 1px)",
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
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-white uppercase mb-6">
            Our Foundation
          </h2>
          <p className="font-inter text-lg text-[#DFA236] max-w-2xl mx-auto">
            The core principles driving Spark8Edge as we build the future of African talent development
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

function ServicesAccordionSection() {
  const services = [
    {
      title: "AI & Digital Skills Training",
      subtitle: "Kenya Professional Development",
      description: "Master AI tools, video production, content creation, social media marketing, and digital entrepreneurship at our Nairobi innovation hub.",
      keywords: ["AI Training", "Digital Skills", "Kenya Bootcamps"],
      icon: Sparkles,
    },
    {
      title: "AI-Powered PR & Brand Services",
      subtitle: "Strategic Communications",
      description: "Real-time media monitoring, sentiment analysis, reputation management, and data-driven brand positioning for East African businesses.",
      keywords: ["PR Services", "Brand Management", "AI Marketing"],
      icon: Target,
    },
    {
      title: "Vetted Creative Talent Network",
      subtitle: "Pre-Trained Professionals",
      description: "Connect with AI specialists, content creators, video editors, social media managers, and brand strategists ready to deliver results.",
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
        <motion.div
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <div className="inline-block mb-2">
            <Award size={36} className="text-[#DFA236] mx-auto" />
          </div>
          
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-[#040F2D] uppercase mb-3">
            Digital Transformation Services
          </h2>
          <p className="font-inter text-base text-[#6D8299] max-w-3xl mx-auto">
            World-class AI training, strategic brand intelligence, and curated creative talent for Kenya and East Africa
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
      
      <motion.span layout="position" className="block font-inter text-xs uppercase tracking-widest mb-1 text-[#6D8299] font-semibold">
        {service.subtitle}
      </motion.span>
      
      <motion.h3 layout="position" className="font-montserrat font-bold text-lg text-[#040F2D] uppercase tracking-wider mb-2">
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

function MarketGapSection() {
  const gaps = [
    {
      title: "Capability Acceleration",
      problem: "Technology evolves faster than traditional education. Yesterday's skills become obsolete tomorrow.",
      solution: "Agile, industry-aligned training that evolves with markets.",
    },
    {
      title: "Digital Reputation",
      problem: "Brand perception forms instantly online. Reactive PR strategies arrive too late to control narratives.",
      solution: "Proactive AI monitoring and instant response systems.",
    },
    {
      title: "Hidden Potential",
      problem: "Africa's creative brilliance remains invisible to international markets seeking diverse, affordable talent.",
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
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
            Solving Critical Market Challenges
          </h2>
          <p className="font-inter text-lg text-[#6D8299] max-w-2xl mx-auto">
            Our platform addresses the disconnect between talent, training, and market demand
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

function NewsletterSection() {
  const [email, setEmail] = useState(""); // Keep this for the controlled input
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
      setError("Please complete the security check to subscribe.");
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
      formData.append("cf-turnstile-response", turnstileToken);

      const response = await fetch("https://formsubmit.co/subscribe@spark8edge.co.ke", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Subscription failed. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      setEmail("");
      setIsVerified(false);

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
    <section className="min-h-screen md:snap-start flex flex-col bg-[#040F2D] py-20">
      <div className="flex-grow w-full bg-[#DFA236] flex items-center justify-center px-6 relative overflow-hidden pt-24 pb-4">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #040F2D 2px, transparent 2px)", backgroundSize: "60px 60px" }} />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center w-full relative z-10"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#040F2D] uppercase mb-6">
            Stay Connected to Innovation
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-[#040F2D] mb-12 leading-relaxed">
            Receive curated insights on emerging technologies, creative economy trends, and exclusive opportunities to grow with Africa's innovation ecosystem.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
          >
            <input type="hidden" name="_subject" value="New Newsletter Subscriber" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded font-inter text-[#040F2D] border-2 border-[#040F2D] focus:outline-none focus:border-[#040F2D] focus:ring-2 focus:ring-[#040F2D] transition-all"
              />
              <button
                type="submit"
                disabled={!isVerified || isSubmitting}
                className="px-8 py-4 bg-[#040F2D] text-white font-montserrat font-semibold text-sm uppercase tracking-wider rounded hover:bg-white hover:text-[#040F2D] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </div>
            {/* This invisible widget provides spam protection without user interaction. */}
            <TurnstileWidget onVerify={handleVerification} />
          </form>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-inter text-sm"
            >
              {error}
            </motion.div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-inter text-sm"
            >
              ✓ Subscribed successfully!
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </section>
  );
}
