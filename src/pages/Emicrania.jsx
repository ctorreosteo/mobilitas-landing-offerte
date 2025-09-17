import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import VSLSection from '../components/emicrania-sections/VSLSection'
import OfferSection from '../components/emicrania-sections/OfferSection'
import PainPointsSection from '../components/emicrania-sections/PainPointsSection'
import SolutionsSection from '../components/emicrania-sections/SolutionsSection'
import BenefitsSection from '../components/emicrania-sections/BenefitsSection'
import FAQSection from '../components/emicrania-sections/FAQSection'
import FooterSection from '../components/emicrania-sections/FooterSection'

export default function Emicrania() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* VSL Section */}
      <VSLSection y={y} />
      
      {/* Pain Points Section */}
      <PainPointsSection />
      
      {/* Solutions Section */}
      <SolutionsSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Offer Section */}
      <OfferSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}
