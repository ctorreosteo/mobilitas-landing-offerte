import React, { useState, useEffect } from 'react'

const MobilitasCard = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-blue-dark font-montserrat overflow-hidden">
      
      {/* HERO SECTION - Bending Spoons Inspired */}
      <section className="relative pt-16 pb-8 flex items-center justify-center overflow-hidden">
        {/* Dynamic Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
          {/* Main Headline with Dynamic Typography */}
          <div className={`mb-6 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
              <span className="block bg-gradient-to-r from-blue-900 via-blue-600 to-green-500 bg-clip-text text-transparent uppercase">
                Mobilitas
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-blue-dark mt-4 uppercase">
                Card
              </span>
            </h1>
          </div>

          {/* Card Image */}
          <div className={`mb-8 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex justify-center">
              <img 
                src="/card/card.png" 
                alt="Mobilitas Card" 
                className="max-w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>

          {/* Subtitle with Enhanced Styling */}
          <div className={`mb-8 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-xl md:text-2xl text-blue-dark/80 font-light leading-relaxed max-w-4xl mx-auto">
              Trasforma ogni momento di benessere in <span className="font-semibold text-blue-600">crediti preziosi</span>. 
              Un programma fedeltà che premia la tua dedizione alla salute.
            </p>
          </div>

          {/* CTA Button with Modern Design */}
          <div className={`transition-all duration-1500 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <button className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Richiedi la tua Card</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* WHAT IS MOBILITAS CARD - Asymmetric Layout */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Cos'è</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-blue-dark mb-8 leading-tight mt-0">
                  La tua tessera
                  <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    fedeltà digitale
                  </span>
                </h2>
                <p className="text-xl text-blue-dark/70 leading-relaxed">
                  Una tessera targata Mobilitas che ti permette di raccogliere punti per ogni trattamento o percorso che fai nel nostro studio. Si possono guadagnare punti anche portando amici/parenti o partecipando ad eventi specifici organizzati dal nostro studio.
                </p>
              </div>

              {/* Earning Points - Modern List */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-dark">Come guadagnare punti</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🩺", text: "Trattamenti osteopatici" },
                    { icon: "🏃", text: "Percorsi di benessere" },
                    { icon: "📊", text: "Check posturali" },
                    { icon: "🎉", text: "Partecipazione a eventi" },
                    { icon: "👥", text: "Inviti ad amici e parenti" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-blue-dark font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Visual Card Mockup */}
            <div className="relative">
              <div className="relative">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 rounded-3xl transform rotate-1 scale-102 opacity-30"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold">Mobilitas</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">💳</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm opacity-80 mb-2">Crediti Attuali</div>
                      <div className="text-4xl font-black">2,450</div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm opacity-80">Livello</div>
                        <div className="text-lg font-bold">Gold</div>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👑</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="text-sm opacity-80">Prossimo premio</div>
                    <div className="text-lg font-semibold">Trattamento omaggio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - Dynamic Grid Layout */}
      <section className="relative pt-16 pb-32 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header - Left Aligned */}
          <div className="text-left mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">I Vantaggi</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-blue-dark mb-8 leading-tight mt-0">
              I tuoi Credits ti
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                sbloccano
              </span>
            </h2>
            <p className="text-xl text-blue-dark/70 max-w-3xl leading-relaxed">
              Accumula punti e accedi a vantaggi esclusivi pensati per il tuo benessere
            </p>
          </div>

          {/* Benefits - Hexagonal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🎁",
                title: "Trattamenti Omaggio",
                description: "Usa i tuoi Credits per accedere a trattamenti osteopatici completamente gratuiti",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                icon: "🔍",
                title: "Check Gratuiti",
                description: "Check posturali periodici gratuiti per monitorare il tuo benessere",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100"
              },
              {
                icon: "🎉",
                title: "Eventi Riservati",
                description: "Accesso esclusivo a workshop, seminari e eventi speciali",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100"
              },
              {
                icon: "⚡",
                title: "Posti Prioritari",
                description: "Priorità nelle liste d'attesa per prenotazioni immediate",
                gradient: "from-yellow-500 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-100"
              },
              {
                icon: "👑",
                title: "Sessioni VIP",
                description: "Trattamenti esclusivi con osteopati senior e specialisti",
                gradient: "from-pink-500 to-rose-500",
                bgGradient: "from-pink-50 to-rose-100"
              },
              {
                icon: "🎒",
                title: "Premi Fisici",
                description: "Magliette premium, zaino Mobilitas Walkers e altri gadget esclusivi",
                gradient: "from-indigo-500 to-indigo-600",
                bgGradient: "from-indigo-50 to-indigo-100"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${benefit.bgGradient} border border-white/50 rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}>
                    {benefit.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-blue-dark mb-4">{benefit.title}</h3>
                  <p className="text-blue-dark/70 leading-relaxed">{benefit.description}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>
                
                {/* Floating Elements */}
                {hoveredCard === index && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-ping"></div>
                )}
              </div>
            ))}
          </div>

          {/* Stats Section - Bending Spoons Style */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-12 text-left">
            <h3 className="text-3xl font-bold text-blue-dark mb-12">I numeri del programma</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-blue-dark/70 font-medium">Crediti guadagnati al mese</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-blue-dark/70 font-medium">Soddisfazione clienti</div>
              </div>
              <div>
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-blue-dark/70 font-medium">Accesso ai vantaggi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GET CARD - Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-green-700/90"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/50 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8">
                <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Come Ottenerla</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight mt-0">
                Richiedi la tua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
                  Mobilitas Card
                </span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-12">
                Vieni a trovarci nel nostro studio e richiedi la tua Mobilitas Card. Il nostro team ti spiegherà tutti i dettagli del programma fedeltà e ti aiuterà a iniziare subito a guadagnare i tuoi primi punti.
              </p>

              {/* Requirements */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-12">
                <h4 className="text-xl font-bold text-white mb-4 mt-0">Cosa portare:</h4>
                <div className="space-y-3">
                  {[
                    "Documento di identità",
                    "Tessera sanitaria",
                    "Numero di telefono e email"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:393518198457" 
                  className="group relative inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-105 no-underline"
                >
                  <span className="relative z-10">📞 Chiamaci ora</span>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://wa.me/393518198457?text=Ciao%2C%20vorrei%20fare%20la%20tessera%20Mobilitas%20Card.%20Quando%20la%20posso%20fare%3F%20Grazie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-8 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-400 transition-all duration-300 hover:scale-105 no-underline"
                >
                  <span className="relative z-10">💬 Scrivici su WhatsApp</span>
                  <div className="absolute inset-0 bg-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              {/* Main Card Visual */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-2xl scale-110"></div>
                
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl font-bold">Mobilitas</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">💳</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm opacity-80 mb-2">Crediti Attuali</div>
                      <div className="text-4xl font-black">0</div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm opacity-80">Livello</div>
                        <div className="text-lg font-bold">Starter</div>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⭐</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="text-sm opacity-80">Prossimo premio</div>
                    <div className="text-lg font-semibold">Inizia a guadagnare!</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-left mt-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Inizia oggi il tuo percorso di benessere
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Non aspettare. Vieni a richiedere la tua Mobilitas Card e inizia subito a guadagnare punti con ogni trattamento e percorso di benessere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobilitasCard
