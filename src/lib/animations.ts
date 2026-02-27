import { Variants, Transition } from "framer-motion";

// Animation timing tokens (in seconds)
export const TIMING = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
  HERO: 0.6,
  LONG: 1,
  VERY_LONG: 15,
} as const;

// Animation easing tokens
export const EASING = {
  LINEAR: "linear",
  EASE_IN: "easeIn",
  EASE_OUT: "easeOut",
  EASE_IN_OUT: "easeInOut",
  SPRING: [0.22, 1, 0.36, 1] as [number, number, number, number],
} as const;

// Stagger timing
export const STAGGER = {
  CHILDREN: 0.2,
  DELAY: 0.1,
  DENSE: 0.07,
} as const;

// Common transitions
export const TRANSITIONS = {
  FAST: { duration: TIMING.FAST, ease: EASING.EASE_OUT } as Transition,
  NORMAL: { duration: TIMING.NORMAL, ease: EASING.EASE_OUT } as Transition,
  SLOW: { duration: TIMING.SLOW, ease: EASING.EASE_OUT } as Transition,
  HERO: { duration: TIMING.HERO, ease: EASING.EASE_OUT } as Transition,
  LONG: { duration: TIMING.LONG, ease: EASING.EASE_OUT } as Transition,
  SPRING: { duration: TIMING.NORMAL, ease: EASING.SPRING } as Transition,
  FADE_IN_OUT: { duration: TIMING.NORMAL, ease: EASING.EASE_IN_OUT } as Transition,
} as const;

// Common animation variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.CHILDREN,
      delayChildren: STAGGER.DELAY,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: TRANSITIONS.HERO,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: TRANSITIONS.NORMAL,
  },
};

export const slideInRight: Variants = {
  hidden: { x: "100%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: TRANSITIONS.SPRING,
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: TRANSITIONS.NORMAL,
  },
};

// Hero tint overlay transition (used across all pages)
export const heroTintTransition = TRANSITIONS.SLOW;

// Button hover animation
export const buttonHoverAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: TRANSITIONS.FAST,
};

// Card hover animation
export const cardHoverAnimation = {
  whileHover: { y: -4, scale: 1.02 },
  transition: TRANSITIONS.NORMAL,
};

// Utility function for consistent duration values
export const duration = (seconds: number): string => `${seconds}s`;

// Utility function for Tailwind transition classes
export const twTransition = (property: string = "all", duration: keyof typeof TIMING = "NORMAL"): string => 
  `transition-${property} duration-${Math.round(TIMING[duration] * 1000)}`;
