"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "./animated-section"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Track scroll progress from when section starts at top to when it ends at top
  })

  // Create a parallax effect for the image.
  // As the section scrolls (scrollYProgress from 0 to 1), move the image up (y from 0 to -100 or a percentage).
  // A positive value would make it move down (slower than scroll).
  // A negative value makes it move up (faster than content, or appearing to recede slower).
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) // Move image up by 20% of its height as section scrolls

  return (
    <AnimatedSection ref={sectionRef} className="w-full py-12 bg-[#ffffff] md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block self-start rounded-full bg-themeGray-dark px-4 py-2 text-sm font-medium text-[#b08968]"
            >
              Odborná Chirurgická Starostlivosť
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              Vedení <span className="brush-stroke">Precíznosťou</span>,
              <br />
              Stvorení Pre Vaše Zdravie
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-lg text-black md:text-xl"
            >
              Zažite prvotriednu chirurgickú odbornosť s pokročilými technikami, personalizovanou starostlivosťou a
              záväzkom k vášmu blahu.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-[200px] sm:w-[300px] ml-[20%] sm:-ml-12"
            >
              <img src="/signature.png" alt="podpis_Farkas" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 sm:min-[400px]:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#b08968] px-8 py-6 text-base font-semibold text-white shadow-lg hover:bg-[#7f5539] transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/contact">
                  Objednať Konzultáciu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-gray-300 px-8 py-6 text-base font-semibold text-gray-700 shadow-sm hover:bg-themeGray hover:border-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/our-services">
                  Zistiť Viac
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative mx-auto my-8 sm:my-0 aspect-[4/5] w-[250px] sm:w-[400px] max-w-md overflow-visible lg:max-w-none"
            style={{ y: imageY }}
          >
            {/* Obrázok */}
            <div className="relative overflow-hidden rounded-4xl shadow-2xl w-full h-full">
              <Image
                src="/hero1.jpg"
                alt="Moderný interiér chirurgickej kliniky"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Vonkajší box hore vpravo */}
            <div className="absolute -top-10 -right-10 w-16 h-16 sm:h-24 w-16 h-16 sm:w-24 rounded-xl bg-[#7f5539]/30 backdrop-blur-md shadow-md" />

            {/* Vonkajší box dolu vľavo */}
            <div className="absolute -bottom-10 -left-10 w-16 h-16 sm:h-24 w-16 h-16 sm:w-24 rounded-xl bg-[#7f5539]/30 backdrop-blur-sm shadow-md" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
