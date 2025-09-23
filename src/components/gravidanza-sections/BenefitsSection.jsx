import { motion } from 'framer-motion'
import { CheckCircle, Heart, Moon, Zap, Shield, Baby, ArrowRight } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <CheckCircle className="w-12 h-12" style={{color: '#FF6869'}} />,
      title: "Alleviamo dolori e fastidi vari",
      description: "Riduciamo drasticamente il mal di schiena lombare del 80-90%, la sciatalgia scompare gradualmente, il bacino diventa più mobile e flessibile, il dolore al pube si riduce significativamente e cervicale e spalle si rilassano. Il tuo corpo tornerà a muoversi liberamente senza più limitazioni.",
      highlight: "80-90% di riduzione del dolore"
    },
    {
      icon: <Moon className="w-12 h-12" style={{color: '#FF6869'}} />,
      title: "Miglioriamo il sonno",
      description: "Torni a dormire con un sonno più profondo e continuo, i risvegli durante la notte diminuiscono drasticamente, trovi posizioni più comode nel letto, i crampi alle gambe si riducono e riacquisti energia e vitalità durante il giorno. Il riposo ti restituisce la forza per affrontare la gravidanza con serenità.",
      highlight: "Sonno profondo e continuo"
    },
    {
      icon: <Zap className="w-12 h-12" style={{color: '#FF6869'}} />,
      title: "Ritorni ad avere energia e vitalità",
      description: "Non ti trascini più: l'energia costante durante la giornata ti accompagna, l'affaticamento e la stanchezza diminuiscono, il respiro diventa più profondo e regolare, la concentrazione e la lucidità mentale ritornano e riacquisti la capacità di gestire tutti gli impegni. Ritorni ad avere la forza per tutto: lavoro, casa, preparativi per il bambino.",
      highlight: "Energia costante tutto il giorno"
    },
    {
      icon: <Heart className="w-12 h-12" style={{color: '#FF6869'}} />,
      title: "Maggior sensazione di sicurezza e tranquillità",
      description: "Hai la certezza che tutto è normale e sicuro, la tranquillità per la salute del bambino ti accompagna, conosci esattamente cosa si può fare e cosa evitare, la fiducia nel percorso di gravidanza diventa solida e la pace mentale e la serenità ritornano. Sai di fare la cosa giusta per te e il tuo bambino, senza più ansie o dubbi.",
      highlight: "100% di tranquillità"
    },
    {
      icon: <Baby className="w-12 h-12" style={{color: '#FF6869'}} />,
      title: "Prepariamo il corpo al parto",
      description: "Il bacino diventa più mobile e flessibile, il corpo si prepara naturalmente al parto, il rischio di complicazioni diminuisce, il recupero post-parto sarà più veloce e la fiducia e serenità per il parto ti accompagnano. Affronti il momento più importante della tua vita con la preparazione e la sicurezza che meriti.",
      highlight: "Corpo preparato al 100%"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{color: '#002552'}}>
            Ecco come risolviamo tutti questi problemi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Il trattamento osteopatico per la gravidanza è la soluzione naturale, sicura ed efficace che stavi cercando.
          </p>
        </motion.div>

        {/* Benefits - Clean Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Icon and Highlight */}
              <div className="flex flex-col sm:flex-row items-start mb-6">
                <div className="p-4 rounded-xl mr-4 mb-4 sm:mb-0" style={{backgroundColor: 'rgba(255, 104, 105, 0.15)', border: '2px solid rgba(255, 104, 105, 0.3)'}}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{color: '#002552'}}>
                    {benefit.title}
                  </h3>
                  <div 
                    className="inline-flex items-center px-4 py-2 rounded-full font-bold text-sm"
                    style={{
                      backgroundColor: 'rgba(255, 104, 105, 0.2)',
                      border: '2px solid rgba(255, 104, 105, 0.4)',
                      color: '#FF6869'
                    }}
                  >
                    {benefit.highlight}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div 
            className="rounded-3xl p-10 border-2 shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 104, 105, 0.2) 0%, rgba(255, 104, 105, 0.15) 50%, rgba(255, 104, 105, 0.1) 100%)',
              borderColor: 'rgba(255, 104, 105, 0.3)'
            }}
          >
            {/* Background decoration */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16"
              style={{backgroundColor: 'rgba(255, 104, 105, 0.1)'}}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12"
              style={{backgroundColor: 'rgba(255, 104, 105, 0.15)'}}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4" style={{color: '#002552'}}>
                Il trattamento osteopatico è sicuro al 100%
              </h3>
              <p className="text-xl text-slate-700 mb-6 font-medium">
                Tecniche delicate e specifiche per la gravidanza, senza rischi per te e il tuo bambino
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-slate-700 mb-6">
                <div className="flex items-center text-lg">
                  <Shield className="w-6 h-6 mr-3" style={{color: '#FF6869'}} />
                  <span className="font-bold">100% Sicuro</span>
                </div>
                <div className="flex items-center text-lg">
                  <Heart className="w-6 h-6 mr-3" style={{color: '#FF6869'}} />
                  <span className="font-bold">Naturale</span>
                </div>
                <div className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-3" style={{color: '#FF6869'}} />
                  <span className="font-bold">Efficace</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
