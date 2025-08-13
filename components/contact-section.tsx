"use client"

import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        "service_0gtxkeo", 
        "template_5ncam6y", 
        formRef.current!,
        "LezlJegUkPK_3njsu" 
      )
      .then(() => {
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Nos pondremos en contacto contigo lo antes posible.",
          icon: "success",
          confirmButtonText: "Aceptar",
        })
        formRef.current?.reset()
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          text: "No se pudo enviar el mensaje. Inténtalo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hablemos de tu proyecto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte a llevar tu negocio al siguiente nivel digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">consultas@desarrollostab.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">WhatsApp</p>
                    <p className="text-gray-600">+54 9 3512075105</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 p-3 bg-purple-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Ubicación</p>
                    <p className="text-gray-600">Córdoba Capital, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">¿Por qué contactarnos?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Consulta gratuita inicial</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Propuesta personalizada</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sin compromisos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Respuesta en 24 horas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="consulta" className="block text-sm font-medium text-gray-700 mb-2">
                  Consulta *
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center"
              >
                {isLoading ? "Enviando..." : <><Send className="w-5 h-5 mr-2" />Enviar mensaje</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
