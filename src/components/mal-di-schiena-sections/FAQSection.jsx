import { motion } from 'framer-motion'
import { ChevronDown, Clock, Shirt, Phone, MapPin, Calendar, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      icon: Clock,
      question: "Quanto dura il trattamento?",
      answer: "Il trattamento osteopatico ha una durata di circa 60 minuti. Questo tempo ci permette di svolgere un'accurata anamnesi, una valutazione posturale completa e il trattamento osteopatico specifico per il mal di schiena, garantendo la massima efficacia terapeutica."
    },
    {
      icon: Shirt,
      question: "Come mi devo vestire?",
      answer: "Ti consigliamo di indossare abbigliamento comodo e sportivo, come quello che useresti per andare in palestra. È importante che tu ti senta a tuo agio durante il trattamento. Evita abiti troppo stretti o con bottoni che potrebbero interferire con la valutazione posturale."
    },
    {
      icon: Phone,
      question: "Cosa succede dopo che acquisto?",
      answer: "Dopo l'acquisto, la nostra segretaria ti contatterà entro 24 ore per concordare insieme il giorno e l'orario più comodi per te. Potrai scegliere tra i nostri orari di apertura e, se necessario, possiamo valutare orari extra per soddisfare le tue esigenze specifiche."
    },
    {
      icon: MapPin,
      question: "Dove siete?",
      answer: "Il nostro studio si trova in Via Peyron 54 a Torino, in una posizione strategica e facilmente raggiungibile. Siamo comodamente collegati con la metropolitana, fermate Bernini o Principi d'Acaja, e disponiamo di parcheggio nelle vicinanze per chi preferisce arrivare in auto."
    },
    {
      icon: Calendar,
      question: "Quali sono i vostri orari di apertura?",
      answer: "Siamo aperti dal lunedì al venerdì dalle 9:00 alle 20:00 e il sabato dalle 9:00 alle 18:00. Comprendiamo che ogni persona ha esigenze diverse, quindi offriamo anche orari extra su appuntamento per soddisfare le necessità specifiche dei nostri pazienti."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-6">
            Domande <span style={{color: '#00BFFF'}}>Frequenti</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-3xl leading-relaxed">
            Tutte le risposte che ti servono per iniziare il tuo percorso verso la libertà dal mal di schiena.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-blue-dark/10 hover:border-green/30 transition-all duration-300 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-dark/5 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-dark/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-5 h-5 text-blue-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-dark">
                    {faq.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-blue-dark" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="ml-14">
                    <p className="text-blue-dark/80 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button 
            onClick={scrollToOffer}
            className="bg-blue-dark text-green font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-blue-dark/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2 border-blue-dark/30 hover:border-blue-dark/60 font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <ShoppingCart className="w-6 h-6" />
              <span>ACQUISTA ORA</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
