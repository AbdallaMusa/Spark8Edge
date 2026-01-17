"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowDown, Users, Briefcase, Target, TrendingUp, Clock, MapPin, CheckCircle2, Rocket } from "lucide-react";
import { useState, FormEvent } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { TurnstileWidget } from "@/components/TurnstileWidget";

export default function YouthHub() {
  return (
    <div className="bg-[#040F2D]">
      <Navbar />
      <main>
        <HeroSection />
        <CurriculumSection />
        <MethodologySection />
        <TestimonialsSection />
        <IntakeFormSection />
      </main>
    </div>
  );
}

function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen md:snap-start flex items-center justify-center relative overflow-hidden px-6 py-16 md:py-24"
    >
      <Image
        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070"
        alt="Students collaborating in a modern learning environment"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#040F2D] opacity-80" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-montserrat font-extrabold text-5xl md:text-7xl text-white uppercase mb-6 leading-tight"
        >
          Unleash Your Creative Potential.
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="font-inter text-xl md:text-2xl text-[#F4F4F9] mb-12 leading-relaxed"
        >
          Join Nairobi's elite offline training ground. Master AI, Video, and Design.
        </motion.p>

        <motion.button
          variants={fadeInUp}
          onClick={scrollToForm}
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#DFA236] text-[#040F2D] font-montserrat font-semibold text-sm uppercase tracking-wider rounded hover:bg-white transition-all duration-300 active:scale-95"
        >
          Apply For Intake <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}

const TECHNOLOGIES_DATA = [
  { name: "DaVinci Resolve", category: "Video Production", description: "Professional color grading, editing, and visual effects" },
  { name: "Generative AI", category: "Prompt Engineering", description: "Mastering LLMs (ChatGPT, Claude) for workflow automation" },
  { name: "Figma", category: "Product Design", description: "End-to-end UI/UX design and interactive prototyping" },
  { name: "Next.js & React", category: "Web Development", description: "Building modern, high-performance digital platforms" },
  { name: "Python", category: "AI & Data", description: "Scripting for automation, data analysis, and AI agents" },
  { name: "Adobe Creative Cloud", category: "Visual Design", description: "Industry-standard suite for graphic design and content" },
  { name: "Drone Operations", category: "Cinematography", description: "Aerial photography and videography for storytelling" },
  { name: "Social Media Strategy", category: "Digital Marketing", description: "Data-driven content distribution and audience growth" },
  { name: "Brand Storytelling", category: "Content Strategy", description: "Crafting compelling narratives for corporate identity" },
  { name: "Data Analytics", category: "Business Intelligence", description: "Turning raw data into actionable strategic insights" },
  { name: "Cloud Infrastructure", category: "DevOps", description: "Scalable deployment using AWS and containerization" },
  { name: "Agile Management", category: "Operations", description: "Modern project management methodologies for teams" }
] as const;

function CurriculumSection() {
  return (
    <section className="min-h-screen md:snap-start bg-[#F4F4F9] flex items-center justify-center px-6 py-16 md:py-24 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, #040F2D 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-montserrat font-extrabold text-4xl md:text-6xl text-[#040F2D] uppercase mb-6">
            Choose Your Weapon.
          </h2>
          <p className="font-inter text-lg text-[#6D8299] max-w-3xl mx-auto">
             Master the tools that are redefining the creative industry. From AI agents to cinematic color grading.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECHNOLOGIES_DATA.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-[#DFA236] hover:shadow-md transition-all group"
            >
              <div className="font-montserrat font-bold text-[#040F2D] group-hover:text-[#DFA236] transition-colors text-sm md:text-base">{tech.name}</div>
              <div className="text-xs text-[#6D8299] mt-1 font-inter">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function MethodologySection() {
  const features = [
    {
      icon: Clock,
      title: "Hands-On Learning",
      description: "12-week intensive program combining theory with practical application in real-world scenarios.",
    },
    {
      icon: Users,
      title: "In-Person Training",
      description: "Physical studio environment in Westlands with collaborative workspace and peer learning.",
    },
    {
      icon: Briefcase,
      title: "Project-Based Curriculum",
      description: "Build a professional portfolio through structured projects and assignments.",
    },
    {
      icon: Target,
      title: "Career Development",
      description: "Industry-standard skills training and portfolio preparation for creative careers.",
    }
  ];

  return (
    <section className="min-h-screen md:snap-start relative bg-white overflow-hidden flex items-center justify-center px-4 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(223,162,54,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-4 w-full"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <motion.span
            className="inline-block px-4 py-1 bg-[#DFA236]/10 border-2 border-[#DFA236] rounded-full text-[#DFA236] font-montserrat text-xs font-bold uppercase tracking-widest mb-3"
          >
            Our Approach
          </motion.span>
          
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-[#040F2D] uppercase mb-3 leading-tight">
            Immersive{" "}
            <span className="relative inline-block">
              <span className="text-[#DFA236]">Training</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
              >
                <motion.path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="#DFA236"
                  strokeWidth="3"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#DFA236] rounded-xl p-5 cursor-pointer transition-all duration-500 overflow-hidden"
              >
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-[#DFA236]/10 to-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DFA236] to-amber-600 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow"
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>

                  <h3 className="font-montserrat font-bold text-base text-[#040F2D] mb-2 uppercase group-hover:text-[#DFA236] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function TestimonialsSection() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Industry-Ready Portfolio",
      description: "Complete 3-5 professional projects during the program. Build real work that demonstrates your capabilities to employers and clients.",
      metric: "Portfolio Projects",
      value: "3-5 Real Projects"
    },
    {
      icon: Rocket,
      title: "Career Launch Support",
      description: "Get guidance on freelancing, job applications, and client acquisition. Learn to position yourself in the creative market.",
      metric: "Career Skills",
      value: "Market Ready"
    },
    {
      icon: TrendingUp,
      title: "Continuous Skill Development",
      description: "Master tools and workflows used by top creative professionals. Stay current with industry-standard technologies and techniques.",
      metric: "Skills Training",
      value: "Industry Standard"
    }
  ];

  return (
    <section className="min-h-screen md:snap-start relative bg-gradient-to-b from-[#040F2D] to-[#0a1847] overflow-hidden flex items-center justify-center px-4 py-16 md:py-24">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#DFA236]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-black text-5xl md:text-7xl text-white uppercase mb-8 leading-tight">
            Program Benefits &{" "}
            <span className="bg-gradient-to-r from-[#DFA236] via-amber-300 to-cyan-400 bg-clip-text text-transparent">
              Success Framework
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: MapPin, text: "Westlands Studio", sub: "Prime location" },
              { icon: Users, text: "50+ Creatives", sub: "Your network" },
              { icon: Clock, text: "Mon-Sat 9AM-6PM", sub: "Full immersion" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  variants={fadeInUp}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-[#DFA236] transition-all duration-300"
                >
                  <Icon className="text-[#DFA236]" size={20} />
                  <div className="text-left">
                    <div className="text-white font-montserrat font-bold text-sm">{item.text}</div>
                    <div className="text-gray-400 font-inter text-xs">{item.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DFA236] via-amber-400 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative bg-[#0a1847] border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#DFA236] to-amber-600 flex items-center justify-center shadow-lg"
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    
                    <div className="text-right">
                      <div className="text-gray-400 font-inter text-xs uppercase tracking-wider">{benefit.metric}</div>
                      <div className="text-[#DFA236] font-montserrat font-bold text-sm">{benefit.value}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-montserrat font-bold text-xl uppercase mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="text-green-400" size={24} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function IntakeFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("+254");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const sortedCountries = [
    { code: "+61", name: "Australia", flag: "🇦🇺" },
    { code: "+55", name: "Brazil", flag: "🇧🇷" },
    { code: "+1", name: "Canada", flag: "🇨🇦" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+20", name: "Egypt", flag: "🇪🇬" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+233", name: "Ghana", flag: "🇬🇭" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+254", name: "Kenya", flag: "🇰🇪" },
    { code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { code: "+234", name: "Nigeria", flag: "🇳🇬" },
    { code: "+250", name: "Rwanda", flag: "🇷🇼" },
    { code: "+27", name: "South Africa", flag: "🇿🇦" },
    { code: "+255", name: "Tanzania", flag: "🇹🇿" },
    { code: "+971", name: "UAE", flag: "🇦🇪" },
    { code: "+256", name: "Uganda", flag: "🇺🇬" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const countryPhoneData: Record<string, { digits: number; placeholder: string; pattern: string }> = {
    "+1": { digits: 10, placeholder: "2025551234", pattern: "[0-9]{10}" },
    "+7": { digits: 10, placeholder: "9123456789", pattern: "[0-9]{10}" },
    "+20": { digits: 10, placeholder: "1001234567", pattern: "[0-9]{10}" },
    "+27": { digits: 9, placeholder: "821234567", pattern: "[0-9]{9}" },
    "+30": { digits: 10, placeholder: "6912345678", pattern: "[0-9]{10}" },
    "+31": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+32": { digits: 9, placeholder: "470123456", pattern: "[0-9]{9}" },
    "+33": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+34": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+36": { digits: 9, placeholder: "201234567", pattern: "[0-9]{9}" },
    "+39": { digits: 10, placeholder: "3123456789", pattern: "[0-9]{10}" },
    "+40": { digits: 10, placeholder: "712345678", pattern: "[0-9]{9,10}" },
    "+41": { digits: 9, placeholder: "781234567", pattern: "[0-9]{9}" },
    "+43": { digits: 10, placeholder: "6641234567", pattern: "[0-9]{10,11}" },
    "+44": { digits: 10, placeholder: "7400123456", pattern: "[0-9]{10}" },
    "+45": { digits: 8, placeholder: "20123456", pattern: "[0-9]{8}" },
    "+46": { digits: 9, placeholder: "701234567", pattern: "[0-9]{9}" },
    "+47": { digits: 8, placeholder: "40612345", pattern: "[0-9]{8}" },
    "+48": { digits: 9, placeholder: "512345678", pattern: "[0-9]{9}" },
    "+49": { digits: 11, placeholder: "15123456789", pattern: "[0-9]{10,11}" },
    "+51": { digits: 9, placeholder: "987654321", pattern: "[0-9]{9}" },
    "+52": { digits: 10, placeholder: "5512345678", pattern: "[0-9]{10}" },
    "+53": { digits: 8, placeholder: "51234567", pattern: "[0-9]{8}" },
    "+54": { digits: 10, placeholder: "91123456789", pattern: "[0-9]{10}" },
    "+55": { digits: 11, placeholder: "11987654321", pattern: "[0-9]{10,11}" },
    "+56": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+57": { digits: 10, placeholder: "3001234567", pattern: "[0-9]{10}" },
    "+58": { digits: 10, placeholder: "4121234567", pattern: "[0-9]{10}" },
    "+60": { digits: 10, placeholder: "123456789", pattern: "[0-9]{9,10}" },
    "+61": { digits: 9, placeholder: "412345678", pattern: "[0-9]{9}" },
    "+62": { digits: 11, placeholder: "81234567890", pattern: "[0-9]{10,12}" },
    "+63": { digits: 10, placeholder: "9171234567", pattern: "[0-9]{10}" },
    "+64": { digits: 9, placeholder: "211234567", pattern: "[0-9]{8,10}" },
    "+65": { digits: 8, placeholder: "81234567", pattern: "[0-9]{8}" },
    "+66": { digits: 9, placeholder: "812345678", pattern: "[0-9]{9}" },
    "+81": { digits: 10, placeholder: "9012345678", pattern: "[0-9]{10}" },
    "+82": { digits: 10, placeholder: "1012345678", pattern: "[0-9]{10}" },
    "+84": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9,10}" },
    "+86": { digits: 11, placeholder: "13812345678", pattern: "[0-9]{11}" },
    "+90": { digits: 10, placeholder: "5321234567", pattern: "[0-9]{10}" },
    "+91": { digits: 10, placeholder: "9876543210", pattern: "[0-9]{10}" },
    "+92": { digits: 10, placeholder: "3001234567", pattern: "[0-9]{10}" },
    "+93": { digits: 9, placeholder: "701234567", pattern: "[0-9]{9}" },
    "+94": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+95": { digits: 9, placeholder: "912345678", pattern: "[0-9]{8,10}" },
    "+98": { digits: 10, placeholder: "9121234567", pattern: "[0-9]{10}" },
    "+212": { digits: 9, placeholder: "612345678", pattern: "[0-9]{9}" },
    "+213": { digits: 9, placeholder: "551234567", pattern: "[0-9]{9}" },
    "+216": { digits: 8, placeholder: "20123456", pattern: "[0-9]{8}" },
    "+218": { digits: 10, placeholder: "912345678", pattern: "[0-9]{9,10}" },
    "+220": { digits: 7, placeholder: "3012345", pattern: "[0-9]{7}" },
    "+221": { digits: 9, placeholder: "701234567", pattern: "[0-9]{9}" },
    "+222": { digits: 8, placeholder: "22123456", pattern: "[0-9]{8}" },
    "+223": { digits: 8, placeholder: "65123456", pattern: "[0-9]{8}" },
    "+224": { digits: 9, placeholder: "601123456", pattern: "[0-9]{9}" },
    "+225": { digits: 10, placeholder: "0102030405", pattern: "[0-9]{10}" },
    "+226": { digits: 8, placeholder: "70123456", pattern: "[0-9]{8}" },
    "+227": { digits: 8, placeholder: "93123456", pattern: "[0-9]{8}" },
    "+228": { digits: 8, placeholder: "90123456", pattern: "[0-9]{8}" },
    "+229": { digits: 8, placeholder: "90123456", pattern: "[0-9]{8}" },
    "+230": { digits: 8, placeholder: "52512345", pattern: "[0-9]{8}" },
    "+231": { digits: 7, placeholder: "770123456", pattern: "[0-9]{7,9}" },
    "+232": { digits: 8, placeholder: "76123456", pattern: "[0-9]{8}" },
    "+233": { digits: 9, placeholder: "201234567", pattern: "[0-9]{9}" },
    "+234": { digits: 10, placeholder: "8021234567", pattern: "[0-9]{10}" },
    "+235": { digits: 8, placeholder: "63012345", pattern: "[0-9]{8}" },
    "+236": { digits: 8, placeholder: "70012345", pattern: "[0-9]{8}" },
    "+237": { digits: 9, placeholder: "671234567", pattern: "[0-9]{9}" },
    "+238": { digits: 7, placeholder: "9911234", pattern: "[0-9]{7}" },
    "+239": { digits: 7, placeholder: "9812345", pattern: "[0-9]{7}" },
    "+240": { digits: 9, placeholder: "222123456", pattern: "[0-9]{9}" },
    "+241": { digits: 7, placeholder: "6012345", pattern: "[0-9]{7}" },
    "+242": { digits: 9, placeholder: "061234567", pattern: "[0-9]{9}" },
    "+243": { digits: 9, placeholder: "991234567", pattern: "[0-9]{9}" },
    "+244": { digits: 9, placeholder: "923123456", pattern: "[0-9]{9}" },
    "+245": { digits: 7, placeholder: "5551234", pattern: "[0-9]{7}" },
    "+246": { digits: 7, placeholder: "2501234", pattern: "[0-9]{7}" },
    "+248": { digits: 7, placeholder: "2512345", pattern: "[0-9]{7}" },
    "+249": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+250": { digits: 9, placeholder: "720123456", pattern: "[0-9]{9}" },
    "+251": { digits: 9, placeholder: "911234567", pattern: "[0-9]{9}" },
    "+252": { digits: 8, placeholder: "71123456", pattern: "[0-9]{8}" },
    "+253": { digits: 8, placeholder: "77123456", pattern: "[0-9]{8}" },
    "+254": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+255": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+256": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+257": { digits: 8, placeholder: "79123456", pattern: "[0-9]{8}" },
    "+258": { digits: 9, placeholder: "821234567", pattern: "[0-9]{9}" },
    "+260": { digits: 9, placeholder: "955123456", pattern: "[0-9]{9}" },
    "+261": { digits: 9, placeholder: "321234567", pattern: "[0-9]{9}" },
    "+262": { digits: 9, placeholder: "692123456", pattern: "[0-9]{9}" },
    "+263": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+264": { digits: 9, placeholder: "811234567", pattern: "[0-9]{9}" },
    "+265": { digits: 9, placeholder: "991234567", pattern: "[0-9]{9}" },
    "+266": { digits: 8, placeholder: "50123456", pattern: "[0-9]{8}" },
    "+267": { digits: 8, placeholder: "71123456", pattern: "[0-9]{8}" },
    "+268": { digits: 8, placeholder: "76123456", pattern: "[0-9]{8}" },
    "+269": { digits: 7, placeholder: "3212345", pattern: "[0-9]{7}" },
    "+290": { digits: 4, placeholder: "1234", pattern: "[0-9]{4}" },
    "+291": { digits: 7, placeholder: "7123456", pattern: "[0-9]{7}" },
    "+297": { digits: 7, placeholder: "5601234", pattern: "[0-9]{7}" },
    "+298": { digits: 6, placeholder: "211234", pattern: "[0-9]{6}" },
    "+299": { digits: 6, placeholder: "221234", pattern: "[0-9]{6}" },
    "+350": { digits: 8, placeholder: "57123456", pattern: "[0-9]{8}" },
    "+351": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+352": { digits: 9, placeholder: "628123456", pattern: "[0-9]{9}" },
    "+353": { digits: 9, placeholder: "851234567", pattern: "[0-9]{9}" },
    "+354": { digits: 7, placeholder: "6111234", pattern: "[0-9]{7}" },
    "+355": { digits: 9, placeholder: "672123456", pattern: "[0-9]{9}" },
    "+356": { digits: 8, placeholder: "79123456", pattern: "[0-9]{8}" },
    "+357": { digits: 8, placeholder: "96123456", pattern: "[0-9]{8}" },
    "+358": { digits: 10, placeholder: "501234567", pattern: "[0-9]{9,10}" },
    "+359": { digits: 9, placeholder: "48123456", pattern: "[0-9]{9}" },
    "+370": { digits: 8, placeholder: "61234567", pattern: "[0-9]{8}" },
    "+371": { digits: 8, placeholder: "21234567", pattern: "[0-9]{8}" },
    "+372": { digits: 8, placeholder: "51234567", pattern: "[0-9]{7,8}" },
    "+373": { digits: 8, placeholder: "62123456", pattern: "[0-9]{8}" },
    "+374": { digits: 8, placeholder: "77123456", pattern: "[0-9]{8}" },
    "+375": { digits: 9, placeholder: "291234567", pattern: "[0-9]{9}" },
    "+376": { digits: 6, placeholder: "312345", pattern: "[0-9]{6}" },
    "+377": { digits: 8, placeholder: "61234567", pattern: "[0-9]{8}" },
    "+378": { digits: 10, placeholder: "66661212", pattern: "[0-9]{8,10}" },
    "+380": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+381": { digits: 9, placeholder: "601234567", pattern: "[0-9]{8,9}" },
    "+382": { digits: 8, placeholder: "67622901", pattern: "[0-9]{8}" },
    "+383": { digits: 8, placeholder: "43201234", pattern: "[0-9]{8}" },
    "+385": { digits: 9, placeholder: "921234567", pattern: "[0-9]{9}" },
    "+386": { digits: 8, placeholder: "31234567", pattern: "[0-9]{8}" },
    "+387": { digits: 8, placeholder: "61123456", pattern: "[0-9]{8}" },
    "+389": { digits: 8, placeholder: "72123456", pattern: "[0-9]{8}" },
    "+420": { digits: 9, placeholder: "601123456", pattern: "[0-9]{9}" },
    "+421": { digits: 9, placeholder: "912123456", pattern: "[0-9]{9}" },
    "+423": { digits: 7, placeholder: "6601234", pattern: "[0-9]{7}" },
    "+500": { digits: 5, placeholder: "51234", pattern: "[0-9]{5}" },
    "+501": { digits: 7, placeholder: "6221234", pattern: "[0-9]{7}" },
    "+502": { digits: 8, placeholder: "51234567", pattern: "[0-9]{8}" },
    "+503": { digits: 8, placeholder: "70123456", pattern: "[0-9]{8}" },
    "+504": { digits: 8, placeholder: "91234567", pattern: "[0-9]{8}" },
    "+505": { digits: 8, placeholder: "81234567", pattern: "[0-9]{8}" },
    "+506": { digits: 8, placeholder: "83123456", pattern: "[0-9]{8}" },
    "+507": { digits: 8, placeholder: "61234567", pattern: "[0-9]{8}" },
    "+508": { digits: 6, placeholder: "551234", pattern: "[0-9]{6}" },
    "+509": { digits: 8, placeholder: "34101234", pattern: "[0-9]{8}" },
    "+590": { digits: 9, placeholder: "690001234", pattern: "[0-9]{9}" },
    "+591": { digits: 8, placeholder: "71234567", pattern: "[0-9]{8}" },
    "+592": { digits: 7, placeholder: "6091234", pattern: "[0-9]{7}" },
    "+593": { digits: 9, placeholder: "991234567", pattern: "[0-9]{9}" },
    "+594": { digits: 9, placeholder: "694201234", pattern: "[0-9]{9}" },
    "+595": { digits: 9, placeholder: "961456789", pattern: "[0-9]{9}" },
    "+596": { digits: 9, placeholder: "696201234", pattern: "[0-9]{9}" },
    "+597": { digits: 7, placeholder: "7412345", pattern: "[0-9]{7}" },
    "+598": { digits: 8, placeholder: "94231234", pattern: "[0-9]{8}" },
    "+599": { digits: 7, placeholder: "9181234", pattern: "[0-9]{7}" },
    "+670": { digits: 8, placeholder: "77212345", pattern: "[0-9]{8}" },
    "+672": { digits: 6, placeholder: "221234", pattern: "[0-9]{6}" },
    "+673": { digits: 7, placeholder: "7123456", pattern: "[0-9]{7}" },
    "+674": { digits: 7, placeholder: "5551234", pattern: "[0-9]{7}" },
    "+675": { digits: 8, placeholder: "70123456", pattern: "[0-9]{8}" },
    "+676": { digits: 5, placeholder: "77123", pattern: "[0-9]{5}" },
    "+677": { digits: 7, placeholder: "7421234", pattern: "[0-9]{7}" },
    "+678": { digits: 7, placeholder: "5912345", pattern: "[0-9]{7}" },
    "+679": { digits: 7, placeholder: "7012345", pattern: "[0-9]{7}" },
    "+680": { digits: 7, placeholder: "6201234", pattern: "[0-9]{7}" },
    "+681": { digits: 6, placeholder: "720123", pattern: "[0-9]{6}" },
    "+682": { digits: 5, placeholder: "71234", pattern: "[0-9]{5}" },
    "+683": { digits: 4, placeholder: "7290", pattern: "[0-9]{4}" },
    "+685": { digits: 7, placeholder: "7212345", pattern: "[0-9]{7}" },
    "+686": { digits: 8, placeholder: "72001234", pattern: "[0-9]{8}" },
    "+687": { digits: 6, placeholder: "751234", pattern: "[0-9]{6}" },
    "+688": { digits: 5, placeholder: "90123", pattern: "[0-9]{5}" },
    "+689": { digits: 8, placeholder: "87123456", pattern: "[0-9]{8}" },
    "+690": { digits: 4, placeholder: "7290", pattern: "[0-9]{4}" },
    "+691": { digits: 7, placeholder: "3501234", pattern: "[0-9]{7}" },
    "+692": { digits: 7, placeholder: "2351234", pattern: "[0-9]{7}" },
    "+850": { digits: 10, placeholder: "1921234567", pattern: "[0-9]{10}" },
    "+852": { digits: 8, placeholder: "51234567", pattern: "[0-9]{8}" },
    "+853": { digits: 8, placeholder: "66123456", pattern: "[0-9]{8}" },
    "+855": { digits: 9, placeholder: "912345678", pattern: "[0-9]{8,9}" },
    "+856": { digits: 10, placeholder: "2023123456", pattern: "[0-9]{9,10}" },
    "+880": { digits: 10, placeholder: "1812345678", pattern: "[0-9]{10}" },
    "+886": { digits: 9, placeholder: "912345678", pattern: "[0-9]{9}" },
    "+960": { digits: 7, placeholder: "7712345", pattern: "[0-9]{7}" },
    "+961": { digits: 8, placeholder: "71123456", pattern: "[0-9]{7,8}" },
    "+962": { digits: 9, placeholder: "790123456", pattern: "[0-9]{9}" },
    "+963": { digits: 9, placeholder: "944567890", pattern: "[0-9]{9}" },
    "+964": { digits: 10, placeholder: "7912345678", pattern: "[0-9]{10}" },
    "+965": { digits: 8, placeholder: "50012345", pattern: "[0-9]{8}" },
    "+966": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+967": { digits: 9, placeholder: "712345678", pattern: "[0-9]{9}" },
    "+968": { digits: 8, placeholder: "92123456", pattern: "[0-9]{8}" },
    "+970": { digits: 9, placeholder: "599123456", pattern: "[0-9]{9}" },
    "+971": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+972": { digits: 9, placeholder: "501234567", pattern: "[0-9]{9}" },
    "+973": { digits: 8, placeholder: "36001234", pattern: "[0-9]{8}" },
    "+974": { digits: 8, placeholder: "33123456", pattern: "[0-9]{8}" },
    "+975": { digits: 8, placeholder: "17123456", pattern: "[0-9]{8}" },
    "+976": { digits: 8, placeholder: "88123456", pattern: "[0-9]{8}" },
    "+977": { digits: 10, placeholder: "9841234567", pattern: "[0-9]{10}" },
    "+992": { digits: 9, placeholder: "917123456", pattern: "[0-9]{9}" },
    "+993": { digits: 8, placeholder: "65123456", pattern: "[0-9]{8}" },
    "+994": { digits: 9, placeholder: "401234567", pattern: "[0-9]{9}" },
    "+995": { digits: 9, placeholder: "555123456", pattern: "[0-9]{9}" },
    "+996": { digits: 9, placeholder: "700123456", pattern: "[0-9]{9}" },
    "+998": { digits: 9, placeholder: "901234567", pattern: "[0-9]{9}" },
  };

  const currentCountryData = countryPhoneData[selectedCountry] || { digits: 10, placeholder: "1234567890", pattern: "[0-9]{10}" };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setPhoneNumber("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= currentCountryData.digits) {
      setPhoneNumber(value);
    }
  };

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

      const applicantName = formData.get("name")?.toString() || "An Applicant";
      formData.append("_subject", `New Youth Hub Application from ${applicantName}`);

      formData.set("whatsapp", `${selectedCountry}${phoneNumber}`);
      formData.append("cf-turnstile-response", turnstileToken);

      const response = await fetch("https://formsubmit.co/youth@spark8edge.co.ke", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Submission failed. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      setPhoneNumber("");
      setIsVerified(false);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Form submission error:", err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
    }
    setIsSubmitting(false);
  };

  return (
    <section id="application-form" className="min-h-screen md:snap-start bg-[#040F2D] relative flex flex-col overflow-hidden pb-0">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#DFA236]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Scrollable Container */}
      <div className="flex-grow w-full flex flex-col">
          
          {/* Main Content Area */}
          <div className="flex-grow flex items-center justify-center px-6 py-16 lg:py-24 relative z-10">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Copy & Context */}
              <div className="lg:col-span-5 text-center lg:text-left space-y-8">
                <motion.div
                  variants={fadeInUp}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#DFA236]/30 bg-[#DFA236]/10 text-[#DFA236] font-montserrat text-xs font-bold uppercase tracking-widest mb-6">
                    Join The Network
                  </span>
                  <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-tight mb-6">
                    Start Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFA236] to-amber-500">Journey</span>
                  </h2>
                  <p className="font-inter text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Ready to master your craft? Apply now to join our next cohort of creative innovators and future leaders.
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  className="hidden lg:flex flex-col gap-6 pt-4"
                >
                  {[
                    { title: "Limited Spots", desc: "Small cohorts for personalized mentorship" },
                    { title: "Portfolio Based", desc: "Focus on practical, real-world output" },
                    { title: "Industry Network", desc: "Direct access to hiring partners" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <CheckCircle2 className="text-[#DFA236]" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-montserrat font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                        <p className="text-gray-400 font-inter text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7 w-full">
                <motion.form
                  variants={fadeInUp}
                  onSubmit={handleSubmit}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#DFA236] via-amber-500 to-[#DFA236]" />
                  
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        pattern="[A-Za-z\s]+"
                        title="Please enter only letters and spaces"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="whatsapp" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200">
                        WhatsApp Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          required
                          className="w-24 px-2 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236]"
                        >
                          {sortedCountries.map((country) => (
                            <option key={country.name} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          required
                          pattern={currentCountryData.pattern}
                          maxLength={currentCountryData.digits}
                          title={`Please enter exactly ${currentCountryData.digits} digits`}
                          placeholder={currentCountryData.placeholder}
                          className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236] transition-all"
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1 font-inter">
                        Enter {currentCountryData.digits} digits for {selectedCountry}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="discipline" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200">
                        Select Discipline
                      </label>
                      <select
                        id="discipline"
                        name="discipline"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236]"
                      >
                        <option className="text-black" value="">Choose one</option>
                        <option className="text-black" value="Visual Storytelling">Visual Storytelling</option>
                        <option className="text-black" value="Prompt Engineering">Prompt Engineering</option>
                        <option className="text-black" value="Product Design">Product Design</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="portfolio" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200">
                        Portfolio Link <span className="text-gray-500 font-inter text-xs normal-case">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        placeholder="Link to your Google Drive, Behance, or Socials"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-montserrat font-bold text-xs uppercase tracking-wider text-gray-200">
                        Why You?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about your career goals in 2 sentences"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg font-inter text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-[#DFA236] focus:ring-1 focus:ring-[#DFA236] resize-none"
                      />
                    </div>
                  </div>

                  <TurnstileWidget onVerify={handleVerification} />

                  <button
                    type="submit"
                    disabled={!isVerified || isSubmitting}
                    
                    className={`w-full mt-4 py-4 bg-[#DFA236] text-[#040F2D] font-montserrat font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
              {isSubmitting ? "Submitting..." : "Submit Application"}
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
                      ✓ Application submitted successfully!
                    </motion.div>
                  )}
                </motion.form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full border-t border-white/5 bg-[#040F2D] relative z-20">
            <Footer />
          </div>
      </div>
    </section>
  );
}