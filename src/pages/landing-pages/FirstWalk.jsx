import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../../components/firstwalk-sections/HeroSection'
import ProblemSection from '../../components/firstwalk-sections/ProblemSection'
import WhySection from '../../components/firstwalk-sections/WhySection'
import ExperienceSection from '../../components/firstwalk-sections/ExperienceSection'
import WalkDetailsSection from '../../components/firstwalk-sections/WalkDetailsSection'
import OfferSection from '../../components/firstwalk-sections/OfferSection'
import FAQSection from '../../components/firstwalk-sections/FAQSection'
import ClosingSection from '../../components/firstwalk-sections/ClosingSection'

export default function FirstWalk() {
  const [faqOpen, setFaqOpen] = useState(null)


  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const faqs = [
    {
      q: "Devo essere allenato per partecipare?",
      a: "Assolutamente no. La camminata è pensata per tutti, anche per chi non si muove da tempo. È un'esperienza dolce, accessibile e guidata passo dopo passo."
    },
    {
      q: "Quanto dura l'evento?",
      a: "Circa 3-4 ore. Il ritrovo è previsto nel primo pomeriggio, la camminata dura qualche ora con pausa merenda inclusa, e si conclude con stretching e respirazione."
    },
    {
      q: "Cosa devo portare?",
      a: "Solo abbigliamento comodo e scarpe da camminata o da ginnastica. Pensiamo noi alla merenda, alla guida e all'organizzazione. Se ti fa piacere, porta un amico o parente!"
    },
    {
      q: "E se piove?",
      a: "In caso di maltempo grave l'evento sarà posticipato. Se si tratta solo di nuvole o qualche goccia, partiamo comunque con la giusta attrezzatura. Se tu non dovessi essere disponibile per la data nuova, verrai rimborsato senza problemi."
    },
    {
      q: "Posso venire da solo/a?",
      a: "Certo! Molti dei nostri pazienti partecipano da soli e poi si trovano benissimo. È un'occasione anche per conoscere nuove persone in un contesto rilassato e accogliente."
    },
    {
      q: "Posso invitare qualcuno?",
      a: "Sì, puoi portare amici o familiari. E ti daremo pure un bonus extra!"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <HeroSection y={y} />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Why Section */}
      <WhySection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Walk Details Section */}
      <WalkDetailsSection />
      
      {/* Offer Section */}
      <OfferSection />
      
      
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      
      {/* Closing Section */}
      <ClosingSection />
    </div>
  )
}
