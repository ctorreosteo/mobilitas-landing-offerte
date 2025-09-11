import { motion } from 'framer-motion'
import { Users, Utensils, Heart, Gift, Star, ChevronDown, Clock } from 'lucide-react'

export default function HeroSection({ y }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-dark to-blue-dark/90">
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-6 py-3 bg-cream text-blue-dark rounded-full text-sm font-bold mb-8 uppercase tracking-wide shadow-xl border-2 border-blue-dark"
        >
          <Star className="w-4 h-4 mr-2 text-blue-dark fill-current" />
          Solo per pazienti Mobilitas
        </motion.div>

        {/* Main Title - Enhanced Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Multi-layer Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-azure-dark/30 via-green/20 to-azure-dark/30 blur-3xl scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-dark/40 via-transparent to-blue-dark/40 blur-2xl scale-105"></div>
            
            {/* Main Title Container */}
            <div className="relative z-10">
              <h1 className="text-5xl md:text-9xl font-black leading-tight mb-6">
                {/* MOBILITAS with Enhanced Effects */}
                <motion.span 
                  className="block text-blue-dark relative"
                  style={{
                    textShadow: '0 0 30px rgba(0, 37, 82, 1), 0 0 60px rgba(0, 37, 82, 0.8), 0 0 90px rgba(0, 37, 82, 0.6), 0 0 120px rgba(0, 37, 82, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4)',
                    filter: 'drop-shadow(0 0 40px rgba(0, 37, 82, 0.7)) drop-shadow(0 0 80px rgba(0, 37, 82, 0.5))'
                  }}
                  animate={{ 
                    textShadow: [
                      '0 0 30px rgba(0, 37, 82, 1), 0 0 60px rgba(0, 37, 82, 0.8), 0 0 90px rgba(0, 37, 82, 0.6), 0 0 120px rgba(0, 37, 82, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4)',
                      '0 0 50px rgba(0, 37, 82, 1.2), 0 0 100px rgba(0, 37, 82, 1), 0 0 150px rgba(0, 37, 82, 0.8), 0 0 200px rgba(0, 37, 82, 0.6), 0 8px 16px rgba(0, 0, 0, 0.5)',
                      '0 0 30px rgba(0, 37, 82, 1), 0 0 60px rgba(0, 37, 82, 0.8), 0 0 90px rgba(0, 37, 82, 0.6), 0 0 120px rgba(0, 37, 82, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4)'
                    ],
                    filter: [
                      'drop-shadow(0 0 40px rgba(0, 37, 82, 0.7)) drop-shadow(0 0 80px rgba(0, 37, 82, 0.5))',
                      'drop-shadow(0 0 60px rgba(0, 37, 82, 1)) drop-shadow(0 0 120px rgba(0, 37, 82, 0.7))',
                      'drop-shadow(0 0 40px rgba(0, 37, 82, 0.7)) drop-shadow(0 0 80px rgba(0, 37, 82, 0.5))'
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  MOBILITAS
                </motion.span>
                
                {/* WALK with Enhanced Effects */}
                <motion.span 
                  className="block text-blue-dark relative"
                  style={{
                    textShadow: '0 0 30px rgba(0, 37, 82, 1), 0 0 60px rgba(0, 37, 82, 0.8), 0 0 90px rgba(0, 37, 82, 0.6), 0 0 120px rgba(0, 37, 82, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4)',
                    filter: 'drop-shadow(0 0 40px rgba(0, 37, 82, 0.7)) drop-shadow(0 0 80px rgba(0, 37, 82, 0.5))'
                  }}
                  animate={{ 
                    textShadow: [
                      '0 0 30px rgba(0, 37, 82, 1), 0 0 60px rgba(0, 37, 82, 0.8), 0 0 90px rgba(0, 37, 82, 0.6), 0 0 120px rgba(0, 37, 82, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4)',
                      '0 0 50px rgba(0, 37, 82, 1.2), 0 0 100px rgba(0, 37, 82, 1), 0 0 150px rgba(0, 37, 82, 0.8), 0 0 200px rgba(0, 37, 82, 0.6), 0 8px 16px rgba(0, 0, 0, 0.5)',
                      '0 0 30px rgba(0, 37, 82, 1), 0 0 60px rgba(0, 37, 82, 0.8), 0 0 90px rgba(0, 37, 82, 0.6), 0 0 120px rgba(0, 37, 82, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4)'
                    ],
                    filter: [
                      'drop-shadow(0 0 40px rgba(0, 37, 82, 0.7)) drop-shadow(0 0 80px rgba(0, 37, 82, 0.5))',
                      'drop-shadow(0 0 60px rgba(0, 37, 82, 1)) drop-shadow(0 0 120px rgba(0, 37, 82, 0.7))',
                      'drop-shadow(0 0 40px rgba(0, 37, 82, 0.7)) drop-shadow(0 0 80px rgba(0, 37, 82, 0.5))'
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  WALK
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
          className="text-lg md:text-4xl text-blue-dark mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed font-semibold"
        >
          Il tuo primo passo verso una nuova energia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-2xl text-blue-dark/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Unisciti a noi per una camminata rigenerante nella natura, pensata per risvegliare il corpo e liberare la mente.
          <br />
          <span className="text-azure-dark font-bold text-lg md:text-2xl">È un'esperienza esclusiva riservata ai pazienti Mobilitas.</span>
        </motion.p>

        {/* Urgency Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-cream text-blue-dark py-4 px-6 md:py-6 md:px-8 rounded-2xl mb-8 md:mb-12 inline-block shadow-2xl border-4 border-blue-dark"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-xl font-black">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 md:w-8 md:h-8 text-blue-dark" />
              <span>POSTI LIMITATI A 50</span>
            </div>
            <span className="text-blue-dark text-xl md:text-3xl hidden md:block">•</span>
            <span className="text-center md:text-left">PRENOTAZIONI FINO AL 25 SETTEMBRE</span>
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
            { icon: Users, text: "Camminata guidata con osteopati" },
            { icon: Utensils, text: "Pranzo incluso" },
            { icon: Heart, text: "Esperienza per il tuo benessere" },
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
              <p className="text-blue-dark font-bold text-xs md:text-lg text-center leading-tight md:leading-relaxed">
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
          className="text-center space-y-8"
        >
          <motion.button 
            className="bg-cream text-blue-dark font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:shadow-cream/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-4 border-blue-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scegli ora il tuo pacchetto
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center space-x-8 text-blue-dark text-lg font-semibold"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <span>Accesso immediato</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔒</span>
              <span>Pagamento sicuro</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💯</span>
              <span>Garanzia soddisfatti</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-cream p-4 rounded-full shadow-xl border-2 border-blue-dark mx-auto"
          >
            <ChevronDown className="w-8 h-8 text-blue-dark" />
          </motion.div>
          <p className="text-blue-dark text-sm mt-2 font-semibold">
            Scorri per scoprire
          </p>
        </motion.div>
      </div>
    </section>
  )
}