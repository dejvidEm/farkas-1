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
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-themeBlue transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-themeBlue transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-themeBlue transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-themeBlue transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
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
                <Link href="/price-list" className="text-sm text-gray-600 hover:text-themeBlue transition-colors">
                  Cenník
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
              <li>Ulica Zdravia 123, MedCity, PSČ 45678</li>
              <li>Telefón: (123) 456-7890</li>
              <li>Email: info@surgicare.com</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Ordinačné Hodiny</h3>
            <ul role="list" className="mt-4 space-y-3 text-sm text-gray-600">
              <li>Po - Pia: 9:00 - 17:00</li>
              <li>So: 10:00 - 14:00 (Na objednávku)</li>
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
