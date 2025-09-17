import { motion } from 'framer-motion'
import { Clock, MapPin, Route, Timer, Ruler, TrendingUp, Users, Calendar } from 'lucide-react'

export default function WalkDetailsSection() {
  const stats = [
    { icon: Timer, label: "Durata", value: "3 ore", color: "from-blue-dark to-blue-dark/80" },
    { icon: Ruler, label: "Distanza", value: "4,5 km", color: "from-blue-dark to-blue-dark/80" },
    { icon: TrendingUp, label: "Difficoltà", value: "Facile", color: "from-blue-dark to-blue-dark/80" },
    { icon: Calendar, label: "Data", value: "4 ottobre", color: "from-blue-dark to-blue-dark/80" }
  ]

  const timeline = [
    { time: "15:00", title: "Ritrovo", description: "Punto di partenza - Parcheggio gratuito disponibile" },
    { time: "15:15", title: "Partenza", description: "Inizio della camminata guidata" },
    { time: "16:30", title: "Pausetta", description: "Moment di relax e ristoro" },
    { time: "18:00", title: "Arrivo", description: "Rientro al punto di partenza" }
  ]

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,37,82,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(114,250,147,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-blue-dark mb-6">
            Dettagli della
            <span className="block text-azure-dark">Camminata</span>
          </h2>
          <p className="text-xl text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
            Tutto quello che devi sapere per vivere al meglio la tua esperienza nella natura
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-dark/10 hover:border-green/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-blue-dark/20">
                <stat.icon className="w-8 h-8 text-blue-dark" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-azure-dark mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-blue-dark/70 uppercase tracking-wide">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-dark/10"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mr-4 border-2 border-blue-dark/20">
                <Clock className="w-6 h-6 text-blue-dark" />
              </div>
              <h3 className="text-3xl font-black text-blue-dark">Programma della Giornata</h3>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center border-2 border-blue-dark/20">
                      <span className="text-blue-dark font-black text-sm">{item.time}</span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-dark/20 ml-6 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-dark mb-2 mt-0">{item.title}</h4>
                    <p className="text-blue-dark/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6 mt-10">
                <div className="p-6 bg-gradient-to-r from-azure-dark/5 to-blue-dark/5 rounded-2xl border-l-4 border-azure-dark">
                  <h4 className="text-lg font-bold text-blue-dark mb-2">📍 Punto di Partenza e arrivo</h4>
                  <p className="text-blue-dark/80">Superga</p>
                  <p className="text-sm text-blue-dark/60 mt-1 italic">Parcheggio gratuito disponibile</p>
                </div>
              </div>
          </motion.div>

          {/* Location & Route */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Route Map */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-dark/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center mr-4 border-2 border-blue-dark/20">
                  <Route className="w-6 h-6 text-blue-dark" />
                </div>
                <h3 className="text-3xl font-black text-blue-dark">Itinerario</h3>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl border-4 border-blue-dark/20"
                >
                  <img 
                    src="/itinerario.jpg" 
                    alt="Mappa dell'itinerario della camminata"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/20 to-transparent"></div>
                </motion.div>

                <div className="mt-6 p-6 bg-gradient-to-r from-green/10 to-azure-dark/10 rounded-2xl border-2 border-green/20">
                  <h4 className="text-lg font-bold text-blue-dark mb-3">🗺️ Percorso</h4>
                  <ul className="space-y-2 text-blue-dark/80 -ml-6">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-green rounded-full mr-3 flex-shrink-0"></div>
                      Partenza da Superga
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-azure-dark rounded-full mr-3 flex-shrink-0"></div>
                      Sentiero panoramico attraverso la natura
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-blue-dark rounded-full mr-3 flex-shrink-0"></div>
                      Pausa merenda con vista
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-green rounded-full mr-3 flex-shrink-0"></div>
                      Rientro attraverso il sentiero
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              const offerSection = document.getElementById('offer-section');
              if (offerSection) {
                offerSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-dark text-green font-black py-4 px-8 rounded-2xl text-xl shadow-xl hover:shadow-blue-dark/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scegli ora il tuo pacchetto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
