import React, { useState, useEffect } from 'react'

const Edenred = () => {
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
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Convenzione Welfare</span>
            </div>

            {/* Main Headline - Mobile Optimized */}
            <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-dark mb-4">
                <span className="block">Convenzione con</span>
                <div className="flex items-center mt-2">
                  <span className="block">Edenred</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-blue-dark/90 font-light leading-relaxed">
                Puoi utilizzare i welfare aziendali Edenred per i nostri servizi di osteopatia e benessere
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
              Perché abbiamo scelto
              <span className="block text-blue-dark">
                Edenred
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Una scelta strategica per rendere i nostri servizi accessibili a tutti attraverso i welfare aziendali
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Main Reason */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💳
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Accessibilità per Tutti</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Abbiamo deciso di fare la convenzione con <strong>Edenred</strong> per dare la possibilità a tutti quanti di usare i <strong>welfare aziendali</strong> per usufruire dei nostri servizi con scontistiche specifiche. Un modo per rendere il benessere accessibile a tutti i lavoratori.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Vantaggi della Convenzione</h3>
                    <div className="space-y-3">
                      {[
                        "Utilizzo dei welfare aziendali per i nostri servizi",
                        "Scontistiche specifiche per i titolari di voucher Edenred",
                        "Accesso facilitato ai trattamenti osteopatici",
                        "Benefici per il benessere di tutti i lavoratori"
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
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Benessere accessibile per tutti
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-2xl mx-auto leading-relaxed">
              Grazie alla convenzione con Edenred, tutti i lavoratori possono accedere ai nostri servizi di benessere utilizzando i welfare aziendali, rendendo la cura della salute più accessibile e conveniente.
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
              Passaggi semplici per accedere ai nostri servizi con i welfare aziendali
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Accedi alla piattaforma Edenred",
                  description: "Accedi alla piattaforma welfare della tua azienda e genera un voucher per i nostri servizi"
                },
                {
                  step: "2", 
                  title: "Prenota il tuo appuntamento",
                  description: "Contattaci per prenotare la tua visita presso il nostro studio"
                },
                {
                  step: "3",
                  title: "Presenta il voucher al pagamento",
                  description: "Al momento del pagamento, presenta il voucher generato dalla piattaforma Edenred per usufruire delle scontistiche"
                },
                {
                  step: "4",
                  title: "Goditi il benessere",
                  description: "Ricevi i nostri trattamenti osteopatici e servizi di benessere con i vantaggi della convenzione"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
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

export default Edenred
