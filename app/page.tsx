import type React from "react"
import HeroSection from "@/app/components/hero-section"
import CtaBanner from "@/app/components/cta-banner"
import AnimatedSection from "./components/animated-section"
import { CheckCircle, Microscope, Stethoscope, Heart } from "lucide-react"
import { CoursesSlider } from "./components/slider"

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: { title: string; description: string; icon: React.ElementType }) => (
  <div className="flex flex-col items-center p-6 text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-themeBlue/10 hover:border-themeBlue/20">
    <div className="mb-4 rounded-full bg-gradient-to-br from-themeBlue/90 to-themeBlue p-4 text-white">
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
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-themeBlue/10 to-themeBlue/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-themeBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-themeBlue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-themeBlue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prečo si Vybrať SurgiCare?</h2>
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
      </AnimatedSection>
      <CoursesSlider />
      <CtaBanner />
    </>
  )
}
