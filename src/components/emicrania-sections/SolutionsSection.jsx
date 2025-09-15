import { motion } from 'framer-motion'
import { X, Pill, Stethoscope, Zap, Droplets, AlertTriangle } from 'lucide-react'

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Pill,
      title: "Farmaci e Antidolorifici",
      problems: [
        "Effetto temporaneo - il dolore torna sempre",
        "Dipendenza e assuefazione nel tempo",
        "Effetti collaterali su fegato e stomaco",
        "Non risolvono la causa, solo il sintomo"
      ],
      why: "I farmaci agiscono sui sintomi, non sulla radice del problema. È come spegnere l'allarme antincendio senza spegnere il fuoco."
    },
    {
      icon: Stethoscope,
      title: "Visite Neurologiche",
      problems: [
        "Focus solo sui sintomi neurologici",
        "Esami costosi e spesso inconclusivi",
        "Prescrizioni farmacologiche standard",
        "Mancanza di approccio olistico"
      ],
      why: "La neurologia si concentra sul sistema nervoso, ma l'emicrania ha spesso origini muscolo-scheletriche e posturali che vengono ignorate."
    },
    {
      icon: Zap,
      title: "Fisioterapia e Massaggi",
      problems: [
        "Trattamento superficiale dei sintomi",
        "Mancanza di valutazione globale",
        "Approccio meccanico senza personalizzazione",
        "Risultati temporanei e parziali"
      ],
      why: "Spesso si concentrano solo sulla zona dolorante senza considerare le connessioni posturali e le disfunzioni che causano l'emicrania."
    },
    {
      icon: Droplets,
      title: "Agopuntura e Medicina Alternativa",
      problems: [
        "Risultati variabili e non garantiti",
        "Mancanza di evidenze scientifiche solide",
        "Approccio sintomatico, non causale",
        "Durata del trattamento indefinita"
      ],
      why: "Anche se possono dare sollievo temporaneo, non identificano e risolvono le disfunzioni strutturali che causano l'emicrania."
    }
  ]

  return (
    <section className="py-20 bg-blue-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-cream mb-6">
            Perché le <span className="text-green">altre soluzioni</span> non funzionano?
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 max-w-4xl mx-auto leading-relaxed">
            Hai provato di tutto, ma l'emicrania torna sempre. Ecco il motivo per cui 
            i trattamenti tradizionali falliscono nel risolvere definitivamente il problema.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-green/20 hover:border-green/40 transition-all duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-cream">
                  {solution.title}
                </h3>
              </div>

              {/* Problems List */}
              <div className="space-y-3 mb-6">
                {solution.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-cream text-lg leading-relaxed">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>

              {/* Why it doesn't work */}
              <div className="bg-green/30 border-l-4 border-green p-4 rounded-r-xl">
                <p className="text-cream font-semibold text-lg leading-relaxed">
                  <span className="text-green font-bold">Perché fallisce:</span> {solution.why}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-green/20 backdrop-blur-sm border border-green/30 p-8 md:p-12 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-green mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-cream">
                Il problema comune a tutti questi approcci
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-cream leading-relaxed max-w-4xl mx-auto">
              <span className="text-green font-bold">Trattano il sintomo, non la causa.</span> 
              <br />
              L'emicrania è il risultato di disfunzioni posturali, tensioni muscolari e 
              squilibri che si sono accumulati nel tempo. Solo un approccio osteopatico 
              specifico può identificare e risolvere queste disfunzioni alla radice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
