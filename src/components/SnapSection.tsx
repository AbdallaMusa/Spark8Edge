"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SnapSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SnapSection({ children, className = "", id }: SnapSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`snap-section flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
}
