"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { fadeInUp } from "@/lib/animations";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleVerification = (token: string) => {
    setTurnstileToken(token);
    setIsVerified(true);
    setError("");
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

      const response = await fetch(
        "https://formsubmit.co/subscribe@spark8edge.co.ke",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.message || "Subscription failed. Please try again."
        );
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
      setError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen md:snap-start flex flex-col bg-[#040F2D] py-20">
      <div className="flex-grow w-full bg-[#DFA236] flex items-center justify-center px-6 relative overflow-hidden pt-24 pb-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #040F2D 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />

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
            Receive curated insights on emerging technologies, creative economy
            trends, and exclusive opportunities to grow with Africa's innovation
            ecosystem.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <input
              type="hidden"
              name="_subject"
              value="New Newsletter Subscriber"
            />
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
    </section>
  );
}