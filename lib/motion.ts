import type { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

/** Transform-only motion — never hide content with opacity:0 (breaks no-JS / slow JS). */
export const fadeInUp: Variants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: {},
  visible: { transition: { duration: 0.8, ease: EASE } },
}

export const slideInLeft: Variants = {
  hidden: { x: -28 },
  visible: { x: 0, transition: { duration: 0.7, ease: EASE } },
}

export const slideInRight: Variants = {
  hidden: { x: 28 },
  visible: { x: 0, transition: { duration: 0.7, ease: EASE } },
}

export const scaleIn: Variants = {
  hidden: { scale: 0.98 },
  visible: { scale: 1, transition: { duration: 0.6, ease: EASE } },
}

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

export const viewportOnce = { once: true, amount: 0.25 } as const
