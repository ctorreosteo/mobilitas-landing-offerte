import React, { useState, useEffect } from 'react'

const OsteopataTorinoConferma = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Google Ads conversion tracking
  useEffect(() => {
    // Track conversion when user reaches confirmation page
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16532564533/wZVSCMffzrAbELXUq8s9',
        'value': 49.0,
        'currency': 'EUR'
      })
      console.log('Conversion tracked: LEAD - Osteopata Torino')
    }
  }, [])

  // SEO metadata for confirmation page
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Conferma richiesta | Osteopata Torino – Studio Osteopatico Mobilitas'

    const ensureMetaByName = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const ensureMetaByProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const ensureCanonical = (href) => {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    const description = 'Conferma richiesta trattamento osteopatico. Mobilitas – Studio Osteopatico Torino (mal di schiena, cervicale, sciatalgia, emicrania, postura). Verrai richiamato dalla segreteria o contattaci su WhatsApp.'
    const pageUrl = `${window.location.origin}/osteopata-torino-conferma`

    ensureMetaByName('description', description)
    ensureMetaByName('robots', 'noindex, nofollow')
    ensureMetaByName('keywords', 'osteopata torino, studio osteopatico torino, osteopatia, mal di schiena, cervicale, sciatalgia, emicrania, postura, prima visita 49€')

    ensureMetaByProperty('og:title', 'Conferma richiesta | Osteopata Torino – Mobilitas')
    ensureMetaByProperty('og:description', description)
    ensureMetaByProperty('og:type', 'website')
    ensureMetaByProperty('og:url', pageUrl)
    ensureMetaByProperty('og:site_name', 'Mobilitas – Studio Osteopatico Torino')

    ensureCanonical(pageUrl)

    return () => {
      document.title = prevTitle
    }
  }, [])

  const handleWhatsAppClick = () => {
    const message = `Ciao! Ho appena compilato il form per prenotare il trattamento osteopatico con l'offerta. Vorrei saltare la lista d'attesa e prenotare subito. Grazie!`
    const whatsappUrl = `https://wa.me/393518198457?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-blue-dark font-montserrat overflow-hidden">
      {/* CONFIRMATION SECTION */}
      <section className="relative pt-20 pb-20 flex items-center justify-center overflow-hidden min-h-screen">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-green-500/5"></div>
          
          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-300/15 to-green-400/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          {/* Success Icon */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-white text-4xl">✓</span>
            </div>
          </div>

          {/* Main Message */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-4xl md:text-6xl font-black text-blue-dark mb-6 leading-tight">
              Richiesta effettuata
              <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mt-2">
                correttamente!
              </span>
            </h1>
          </div>

          {/* Confirmation Details */}
          <div className={`mb-12 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-100 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-dark mb-4">
                  Verrai chiamato dalla nostra segreteria
                </h2>
                <p className="text-lg text-blue-dark/70 leading-relaxed mb-6">
                  Ti contatteremo al numero <span className="font-bold text-blue-600">3518198457</span> per prenotare 
                  il giorno e l'orario che preferisci.
                </p>
                
                {/* Save Number Button */}
                <div className="mb-8">
                  <button 
                    onClick={() => {
                      const phoneNumber = '393518198457'
                      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Mobilitas Segreteria\nTEL:${phoneNumber}\nEND:VCARD`
                      const blob = new Blob([vcard], { type: 'text/vcard' })
                      const url = URL.createObjectURL(blob)
                      const link = document.createElement('a')
                      link.href = url
                      link.download = 'mobilitas-segreteria.vcf'
                      link.click()
                      URL.revokeObjectURL(url)
                    }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg font-montserrat"
                  >
                    <span className="mr-2">📱</span>
                    Salva il numero
                  </button>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="border-t border-gray-200 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-dark mb-4">
                    Vuoi saltare la lista d'attesa?
                  </h3>
                  <p className="text-blue-dark/70 mb-6">
                    Se vuoi prenotare subito senza aspettare la chiamata, scrivici su WhatsApp!
                  </p>
                  
                  <button 
                    onClick={handleWhatsAppClick}
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 font-montserrat"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-3 text-2xl">💬</span>
                      <div className="text-left">
                        <div>Salta la lista d'attesa</div>
                        <div className="text-sm font-normal opacity-90">Scrivici su WhatsApp</div>
                      </div>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`transition-all duration-1500 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">ℹ️</span>
                </div>
                <h4 className="text-lg font-bold text-blue-dark">Informazioni utili</h4>
              </div>
              <div className="text-blue-dark/70 text-sm space-y-2">
                <p>• La nostra segreteria ti chiamerà entro 24 ore</p>
                <p>• Puoi prenotare per qualsiasi giorno della settimana</p>
                <p>• L'offerta è valida solo per {new Date().toLocaleDateString('it-IT', { month: 'long' })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OsteopataTorinoConferma
