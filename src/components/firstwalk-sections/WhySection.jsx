import { motion } from 'framer-motion'
import { Mountain, Heart, Users, Zap } from 'lucide-react'

export default function WhySection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">
              Vogliamo farti stare bene
              <br />
              <span className="text-secondary">anche fuori dallo studio</span>
            </h2>
            
            <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
              <p>
                Da Mobilitas ci prendiamo cura del tuo corpo ogni giorno, ma sappiamo che il vero benessere comincia nei momenti in cui decidi di fare qualcosa per te.
              </p>
              <p>
                Con Mobilitas Walk vogliamo portarti fuori, nella natura, in un'esperienza <strong>semplice, concreta e rigenerante</strong>.
              </p>
              <p className="text-xl font-semibold text-primary">
                Perché a volte basta una camminata, un respiro profondo e un gruppo di persone con cui condividere un momento autentico per rimettersi in moto.
              </p>
            </div>

            <div className="mt-8 p-6 bg-azure-dark/10 rounded-xl border-l-4 border-azure-dark">
              <p className="text-secondary font-bold text-lg">
                È un'esperienza naturale e accessibile.
                <br />
                È un primo passo. È un gesto di cura verso te stesso.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: "Rigenerazione Naturale", 
                  icon: Mountain, 
                  color: "azure-dark" 
                },
                { 
                  title: "Benessere del Corpo", 
                  icon: Heart, 
                  color: "blue-dark" 
                },
                { 
                  title: "Momento Sociale", 
                  icon: Users, 
                  color: "azure-dark" 
                },
                { 
                  title: "Energia Rinnovata", 
                  icon: Zap, 
                  color: "blue-dark" 
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${benefit.color === 'azure-dark' ? 'bg-azure-dark' : 'bg-blue-dark'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <benefit.icon className="w-6 h-6 text-cream" />
                  </div>
                  <div className={`text-sm font-bold ${benefit.color === 'azure-dark' ? 'text-secondary' : 'text-primary'} mb-2 leading-tight`}>
                    {benefit.title}
                  </div>
                  <div className={`text-sm ${benefit.color === 'azure-dark' ? 'text-secondary/70' : 'text-primary/70'} leading-relaxed`}>
                    {benefit.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-blue-dark/20 to-blue-dark/40 rounded-2xl flex items-center justify-center">
              <div className="text-center text-primary">
                <Mountain className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Gruppo in cammino nella natura</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}