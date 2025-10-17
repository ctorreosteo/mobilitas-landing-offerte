import React, { useState, useEffect } from 'react'

const Allianz = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white text-blue-dark font-montserrat">
      
      {/* HERO SECTION */}
      <section className="relative flex items-start justify-center overflow-hidden bg-white pt-8 pb-0">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
        </div>

        {/* Minimal Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-dark rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-0">
          <div className="text-left">
            
            {/* Badge - Top Left Alignment */}
            <div className={`inline-flex items-center px-4 py-2 bg-transparent border border-gray-400 rounded-full mb-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Convenzione Diretta</span>
            </div>

            {/* Main Headline - Mobile Optimized */}
            <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-dark mb-4">
                <span className="block">Convenzione con</span>
                <div className="flex items-center mt-2">
                  <span className="block">Allianz Assicurazioni</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-blue-dark/90 font-light leading-relaxed">
                Convenzione diretta con prezzi specifici per i clienti Allianz Assicurazioni
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONVENZIONE SECTION */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">La Convenzione</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Convenzione diretta
              <span className="block text-blue-dark">
                con Allianz
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Una convenzione diretta che offre prezzi specifici e vantaggiosi per i clienti Allianz Assicurazioni
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Main Reason */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🤝
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Convenzione Diretta</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Abbiamo stipulato una <strong>convenzione diretta con Allianz Assicurazioni</strong> che offre <strong>prezzi specifici e vantaggiosi</strong> per tutti i clienti Allianz che desiderano usufruire dei nostri servizi di osteopatia e benessere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💰
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Vantaggi della Convenzione</h3>
                    <div className="space-y-3">
                      {[
                        "Prezzi specifici e convenzionati per clienti Allianz",
                        "Accesso diretto ai nostri servizi di osteopatia",
                        "Trattamenti di benessere a condizioni privilegiate",
                        "Nessuna procedura complessa, convenzione diretta"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            ✓
                          </div>
                          <span className="text-blue-dark/80 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Convenzione diretta per il tuo benessere
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-2xl leading-relaxed">
              Grazie alla convenzione diretta con Allianz Assicurazioni, tutti i clienti possono accedere ai nostri servizi di osteopatia e benessere con prezzi specifici e vantaggiosi.
            </p>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA SECTION */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Come Funziona</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Come utilizzare
              <span className="block text-blue-dark">
                la convenzione
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Passaggi semplici per accedere ai nostri servizi con la convenzione Allianz
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Verifica la tua polizza Allianz",
                  description: "Assicurati di essere cliente Allianz Assicurazioni per usufruire della convenzione"
                },
                {
                  step: "2", 
                  title: "Prenota il tuo appuntamento",
                  description: "Contattaci per prenotare la tua visita presso il nostro studio"
                },
                {
                  step: "3",
                  title: "Presenta la tua polizza",
                  description: "Al momento del pagamento, presenta la documentazione della tua polizza Allianz per usufruire dei prezzi convenzionati"
                },
                {
                  step: "4",
                  title: "Goditi il benessere",
                  description: "Ricevi i nostri trattamenti osteopatici e servizi di benessere con i prezzi specifici della convenzione"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-blue-dark mb-2 mt-0">{item.title}</h3>
                    <p className="text-blue-dark/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Allianz
