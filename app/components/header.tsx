"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, HelpCircle, CalendarDays } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/our-services", label: "Naše Služby" },
  { href: "/about-us", label: "O Nás" },
  { href: "/price-list", label: "Cenník" },
  { href: "/contact", label: "Kontakt" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href
  }

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { type: "spring", stiffness: 260, damping: 20 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white md:bg-white/80 md:backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo(0, 0)
                }
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-themeBlue text-white shadow-md"
                  : "text-gray-600 hover:bg-themeGray hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center space-x-2 md:flex">
          <Button
            variant="outline"
            className="rounded-full border-themeBlue text-themeBlue hover:bg-themeBlue-light hover:text-themeBlue-dark"
          >
            Objednať sa
            <CalendarDays className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/faq" passHref>
            <Button variant="default" size="icon" className="rounded-full bg-themeBlue hover:bg-themeBlue-dark">
              <HelpCircle className="h-5 w-5 text-white" />
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button onClick={toggleMobileMenu} variant="ghost" size="icon" className="text-gray-700">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-white p-6 md:hidden"
            style={{ top: "80px" }} // Start below header
          >
            <nav className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-3 text-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-themeBlue text-white shadow-md"
                      : "text-gray-700 hover:bg-themeGray hover:text-gray-900"
                  }`}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.scrollTo(0, 0)
                    }
                    setMobileMenuOpen(false)
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-3 pt-6">
              <Button
                variant="outline"
                className="w-full rounded-full border-themeBlue text-themeBlue hover:bg-themeBlue-light hover:text-themeBlue-dark py-3 text-base"
              >
                Objednať sa
                <CalendarDays className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/faq" passHref className="w-full">
                <Button
                  variant="default"
                  className="w-full rounded-full bg-themeBlue hover:bg-themeBlue-dark py-3 text-base"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.scrollTo(0, 0)
                    }
                  }}
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
