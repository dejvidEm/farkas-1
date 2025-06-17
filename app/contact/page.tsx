"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import GoogleMapComponent from "../components/google-map"

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert("Formulár odoslaný! (Toto je demo)")
    ;(event.target as HTMLFormElement).reset()
  }

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
          {" "}
          {/* Added relative z-10 */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Kontaktujte Nás</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Sme tu pre vás. Obráťte sa na nás s akýmikoľvek otázkami alebo pre objednanie termínu.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
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
                  className="w-full rounded-full bg-[#6b5a4b] py-3 text-base hover:bg-[#8b7a6b]"
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
                    <MapPin className="h-5 w-5 text-[#6b5a4b] mr-3 mt-1 flex-shrink-0" />
                    <span>Nemocničná 1, Šaľa, PSČ 927 01</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-[#6b5a4b] mr-3 flex-shrink-0" />
                    <span>+421 907 557 852</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-[#6b5a4b] mr-3 flex-shrink-0" />
                    <span>jozef.farkas.chirurgia@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ordinačné Hodiny</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Po - Pia: 8:00 - 15:00 a od 15:00 - 16:00 podľa objednávky</li>
                  <li>So: Zatvorené</li>
                  <li>Ne: Zatvorené</li>
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
              <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Nájdete Nás na mape</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border/40">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5!2d17.8747!3d48.1514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f5f5f5f5f5f5%3A0x4713f5f5f5f5f5f5!2sPoliklinika%20NSK%20%C5%A0a%C4%BEa%2C%20Nemocni%C4%8Dn%C3%A1%20833%2F1%2C%20927%2001%20%C5%A0a%C4%BEa!5e0!3m2!1ssk!2ssk!4v1710864000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Poliklinika NSK Šaľa Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
