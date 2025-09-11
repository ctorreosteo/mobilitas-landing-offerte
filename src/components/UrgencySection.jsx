import { motion } from 'framer-motion'
import { Users, Clock, AlertTriangle, Zap, Star } from 'lucide-react'

export default function UrgencySection({ timeLeft, bookedSpots }) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-dark to-blue-dark/90 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AlertTriangle className="w-16 h-16 text-green mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            50 POSTI TOTALI
            <br />
            <span className="text-green">SOLO CHI PRENOTA IN TEMPO</span>
            <br />
            POTRÀ PARTECIPARE
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Per garantire un'esperienza curata, autentica e di qualità, abbiamo deciso di riservare solo 50 posti per questa prima edizione di Mobilitas Walk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <h3 className="text-2xl font-black mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 mr-3" />
                TEMPO RIMANENTE
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "GIORNI", value: timeLeft.days },
                  { label: "ORE", value: timeLeft.hours },
                  { label: "MIN", value: timeLeft.minutes },
                  { label: "SEC", value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="bg-white text-black p-4 rounded-xl">
                    <div className="text-3xl font-black text-blue-dark mb-1">{item.value}</div>
                    <div className="text-sm font-bold uppercase">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green" />
                <span className="text-lg font-bold">POSTI PRENOTATI</span>
              </div>
              <div className="text-4xl font-black text-green mb-2">{bookedSpots}/50</div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-green h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(bookedSpots / 50) * 100}%` }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-white italic mb-4">
                "So che Mobilitas fa le cose con cura… ma non mi aspettavo un'esperienza così bella anche fuori dallo studio."
              </blockquote>
              <cite className="text-white/80 font-semibold">– Laura, paziente Mobilitas</cite>
            </div>

            <div className="text-center">
              <p className="text-lg text-white/80 mb-6">
                Quando i posti saranno esauriti, le iscrizioni verranno chiuse.
                E per i pazienti Mobilitas, questa è l'unica occasione per partecipare a condizioni così vantaggiose.
              </p>
              <button className="bg-green hover:bg-green/90 text-blue-dark font-black py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Non perdere il tuo posto
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}