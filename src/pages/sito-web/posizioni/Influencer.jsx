import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Influencer = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-blue-dark text-cream font-montserrat">
      
      {/* HERO SECTION - MOBILE-FIRST DESIGN */}
      <section className="relative flex items-start justify-center overflow-hidden bg-blue-dark pt-8 pb-20">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-blue-dark"></div>
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              background: `radial-gradient(circle at ${30 + scrollY * 0.01}% ${20 + scrollY * 0.005}%, #72fa93 0%, transparent 60%)`
            }}
          ></div>
        </div>

        {/* Minimal Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-green rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cream rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green/60 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-8">
          <div className="text-left">
            
            {/* Badge - Top Left Alignment */}
            <div className={`inline-flex items-center px-4 py-2 bg-transparent border border-gray-400 rounded-full mb-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-2 h-2 bg-green rounded-full mr-2"></div>
              <span className="text-green font-medium text-sm uppercase tracking-wider">Collaborazione Esclusiva</span>
            </div>

            {/* Main Headline - Mobile Optimized */}
            <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-cream mb-4">
                <span className="block">Influencer?</span>
                <div className="flex items-center mt-2">
                  <span className="block">Collabora con noi</span>
                  <div className="w-2 h-2 bg-green rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Hero Image - Ultra Modern Design */}
            <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-full max-w-sm">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-cream/10 rounded-[2rem] blur-xl transform scale-110"></div>
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] border-2 border-green/30 shadow-2xl">
                  <img 
                    src="/influencer/inf1.png" 
                    alt="Influencer collaboration with OsteoTouch" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Subtitle - Two Paragraphs */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-cream/90 font-light leading-relaxed mb-4">
                Che tu sia un Influencer con una grande audience o semplicemente stai iniziando il tuo percorso...
              </p>
              <p className="text-lg text-cream/90 font-light leading-relaxed">
                Hai probabilmente trovato la tua prossima <span className="text-green font-medium">Collaborazione con il nostro Studio Osteopatico Mobilitas</span>
              </p>
            </div>

            {/* Key Benefits - Simple List */}
            <div className={`mb-10 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green/20 rounded-full flex items-center justify-center">
                    <span className="text-green text-sm">✓</span>
                  </div>
                  <span className="text-cream/80 text-base font-medium">Trattamenti Gratuiti (invece che 90€)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green/20 rounded-full flex items-center justify-center">
                    <span className="text-green text-sm">✓</span>
                  </div>
                  <span className="text-cream/80 text-base font-medium">Sconti Esclusivi per amici e parenti</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green/20 rounded-full flex items-center justify-center">
                    <span className="text-green text-sm">✓</span>
                  </div>
                  <span className="text-cream/80 text-base font-medium">Possibilità di monetizzazione</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Stacked Vertically */}
            <div className={`space-y-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Primary Button */}
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Ciao, ho visto la collaborazione per influencer e volevo candidarmi. Quali sono i prossimi step? Grazie");
                  window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                }}
                className="group w-full px-8 py-4 bg-gradient-to-r from-green to-cream text-blue-dark font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green/25 transition-all duration-500 transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Candidati Ora</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              {/* Secondary Button */}
              <button 
                onClick={() => {
                  const problemsSection = document.querySelector('section:nth-of-type(2)');
                  if (problemsSection) {
                    problemsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group w-full px-8 py-4 bg-transparent border-2 border-green text-green font-semibold text-lg rounded-full hover:bg-green hover:text-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Scopri di Più</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION - COMPLETELY REDESIGNED */}
      <section className="py-20 bg-gradient-to-b from-blue-dark via-blue-dark to-blue-dark relative overflow-hidden">
        {/* Background Effects - Consistent with first section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-blue-dark"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${30 + scrollY * 0.01}% ${20 + scrollY * 0.005}%, #ef4444 0%, transparent 60%)`
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${70 + scrollY * 0.008}% ${80 + scrollY * 0.003}%, #f97316 0%, transparent 50%)`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-red-400 font-medium text-sm uppercase tracking-wider">Problemi Comuni</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Cosa ti propongono
              <span className="block text-red-400">
                le altre aziende?
              </span>
            </h2>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed">
              Probabilmente ti stai chiedendo perché dovresti scegliere noi invece delle solite collaborazioni...
            </p>
          </div>

          {/* Problems Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left Column - Main Problems */}
            <div className="space-y-6">
              {[
                {
                  icon: "📦",
                  title: "Prodotti di dubbio valore",
                  description: "Shein, Temu, prodottini cinesi, robe vendute su Amazon con recensioni fasulle che poi giustamente chiudi in un cassetto",
                  color: "from-red-500 to-red-600"
                },
                {
                  icon: "📈",
                  title: "Sovraffollamento del mercato", 
                  description: "Sempre più persone che cercano di diventare influencer con collaborazioni tutte uguali che sporcano il mercato",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: "📉",
                  title: "Engagement ridotto",
                  description: "Gli algoritmi affossano la crescita perché tutti pubblicano cose simili e gli algoritmi sono meno propensi a farti crescere",
                  color: "from-yellow-500 to-yellow-600"
                }
              ].map((problem, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${problem.color} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
                        {problem.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-cream mb-0 mt-0 group-hover:text-red-300 transition-colors duration-300">
                          {problem.title}
                        </h3>
                        <p className="text-cream/70 leading-relaxed text-sm group-hover:text-cream/90 transition-colors duration-300">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Additional Problems */}
            <div className="space-y-6">
              {[
                {
                  icon: "💰",
                  title: "Monetizzazione difficile",
                  description: "Le aziende fanno di tutto per non pagarti e sfruttare al massimo il tuo tempo e le tue risorse",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  icon: "🎨",
                  title: "Creatività in calo",
                  description: "Riuscire a trovare idee nuove per pubblicare cose diverse è sempre più difficile, perché ormai si copiano tutti",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: "⏰",
                  title: "Sfruttamento del tempo",
                  description: "Collaborazioni che richiedono ore di lavoro per compensi irrisori o addirittura gratuiti",
                  color: "from-indigo-500 to-indigo-600"
                }
              ].map((problem, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${problem.color} rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0`}>
                        {problem.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-cream mb-0 mt-0 group-hover:text-pink-300 transition-colors duration-300">
                          {problem.title}
                        </h3>
                        <p className="text-cream/70 leading-relaxed text-sm group-hover:text-cream/90 transition-colors duration-300">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-left">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-3xl p-8 max-w-2xl">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-2xl font-bold text-cream mb-4">
                Stanco di queste collaborazioni?
              </h3>
              <p className="text-cream/80 mb-6">
                È ora di cambiare approccio e trovare qualcosa di davvero valido
              </p>
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Ciao, ho visto la collaborazione per influencer e volevo candidarmi. Quali sono i prossimi step? Grazie");
                  window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                }}
                className="group relative px-8 py-4 bg-green text-blue-dark font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green/25 transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Collabora con noi</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - COMPLETELY REDESIGNED */}
      <section className="py-20 bg-gradient-to-b from-blue-dark via-blue-dark to-blue-dark relative overflow-hidden">
        {/* Background Effects - Consistent with first section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-blue-dark"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${30 + scrollY * 0.01}% ${20 + scrollY * 0.005}%, #72fa93 0%, transparent 60%)`
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${70 + scrollY * 0.008}% ${80 + scrollY * 0.003}%, #F4F4F4 0%, transparent 50%)`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green/10 border border-green/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green rounded-full mr-2"></div>
              <span className="text-green font-medium text-sm uppercase tracking-wider">I Nostri Vantaggi</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Perché lavorare
              <span className="block text-green">
                con noi?
              </span>
            </h2>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed">
              Ecco cosa ci rende diversi e perché dovresti scegliere proprio noi per la tua prossima collaborazione
            </p>
          </div>

          {/* Main Benefits - Hero Style */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Trattamenti Gratuiti",
                  description: "I nostri trattamenti hanno un costo di 90€ ciascuno, per te saranno completamente gratuiti durante tutta la collaborazione.",
                  icon: "💆‍♀️",
                  color: "from-green to-green-600",
                  bgColor: "from-green/5 to-green/10"
                },
                {
                  number: "02", 
                  title: "Sconti Esclusivi",
                  description: "Avrai accesso a codici Coupon che potrai dare illimitatamente ai tuoi parenti e amici più stretti per i nostri servizi.",
                  icon: "🎟️",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-500/5 to-blue-600/10"
                },
                {
                  number: "03",
                  title: "Piano di Monetizzazione",
                  description: "Possiamo creare e strutturare insieme un piano di monetizzazione per rendere la collaborazione molto profittevole per entrambi.",
                  icon: "💰",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-500/5 to-purple-600/10"
                }
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className={`bg-gradient-to-r ${benefit.bgColor} border border-green/20 rounded-3xl p-8 h-full hover:border-green/60 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2`}>
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {benefit.number}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="text-5xl mb-6">{benefit.icon}</div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-cream mb-4 group-hover:text-green transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-cream/80 leading-relaxed group-hover:text-cream transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do Together - Redesigned */}
          <div className="mb-16">
            <div className="text-left mb-12">
              <h3 className="text-3xl font-bold text-cream mb-4">Cosa faremo insieme?</h3>
              <p className="text-lg text-cream/70">Un processo strutturato per massimizzare i risultati</p>
            </div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Registrazione professionale dei trattamenti",
                  description: "Registrazione, video editing e montaggio post-produzione potranno essere completamente a carico nostro se tu non hai la possibilità di farlo.",
                  icon: "🎥",
                  step: "1",
                  image: "/influencer/inf2.png"
                },
                {
                  title: "Creazione contenuti e piano editoriale su misura", 
                  description: "Creeremo un piano editoriale su misura con un obiettivo preciso sia per noi sia per te. Il piano includerà un video dell'esperienza in studio, post/storie e la registrazione integrale professionale dei trattamenti su YouTube.",
                  icon: "📝",
                  step: "2",
                  image: "/influencer/inf3.png"
                },
                {
                  title: "Sponsorizzazione e ampliamento della visibilità",
                  description: "Abbiamo la possibilità di sponsorizzare i post a Torino per aumentare visibilità sia del nostro studio sia eventualmente della tua figura",
                  icon: "📈",
                  step: "3",
                  image: "/influencer/inf4.png"
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="flex items-start space-x-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 overflow-hidden rounded-xl border-2 border-green/30">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Step Number Overlay */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-green to-cream rounded-full flex items-center justify-center text-blue-dark font-bold text-sm">
                          {item.step}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cream mt-0 mb-0 group-hover:text-green transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-cream/80 leading-relaxed group-hover:text-cream transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-left">
            <div className="bg-gradient-to-r from-green/10 to-cream/5 border border-green/30 rounded-3xl p-8 max-w-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-cream mb-4">
                Pronto/a a iniziare?
              </h3>
              <p className="text-cream/80 mb-6">
                Unisciti agli influencer che hanno già scelto di collaborare con noi
              </p>
              <button 
                onClick={() => {
                  const message = encodeURIComponent("Ciao, ho visto la collaborazione per influencer e volevo candidarmi. Quali sono i prossimi step? Grazie");
                  window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                }}
                className="group relative px-8 py-4 bg-green text-blue-dark font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green/25 transition-all duration-500 transform hover:scale-105 border-0 focus:outline-none"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Inizia la collaborazione</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LA NOSTRA PROPOSTA SECTION - COMPLETELY REDESIGNED */}
      <section className="py-20 bg-gradient-to-b from-blue-dark via-blue-dark to-blue-dark relative overflow-hidden">
        {/* Background Effects - Consistent with other sections */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-blue-dark"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${30 + scrollY * 0.01}% ${20 + scrollY * 0.005}%, #72fa93 0%, transparent 60%)`
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${70 + scrollY * 0.008}% ${80 + scrollY * 0.003}%, #F4F4F4 0%, transparent 50%)`
            }}
          ></div>
        </div>

        {/* Minimal Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-green rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cream rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green/60 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green/10 border border-green/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green rounded-full mr-2"></div>
              <span className="text-green font-medium text-sm uppercase tracking-wider">La Nostra Proposta</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Una collaborazione
              <span className="block text-green">
                esclusiva e limitata
              </span>
            </h2>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed">
              Riservata solo a chi merita davvero di far parte del nostro team di collaboratori
            </p>
          </div>

          {/* Limited Spots Alert - Redesigned */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green/10 to-cream/5 border border-green/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green/5 to-cream/5 rounded-3xl blur-xl"></div>
              
              <div className="relative z-10">
                {/* Warning Icon */}
                <div className="text-left mb-0">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green/20 to-cream/10 rounded-full mb-0">
                    <div className="text-4xl">⚠️</div>
                  </div>
                </div>

                {/* Main Message */}
                <div className="text-left mb-12">
                  <h3 className="text-2xl md:text-4xl font-bold text-cream mb-6 leading-tight mt-0">
                    Collaboriamo solo con
                    <span className="block text-green font-bold">
                      massimo 25 persone nuove all'anno!
                    </span>
                  </h3>
                  <p className="text-lg text-cream/90 max-w-2xl leading-relaxed">
                    Iniziare con noi è davvero facile, ecco cosa devi fare
                  </p>
                </div>
                
                {/* Process Steps - Redesigned */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    {
                      title: "Compila il form",
                      description: "Invia la tua candidatura",
                      icon: "📝"
                    },
                    {
                      title: "Videochiamata conoscitiva", 
                      description: "Ci conosciamo a vicenda",
                      icon: "📹"
                    },
                    {
                      title: "Firma dei documenti",
                      description: "Finalizziamo l'accordo",
                      icon: "📋"
                    },
                    {
                      title: "Appuntamento in studio",
                      description: "Iniziamo la collaborazione",
                      icon: "🏥"
                    }
                  ].map((step, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-blue-dark/60 backdrop-blur-sm border border-green/20 rounded-2xl p-6 hover:border-green/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                        {/* Step Number */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green to-cream rounded-full flex items-center justify-center text-blue-dark font-bold text-sm">
                          {index + 1}
                        </div>
                        
                        {/* Content with Icon on the left */}
                        <div className="flex items-start space-x-3">
                          {/* Icon */}
                          <div className="text-2xl flex-shrink-0">{step.icon}</div>
                          
                          {/* Text Content */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-cream mb-2 mt-0 group-hover:text-green transition-colors duration-300">
                              {step.title}
                            </h4>
                            <p className="text-cream/70 text-sm group-hover:text-cream/90 transition-colors duration-300">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-left">
                  <button 
                    onClick={() => {
                      const message = encodeURIComponent("Ciao, ho visto la collaborazione per influencer e volevo candidarmi. Quali sono i prossimi step? Grazie");
                      window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                    }}
                    className="group relative px-12 py-6 bg-green text-blue-dark font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-green/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                  >
                    <span className="relative z-10 flex items-center space-x-4">
                      <span>Candidati per collaborare con noi</span>
                      <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Unique - Redesigned */}
          <div className="mb-16">
            <div className="text-left mb-12">
              <h3 className="text-3xl font-bold text-cream mb-4">
                Cosa rende unico il nostro Studio?
              </h3>
              <p className="text-lg text-cream/70">Ecco perché dovresti scegliere proprio noi</p>
            </div>
            
            <div className="bg-gradient-to-r from-green/5 to-cream/5 border border-green/20 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-green/10 border border-green/30 rounded-full mb-4">
                      <div className="w-2 h-2 bg-green rounded-full mr-2"></div>
                      <span className="text-green font-medium text-sm uppercase tracking-wider">Il Più Grande di Torino</span>
                    </div>
                    <p className="text-xl text-cream/90 leading-relaxed">
                      <strong className="text-cream">Mobilitas è lo Studio Osteopatico più importante di Torino.</strong>
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green to-cream rounded-full flex items-center justify-center text-blue-dark font-bold text-sm flex-shrink-0 mt-1">
                        🎯
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-cream mb-2 mt-0">Siamo in MISSIONE</h4>
                        <p className="text-cream/80 leading-relaxed">
                          Abbiamo il sogno e l'ambizione di aiutare più persone possibili a liberarsi da tutti quei dolori dovuti allo stile di vita moderno.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green to-cream rounded-full flex items-center justify-center text-blue-dark font-bold text-sm flex-shrink-0 mt-1">
                        👨‍⚕️
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-cream mb-2 mt-0">Esperti Specializzati</h4>
                        <p className="text-cream/80 leading-relaxed">
                          I nostri professionisti sono esperti nelle loro aree (gravidanza&pediatria, fitness, ecc.) e seguiamo la salute dei nostri pazienti a 360 gradi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-cream/10 rounded-3xl blur-xl transform scale-110"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-full h-64 overflow-hidden rounded-3xl border-2 border-green/30 shadow-2xl">
                      <img 
                        src="/influencer/inf6.png" 
                        alt="Studio Mobilitas - Il più importante di Torino"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/20 via-transparent to-transparent"></div>
                      
                      {/* Floating Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green/30 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream/30 rounded-full animate-pulse delay-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-left mt-12">
              <div className="bg-gradient-to-r from-green/10 to-cream/5 border border-green/30 rounded-3xl p-8 max-w-2xl">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-cream mb-4">
                  Pronto/a a collaborare con noi?
                </h3>
                <p className="text-cream/80 mb-6">
                  Inizia subito la tua collaborazione con il più importante studio osteopatico di Torino
                </p>
                <button 
                  onClick={() => {
                    const message = encodeURIComponent("Ciao, ho visto la collaborazione per influencer e volevo candidarmi. Quali sono i prossimi step? Grazie");
                    window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                  }}
                  className="group relative px-8 py-4 bg-green text-blue-dark font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green/25 transition-all duration-500 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Inizia la collaborazione</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMANDE FREQUENTI SECTION - COMPLETELY REDESIGNED */}
      <section className="py-20 bg-gradient-to-b from-blue-dark via-blue-dark to-blue-dark relative overflow-hidden">
        {/* Background Effects - Consistent with other sections */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-blue-dark"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${30 + scrollY * 0.01}% ${20 + scrollY * 0.005}%, #72fa93 0%, transparent 60%)`
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${70 + scrollY * 0.008}% ${80 + scrollY * 0.003}%, #F4F4F4 0%, transparent 50%)`
            }}
          ></div>
        </div>

        {/* Minimal Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-green rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cream rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green/60 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green/10 border border-green/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green rounded-full mr-2"></div>
              <span className="text-green font-medium text-sm uppercase tracking-wider">Domande Frequenti</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Hai domande?
              <span className="block text-green">
                Abbiamo le risposte!
              </span>
            </h2>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed">
              Ecco le domande più frequenti che ci fanno gli influencer interessati a collaborare con noi
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 mb-16">
            {[
              {
                q: "Non ho molta esperienza nella creazione di contenuti, come possiamo gestirla?",
                a: "Non c'è alcun problema, perché ci occupiamo noi di registrare tutto quanto e creare il video professionale finale. Qualora volessi pubblicare qualcosa di originale sulle tue pagine, ti diamo indicazioni su come fare!"
              },
              {
                q: "Ho paura delle \"scrocchiate\", dovete per forza farmele?",
                a: "Il lavoro dell'osteopata va ben oltre le \"scrocchiate\" e non sono di certo il focus principale di un vero professionista, tant'è vero che i nostri osteopati ne fanno davvero pochissime e si concentrano su tantissime altre tecniche molto efficaci. Le \"scrocchiate\" che vedi sui social sono principalmente per fare scena e sono davvero fuorvianti rispetto a quello che è il nostro lavoro. Quindi assolutamente possiamo evitarle!"
              },
              {
                q: "Quanto tempo richiede una sessione di registrazione o trattamento?",
                a: "La prima sessione richiede un'oretta, le (eventuali) altre possono durare anche molto meno!"
              },
              {
                q: "Se non ho dolori o problemi fisici, ha senso comunque fare questa collaborazione?",
                a: "Assolutamente sì. Il bello dei Trattamenti Osteopatici è che aiutano tantissimo a prevenire problemi e dolori in futuro, soprattutto tutti quei dolori legati alla sedentarietà moderna. Quindi in ogni caso ti fa bene!"
              },
              {
                q: "Quali benefici posso aspettarmi dal trattamento osteopatico?",
                a: "I nostri pazienti ne riportano davvero decine. Comunque i principali sono: 1. Bellissima sensazione di leggerezza e scioltezza 2. Minori rigidità e maggior mobilità del corpo 3. Riduzione parziale/totale di dolori 4. Sensazioni di benessere generale che aiuta anche a prevenire molti problemi con l'avanzare dell'età. E TANTI ALTRI!"
              },
              {
                q: "Quante sessioni saranno necessarie per la collaborazione?",
                a: "Minimo 1 e, se si vuole instaurare una collaborazione continuativa, se ne possono fare periodicamente. In media, tutti quanti ne fanno almeno 1 al mese perché ne sono davvero contenti 😁"
              },
              {
                q: "Offrite un compenso fisso o è legato alla performance?",
                a: "Entrambi. Il compenso a performance è valido per tutti, perché vogliamo incentivare e premiare l'impegno o comunque il lavoro fatto negli anni per aver costruito una bella audience. Il compenso fisso non è invece per tutti, ci devono essere dei requisiti che valuteremo insieme."
              },
              {
                q: "Sono preoccupato di dover pubblicare troppo frequentemente. Qual è il vostro approccio?",
                a: "Se non hai tempo/voglia di pubblicare, non ti preoccupare, ci penseremo noi a creare tutto quanto e a usare la nostra pagina per pubblicare, in questo modo il tuo impegno sarà davvero minimo."
              },
              {
                q: "Come viene gestita la privacy durante le riprese?",
                a: "Se guardi tutti i nostri social o comunque vedrai gli esempi che ti mostreremo, noterai che i video che facciamo sono molto professionali e si distaccano totalmente dai classici video acchiappa like classici degli osteopati. Il nostro obiettivo è trasmettere la massima professionalità in quello che facciamo quotidianamente."
              },
              {
                q: "Lo studio è distante dalla mia residenza. È possibile partecipare comunque?",
                a: "Assolutamente sì, possiamo eventualmente rimborsare il trasporto."
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-blue-dark/90 backdrop-blur-sm border border-green/20 rounded-xl overflow-hidden hover:border-green/60 transition-all duration-300">
                  {/* Question Header - Clickable */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-green/50 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-cream pr-4 group-hover:text-green transition-colors duration-300">
                        {faq.q}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-5 h-5 text-green transform transition-transform duration-300 ${
                            openFAQ === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer Content - Collapsible */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-4">
                      <div className="border-t border-green/20 pt-3">
                        <p className="text-cream/80 leading-relaxed text-sm group-hover:text-cream transition-colors duration-300">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-left">
            <div className="bg-gradient-to-r from-green/10 to-cream/5 border border-green/30 rounded-3xl p-8 max-w-2xl">
              <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-cream mb-4">
                  Pronto/a a iniziare la collaborazione?
                </h3>
                <p className="text-cream/80 mb-6">
                  Non esitare a contattarci per qualsiasi domanda sulla collaborazione
                </p>
                <button 
                  onClick={() => {
                    const message = encodeURIComponent("Ciao, ho visto la collaborazione per influencer e volevo candidarmi. Quali sono i prossimi step? Grazie");
                    window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                  }}
                  className="group relative px-8 py-4 bg-green text-blue-dark font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-green/25 transition-all duration-500 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Inizia la collaborazione</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Influencer