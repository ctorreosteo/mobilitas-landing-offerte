import { motion } from 'framer-motion'
import { Users, Heart, Shield, Zap, Target, HandHeart } from 'lucide-react'

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
            Unisciti alla community di chi
            <br />
            <span className="text-blue-dark">si prende cura di sé</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-dark/80 max-w-4xl mx-auto">
            In una società che vuole tenerci spenti e senza energie, 
            <strong> noi scegliamo di essere vivi, energici e consapevoli</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-blue-dark mb-3 md:mb-4">⚡ LA SFIDA</h3>
              <p className="text-blue-dark/70 text-sm md:text-base">Contro il sistema moderno che ci vuole spenti</p>
            </div>

            {[
              {
                title: "Stress cronico e ritmi frenetici",
                subtitle: "La società moderna ci vuole sempre di corsa",
                icon: Zap,
                color: "orange"
              },
              {
                title: "Sedentarietà forzata",
                subtitle: "Lavori che ci immobilizzano per ore",
                icon: Target,
                color: "orange"
              },
              {
                title: "Isolamento e solitudine",
                subtitle: "Perdiamo il contatto con noi stessi e gli altri",
                icon: Shield,
                color: "orange"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-orange-50 border-l-4 border-orange-400 p-4 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-4 h-4 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-xl font-bold text-blue-dark mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-blue-dark font-semibold text-sm md:text-lg">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Community */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-blue-dark mb-3 md:mb-4">💚 LA NOSTRA COMMUNITY</h3>
              <p className="text-blue-dark/70 text-sm md:text-base">Persone che scelgono di prendersi cura di sé</p>
            </div>

            {[
              {
                title: "Persone consapevoli e motivate",
                subtitle: "Che hanno capito l'importanza del proprio benessere",
                icon: Users,
                color: "emerald"
              },
              {
                title: "Condivisione di esperienze autentiche",
                subtitle: "Insieme per crescere e divertirci",
                icon: Heart,
                color: "emerald"
              },
              {
                title: "Supporto reciproco e motivazione",
                subtitle: "Una rete di persone che si sostengono a vicenda",
                icon: HandHeart,
                color: "emerald"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-emerald-50 border-l-4 border-emerald-400 p-4 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-4 h-4 md:w-6 md:h-6 text-emerald-600" />
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

        {/* Community Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-blue-dark text-cream p-6 md:p-12 rounded-2xl"
        >
          <Users className="w-12 h-12 md:w-16 md:h-16 text-cream mx-auto mb-4 md:mb-6" />
          <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-green">
            Sei parte di una community che condivide i tuoi valori. Insieme costruiamo il nostro benessere.
          </h3>
          <p className="text-base md:text-xl text-cream/90 max-w-4xl mx-auto">
            Insieme <strong>riscopriamo la nostra energia</strong> e la vitalità che ci appartiene.
            <br />
            Insieme <strong>scegliamo di essere vivi, attivi e consapevoli</strong> del nostro corpo e della nostra salute.
          </p>
        </motion.div>
      </div>
    </section>
  )
}