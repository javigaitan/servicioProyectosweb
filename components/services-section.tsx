import { Monitor, Globe, ShoppingCart, Settings, BarChart3, TrendingUp } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Landing Page (Institucional Simple)",
      description: [
        "Diseño responsive y personalizado",
        "1 a 3 secciones (Inicio, Servicios, Contacto)",
        "Integración con redes sociales y WhatsApp",
        "Formulario de contacto",
      ],
      price: "USD 200 - 300",
      delivery: "5 a 7 días hábiles",
      paymentType: "Pago único",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Página Web Corporativa",
      description: [
        "Varias páginas y rutas internas",
        "Diseño responsive + SEO básico",
        "Google Maps y formularios",
        "Integración de blog o secciones extra",
      ],
      price: "USD 400 - 700",
      delivery: "7 a 14 días hábiles",
      paymentType: "Pago único",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: ShoppingCart,
      title: "Tienda Online (E-Shop Propia)",
      description: [
        "Carrito de compras y pasarela de pago",
        "Carga inicial de hasta 20 productos",
        "Configuración de envíos y pagos",
        "Capacitación para autogestión",
      ],
      price: "USD 500 - 900",
      delivery: "10 a 15 días hábiles",
      paymentType: "Pago único",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Settings,
      title: "Configuración de Tu Tienda",
      description: [
        "Creación y personalización (Shopify, Tiendanube, WooCommerce)",
        "Carga inicial de productos",
        "Ajustes de envíos y pagos",
      ],
      price: "USD 250 - 500",
      delivery: "5 a 7 días hábiles",
      paymentType: "Pago único",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Consultoría y Soporte de Sistemas",
      description: ["Diagnóstico de necesidades", "Propuestas de mejora", "Asistencia remota o presencial"],
      price: "USD 30 - 50 / hora",
      delivery: "Pago por horas efectivas",
      paymentType: "",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Consultoría de Marca y Presencia Online",
      description: [
        "SEO básico",
        "Google My Business y Google Maps",
        "Auditoría de redes sociales",
        "Reporte de mejoras",
      ],
      price: "USD 150 - 300",
      delivery: "3 a 5 días hábiles",
      paymentType: "Pago único",
      gradient: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                <ul className="space-y-2 mb-6">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    {service.paymentType && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        {service.paymentType}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">📦 Entrega: {service.delivery}</p>
                  {service.paymentType && (
                    <p className="text-xs text-green-600 mt-1">(el sitio es tuyo para siempre)</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
