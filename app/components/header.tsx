"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, HelpCircle, CalendarDays } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./logo"
import { Button } from "@/components/ui/button"
import React from "react"

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/our-services", label: "Naše Služby" },
  { href: "/about-us", label: "O Nás" },
  { href: "/contact", label: "Kontakt" },
]

const serviceDropdown = [
  { name: "Všeobecná chirurgia", id: "vseobecna-chirurgia" },
  { name: "Laparoskopická chirurgia", id: "laparoskopicka-chirurgia" },
  { name: "Estetická medicína", id: "esteticka-medicina" },
  { name: "Úrazová chirurgia", id: "urazova-chirurgia" },
  { name: "Chirurgické ošetrenie chronických rán", id: "chronicke-rany" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const isActive = (href: string) => pathname === href

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { type: "spring", stiffness: 260, damping: 20 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white md:bg-white/80 md:backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link, index) => {
            if (link.label === "Naše Služby") {
              return (
                <React.Fragment key={link.href}>
                  <div className="relative group">
                    <Link
                      href={link.href}
                      className={`rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
                        isActive(link.href)
                          ? "bg-[#b08968] text-white shadow-md"
                          : "text-gray-600 hover:bg-themeGray hover:text-gray-900"
                      }`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.label}
                    </Link>
                    <div className="absolute left-0 mt-2 w-72 rounded-md bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                      <ul className="py-2">
                        {serviceDropdown.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/our-services#${service.id}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-themeGray hover:text-gray-900"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < navLinks.length - 1 && (
                    <div className="h-6 w-[1px] bg-themeBlue/30" />
                  )}
                </React.Fragment>
              )
            }

            return (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-[#b08968] text-white shadow-md"
                      : "text-gray-600 hover:bg-themeGray hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="h-6 w-[1px] bg-themeBlue/30" />
                )}
              </React.Fragment>
            )
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center space-x-2 md:flex">
          <Link href="/contact" passHref className="w-full">
            <Button
              variant="outline"
              className="rounded-full border-black text-black hover:bg-gray-50 hover:text-black/80"
            >
              Objednať sa
              <CalendarDays className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/faq" passHref>
            <Button variant="default" size="icon" className="rounded-full bg-black/80 hover:bg-black">
              <HelpCircle className="h-5 w-5 text-white" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button onClick={toggleMobileMenu} variant="ghost" size="icon" className="text-gray-700">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-white p-6 md:hidden"
            style={{ top: "80px" }}
          >
            <nav className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.label === "Naše Služby") {
                  return (
                    <div key={link.href} className="flex flex-col gap-2">
                      <span className="text-lg font-medium text-gray-900">Naše Služby</span>
                      <div className="pl-4 flex flex-col gap-1">
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.id}
                            href={`/our-services#${service.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-gray-700 hover:text-themeBlue"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-3 text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-themeBlue text-white shadow-md"
                        : "text-gray-700 hover:bg-themeGray hover:text-gray-900"
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Buttons */}
            <div className="mt-auto flex flex-col space-y-3 pt-6">
              <Link href="/contact" passHref className="w-full">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-themeBlue text-themeBlue hover:bg-themeBlue-light hover:text-themeBlue-dark py-3 text-base"
                >
                  Objednať sa
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/faq" passHref className="w-full">
                <Button
                  variant="default"
                  className="w-full rounded-full bg-themeBlue hover:bg-themeBlue-dark py-3 text-base"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Časté Otázky
                  <HelpCircle className="ml-2 h-5 w-5 text-white" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
