import Link from "next/link"
import CtaBanner from "@/app/components/cta-banner"
import AnimatedSection from "@/app/components/animated-section"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function PriceListPage() {
  const priceItems = [
    { service: "Vstupná Konzultácia", price: "150€ - 250€", notes: "Závisí od zložitosti" },
    {
      service: "Štandardný Balík Zákrokov A",
      price: "5 000€ - 8 000€",
      notes: "Zahŕňa predoperačnú prípravu, operáciu, pooperačnú starostlivosť",
    },
    {
      service: "Pokročilý Balík Zákrokov B",
      price: "9 000€ - 15 000€",
      notes: "Pre zložitejšie prípady",
    },
    { service: "Kontrolná Návšteva", price: "100€", notes: "" },
    {
      service: "Príplatok za Urgentný Zásah",
      price: "Rôzne",
      notes: "Platí pre neplánované urgentné zákroky",
    },
  ]

  return (
    <div className="bg-white">
      <AnimatedSection className="py-16 md:py-24 bg-themeGray relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?width=1920&height=400')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          {" "}
          {/* Added relative z-10 */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Cenník</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Transparentné ceny našich chirurgických služieb. Upozorňujeme, že ide o odhady a skutočné náklady sa môžu
            líšiť v závislosti od individuálnych potrieb.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
            <p className="text-sm text-gray-500 mb-6">
              <Badge variant="outline" className="mr-2">
                Upozornenie
              </Badge>
              Nižšie uvedené ceny sú odhadované. Personalizovaná cenová ponuka bude poskytnutá po vašej konzultácii.
              Ceny sa môžu zmeniť bez predchádzajúceho upozornenia. Poistné krytie môže ovplyvniť vaše výdavky z
              vlastného vrecka.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%] text-base font-semibold text-gray-700">Služba</TableHead>
                  <TableHead className="text-base font-semibold text-gray-700">Odhadovaná Cena</TableHead>
                  <TableHead className="text-base font-semibold text-gray-700">Poznámky</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-gray-800">{item.service}</TableCell>
                    <TableCell className="text-gray-600">{item.price}</TableCell>
                    <TableCell className="text-sm text-gray-500">{item.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="mt-8 text-sm text-gray-500">
              Pre podrobné informácie o konkrétnych zákrokoch alebo otázkach týkajúcich sa poistenia, prosím{" "}
              <Link href="/contact" className="text-themeBlue hover:underline">
                kontaktujte našu ambulanciu
              </Link>
              .
            </p>
          </div>
        </div>
      </AnimatedSection>

      <CtaBanner />
    </div>
  )
}
