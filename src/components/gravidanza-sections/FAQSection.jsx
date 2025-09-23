import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const faqs = [
    {
      question: "Il trattamento osteopatico è sicuro durante la gravidanza?",
      answer: "Assolutamente sì! Il trattamento osteopatico per la gravidanza utilizza tecniche delicate e specifiche, completamente sicure per te e il tuo bambino. L'osteopata è specializzato nel trattamento delle donne in gravidanza e conosce perfettamente le precauzioni da adottare."
    },
    {
      question: "A che settimana di gravidanza posso iniziare il trattamento?",
      answer: "Puoi iniziare il trattamento osteopatico in qualsiasi momento della gravidanza, dal primo trimestre fino al termine. Anzi, iniziare presto ti aiuta a prevenire molti disturbi che potrebbero peggiorare con il progredire della gravidanza."
    },
    {
      question: "Quanto dura una seduta e con che frequenza?",
      answer: "Una seduta dura circa 45-60 minuti. La frequenza dipende dalle tue esigenze: generalmente le donne in gravidanza vengono da noi facendo un percorso che le acocmpagna fino al parto!"
    },
    {
      question: "Il trattamento può aiutare con il mal di schiena?",
      answer: "Sì, il trattamento osteopatico è molto efficace per il mal di schiena in gravidanza. Lavoriamo sulla mobilità del bacino, sulla postura e sulla distribuzione del peso, riducendo significativamente i dolori lombari e la sciatalgia."
    },
    {
      question: "Posso fare il trattamento anche se ho problemi di nausea?",
      answer: "Certamente! Anzi, il trattamento osteopatico può aiutare anche con la nausea mattutina, lavorando sul sistema nervoso autonomo e migliorando la circolazione. Ti consigliamo di comunicare sempre i tuoi sintomi all'osteopata."
    },
    {
      question: "Il trattamento prepara il corpo al parto?",
      answer: "Assolutamente! Il trattamento osteopatico prepara il bacino e la colonna vertebrale al parto, migliorando la mobilità e riducendo il rischio di complicazioni. Molte donne che seguono il trattamento hanno parti più facili e recuperi più veloci."
    },
    {
      question: "Devo portare qualche documento medico?",
      answer: "I referti medici sono necessari solo in caso di operazioni o interventi importanti. Per il restono non sono necessari, ma possono aiutare sicuramente a valutare più aspetti."
    },
    {
      question: "Il trattamento è coperto dal SSN o dalle assicurazioni?",
      answer: "Il trattamento osteopatico non è coperto dal SSN, ma alcune assicurazioni sanitarie private lo rimborsano (alcune parzialmente). Ti consigliamo di verificare con la tua assicurazione. Offriamo anche percorsi di sedute a prezzi agevolati."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 mr-3" style={{color: '#FF6869'}} />
            <h2 className="text-4xl md:text-5xl font-black" style={{color: '#002552'}}>
              Domande Frequenti
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tutte le risposte alle domande più comuni sul trattamento osteopatico in gravidanza
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold pr-4" style={{color: '#002552'}}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6" style={{color: '#FF6869'}} />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <div 
                    className="w-full h-px mb-4"
                    style={{backgroundColor: 'rgba(255, 104, 105, 0.2)'}}
                  ></div>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div
            className="rounded-3xl p-8 border-2 shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 104, 105, 0.1) 0%, rgba(255, 104, 105, 0.05) 50%, rgba(255, 104, 105, 0.1) 100%)',
              borderColor: 'rgba(255, 104, 105, 0.3)'
            }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-12 translate-x-12"
              style={{backgroundColor: 'rgba(255, 104, 105, 0.1)'}}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-20 h-20 rounded-full translate-y-10 -translate-x-10"
              style={{backgroundColor: 'rgba(255, 104, 105, 0.15)'}}
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4" style={{color: '#002552'}}>
                Pronta a iniziare il tuo percorso?
              </h3>
              <p className="text-lg text-slate-700 mb-6 font-medium">
                Prenota ora il tuo trattamento osteopatico con sconto speciale
              </p>
              
              <motion.button
                onClick={scrollToOffer}
                className="group relative font-black py-4 px-8 rounded-2xl text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2 font-montserrat"
                style={{backgroundColor: '#FF6869', color: '#002552', borderColor: 'rgba(255, 104, 105, 0.3)'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-pink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Calendar style={{width: '20px', height: '20px'}} />
                  <span>PRENOTA ORA CON SCONTO</span>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
