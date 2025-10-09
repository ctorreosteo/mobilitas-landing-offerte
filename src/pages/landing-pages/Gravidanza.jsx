import { motion, useScroll, useTransform } from 'framer-motion'
import VSLSection from '../../components/gravidanza-sections/VSLSection'
import PainPointsSection from '../../components/gravidanza-sections/PainPointsSection'
import BenefitsSection from '../../components/gravidanza-sections/BenefitsSection'
import FAQSection from '../../components/gravidanza-sections/FAQSection'
import OfferSection from '../../components/gravidanza-sections/OfferSection'
import FooterSection from '../../components/gravidanza-sections/FooterSection'

export default function Gravidanza() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* VSL Section */}
      <VSLSection y={y} />
      
      {/* Pain Points Section */}
      <PainPointsSection />
      
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
