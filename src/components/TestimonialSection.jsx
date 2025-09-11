import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Laura M.",
      text: "So che Mobilitas fa le cose con cura… ma non mi aspettavo un'esperienza così bella anche fuori dallo studio. La camminata è stata rigenerante e il gruppo fantastico!",
      rating: 5
    },
    {
      name: "Marco R.",
      text: "Finalmente un evento che non è il solito 'fai da te'. Gli osteopati ci hanno guidato passo dopo passo e ho sentito la differenza fin da subito.",
      rating: 5
    },
    {
      name: "Giulia S.",
      text: "Il pacchetto premium vale ogni centesimo. La pressoterapia inclusa è stata la ciliegina sulla torta di un'esperienza già perfetta.",
      rating: 5
    },
    {
      name: "Alessandro T.",
      text: "Non credevo che una semplice camminata potesse fare così bene. Il team Mobilitas ha trasformato un'attività normale in qualcosa di speciale.",
      rating: 5
    },
    {
      name: "Francesca L.",
      text: "Posti limitati ma qualità altissima. Ogni dettaglio era curato, dal pranzo al kit che ci hanno dato. Si vede che ci tengono davvero.",
      rating: 5
    },
    {
      name: "Roberto C.",
      text: "Dopo anni di palestra, questa camminata mi ha fatto riscoprire il piacere di muoversi nella natura. Consigliatissimo!",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-green/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Ma non fidarti della nostra parola...
            <br />
            <span className="text-green">Guarda con i tuoi occhi</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            cosa potresti raggiungere con Mobilitas Walk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-green mb-4" />
              
              <blockquote className="text-slate-700 italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <cite className="text-slate-600 font-semibold">– {testimonial.name}</cite>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-green mb-2">3.000+</div>
              <div className="text-slate-600 font-semibold">Pazienti Seguiti</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green mb-2">4.9/5</div>
              <div className="text-slate-600 font-semibold">Valutazione Media</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green mb-2">100%</div>
              <div className="text-slate-600 font-semibold">Esperienza Curata</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green mb-2">5</div>
              <div className="text-slate-600 font-semibold">Anni di Esperienza</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}