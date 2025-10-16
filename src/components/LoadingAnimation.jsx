import React, { useState, useEffect } from 'react'

const LoadingAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const hideAnimation = () => {
    setIsVisible(false)
    // Chiama la callback dopo che l'animazione di uscita è completata
    setTimeout(() => {
      onComplete()
    }, 800) // Durata dell'animazione di uscita
  }

  useEffect(() => {
    // Mostra il contenuto dopo un breve delay per l'animazione di entrata
    const showTimer = setTimeout(() => {
      setShowContent(true)
    }, 300)

    // Nasconde l'animazione dopo 2 secondi
    const hideTimer = setTimeout(() => {
      hideAnimation()
    }, 2000)

    // Listener per l'evento scroll - nasconde l'animazione immediatamente
    const handleScroll = () => {
      hideAnimation()
    }

    // Aggiungi il listener per scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleScroll, { passive: true })
    window.addEventListener('touchmove', handleScroll, { passive: true })

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      // Rimuovi tutti i listener
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#002552] to-[#0ea5e9] transition-all duration-800 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 scale-110'
      }`}
    >
      {/* Logo con animazione di pulsazione */}
      <div
        className={`transition-all duration-700 ease-out ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <div className="relative">
          {/* Anello esterno animato */}
          <div className="absolute inset-0 rounded-full border-4 border-[#72fa93] animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full border-2 border-[#72fa93] animate-pulse opacity-40"></div>
          
          {/* Logo principale */}
          <div className="relative z-10 p-8 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20">
            <img
              src="/logo_blu.png"
              alt="Mobilitas Logo"
              className="w-24 h-24 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Testo di benvenuto */}
      <div
        className={`mt-8 text-center transition-all duration-700 delay-200 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-montserrat">
          Benvenuti in Mobilitas
        </h1>
        <p className="text-lg md:text-xl text-[#72fa93] font-medium font-montserrat">
          lo Studio Osteopatico più Esclusivo d'Italia
        </p>
      </div>

      {/* Indicatore di caricamento moderno */}
      <div
        className={`mt-8 transition-all duration-700 delay-400 ease-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-[#72fa93] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#72fa93] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#72fa93] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Effetti di particelle animate */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-[#72fa93] rounded-full opacity-30 ${
              showContent ? 'animate-float' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default LoadingAnimation
