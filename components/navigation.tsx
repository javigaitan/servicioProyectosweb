"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">DigitalPro</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("paquetes")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Paquetes
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 hover:text-blue-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("paquetes")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Paquetes
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
