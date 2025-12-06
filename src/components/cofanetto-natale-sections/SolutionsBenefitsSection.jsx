import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, Heart, Zap, Target, Users, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SolutionsBenefitsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const homeImages = [
    '/home/home7.png',
    '/home/home1.png',
    '/home/home2.png',
    '/home/home3.png',
    '/home/home4.png',
    '/home/home5.png',
    '/home/home8.png'
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % homeImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + homeImages.length) % homeImages.length)
  }
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Regala una sensazione di leggerezza e benessere generale",
      description: "Un trattamento osteopatico dona una sensazione di leggerezza, calma e sollievo profondo. È il regalo che chiunque vorrebbe ricevere, ma che nessuno si aspetta. ✨"
    },
    {
      icon: Zap,
      title: "Riduce rigidità e tensioni nascoste",
      description: "Allevia stanchezza e tensioni accumulate nel corpo, riduce dolori, rigidità e fastidi che si portano dietro da mesi. Perfetto per chi ha bisogno di ricaricarsi."
    },
    {
      icon: Target,
      title: "Migliora postura e mobilità del corpo",
      description: "Libera la schiena da tensioni e posture bloccate, migliora la mobilità di spalle, collo e zona lombare. Ideale per chi passa tante ore seduto o per chi fa sport."
    },
    {
      icon: Users,
      title: "Un regalo che non finisce dimenticato in un cassetto",
      description: "È quel regalo perfetto che non vedranno l'ora di usare! 🎁 Un momento per sé, una pausa dalla vita frenetica moderna che migliora davvero la vita di chi lo riceve."
    }
  ]

  return (
    <section className="py-20 bg-blue-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-cream mb-6">
            Perché il <span className="text-green">Cofanetto Mobilitas</span> è il regalo perfetto? 🎁
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl leading-relaxed">
            Un trattamento osteopatico è un regalo unico e originale che sarà davvero apprezzato! ✨
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={homeImages[currentImageIndex]} 
              alt={`Mobilitas ${currentImageIndex + 1}`} 
              className="w-full rounded-2xl"
              style={{ maxHeight: '80%', objectFit: 'contain' }}
            />
            
            {/* Navigation Arrows */}
            {homeImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-dark p-2 rounded-full transition-all duration-300 shadow-lg z-10"
                  aria-label="Precedente"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-dark p-2 rounded-full transition-all duration-300 shadow-lg z-10"
                  aria-label="Successivo"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {homeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-white w-8' 
                          : 'bg-white/50'
                      }`}
                      aria-label={`Vai all'immagine ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Benefits - Minimalist Design */}
        <div className="max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-6 last:mb-0"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <benefit.icon className="w-6 h-6 text-green" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cream mb-2 mt-0.5">
                  {benefit.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div style={{backgroundColor: 'rgba(114, 250, 147, 0.2)'}} className="text-cream p-8 md:p-12 rounded-2xl shadow-2xl border border-green/30 mb-8 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ marginTop: '0px' }}>
              E se quest'anno facessi un regalo che li sorprende, li fa stare meglio… e li fa pensare a te quando si sentiranno bene? 🎯
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              Fai un regalo che conta davvero. <span className="text-green font-bold">Acquistalo ora! 🎄</span>
            </p>
          </div>
          
          <motion.button 
            onClick={scrollToOffer}
            className="bg-green text-blue-dark font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl hover:shadow-green/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2 border-green/30 hover:border-green/60 font-montserrat"
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
