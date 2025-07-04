import CtaBanner from "@/app/components/cta-banner"
import { ParallaxSection } from "@/components/ParallaxSection";
import { CheckSquare } from "lucide-react"

const ServiceItem = ({ name, description }: { name: string; description: string }) => (
  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow max-w-sm w-full">
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
      name: "Všeobecná chirurgia",
      description: "Komplexná starostlivosť pre širokú škálu chirurgických stavov.",
    },
    {
      name: "Laparoskopická chirurgia",
      description: "Minimálne invazívne zákroky pre rýchlejšie zotavenie.",
    },
    {
      name: "Estetická medicína",
      description: "Špecializovaná starostlivosť pre prirodzenú krásu a vylepšenie vzhľadu.",
    },
    {
      name: "Úrazová Chirurgia",
      description: "Odborná a rýchla starostlivosť pri akútnych úrazoch, zlomeninách a iných urgentných chirurgických stavoch."
    },
    {
      name: "Chirurgické ošetrenie chronických rán",
      description: "Komplexná liečba komplikovaných a pretrvávajúcich rán.",
    }
  ]

  return (
    <div className="bg-white">
      <section className="py-16 md:py-24 bg-themeGray relative overflow-hidden">
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
      </section>

      <section className="py-16 md:py-24 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 space-y-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceItem key={index} name={service.name} description={service.description} />
            ))}
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {services.slice(3).map((service, index) => (
              <div key={index + 3} className="max-w-xl">
                <ServiceItem name={service.name} description={service.description} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="laparoskopicka-chirurgia" className="py-20 bg-[#f9f7f5] border-t border-[#e6ded5]">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center text-[#b08968] mb-12">Laparoskopická chirurgia</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        { title: "Žlčník", desc: "Laparoskopická cholecystectómia" },
        { title: "Slabinový pruh", desc: "Laparoskopická hernioplastika – TAPP" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#e0d5cc] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-[#7f5539] mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="vseobecna-chirurgia" className="py-20 bg-[#f4eee9] border-t border-[#e6ded5]">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center text-[#b08968] mb-12">Všeobecná chirurgia</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {[
        ["Mieškový pruh", "Klasická fasciálna hernioplastika"],
        ["Defekty brušnej steny", "Hernioplastika prednej brušnej steny"],
        ["Pupkový pruh", "Umbilikálna hernioplastika"],
        ["Pruh v jazve", "Hernioplastika recid. hernií"],
        ["Bolesti brucha", "Diagnostika a liečba"],
        ["Kožné nádory (benígne)", "Znamienka, lipómy, aterómy, hemangiómy"],
        ["Kožné nádory (malígne)", "Bazaliómy, karcinómy, melanómy"],
        ["Plastické zákroky", "Korekcie jaziev, plastika zarastajúcich nechtov"],
        ["Chronické rany", "Vredy, diabetická noha, cievne rany"],
        ["Preležaniny a hnisavé kolekcie", "Ošetrenie a liečba podľa lokalizácie"],
        ["Chirurgia konečníka", "Hemoroidy, trhliny, píšťaly, polypy, zápaly"],
        ["Traumatológia a úrazy", "Zlomeniny, praskliny, šľachy, popáleniny, rezné a tržné rany, krvácajúce rany"],
      ].map(([title, desc], index) => (
        <div
          key={index}
          className="bg-white border border-[#e0d5cc] p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
        >
          <h3 className="text-lg font-semibold text-[#7f5539] mb-1">{title}</h3>
          <p className="text-gray-700">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

         <CtaBanner />
    </div>
  )
}
