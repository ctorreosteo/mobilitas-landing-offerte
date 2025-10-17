import React, { useState, useEffect } from 'react'

const Newsletter = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsSubscribing(true)
    // Qui andrà la logica di iscrizione
    setTimeout(() => {
      setIsSubscribing(false)
      alert('Iscrizione completata! Benvenuto nella community Mobilitas Insider!')
    }, 2000)
  }

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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Newsletter Esclusiva</span>
          </div>

          {/* Main Headline */}
          <div className={`mb-8 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
              <span className="block bg-gradient-to-r from-blue-900 via-blue-600 to-green-500 bg-clip-text text-transparent uppercase">
                Mobilitas
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-blue-dark mt-4 uppercase">
                Insider
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`mb-12 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-xl md:text-2xl text-blue-dark/80 font-light leading-relaxed max-w-4xl mx-auto">
              La newsletter per chi <span className="font-bold text-blue-600">rifiuta di invecchiare</span> come tutti gli altri. 
              Un contenuto che svela ciò che nessuno ti dice su salute, postura, corpo e libertà.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1500 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <a 
              href="#subscription" 
              className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 no-underline"
            >
              <span className="relative z-10">Iscriviti Ora - 9€/mese</span>
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

      {/* TARGET MENTALE SECTION */}
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
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Per Chi È</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-blue-dark mb-8 leading-tight mt-0">
                  Sei uno di
                  <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    noi?
                  </span>
                </h2>
              </div>

              {/* Target List */}
              <div className="space-y-6">
                {[
                  "Non vuoi arrivare a dipendere dai farmaci da anziano/a",
                  "Vuoi prevenire infortuni e problemi classici della vita moderna",
                  "Vuoi poterti godere i tuoi figli/nipoti a pieno senza limitazioni",
                  "Vuoi vivere a lungo e in salute, senza fare una vita da monaco o di rinunce"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-blue-dark font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold mb-4">Se hai risposto SÌ</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Allora Mobilitas Insider è esattamente quello che stai cercando. 
                    Un sistema operativo per restare liberi dal dolore, dagli ospedali, dai farmaci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 ANGOLI STRATEGICI SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
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
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">I 5 Pilastri</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-8 leading-tight mt-0">
              I 5 argomenti strategici della newsletter
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                per restare liberi
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              e invecchiare in salute
              </span>
            </h2>
            <p className="text-xl text-blue-dark/70 max-w-3xl leading-relaxed">
              Riceverai un'email a settimana con consigli per restare forte, libero, e in controllo del tuo corpo e goderti la vita anche quando sarai in pensione.
            </p>
          </div>

          {/* 5 Strategic Angles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "💣",
                title: "Verità Scomode sulla Salute Moderna",
                description: "Perché ti stanno vendendo un modello di 'cura' che ti rende schiavo a vita – e cosa puoi fare per evitarlo",
                gradient: "from-red-500 to-orange-500",
                bgGradient: "from-red-50 to-orange-100"
              },
              {
                icon: "💪",
                title: "La Ribellione Fisica Silenziosa",
                description: "Allenarsi per vivere, non per morire sotto i pesi. Mangiarsi la pizza senza paura. E avere comunque un corpo inarrestabile",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                icon: "🏗️",
                title: "Il Corpo Come Asset",
                description: "Come costruire un corpo che lavora per te – anche quando dormi, anche a 60 anni, anche senza palestra",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100"
              },
              {
                icon: "🍕",
                title: "Stile di Vita Anti-Rinuncia",
                description: "Come stare bene senza diventare paranoico: godersi la vita, bere un bicchiere, saltare una routine… e restare fortissimo",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100"
              },
              {
                icon: "⛰️",
                title: "Longevità Strategica",
                description: "Le 7 regole di chi a 70 anni cammina in montagna, viaggia, vive senza bastoni, e non ha mai fatto un intervento chirurgico",
                gradient: "from-indigo-500 to-indigo-600",
                bgGradient: "from-indigo-50 to-indigo-100"
              }
            ].map((angle, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${angle.bgGradient} border border-white/50 rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${angle.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}>
                    {angle.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-blue-dark mb-4">{angle.title}</h3>
                  <p className="text-blue-dark/70 leading-relaxed text-sm">{angle.description}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${angle.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>
                
                {/* Floating Elements */}
                {hoveredCard === index && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-ping"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-12 text-left">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold text-blue-dark mb-6">Contro ogni moda, contro ogni bugia mediatica</h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              Questa non è una newsletter. È un sistema operativo per restare liberi dal dolore, dagli ospedali, dai farmaci. 
              Contro il declino che ti hanno insegnato ad accettare.
            </p>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section id="subscription" className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8">
              <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Iscriviti Ora</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight mt-0">
              Unisciti alla
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
                Rivoluzione
              </span>
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Ricevi ogni settimana un'email con strategie pratiche e testate su migliaia di persone per restare forte, libero, e in controllo del tuo corpo.
            </p>

            {/* Closed Subscription Notice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">⏳</div>
                <h3 className="text-2xl font-bold text-white mb-4">Iscrizioni Temporaneamente Chiuse</h3>
                <p className="text-white/80 text-lg mb-6">
                  Al momento le iscrizioni sono chiuse, ma puoi metterti in lista d'attesa per essere tra i primi a ricevere l'accesso quando riapriremo!
                </p>
                <div className="text-white/70 text-sm mb-8">
                  💡 Ti avviseremo non appena sarà possibile iscriversi di nuovo
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            {/* <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email per la lista d'attesa"
                  required
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubscribing ? 'Aggiunta in corso...' : '📝 Mettimi in Lista d\'Attesa'}
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form> */}

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a 
                href="https://wa.me/393518198457?text=Ciao%21%20Volevo%20mettermi%20in%20lista%20d%27attesa%20per%20Mobilitas%20Insider.%20Grazie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-400 transition-all duration-300 hover:scale-105 no-underline"
              >
                <span className="relative z-10">
                  💬 Scrivici su WhatsApp<br />
                  per metterti in lista d'attesa
                </span>
                <div className="absolute inset-0 bg-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 text-white/60 text-sm">
              <div className="block sm:hidden space-y-2">
                <p>✅ Lista d'attesa gratuita</p>
                <p>✅ Ti avviseremo per primo</p>
                <p>✅ Nessun impegno</p>
              </div>
              <div className="hidden sm:block">
                <p>✅ Lista d'attesa gratuita • ✅ Ti avviseremo per primo • ✅ Nessun impegno</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
