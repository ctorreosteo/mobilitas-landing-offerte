import { motion, useScroll, useTransform } from 'framer-motion'
import VSLSection from '../components/gravidanza-sections/VSLSection'

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
    </div>
  )
}
