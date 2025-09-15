import { motion } from 'framer-motion'
import { CheckCircle, Target, Brain, Heart, Shield, Clock, Users, Zap } from 'lucide-react'

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


  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-6">
            Perché il <span style={{color: '#00BFFF'}}>trattamento osteopatico</span> funziona?
          </h2>
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-4xl leading-relaxed">
            Un approccio scientifico e specializzato che agisce sulla causa dell'emicrania, 
            non solo sui sintomi. Ecco i benefici che fanno la differenza.
          </p>
        </motion.div>

        {/* Benefits - Minimalist Design */}
        <div className="max-w-4xl mx-auto mb-16">
          {benefits.slice(0, 4).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-3 last:mb-0"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <benefit.icon className="w-5 h-5 text-green" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-dark mb-0 mt-0.5">
                  {benefit.title}
                </h3>
                <p className="text-blue-dark/80 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div style={{backgroundColor: 'rgba(114, 250, 147, 0.3)'}} className="text-blue-dark p-8 md:p-12 rounded-2xl shadow-2xl border border-green-400 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronta a liberarti definitivamente dall'emicrania?
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              Non aspettare che il dolore peggiori. Inizia oggi il tuo percorso verso la libertà.
            </p>
          </div>
          
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
        </motion.div>
      </div>
    </section>
  )
}
