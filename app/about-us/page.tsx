import CtaBanner from "@/app/components/cta-banner"
import AnimatedSection from "@/app/components/animated-section"
import Image from "next/image"
import { Users, Award, HeartHandshake } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <AnimatedSection className="py-16 md:py-24 bg-themeGray relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/healing-hands-abstract.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          {" "}
          {/* Added relative z-10 */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">O Nás</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Oddaní excelentnosti v chirurgickej starostlivosti, spájajúc odbornosť súcitným prístupom k blahu pacienta.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Naše Poslanie</h2>
              <p className="text-gray-600 mb-4 text-lg">
                V SurgiCare je naším poslaním poskytovať najvyšší štandard chirurgickej liečby a starostlivosti.
                Zaväzujeme sa využívať pokročilé medicínske technológie a inovatívne chirurgické techniky na zlepšenie
                zdravia a kvality života našich pacientov.
              </p>
              <p className="text-gray-600 text-lg">
                Veríme v prístup zameraný na pacienta, zabezpečujúc, že každý jednotlivec dostane personalizovanú
                pozornosť, jasnú komunikáciu a komplexnú podporu počas celej svojej chirurgickej cesty.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-themeBlue-light">
                  <Users className="h-10 w-10 text-themeBlue mb-2" />
                  <h4 className="font-semibold text-gray-800">Odborný Tím</h4>
                  <p className="text-sm text-gray-600">Certifikovaní chirurgovia a oddaný personál.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-themeBlue-light">
                  <Award className="h-10 w-10 text-themeBlue mb-2" />
                  <h4 className="font-semibold text-gray-800">Kvalitná Starostlivosť</h4>
                  <p className="text-sm text-gray-600">Záväzok k bezpečnosti a vynikajúcim výsledkom.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-themeBlue-light">
                  <HeartHandshake className="h-10 w-10 text-themeBlue mb-2" />
                  <h4 className="font-semibold text-gray-800">Pacient na Prvom Mieste</h4>
                  <p className="text-sm text-gray-600">Súcitný a personalizovaný prístup.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
              <Image
                src="/diverse-medical-team.png"
                alt="Tím SurgiCare"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CtaBanner />
    </div>
  )
}
