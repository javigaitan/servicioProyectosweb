import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      company: "Empresa ABC",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Excelente trabajo y atención personalizada. Lograron capturar exactamente lo que necesitábamos para nuestro negocio.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Emprendedor",
      company: "Tienda Online XYZ",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Mi tienda online superó todas las expectativas. El equipo fue muy profesional y cumplió con todos los plazos.",
    },
    {
      name: "Ana Martínez",
      role: "Gerente General",
      company: "Servicios DEF",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "La consultoría digital nos ayudó a mejorar significativamente nuestra presencia online. Muy recomendados.",
    },
    {
      name: "Luis Fernández",
      role: "Director Comercial",
      company: "Consultora GHI",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Soluciones a medida y precio justo. El soporte post-proyecto ha sido excepcional.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de empresas que confiaron en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
