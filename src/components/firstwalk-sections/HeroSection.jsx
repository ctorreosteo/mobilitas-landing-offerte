import { motion } from 'framer-motion'
import { Users, Utensils, Heart, Gift, Star, ChevronDown, Clock } from 'lucide-react'

export default function HeroSection({ y }) {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offer-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-dark to-blue-dark/90 py-12 overflow-x-hidden">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }}
      ></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(114,250,147,0.1),transparent_50%)]"></div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-blue-dark/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex-1 flex flex-col justify-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center px-6 py-3 bg-red-100 text-primary rounded-full text-sm font-bold -mb-5 uppercase tracking-wide shadow-xl border-2 border-red-200 mx-auto"
        >
          <Star className="w-4 h-4 mr-2 text-primary fill-current" />
          Solo per pazienti Mobilitas
        </motion.div>

        {/* Main Title - Enhanced Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Multi-layer Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-azure-dark/30 via-green/20 to-azure-dark/30 blur-3xl scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-dark/40 via-transparent to-blue-dark/40 blur-2xl scale-105"></div>
            
            {/* Main Title Container */}
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-black leading-tight -mb-6">
                {/* MOBILITAS with Modern Design */}
                <motion.span 
                  className="block text-primary relative font-extrabold tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  MOBILITAS
                </motion.span>
                
                {/* 1st WALK with Modern Design */}
                <motion.span 
                  className="block text-primary relative font-extrabold tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  1<sup className="text-4xl md:text-6xl">st</sup> WALK
                </motion.span>
              </h1>
              
              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-azure-dark to-green rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-green to-azure-dark rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-azure-dark to-green rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.4, 1],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              
              {/* Enhanced Animated Underline */}
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-azure-dark via-green to-transparent rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                  width: ['0%', '100%', '80%'],
                  opacity: [0, 1, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              ></motion.div>
              
              {/* Additional Glow Lines */}
              <motion.div 
                className="absolute top-1/2 -left-8 w-16 h-0.5 bg-gradient-to-r from-transparent to-azure-dark opacity-60"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 0.5
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-l from-transparent to-green opacity-60"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1
                }}
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-4xl text-primary mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed font-semibold"
        >
          Il tuo primo passo verso una nuova energia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-2xl text-primary/80 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Unisciti a noi per una camminata rigenerante nella natura, pensata per risvegliare il corpo e liberare la mente.
          <br />
          <span className="text-secondary font-bold text-lg md:text-2xl">È un'esperienza esclusiva riservata ai pazienti Mobilitas.</span>
        </motion.p>

        {/* Urgency Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-cream text-primary py-4 px-6 md:py-6 md:px-8 rounded-2xl mb-6 md:mb-8 inline-block shadow-2xl border-4 border-blue-dark"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-xl font-black">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              <span className="text-primary">POSTI LIMITATI A 80 persone</span>
            </div>
            <span className="text-primary text-xl md:text-3xl hidden md:block">•</span>
            <span className="text-primary text-center md:text-left">PRENOTAZIONI FINO AL 25 SETTEMBRE</span>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-6xl mx-auto"
        >
          {[
            { icon: Users, text: "Camminata guidata con il Team Mobilitas" },
            { icon: Utensils, text: "Merenda inclusa" },
            { icon: Heart, text: "Esperienza per il tuo benessere e la tua salute" },
            { icon: Gift, text: "Offerta speciale solo per pazienti" }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-cream p-4 md:p-8 rounded-2xl shadow-2xl border-2 border-blue-dark/20 hover:border-blue-dark transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-dark rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto shadow-lg">
                <feature.icon className="w-6 h-6 md:w-10 md:h-10 text-cream" />
              </div>
              <p className="text-primary font-bold text-xs md:text-lg text-center leading-tight md:leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center space-y-8 mb-12"
        >
          <motion.button 
            onClick={scrollToOffers}
            className="group relative bg-blue-dark text-cream font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-blue-dark/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2 border-cream/30 hover:border-cream/60 font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-azure-dark/20 to-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <span className="text-xl">🎯</span>
              <span>Scegli ora il tuo pacchetto</span>
              <motion.div
                className="w-5 h-5"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 text-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-cream p-4 rounded-full shadow-xl border-2 border-blue-dark mx-auto inline-block"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
        <p className="text-primary text-sm mt-3 font-semibold">
          Scorri per scoprire
        </p>
      </motion.div>
    </section>
  )
}