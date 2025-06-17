import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneOutgoing } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function CtaBanner() {
  return (
    <AnimatedSection className="bg-brown-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ste Pripravení Prekonzultovať Vaše Chirurgické Potreby?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
          Náš tím je tu, aby odpovedal na vaše otázky a previedol vás vašimi možnosťami. Objednajte si konzultáciu ešte
          dnes.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#b08968] px-10 py-6 text-lg font-semibold text-white shadow-lg hover:bg-[#7f5539] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/contact">
              Kontaktujte Nás Teraz
              <PhoneOutgoing className="ml-3 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
