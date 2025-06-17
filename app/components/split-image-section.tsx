"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "./animated-section"

interface SplitImageSectionProps {
  leftImage: {
    src: string
    alt: string
    heading: string
    buttonText: string
    buttonLink: string
  }
  rightImage: {
    src: string
    alt: string
    heading: string
    buttonText: string
    buttonLink: string
  }
}

export default function SplitImageSection({ leftImage, rightImage }: SplitImageSectionProps) {
  return (
    <AnimatedSection className="w-full mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image Section */}
        <div className="relative h-[400px] md:h-[600px] group">
          <Image
            src={leftImage.src}
            alt={leftImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{leftImage.heading}</h2>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-[#b08968] px-8 py-6 text-base font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href={leftImage.buttonLink}>
                {leftImage.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative h-[400px] md:h-[600px] group">
          <Image
            src={rightImage.src}
            alt={rightImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{rightImage.heading}</h2>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-[#b08968] px-8 py-6 text-base font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href={rightImage.buttonLink}>
                {rightImage.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
} 