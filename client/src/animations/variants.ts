import type { Variants } from 'framer-motion';

// Left fade in
export const slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
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

// Fade in from bottom
export const slideInFromBottom: Variants = {
    hidden: { opacity: 0, y: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: 'easeInOut',
    },
  }),
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

// Fade in opacity
export const fadeInHr: Variants = {
    hidden: { opacity: 0 },
  visible: (delay = 0) => ({ 
    opacity: 0.25, 
    transition: { 
        duration: 1,
        delay,
        ease: 'easeInOut',  
    },
  }),
};

// Fade in opacity timeline dot
export const fadeInTimelineDot: Variants = {
    hidden: { opacity: 0 },
  visible: (delay = 0) => ({ 
    opacity: 1, 
    transition: { 
        duration: 0.5,
        delay,
        ease: 'easeInOut',  
    },
  }),
};

export const fadeInStaggered: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06, // adjust timing here
      duration: 0.5,
      ease: 'easeOut',
    }
  })
};

// Scale up
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
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