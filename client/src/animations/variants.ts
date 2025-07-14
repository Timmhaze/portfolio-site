import type { Variants } from 'framer-motion';

// Left fade in
export const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// Right fade in
export const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: 'easeInOut',
    },
  }),
};

// Fade in from top
export const slideInFromTop: Variants = {
    hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// Fade in opacity
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
  visible: (delay = 0) => ({ 
    opacity: 1, 
    transition: { 
        duration: 1,
        delay,
        ease: 'easeInOut',  
    },
  }),
};

// Scale up
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};