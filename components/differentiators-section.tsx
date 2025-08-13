import { CheckCircle, Users, Clock, Shield, MessageCircle, Award } from "lucide-react"

export function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: CheckCircle,
      title: "Soluciones 100% personalizadas",
      description: "Cada proyecto se adapta específicamente a tus necesidades y objetivos únicos.",
    },
    {
      icon: Users,
      title: "Asesoría estratégica adaptada a tu presupuesto",
      description: "Te ayudamos a encontrar la mejor solución dentro de tus posibilidades económicas.",
    },
    {
      icon: Award,
      title: "Equipo multidisciplinario con experiencia real",
      description: "Diseñadores, analistas y programadores con más de 5 años de experiencia.",
    },
    {
      icon: MessageCircle,
      title: "Comunicación directa y transparente",
      description: "Mantenemos contacto constante y claro durante todo el proceso de desarrollo.",
    },
    {
      icon: Clock,
      title: "Entregas a tiempo y soporte post-proyecto",
      description: "Cumplimos con los plazos acordados y te acompañamos después de la entrega.",
    },
    {
      icon: Shield,
      title: "Pago único: el producto final es 100% tuyo",
      description: "Sin mensualidades ocultas. Una vez pagado, el sitio web es completamente tuyo.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros diferenciales que nos hacen únicos en el mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
