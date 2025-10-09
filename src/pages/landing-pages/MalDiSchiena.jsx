import React from 'react'
import AnnouncementBar from '../../components/mal-di-schiena-sections/AnnouncementBar'
import VSLSection from '../../components/mal-di-schiena-sections/VSLSection'
import PainPointsSection from '../../components/mal-di-schiena-sections/PainPointsSection'
import OfferSection from '../../components/mal-di-schiena-sections/OfferSection'
import FAQSection from '../../components/mal-di-schiena-sections/FAQSection'
import FooterSection from '../../components/mal-di-schiena-sections/FooterSection'
import WhatsAppButton from '../../components/WhatsAppButton'

function MalDiSchiena() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <VSLSection />
      <PainPointsSection />
      <OfferSection />
      <FAQSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  )
}

export default MalDiSchiena

