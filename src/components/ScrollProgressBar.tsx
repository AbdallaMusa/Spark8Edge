"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollProgressBar() {
  // Disabled scroll progress bar since snap scrolling is removed
  return null;
}