import CtaBanner from "@/app/components/cta-banner"
import AnimatedSection from "@/app/components/animated-section"
import { CheckSquare } from "lucide-react"

const ServiceItem = ({ name, description }: { name: string; description: string }) => (
  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-3">
      <CheckSquare className="h-6 w-6 text-themeBlue mr-3" />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function OurServicesPage() {
  const services = [
    {
      name: "Všeobecná Chirurgia",
      description: "Komplexná starostlivosť pre širokú škálu chirurgických stavov.",
    },
    {
      name: "Laparoskopická Chirurgia",
      description: "Minimálne invazívne zákroky pre rýchlejšie zotavenie.",
    },
    {
      name: "Onkologická Chirurgia",
      description: "Špecializovaná chirurgická liečba pre onkologických pacientov.",
    },
    { name: "Úrazová Chirurgia", description: "Odborná starostlivosť pre urgentné chirurgické potreby." },
    {
      name: "Endokrinná Chirurgia",
      description: "Zákroky týkajúce sa endokrinných žliaz, ako sú štítna žľaza a prištítne telieska.",
    },
    { name: "Cievna Chirurgia", description: "Liečba ochorení cievneho systému." },
  ]

  return (
    <div className="bg-white">
      <AnimatedSection className="py-16 md:py-24 bg-themeGray relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/abstract-medical-blue-waves.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Naše Služby</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Ponúkame komplexnú škálu chirurgických služieb, využívajúc najnovšie pokroky v medicínskej technológii na
            zabezpečenie najlepších možných výsledkov pre našich pacientov.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceItem key={index} name={service.name} description={service.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CtaBanner />
    </div>
  )
}
