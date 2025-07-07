import type React from "react"
import HeroSection from "@/app/components/hero-section"
import CtaBanner from "@/app/components/cta-banner"
import AnimatedSection from "./components/animated-section"
import { CheckCircle, Microscope, Stethoscope, Heart } from "lucide-react"
import { CoursesSlider } from "./components/slider"
import { ParallaxSection } from "@/components/ParallaxSection"
import SplitImageSection from "./components/split-image-section"
import ImageGallery from "./components/image-gallery"

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: { title: string; description: string; icon: React.ElementType }) => (
  <div className="flex flex-col items-center p-6 text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-themeBlue/10 hover:border-themeBlue/20">
    <div className="mb-4 rounded-full bg-gradient-to-br from-[#d4b59e] to-[#7c5a3c] p-4 text-white">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-900">{description}</p>
  </div>
)

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Chirurgia bez stresu. Presne, rýchlo, ľudsky.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Naša ambulancia spája skúsené ruky s technológiami dneška. Rýchla diagnostika, šetrné zákroky a individuálny prístup bez zbytočného stresu. Chirurgia, ktorá rešpektuje váš čas aj vaše zdravie.
        </p>
      </div>
      <SplitImageSection
        leftImage={{
          src: "/third.jpg",
          alt: "Chirurgická starostlivosť",
          heading: "Odborná Starostlivosť",
          buttonText: "Zistiť Viac",
          buttonLink: "/our-services"
        }}
        rightImage={{
          src: "/second.jpg",
          alt: "Kontaktujte nás",
          heading: "Objednajte Sa",
          buttonText: "Kontaktujte Nás",
          buttonLink: "/contact"
        }}
      />
      <ImageGallery
        heading="Kde Vás ošetríme"
        subtitle="Pozrite si naše moderné zariadenie a naše moderné priestory, kde sa staráme o vaše zdravie s maximálnou starostlivosťou a profesionalitou."
        images={[
          {
            src: "/okna2.png",
            alt: "Moderné chirurgické zariadenie",
            title: "Chirurgická Sála"
          },
          {
            src: "/sedacky2.jpg",
            alt: "Náš tím chirurgov",
            title: "Odborný Tím"
          },
          {
            src: "/dvere2.jpg",
            alt: "Šetrné chirurgické zákroky",
            title: "Šetrná Chirurgia"
          }
        ]}
      />
      <section className="py-16 md:py-24 bg-[#b08968]/10 relative overflow-hidden">
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prečo si Vybrať práve Nás?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-900">
              Sme odhodlaní poskytovať výnimočné chirurgické výsledky prostredníctvom pokročilých technológií a súcitnej
              starostlivosti.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Pokročilá Technológia"
              description="Využívanie najnovšieho chirurgického vybavenia a techník pre optimálne výsledky."
              icon={Microscope}
            />
            <FeatureCard
              title="Skúsení Chirurgovia"
              description="Náš tím tvoria vysoko kvalifikovaní a certifikovaní chirurgovia."
              icon={Stethoscope}
            />
            <FeatureCard
              title="Personalizovaná Starostlivosť"
              description="Liečebné plány prispôsobené vašim jedinečným potrebám a zabezpečujúce pohodlie."
              icon={Heart}
            />
          </div>
        </div>
      </section>
      <CoursesSlider />
      <CtaBanner />
    </>
  )
}
