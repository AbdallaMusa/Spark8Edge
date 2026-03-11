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

// Mobile-optimized transitions (respects prefers-reduced-motion)
export const MOBILE_TRANSITIONS = {
  FAST: { duration: TIMING.FAST / 2, ease: EASING.EASE_OUT } as Transition,
  NORMAL: { duration: TIMING.FAST, ease: EASING.EASE_OUT } as Transition,
  SLOW: { duration: TIMING.NORMAL, ease: EASING.EASE_OUT } as Transition,
  SPRING_LIGHT: { duration: TIMING.FAST, ease: EASING.EASE_OUT } as Transition,
  FADE_IN_OUT: { duration: TIMING.FAST, ease: EASING.EASE_IN_OUT } as Transition,
} as const;

// Mobile-optimized variants (reduced motion and simpler animations)
export const mobileFadeInUp: Variants = {
  hidden: { y: 15, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: MOBILE_TRANSITIONS.NORMAL,
  },
};

export const mobileFadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: MOBILE_TRANSITIONS.FAST,
  },
};

export const mobileScaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: MOBILE_TRANSITIONS.NORMAL,
  },
};

// Mobile-safe hover animations (reduced intensity for touch devices)
export const mobileButtonHoverAnimation = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: MOBILE_TRANSITIONS.FAST,
};

export const mobileCardHoverAnimation = {
  whileHover: { y: -2, scale: 1.01 },
  transition: MOBILE_TRANSITIONS.FAST,
};

// Utility to check for reduced motion preference (client-side only)
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Utility to get appropriate transition based on device
export const getOptimizedTransition = (): Transition => {
  return shouldReduceMotion() ? MOBILE_TRANSITIONS.FAST : TRANSITIONS.NORMAL;
};

// Utility function for Tailwind transition classes
export const twTransition = (property: string = "all", duration: keyof typeof TIMING = "NORMAL"): string => 
  `transition-${property} duration-${Math.round(TIMING[duration] * 1000)}`;

// Mobile-optimized Tailwind transition classes
export const mobileTwTransition = (property: string = "all"): string => 
  `transition-${property} duration-${Math.round(TIMING.FAST * 1000)}`;
