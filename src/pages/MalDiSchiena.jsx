import React from 'react'
import VSLSection from '../components/mal-di-schiena-sections/VSLSection'
import OfferSection from '../components/mal-di-schiena-sections/OfferSection'
import FooterSection from '../components/mal-di-schiena-sections/FooterSection'
import WhatsAppButton from '../components/WhatsAppButton'

function MalDiSchiena() {
  return (
    <div className="min-h-screen bg-white">
      <VSLSection />
      <OfferSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  )
}

export default MalDiSchiena

