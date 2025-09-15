import { motion } from 'framer-motion'
import { CheckCircle, Target, Brain, Heart, Shield, Clock, Users, Zap, Star } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Approccio Causale, Non Sintomatico",
      description: "Identifichiamo e risolviamo le disfunzioni posturali e muscolo-scheletriche che causano l'emicrania, non solo il dolore.",
      details: [
        "Valutazione globale della postura e delle tensioni",
        "Identificazione delle disfunzioni specifiche",
        "Trattamento mirato alla radice del problema"
      ]
    },
    {
      icon: Brain,
      title: "Ripristino dell'Equilibrio Neuro-Muscolare",
      description: "Riequilibriamo le tensioni che causano compressioni nervose e alterazioni del flusso sanguigno cerebrale.",
      details: [
        "Rilascio delle tensioni cervicali e craniali",
        "Miglioramento della circolazione cerebrale",
        "Riduzione della sensibilità nervosa"
      ]
    },
    {
      icon: Heart,
      title: "Trattamento Personalizzato e Olistico",
      description: "Ogni trattamento è unico, basato sulla tua storia clinica e sulle tue specifiche disfunzioni.",
      details: [
        "Anamnesi dettagliata del tuo caso",
        "Piano terapeutico personalizzato",
        "Monitoraggio dei progressi nel tempo"
      ]
    },
    {
      icon: Shield,
      title: "Risultati Duraturi e Definitivi",
      description: "Non solo sollievo temporaneo, ma risoluzione stabile che ti permette di riprendere il controllo della tua vita.",
      details: [
        "Riduzione significativa della frequenza",
        "Diminuzione dell'intensità del dolore",
        "Miglioramento della qualità di vita"
      ]
    },
    {
      icon: Clock,
      title: "Efficacia Rapida e Visibile",
      description: "I primi miglioramenti si notano già dalle prime sedute, con progressi costanti nel tempo.",
      details: [
        "Risultati visibili già dalle prime sedute",
        "Progressi graduali e costanti",
        "Mantenimento dei risultati nel tempo"
      ]
    },
    {
      icon: Users,
      title: "Esperienza e Specializzazione",
      description: "Osteopati specializzati nel trattamento dell'emicrania con anni di esperienza e risultati comprovati.",
      details: [
        "Specializzazione specifica nell'emicrania",
        "Esperienza consolidata nel settore",
        "Tecniche avanzate e aggiornate"
      ]
    }
  ]

  const testimonials = [
    {
      text: "Dopo anni di emicranie invalidanti, finalmente ho trovato una soluzione che funziona davvero. Il trattamento osteopatico ha cambiato la mia vita.",
      author: "Maria R., 42 anni"
    },
    {
      text: "Non credevo che si potesse risolvere senza farmaci. Invece in poche sedute ho visto miglioramenti incredibili. Consiglio vivamente.",
      author: "Giulia M., 38 anni"
    },
    {
      text: "Finalmente posso programmare la mia vita senza paura. L'emicrania non controlla più le mie giornate.",
      author: "Anna L., 45 anni"
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-6">
            Perché il <span className="text-green">trattamento osteopatico</span> funziona?
          </h2>
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-4xl mx-auto leading-relaxed">
            Un approccio scientifico e specializzato che agisce sulla causa dell'emicrania, 
            non solo sui sintomi. Ecco i benefici che fanno la differenza.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-dark/10 hover:border-green/30 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-green/20 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-green" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-blue-dark mb-4 leading-tight">
                {benefit.title}
              </h3>
              
              <p className="text-blue-dark text-lg mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Details */}
              <div className="space-y-2">
                {benefit.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    <p className="text-blue-dark text-sm leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-blue-dark text-center mb-12">
            Cosa dicono le nostre pazienti
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-dark text-cream p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-green fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-green font-semibold">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green to-green/80 text-blue-dark p-8 md:p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronta a liberarti definitivamente dall'emicrania?
            </h3>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Non aspettare che il dolore peggiori. Inizia oggi il tuo percorso verso la libertà.
            </p>
            <motion.button 
              className="bg-blue-dark text-green font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-blue-dark/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2 border-blue-dark/30 hover:border-blue-dark/60"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-xl">🎯</span>
                <span>Prenota il tuo trattamento</span>
                <Zap className="w-6 h-6" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
