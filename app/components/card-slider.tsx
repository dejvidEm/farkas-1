"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardItem {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface CardSliderProps {
  title: string;
  description: string;
  cards: CardItem[];
  linkText?: string;
  linkHref?: string;
}

export function CardSlider({ title, description, cards, linkText = "Dozvedieť sa viac", linkHref = "/services" }: CardSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-20 md:py-32 bg-background dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-12"
        >
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground dark:text-slate-300 max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex gap-3 self-start md:self-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/70 dark:border-slate-700 dark:hover:bg-slate-700"
              onClick={scrollPrev}
              aria-label="Predchádzajúci"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/70 dark:border-slate-700 dark:hover:bg-slate-700"
              onClick={scrollNext}
              aria-label="Ďalší"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_31.33%] xl:flex-[0_0_32%] min-w-0"
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 dark:from-slate-900 dark:to-slate-800/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={225}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <CardContent className="flex-grow flex flex-col p-6">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-slate-300 mb-4 flex-grow">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`size-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-primary dark:bg-sky-400 scale-125" : "bg-muted-foreground/30 dark:bg-slate-600"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Prejsť na snímku ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 