import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection({ faqs, faqOpen, setFaqOpen }) {
  return (
    <section className="py-20 bg-white font-montserrat">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <HelpCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#002552' }} />
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 font-montserrat">
            Hai ancora qualche dubbio?
          </h2>
          <p className="text-xl text-primary font-montserrat">Abbiamo le risposte che cerchi</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream rounded-xl overflow-hidden border border-slate-200 hover:border-green transition-colors font-montserrat"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors font-montserrat"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="text-lg font-semibold text-primary pr-4 font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif' }}>{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-secondary transition-transform flex-shrink-0 ${
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
                  className="px-6 pb-6 font-montserrat"
                >
                  <p className="text-primary leading-relaxed font-montserrat" style={{ fontFamily: 'Montserrat, sans-serif' }}>{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}