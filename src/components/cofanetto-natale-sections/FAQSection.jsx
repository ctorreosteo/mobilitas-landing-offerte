import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Users, Clock, Calendar, MessageCircle, ShoppingCart } from 'lucide-react'
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
      icon: MapPin,
      question: "Dove posso ritirare il cofanetto?",
      answer: "Puoi ritirare il cofanetto direttamente nel nostro studio in Via Peyron 54, Torino, fino al 23 dicembre. Siamo aperti dal lunedì al venerdì dalle 8:00 alle 21:00 e il sabato dalle 9:00 alle 18:00. Siamo comodamente raggiungibili con la metropolitana (fermate Bernini o Principi d'Acaja) e disponiamo di parcheggio nelle vicinanze."
    },
    {
      icon: Users,
      question: "Per chi è adatto questo regalo?",
      answer: "Il cofanetto è perfetto per chiunque apprezzi il benessere e la cura di sé. È ideale per sportivi che hanno bisogno di scaricare tensioni muscolari, per chi lavora al computer e ha bisogno di liberare schiena e collo, per chi vive una vita frenetica e ha bisogno di una pausa per sé, per anziani, donne incinte e bambini, e per chiunque apprezzi regali utili e originali invece di oggetti che finiscono dimenticati in un cassetto."
    },
    {
      icon: MessageCircle,
      question: "Come funziona il trattamento?",
      answer: "Il trattamento osteopatico è un approccio manuale che agisce sulla causa dei problemi, non solo sui sintomi. Include un'accurata anamnesi, una valutazione posturale completa e il trattamento osteopatico specifico per il caso, garantendo la massima efficacia. Il nostro obiettivo è eliminare alla radice le cause di tensioni e dolori, per restituire benessere, energia e libertà di movimento."
    },
    {
      icon: Clock,
      question: "Quanto dura il trattamento?",
      answer: "Il trattamento osteopatico ha una durata di circa 1 ora. Questo tempo ci permette di svolgere un'accurata anamnesi, una valutazione posturale completa e il trattamento osteopatico specifico per il caso, garantendo la massima efficacia terapeutica."
    },
    {
      icon: Calendar,
      question: "Quando scade il cofanetto?",
      answer: "Il cofanetto è valido fino al 1° maggio 2025. Questo dà tutto il tempo necessario per effettuare il trattamento quando si preferisce, senza fretta."
    },
    {
      icon: MessageCircle,
      question: "Cosa bisogna fare per attivare il trattamento?",
      answer: "È semplicissimo! Dopo aver ritirato il cofanetto, basterà scriverci su WhatsApp al numero +39 3518198457 per prenotare il trattamento. Dovrà comunicarci chi gli ha regalato il cofanetto e insieme concorderemo il giorno e l'orario più comodi per lui/lei."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 bg-cream">
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
            Domande <span style={{color: '#00BFFF'}}>Frequenti</span> ❓
          </h2>
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-3xl leading-relaxed">
            Tutte le risposte che ti servono per fare il regalo perfetto questo Natale 🎁
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
                  <div style={{ marginLeft: '0px' }}>
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

