"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ZoomIn } from "lucide-react"
import AnimatedSection from "./animated-section"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

interface ImageGalleryProps {
  heading: string
  subtitle: string
  images: {
    src: string
    alt: string
    title?: string
  }[]
}

export default function ImageGallery({ heading, subtitle, images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <AnimatedSection className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ZoomIn className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  {image.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">
                        {image.title}
                      </h3>
                    </div>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none">
                <DialogTitle className="sr-only">
                  {image.title || image.alt}
                </DialogTitle>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    sizes="(max-width: 768px) 95vw, 80vw"
                  />
                  <DialogTrigger asChild>
                    <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200">
                      <X className="h-5 w-5 text-gray-700" />
                    </button>
                  </DialogTrigger>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
} 