import React, { useState, useEffect } from 'react'

const MobilitasFitness = () => {
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
      
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-8 flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Fitness Club</span>
          </div>

          {/* Main Headline */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
              <span className="block bg-gradient-to-r from-blue-900 via-blue-600 to-green-500 bg-clip-text text-transparent uppercase">
                Mobilitas
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-blue-dark mt-4 uppercase">
                Fitness Club
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`mb-12 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-xl md:text-2xl text-blue-dark/80 font-light leading-relaxed max-w-4xl mx-auto">
              Una community di persone che amano <span className="font-bold text-blue-600">prendersi cura della propria salute e benessere</span> attraverso attività fisiche condivise e momenti di connessione.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1500 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <a 
              href="#activities" 
              className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 no-underline"
            >
              <span className="relative z-10">Scopri le Attività</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</div>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* WHAT IS SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Cos'è</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-blue-dark mb-8 leading-tight mt-0">
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    Mobilitas Fitness Club
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100">
                  <p className="text-blue-dark font-medium leading-relaxed text-lg">
                    Insieme di attività proposte da noi per creare una <span className="font-bold text-blue-600">community di persone</span> che amano prendersi cura della propria salute e benessere.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
                  <p className="text-blue-dark font-medium leading-relaxed text-lg">
                    Un modo per <span className="font-bold text-green-600">stare insieme</span>, condividere momenti di movimento e costruire relazioni significative attraverso l'attività fisica.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏃‍♀️</div>
                  <h3 className="text-2xl font-bold mb-4">Movimento + Community</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Perché allenarsi da soli è noioso. 
                    Insieme è più divertente, motivante e sostenibile nel tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section id="activities" className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Le Nostre Attività</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-8 leading-tight mt-0">
              Due modi per
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                muoverti insieme
              </span>
            </h2>
            <p className="text-xl text-blue-dark/70 max-w-3xl leading-relaxed">
              Scegli l'attività che fa per te e unisciti alla nostra community di persone che vogliono stare bene divertendosi.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mobilitas Walk Card */}
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard('walk')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 border border-white/50 rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  🚶‍♀️
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-blue-dark mb-4">Mobilitas Walk</h3>
                <p className="text-blue-dark/70 leading-relaxed mb-6">
                  Camminate di gruppo per tutti i livelli. Un modo dolce e piacevole per muoversi, 
                  socializzare e godersi la natura insieme ad altre persone.
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-dark/80 text-sm">Per tutti i livelli di fitness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-dark/80 text-sm">Ritmi naturali e rilassanti</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-dark/80 text-sm">Momenti di condivisione</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Elements */}
              {hoveredCard === 'walk' && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-ping"></div>
              )}
            </div>

            {/* Mobilitas Running Card */}
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard('running')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-gradient-to-br from-green-50 to-green-100 border border-white/50 rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  🏃‍♂️
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-blue-dark mb-4">Mobilitas Running</h3>
                <p className="text-blue-dark/70 leading-relaxed mb-6">
                  Gruppo di corsa per chi vuole sfidarsi e migliorare le proprie performance. 
                  Insieme si va più lontano e si superano i propri limiti.
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-blue-dark/80 text-sm">Training progressivi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-blue-dark/80 text-sm">Obiettivi condivisi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-blue-dark/80 text-sm">Motivazione di gruppo</span>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Elements */}
              {hoveredCard === 'running' && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-ping"></div>
              )}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl px-8 py-12 text-left mt-20">
            <div className="text-5xl mb-6">💪</div>
            <h3 className="text-3xl font-bold text-blue-dark mb-6">Pronto a muoverti con noi?</h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed mb-8">
              Unisciti alla community Mobilitas Fitness Club e scopri come l'attività fisica diventa più divertente e sostenibile quando la fai insieme ad altre persone.
            </p>
            
            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/393518198457?text=Ciao%21%20Sono%20interessato%20a%20Mobilitas%20Fitness%20Club.%20Vorrei%20saperne%20di%20più%20sulle%20attività%20proposte.%20Grazie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-400 transition-all duration-300 hover:scale-105 no-underline"
            >
              <span className="relative z-10">
                💬 Scrivici su WhatsApp<br />
                per maggiori informazioni
              </span>
              <div className="absolute inset-0 bg-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobilitasFitness