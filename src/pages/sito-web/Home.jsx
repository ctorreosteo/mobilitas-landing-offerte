import React from 'react'
import HeroSection from '../../components/home-sections/HeroSection'
import TargetAudienceSection from '../../components/home-sections/TargetAudienceSection'
import ProblemsSection from '../../components/home-sections/ProblemsSection'
import TestimonialsSection from '../../components/home-sections/TestimonialsSection'
import ServicesOverviewSection from '../../components/home-sections/ServicesOverviewSection'
import BioSection from '../../components/home-sections/BioSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetAudienceSection />
      <ProblemsSection />
      <TestimonialsSection />
      <ServicesOverviewSection />
      <BioSection />
    </div>
  )
}

export default Home
