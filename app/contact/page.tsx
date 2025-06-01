"use client"

import type React from "react"
import AnimatedSection from "@/app/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("Formulár odoslaný! (Toto je demo)")
    ;(event.target as HTMLFormElement).reset()
  }

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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Kontaktujte Nás</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Sme tu pre vás. Obráťte sa na nás s akýmikoľvek otázkami alebo pre objednanie termínu.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Napíšte Nám Správu</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Celé Meno
                  </Label>
                  <Input type="text" id="name" name="name" required className="mt-1 rounded-xl p-3 h-12" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    E-mailová Adresa
                  </Label>
                  <Input type="email" id="email" name="email" required className="mt-1 rounded-xl p-3 h-12" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Telefónne Číslo (Nepovinné)
                  </Label>
                  <Input type="tel" id="phone" name="phone" className="mt-1 rounded-xl p-3 h-12" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Správa
                  </Label>
                  <Textarea id="message" name="message" rows={5} required className="mt-1 rounded-xl p-3" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-themeBlue py-3 text-base hover:bg-themeBlue-dark"
                >
                  Odoslať Správu
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Informácie o Klinike</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-themeBlue mr-3 mt-1 flex-shrink-0" />
                    <span>Ulica Zdravia 123, MedCity, PSČ 45678</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-themeBlue mr-3 flex-shrink-0" />
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-themeBlue mr-3 flex-shrink-0" />
                    <span>info@surgicare.com</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ordinačné Hodiny</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Po - Pia: 9:00 - 17:00</li>
                  <li>So: 10:00 - 14:00 (Na objednávku)</li>
                  <li>Ne: Zatvorené</li>
                </ul>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?width=600&height=400"
                  alt="Mapa umiestnenia kliniky"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
