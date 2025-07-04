import Link from "next/link"
import Logo from "./logo"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            
            <p className="mt-4 text-gray-600 text-sm max-w-xs">
              Poskytovanie výnimočnej chirurgickej starostlivosti s precíznosťou, odbornosťou a súcitom.
            </p>
            <img src="/signature.png" alt="podpis_Farkas" className="w-52 h-auto" />

          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Rýchle Odkazy</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link href="/about-us" className="text-sm text-gray-600 hover:text-themeBlue transition-colors">
                  O Nás
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="text-sm text-gray-600 hover:text-themeBlue transition-colors">
                  Naše Služby
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-themeBlue transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Kontaktné Informácie</h3>
            <ul role="list" className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Nemocničná 1, Šaľa, PSČ 927 01</li>
              <li>Telefón: 031/701 09 48</li>
              <li>Email: jozef.farkas.chirurgia@gmail.com</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Ordinačné Hodiny</h3>
            <ul role="list" className="mt-4 space-y-3 text-sm text-gray-600">
                  <li>Po - Pia: 8:00 - 15:00 a od 15:00 - 16:00 podľa objednávky</li>
                  <li>So: Zatvorené</li>
                  <li>Ne: Zatvorené</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} SurgiCare. Všetky práva vyhradené. Medicínske obrázky sú len na ilustračné účely.
          </p>
        </div>
      </div>
    </footer>
  )
}
