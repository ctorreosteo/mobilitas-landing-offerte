import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CheckCircle2, Check } from 'lucide-react'

export default function LmGpadelSconto39() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // SEO metadata for GPADEL Sconto 39€ landing page
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Trattamento Osteopatico 39€ per Padelisti | Offerta Esclusiva GPADEL | Mobilitas Torino'

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

    const description = 'Trattamento osteopatico completo a 39€ invece di 90€ per padelisti. Offerta esclusiva GPADEL: anamnesi, valutazione posturale, trattamento personalizzato e consigli. Prevenzione infortuni e miglioramento performance. Studio Mobilitas Torino.'
    const pageUrl = `${window.location.origin}/lm-gpadel-sconto39`

    // Standard SEO
    ensureMetaByName('description', description)
    ensureMetaByName('robots', 'index, follow')
    ensureMetaByName('keywords', 'trattamento osteopatico padelisti, osteopata padel torino, sconto padelisti, offerta gpadel, trattamento osteopatico 39€, prevenzione infortuni padel, osteopatia sportiva torino, trattamento posturale padel, studio osteopatico torino padelisti')

    // Open Graph
    ensureMetaByProperty('og:title', 'Trattamento Osteopatico 39€ per Padelisti | Offerta Esclusiva GPADEL')
    ensureMetaByProperty('og:description', description)
    ensureMetaByProperty('og:type', 'website')
    ensureMetaByProperty('og:url', pageUrl)
    ensureMetaByProperty('og:site_name', 'Mobilitas – Studio Osteopatico Torino')

    // Twitter Card
    ensureMetaByName('twitter:card', 'summary_large_image')
    ensureMetaByName('twitter:title', 'Trattamento Osteopatico 39€ per Padelisti | Offerta Esclusiva GPADEL')
    ensureMetaByName('twitter:description', description)

    // Canonical
    ensureCanonical(pageUrl)

    return () => {
      document.title = previousTitle
    }
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Ciao, vorrei prenotare il trattamento osteopatico scontato a 39€ tramite offerta GPADEL. Quando avete posto? Grazie e a presto!");
    window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
  }

  const benefits = [
    {
      title: "Risoluzione dei dolori",
      description: "Riduce o elimina dolori acuti e cronici legati alla postura, allo stress o ad abitudini scorrette, anche quelli a cui ti sei abituato senza accorgertene."
    },
    {
      title: "Recupero più veloce e profondo",
      description: "Migliora la circolazione e favorisce il rilassamento muscolare, permettendoti di recuperare più rapidamente dopo giornate intense o stressanti."
    },
    {
      title: "Più energia e leggerezza nel corpo",
      description: "Aiuta a riequilibrare il sistema muscolo-scheletrico e neurovegetativo, migliorando sonno, respirazione e vitalità generale."
    },
    {
      title: "Per sportivi e padelisti",
      description: "Previene infortuni e migliora le performance: riduce il rischio di lesioni a spalla, gomito e caviglie, potenzia la coordinazione e rende i movimenti più fluidi e reattivi in campo."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-blue-dark font-montserrat">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-start lg:mt-32">
            {/* Left: Badge + Title */}
            <div className="order-1 lg:order-1 w-full">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mt-4 mb-0"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2"></div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Offerta Esclusiva GPADEL</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-3 lg:mb-0"
              >
                <span className="block text-blue-dark">
                  Trattamento Osteopatico
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mt-0">
                  Specifico per le tue esigenze
                </span>
              </motion.h1>
            </div>

            {/* Right Column: Image + Offer - Desktop: right side, Mobile: after title */}
            <div className="order-2 lg:order-2 w-full flex flex-col">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-start mb-6 lg:mb-8"
              >
                <img
                  src="/landing-pages/lm-gpadel-infortuni-foto1.png"
                  alt="Trattamento osteopatico per padelisti"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Offer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8 lg:mb-0"
              >
                <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-2xl p-6 border border-blue-100/50">
                  <h3 className="text-2xl lg:text-3xl font-black text-blue-dark mb-6 leading-tight">
                    Trattamento Osteopatico (durata di 1h)
                  </h3>
                  <ul className="list-none mb-8 space-y-1.5 pl-4">
                    <li className="flex items-start group">
                      <div className="bg-azure-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="text-white w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-blue-dark font-medium pt-1">Anamnesi generale</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-azure-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="text-white w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-blue-dark font-medium pt-1">Valutazione posturale</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-azure-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="text-white w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-blue-dark font-medium pt-1">Trattamento specifico per te</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-azure-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="text-white w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-blue-dark font-medium pt-1">Consigli per stare meglio</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-blue-200/50">
                    <div className="flex items-baseline gap-3">
                      <span className="text-blue-dark/70 text-sm font-medium">A soli:</span>
                      <span className="text-2xl font-bold line-through text-red-500/80">90€</span>
                      <span className="text-5xl lg:text-6xl font-black text-azure-dark leading-none">39€</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Button - Centered below the grid on desktop, after offer on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center mt-8 lg:mt-12"
          > 
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center px-8 py-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-montserrat"
            >
              <span className="relative z-10 flex flex-col items-center">
                <span className="uppercase">Prenota il trattamento scontato</span>
                <span className="text-sm font-normal normal-case">(Con offerta esclusiva GPADEL)</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">I Benefici del trattamento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-dark mb-6 leading-tight">
              Perché scegliere il
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Trattamento Osteopatico?
              </span>
            </h2>
            <div className="mb-8">
              <img
                src="/influencer/inf1.png"
                alt="Trattamento osteopatico"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
              >
                <CheckCircle2 className="mt-1 mr-4 text-azure-dark w-6 h-6 shrink-0" />
                <div className="flex-1">
                  <h3 className="text-blue-dark font-bold text-lg mb-2 mt-0">{benefit.title}</h3>
                  <p className="text-blue-dark/90 leading-relaxed mt-0">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center px-8 py-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-montserrat"
            >
              <span className="relative z-10 flex flex-col items-center">
                <span className="uppercase">Prenota il trattamento scontato</span>
                <span className="text-sm font-normal normal-case">(Con offerta esclusiva GPADEL)</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

