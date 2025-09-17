import { motion } from 'framer-motion'
import { Heart, Users, Star, ArrowRight, Sparkles } from 'lucide-react'

export default function ClosingSection() {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offer-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-cream overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-16"
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight mb-8">
              <span className="block">Mobilitas 1<sup>st</sup> Walk</span>
              <span className="block text-azure-dark">E vogliamo che tu ci sia.</span>
            </h2>
          </motion.div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* First Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-dark/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-primary/80 leading-relaxed">
                Mobilitas Walk non è solo una camminata. È il nostro modo di continuare a prenderci cura di te, 
                fuori dallo studio, con lo stesso impegno e la stessa attenzione di sempre.
              </p>
            </motion.div>

            {/* Second Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-dark/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-primary/80 leading-relaxed">
                Se sei già stato nostro paziente, sai cosa intendiamo. E ora vogliamo offrirti un'occasione nuova: 
                stare meglio, muoverti, respirare… e farlo insieme.
              </p>
            </motion.div>

            {/* Special Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-100 to-blue-100 border-2 border-sky-300 p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 bg-blue-dark/10 rounded-full flex items-center justify-center"
                >
                  <Star className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.p 
                  className="text-2xl md:text-3xl font-black text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Sarà il primo evento di tanti.
                </motion.p>
                
                <motion.p 
                  className="text-2xl md:text-3xl font-black text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  Ma questa prima edizione non tornerà mai più.
                </motion.p>
                
                <motion.p 
                  className="text-2xl md:text-3xl font-black text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  Per questo sarà un bel ricordo partecipare insieme!
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Signature Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center space-x-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 bg-blue-dark/10 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>
              <p className="text-xl text-primary/80 font-medium">Ci vediamo alla camminata,</p>
            </div>
            <p className="text-3xl font-black text-primary">
              Il team Mobilitas
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <motion.button 
              onClick={scrollToOffers}
              className="group relative overflow-hidden bg-blue-dark text-green font-black py-6 px-12 rounded-3xl text-xl shadow-2xl hover:shadow-blue-dark/50 transition-all duration-500 transform hover:scale-105 border-4 border-blue-dark hover:border-blue-dark/80 font-montserrat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/80 to-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center space-x-4">
                <motion.span 
                  className="text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
                <span>Unisciti a noi</span>
                <motion.div
                  className="w-6 h-6"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}