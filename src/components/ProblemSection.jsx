import { motion } from 'framer-motion'
import { X, CheckCircle, AlertTriangle } from 'lucide-react'

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-blue-dark mb-6 md:mb-8">
            Non sei stufo dei classici
            <br />
            <span className="text-blue-dark">"Eventi Wellness"?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-blue-dark mb-3 md:mb-4">❌ I PROBLEMI</h3>
              <p className="text-blue-dark/70 text-sm md:text-base">Quello che NON funziona</p>
            </div>

            {[
              {
                title: "Cammina 30 minuti al giorno e dimagrisci",
                subtitle: "Tutte cazzate!",
                icon: X,
                color: "red"
              },
              {
                title: "Riscopri il tuo benessere con il mio metodo perfetto",
                subtitle: "Tutte cazzate!",
                icon: X,
                color: "red"
              },
              {
                title: "Eventi generici per tutti",
                subtitle: "Tutte cazzate!",
                icon: X,
                color: "red"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-dark/5 border-l-4 border-blue-dark p-4 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-dark/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold text-blue-dark mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-blue-dark font-semibold text-sm md:text-lg">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-blue-dark mb-3 md:mb-4">✅ LA SOLUZIONE</h3>
              <p className="text-blue-dark/70 text-sm md:text-base">Quello che funziona davvero</p>
            </div>

            {[
              {
                title: "Camminata guidata da osteopati esperti",
                subtitle: "La verità che funziona davvero.",
                icon: CheckCircle,
                color: "emerald"
              },
              {
                title: "Esperienza personalizzata per i nostri pazienti",
                subtitle: "La verità che funziona davvero.",
                icon: CheckCircle,
                color: "emerald"
              },
              {
                title: "Posti limitati, qualità garantita",
                subtitle: "La verità che funziona davvero.",
                icon: CheckCircle,
                color: "emerald"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-dark/5 border-l-4 border-blue-dark p-4 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-dark/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold text-blue-dark mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-blue-dark font-semibold text-sm md:text-lg">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Truth Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-blue-dark text-cream p-6 md:p-12 rounded-2xl"
        >
          <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-cream mx-auto mb-4 md:mb-6" />
          <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">
            I classici "eventi wellness" vendono sogni a persone disperate.
            <br />
            <span className="text-cream">Questa è la verità.</span>
          </h3>
          <p className="text-base md:text-xl text-cream/90 max-w-4xl mx-auto">
            La realtà è che <strong>non esiste il Metodo Magico</strong> per stare bene che va bene per tutti.
            <br />
            Ma esiste un metodo <strong>scientifico, personalizzato e testato</strong> che funziona davvero.
          </p>
        </motion.div>
      </div>
    </section>
  )
}