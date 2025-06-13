'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ParallaxSectionProps {
  imageSrc: string;
  heading: string;
  text: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

export function ParallaxSection({
  imageSrc,
  heading,
  text,
  imageAlt = 'Parallax image',
  imagePosition = 'right',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const content = (
    <div className="space-y-6 mt-16">
      <h2 className="text-4xl font-bold tracking-tight">{heading}</h2>
      <p className="text-lg text-muted-foreground">{text}</p>
    </div>
  );

  const image = (
    <motion.div
      style={{ y: isMobile ? 0 : y }}
      className="relative h-[400px] w-full"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  );

  return (
    <div ref={ref} className="relative min-h-[650px] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {imagePosition === 'left' ? (
            <>
              {image}
              {content}
            </>
          ) : (
            <>
              {content}
              {image}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 