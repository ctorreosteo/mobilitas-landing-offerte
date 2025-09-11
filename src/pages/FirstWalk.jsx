import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import WhySection from '../components/WhySection'
import ExperienceSection from '../components/ExperienceSection'
import OfferSection from '../components/OfferSection'
import TestimonialSection from '../components/TestimonialSection'
import UrgencySection from '../components/UrgencySection'
import FAQSection from '../components/FAQSection'
import ClosingSection from '../components/ClosingSection'

export default function FirstWalk() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 23,
    seconds: 45
  })

  const [bookedSpots, setBookedSpots] = useState(38)
  const [faqOpen, setFaqOpen] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const faqs = [
    {
      q: "Devo essere allenato per partecipare?",
      a: "Assolutamente no. La camminata è pensata per tutti, anche per chi non si muove da tempo. È un'esperienza dolce, accessibile e guidata passo dopo passo."
    },
    {
      q: "Quanto dura l'evento?",
      a: "Circa mezza giornata. Il ritrovo è previsto in mattinata, la camminata dura qualche ora con pausa pranzo inclusa, e si conclude con stretching e respirazione."
    },
    {
      q: "Cosa devo portare?",
      a: "Solo abbigliamento comodo e scarpe da camminata o da ginnastica. Pensiamo noi al pranzo, alla guida e all'organizzazione."
    },
    {
      q: "E se piove?",
      a: "In caso di maltempo grave l'evento sarà posticipato. Se si tratta solo di nuvole o qualche goccia, partiamo comunque con la giusta attrezzatura."
    },
    {
      q: "Posso venire da solo/a?",
      a: "Certo! Molti dei nostri pazienti partecipano da soli e poi si trovano benissimo. È un'occasione anche per conoscere nuove persone in un contesto rilassato e accogliente."
    },
    {
      q: "Posso invitare qualcuno?",
      a: "Sì, puoi portare amici o familiari. Se sei già paziente Mobilitas, chi viene con te paga solo una piccola quota e tu ricevi anche un regalo extra."
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
      
      {/* Offer Section */}
      <OfferSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Urgency Section */}
      <UrgencySection timeLeft={timeLeft} bookedSpots={bookedSpots} />
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      
      {/* Closing Section */}
      <ClosingSection />
    </div>
  )
}
