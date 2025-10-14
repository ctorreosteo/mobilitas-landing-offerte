import React, { useState, useEffect } from 'react'
import HeroSection from '../../components/home-sections/HeroSection'
import TargetAudienceSection from '../../components/home-sections/TargetAudienceSection'
import ProblemsSection from '../../components/home-sections/ProblemsSection'
import TestimonialsSection from '../../components/home-sections/TestimonialsSection'
import ServicesOverviewSection from '../../components/home-sections/ServicesOverviewSection'
import BioSection from '../../components/home-sections/BioSection'
import LoadingAnimation from '../../components/LoadingAnimation'

const Home = () => {
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setShowContent(true)
  }

  return (
    <>
      {!showContent && <LoadingAnimation onComplete={handleLoadingComplete} />}
      <div className={`min-h-screen transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <TargetAudienceSection />
        <ProblemsSection />
        <TestimonialsSection />
        <ServicesOverviewSection />
        <BioSection />
      </div>
    </>
  )
}

export default Home
