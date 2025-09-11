import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection({ faqs, faqOpen, setFaqOpen }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <HelpCircle className="w-16 h-16 text-green mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Hai ancora qualche dubbio?
          </h2>
          <p className="text-xl text-slate-600">Ho le risposte che cerchi</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream rounded-xl overflow-hidden border border-slate-200 hover:border-green transition-colors"
            >
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-800 pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-green transition-transform flex-shrink-0 ${
                    faqOpen === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {faqOpen === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-green/10 p-8 rounded-2xl border border-green/20 mb-8">
            <h3 className="text-2xl font-bold text-green mb-4">
              Non aspettare l'ultimo momento. I posti stanno finendo.
            </h3>
            <p className="text-green/80">
              Ogni giorno che passa, i posti disponibili diminuiscono. Non rischiare di rimanere fuori.
            </p>
          </div>
          
          <button className="bg-green hover:bg-green/90 text-blue-dark font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Scegli il tuo pacchetto e prenota ora
          </button>
        </motion.div>
      </div>
    </section>
  )
}