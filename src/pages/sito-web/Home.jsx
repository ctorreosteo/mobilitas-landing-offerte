import React, { useState, useEffect } from 'react'
import HeroSection from '../../components/home-sections/HeroSection'
import TargetAudienceSection from '../../components/home-sections/TargetAudienceSection'
import ProblemsSection from '../../components/home-sections/ProblemsSection'
import TestimonialsSection from '../../components/home-sections/TestimonialsSection'
import ServicesOverviewSection from '../../components/home-sections/ServicesOverviewSection'
import BioSection from '../../components/home-sections/BioSection'
import LoadingAnimation from '../../components/LoadingAnimation'
import SectionDivider from '../../components/SectionDivider'

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
        <SectionDivider />
        <TargetAudienceSection />
        <SectionDivider />
        <ProblemsSection />
        <SectionDivider />
        <div id="testimonianze">
          <TestimonialsSection />
        </div>
        <SectionDivider />
        <div id="servizi">
          <ServicesOverviewSection />
        </div>
        <SectionDivider />
        <div id="bio">
          <BioSection />
        </div>
      </div>
    </>
  )
}

export default Home
