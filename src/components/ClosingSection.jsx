import { motion } from 'framer-motion'
import { Heart, Zap } from 'lucide-react'

export default function ClosingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-dark to-blue-dark/90 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Noi saremo lì.
              <br />
              <span className="text-green">E vogliamo che tu ci sia.</span>
            </h2>
          </div>

          <div className="space-y-8 text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p>
              Mobilitas Walk non è solo una camminata.
              È il nostro modo di continuare a prenderci cura di te, fuori dallo studio, con lo stesso impegno e la stessa attenzione di sempre.
            </p>
            <p>
              Se sei già stato nostro paziente, sai cosa intendiamo. E ora vogliamo offrirti un'occasione nuova: stare meglio, muoverti, respirare… e farlo insieme.
            </p>
            <div className="bg-green/20 p-8 rounded-2xl border border-green/30">
              <p className="text-2xl font-bold text-green">
                Sarà il primo evento di tanti.
                <br />
                Ma questa prima edizione non tornerà mai più.
                <br />
                Per questo ci piacerebbe vederti lì.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <p className="text-slate-300 font-medium mb-2 text-lg">Ci vediamo alla camminata,</p>
            <p className="text-green font-bold text-2xl">Il team Mobilitas</p>
          </div>

          <div className="space-y-8">
            <button className="bg-green hover:bg-green/90 text-blue-dark font-black py-6 px-12 rounded-full text-2xl shadow-2xl hover:shadow-green/25 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide flex items-center mx-auto">
              <Zap className="w-8 h-8 mr-3" />
              Prenota ora il tuo posto alla prima Mobilitas Walk
            </button>
            <p className="text-gray-400 text-lg">Scegli il tuo pacchetto prima che si esauriscano</p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-black text-green mb-2">3.000+</div>
              <div className="text-sm text-gray-300">Pazienti Seguiti</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-black text-green mb-2">4.9/5</div>
              <div className="text-sm text-gray-300">Valutazione Media</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-black text-green mb-2">100%</div>
              <div className="text-sm text-gray-300">Esperienza Curata</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-black text-green mb-2">5</div>
              <div className="text-sm text-gray-300">Anni di Esperienza</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-blue-dark/80 p-8 rounded-2xl mt-12">
            <h3 className="text-3xl font-black mb-4">ULTIMA CHIAMATA</h3>
            <p className="text-xl mb-6">
              I posti stanno finendo. Non perdere questa opportunità unica.
            </p>
            <button className="bg-green hover:bg-green/90 text-blue-dark font-black py-4 px-8 rounded-full text-xl transition-colors">
              PRENOTA ORA
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}