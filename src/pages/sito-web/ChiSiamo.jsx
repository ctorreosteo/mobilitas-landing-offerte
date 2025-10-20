import React, { useEffect } from 'react'

const ChiSiamo = () => {
  // SEO metadata for Chi Siamo page
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Chi Siamo | Studio Osteopatico Mobilitas Torino – Osteopati Specializzati'

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

    const description = 'Conosci il team di osteopati specializzati di Mobilitas Torino. La nostra storia, missione e valori per il benessere dei pazienti. Esperienza e professionalità al servizio della tua salute.'
    const pageUrl = `${window.location.origin}/chi-siamo`

    // Standard SEO
    ensureMetaByName('description', description)
    ensureMetaByName('robots', 'index, follow')
    ensureMetaByName('keywords', 'chi siamo mobilitas, osteopati torino, team osteopatico, storia mobilitas, osteopati specializzati torino')

    // Open Graph
    ensureMetaByProperty('og:title', 'Chi Siamo | Studio Osteopatico Mobilitas Torino')
    ensureMetaByProperty('og:description', description)
    ensureMetaByProperty('og:type', 'website')
    ensureMetaByProperty('og:url', pageUrl)
    ensureMetaByProperty('og:site_name', 'Mobilitas – Studio Osteopatico Torino')

    // Canonical
    ensureCanonical(pageUrl)

    return () => {
      document.title = previousTitle
    }
  }, [])
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-dark mb-8 font-montserrat">
          Chi Siamo
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center text-blue-dark/80 mb-8 font-montserrat">
            La nostra storia, la nostra missione e i valori che ci guidano ogni giorno.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
                La Nostra Storia
              </h2>
              <p className="text-blue-dark/80 font-montserrat">
                Da anni ci dedichiamo con passione al benessere dei nostri pazienti, 
                offrendo servizi di alta qualità nel campo dell'osteopatia.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
                La Nostra Missione
              </h2>
              <p className="text-blue-dark/80 font-montserrat">
                Il nostro obiettivo è aiutare ogni persona a raggiungere il massimo 
                del proprio potenziale di salute e benessere attraverso terapie personalizzate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiSiamo
