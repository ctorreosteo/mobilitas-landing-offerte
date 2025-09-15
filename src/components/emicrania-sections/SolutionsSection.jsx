import { motion } from 'framer-motion'
import { X, Pill, Stethoscope, Zap, Droplets, AlertTriangle, ShoppingCart } from 'lucide-react'

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
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Hai provato di tutto, ma l'emicrania torna sempre. Ecco il motivo per cui 
            i trattamenti tradizionali falliscono nel risolvere definitivamente il problema.
          </p>
        </motion.div>

        {/* Solutions Grid - Ultra Compact Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-green/40 transition-all duration-300"
            >
              {/* Icon and Title - Perfectly Aligned */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {solution.title}
                </h3>
              </div>

              {/* Problems List - Perfect Alignment */}
              <div className="space-y-1 mb-3">
                {solution.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className="flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    <p className="text-white text-xs leading-tight">
                      {problem}
                    </p>
                  </div>
                ))}
              </div>

              {/* Why it doesn't work - Ultra Compact */}
              <div className="bg-green/20 border-l-2 border-green p-2.5 rounded-r-md">
                <p className="text-white font-semibold text-xs leading-relaxed">
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
