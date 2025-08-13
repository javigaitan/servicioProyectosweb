import { Star, Zap, Crown } from "lucide-react"

export function PackagesSection() {
  const packages = [
    {
      icon: Star,
      name: "Consultoría y Soporte de Sistemas",
      description: "Landing + Google Business + SEO básico",
      price: " $ 30,00 / hora",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Diagnóstico de necesidades",
        "Propuestas de mejora",
        "Asistencia remota o presencial",

      ],
    },
    {
      icon: Zap,
      name: "Pack Presencia Básica",
      description: "Landing + Google Business + SEO básico",
      price: " $130.000",
      gradient: "from-blue-500 to-blue-600",
      features: [
        "Landing page profesional",
        "Configuración Google Business",
        "SEO básico optimizado",
        "Integración redes sociales",
      ],
      popular: true,
    },
    {
      icon: Crown,
      name: "Pack Full Digital",
      description: "Página Web + Consultoría SEO + Google Business",
      price: "$190.000",
      gradient: "from-indigo-500 to-indigo-600",
      features: [
        "Página web corporativa",
        "Tienda online integrada",
        "Consultoría SEO completa",
        "Google Business optimizado",
      ],
    },
  ]

  return (
    <section id="paquetes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Paquetes Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas diseñadas para diferentes necesidades y presupuestos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${pkg.popular ? "border-purple-500 scale-105" : "border-gray-200"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${pkg.gradient} mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.name}</h3>

                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <div className="text-3xl font-bold text-gray-900 mb-6">{pkg.price}</div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>


                <a
                  href="https://wa.me/543512075102?text=Hola!%20quiero%20saber%20mas%20sobre%20sus%20pack%20de%20diseño%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                  >
                    Solicitar Información
                  </button>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
