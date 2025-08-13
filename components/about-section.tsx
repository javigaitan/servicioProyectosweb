import { Users, Clock, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quiénes Somos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos un equipo de{" "}
              <strong className="text-blue-600">diseñadores, analistas de sistemas y programadores</strong> con más de{" "}
              <strong className="text-blue-600">5 años de experiencia</strong> en el desarrollo de soluciones digitales.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Llegamos para dar soluciones a medida, sin desperdiciar tus recursos en tecnologías innecesarias.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Nos enfocamos en entender tu problema y brindarte la asesoría necesaria para encontrar la mejor solución
              que se adapte a tu presupuesto y metas.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipo Multidisciplinario</h3>
                <p className="text-gray-600">Diseñadores, analistas y programadores trabajando en conjunto.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
              <div className="flex-shrink-0">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">+5 Años de Experiencia</h3>
                <p className="text-gray-600">Experiencia comprobada en soluciones digitales exitosas.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors">
              <div className="flex-shrink-0">
                <Target className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Soluciones a Medida</h3>
                <p className="text-gray-600">Adaptamos cada proyecto a tu presupuesto y objetivos específicos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
