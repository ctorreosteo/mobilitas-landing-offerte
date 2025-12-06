import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '../../components/Header'
import OfferSection from '../../components/cofanetto-natale-sections/OfferSection'
import PainPointsSection from '../../components/cofanetto-natale-sections/PainPointsSection'
import SolutionsBenefitsSection from '../../components/cofanetto-natale-sections/SolutionsBenefitsSection'
import FAQSection from '../../components/cofanetto-natale-sections/FAQSection'
import FooterSection from '../../components/cofanetto-natale-sections/FooterSection'
import WhatsAppButtonCofanettoNatale from '../../components/WhatsAppButtonCofanettoNatale'

function CofanettoNatale() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Generate random positions and delays for snowflakes
  const snowflakes = Array.from({ length: 5 }, (_, i) => ({
    left: Math.random() * 90 + 5, // Random position between 5% and 95%
    duration: 20 + Math.random() * 15, // Random duration between 20-35s
    delay: Math.random() * 5, // Random delay between 0-5s
  }))

  // Generate random positions and delays for santas
  const santas = Array.from({ length: 2 }, (_, i) => ({
    left: Math.random() * 85 + 5, // Random position between 5% and 90%
    duration: 30 + Math.random() * 10, // Random duration between 30-40s
    delay: Math.random() * 8, // Random delay between 0-8s
  }))

  // Generate random positions and delays for trees
  const trees = Array.from({ length: 3 }, (_, i) => ({
    left: Math.random() * 88 + 5, // Random position between 5% and 93%
    duration: 25 + Math.random() * 12, // Random duration between 25-37s
    delay: Math.random() * 6, // Random delay between 0-6s
  }))

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Snowflakes, Santa and Trees - Global */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 30 }}>
        {/* Snowflakes */}
        {snowflakes.map((snow, i) => (
          <div
            key={`snow-${i}`}
            className="absolute text-3xl"
            style={{
              left: `${snow.left}%`,
              animation: `snowfall ${snow.duration}s linear infinite`,
              animationDelay: `${snow.delay}s`,
              color: '#0ea5e9',
              willChange: 'transform'
            }}
          >
            ❄
          </div>
        ))}
        
        {/* Santa Clauses */}
        {santas.map((santa, i) => (
          <div
            key={`santa-${i}`}
            className="absolute text-2xl"
            style={{
              left: `${santa.left}%`,
              animation: `snowfall ${santa.duration}s linear infinite`,
              animationDelay: `${santa.delay}s`,
              willChange: 'transform'
            }}
          >
            🎅
          </div>
        ))}
        
        {/* Christmas Trees */}
        {trees.map((tree, i) => (
          <div
            key={`tree-${i}`}
            className="absolute text-xl"
            style={{
              left: `${tree.left}%`,
              animation: `snowfall ${tree.duration}s linear infinite`,
              animationDelay: `${tree.delay}s`,
              willChange: 'transform'
            }}
          >
            🎄
          </div>
        ))}
      </div>

      {/* Header */}
      <Header />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-16 sm:top-20 left-0 right-0 h-1 bg-green z-40 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Content with relative z-index */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Offer Section */}
        <OfferSection />
      
      {/* Pain Points Section */}
      <PainPointsSection />
      
      {/* Solutions & Benefits Section */}
      <SolutionsBenefitsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
        {/* Footer Section */}
        <FooterSection />
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButtonCofanettoNatale />
    </div>
  )
}

export default CofanettoNatale
