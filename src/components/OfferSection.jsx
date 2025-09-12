import { motion } from 'framer-motion'
import { Check, Star, Clock } from 'lucide-react'

export default function OfferSection() {
  const handlePackageSelection = () => {
    // Scroll to the packages section (which is this same section)
    // or you can modify this to scroll to a specific part within the section
    const packagesSection = document.getElementById('offer-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // You can also add additional functionality here like:
    // - Opening a contact form
    // - Redirecting to a booking page
    // - Showing a modal with contact information
    console.log('Package selection button clicked - ready for booking!');
  };

  return (
    <section id="offer-section" className="py-20 bg-blue-dark text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Un'opportunità <span className="text-green">SPECIALE</span>
            <br />
            riservata solo a chi è già nostro cliente
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Per questa prima edizione della Mobilitas Walk, abbiamo riservato ai nostri pazienti due pacchetti esclusivi, 
            pensati per farti vivere l'esperienza nel modo che preferisci.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Base Package */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">🎫 PACCHETTO BASE</h3>
              <div className="text-4xl font-bold mb-2">
                <span className="text-red-400 line-through text-2xl">20€</span>
                {" "}
                <span className="text-green">5€</span>
              </div>
              <p className="text-gray-300">La tua prima esperienza Mobilitas Walk</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Camminata guidata con osteopati",
                "Pranzo al sacco fornito da noi",
                "Sacchetta brandizzata Mobilitas",
                "Accesso al gruppo riservato su WhatsApp",
                "Foto e riprese dell'evento in omaggio"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">Per chi vuole solo iniziare, senza impegno. Ma con qualità Mobilitas.</p>
              <motion.button 
                className="group relative w-full overflow-hidden bg-cream text-primary font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-cream/50 transition-all duration-500 transform hover:scale-105 border-2 border-blue-dark hover:border-blue-dark/80"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/10 to-azure-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="text-lg">🎫</span>
                  <span className="text-lg">Scegli Pacchetto Base</span>
                  <motion.div
                    className="w-5 h-5"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </motion.button>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 relative transform scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-primary px-4 py-2 rounded-full text-sm font-bold">
                Il più scelto
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">🌟 PACCHETTO PREMIUM</h3>
              <div className="text-4xl font-bold mb-2">
                <span className="text-red-400 line-through text-2xl">140€</span>
                {" "}
                <span className="text-green">39€</span>
              </div>
              <p className="text-sky-300 italic">Il pacchetto più scelto dai nostri pazienti!</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Tutto quello che è incluso nel Pacchetto Base</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  1 pressoterapia in studio a prezzo ridotto (
                  <span className="text-red-400 line-through">60€</span>
                  {" "}
                  <span className="text-green-400 font-bold">34€</span>
                  )
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  1 pressoterapia in omaggio (
                  <span className="text-red-400 line-through">60€</span>
                  {" "}
                  <span className="text-green-400 font-bold">0€</span>
                  )
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 italic text-base mb-2">⚠️ Solo 15 pacchetti disponibili con questo prezzo!</p>
              <p className="text-gray-300 mb-6">Pensato per chi vuole continuare a sentirsi bene anche dopo la camminata.</p>
              <motion.button 
                className="group relative w-full overflow-hidden bg-gradient-to-r from-green via-green to-azure-dark text-primary font-black py-5 px-8 rounded-2xl shadow-2xl hover:shadow-green/50 transition-all duration-500 transform hover:scale-105 border-4 border-cream hover:border-green/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cream/20 to-azure-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.span>
                  <span className="text-xl">Scegli Pacchetto Premium</span>
                  <motion.div
                    className="w-6 h-6 text-2xl"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    🚀
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cream via-azure-dark to-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-blue-dark/80 p-6 rounded-2xl mb-8">
            <div className="flex items-center justify-center space-x-4 text-lg font-bold">
              <Clock className="w-6 h-6" />
              <span>TEMPO LIMITATO</span>
            </div>
            <p className="text-white text-sm mt-2">
              Le offerte con sconto hanno i posti limitati e sono aperte fino al 25 settembre – oppure fino a esaurimento posti
            </p>
          </div>

          <motion.button 
            onClick={handlePackageSelection}
            className="group relative overflow-hidden bg-gradient-to-r from-green via-azure-dark to-green text-primary font-black py-6 px-12 rounded-3xl text-xl shadow-2xl hover:shadow-green/50 transition-all duration-500 transform hover:scale-105 border-4 border-cream hover:border-azure-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cream/20 to-azure-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center space-x-4">
              <motion.span 
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span>Scegli ora il tuo pacchetto e assicurati il tuo posto</span>
              <motion.div
                className="w-6 h-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🎯
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cream via-azure-dark to-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cream via-azure-dark to-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-200"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}