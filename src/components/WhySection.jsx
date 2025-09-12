import { motion } from 'framer-motion'
import { Mountain, Users, Award, TrendingUp } from 'lucide-react'

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
            <h2 className="text-4xl md:text-5xl font-black text-blue-dark mb-8">
              Vogliamo farti stare bene
              <br />
              <span className="text-azure-dark">anche fuori dallo studio</span>
            </h2>
            
            <div className="space-y-6 text-lg text-blue-dark/80 leading-relaxed">
              <p>
                Da Mobilitas ci prendiamo cura del tuo corpo ogni giorno, ma sappiamo che il vero benessere comincia nei momenti in cui decidi di fare qualcosa per te.
              </p>
              <p>
                Con Mobilitas Walk vogliamo portarti fuori, nella natura, in un'esperienza <strong>semplice, concreta e rigenerante</strong>.
              </p>
              <p className="text-xl font-semibold text-blue-dark">
                Perché a volte basta una camminata, un respiro profondo e un gruppo di persone con cui condividere un momento autentico per rimettersi in moto.
              </p>
            </div>

            <div className="mt-8 p-6 bg-azure-dark/10 rounded-xl border-l-4 border-azure-dark">
              <p className="text-azure-dark font-bold text-lg">
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
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "5", label: "Anni di Esperienza", icon: Award, color: "azure-dark" },
                { number: "3k+", label: "Pazienti Seguiti", icon: Users, color: "blue-dark" },
                { number: "6", label: "Osteopati Esperti", icon: TrendingUp, color: "azure-dark" },
                { number: "4.9", label: "Valutazione Media", icon: Award, color: "blue-dark" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className={`w-12 h-12 ${stat.color === 'azure-dark' ? 'bg-azure-dark' : 'bg-blue-dark'} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <stat.icon className="w-6 h-6 text-cream" />
                  </div>
                  <div className={`text-3xl font-black ${stat.color === 'azure-dark' ? 'text-azure-dark' : 'text-blue-dark'} mb-2`}>{stat.number}</div>
                  <div className={`text-sm ${stat.color === 'azure-dark' ? 'text-azure-dark/70' : 'text-blue-dark/70'} font-medium`}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Visual placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-blue-dark/20 to-blue-dark/40 rounded-2xl flex items-center justify-center">
              <div className="text-center text-blue-dark">
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