"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  transition?: object
  delay?: number
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedSection({
  children,
  className,
  variants = defaultVariants,
  transition = { duration: 0.6, ease: "easeInOut" },
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: variants.hidden,
        visible: { ...variants.visible, transition: { ...transition, delay } },
      }}
    >
      {children}
    </motion.section>
  )
}
