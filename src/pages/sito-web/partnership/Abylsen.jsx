import React, { useState, useEffect } from 'react'

const Abylsen = () => {
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
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Partnership Esclusiva</span>
            </div>

            {/* Main Headline - Mobile Optimized */}
            <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-dark mb-4">
                <span className="block">Partnership con</span>
                <div className="flex items-center mt-2">
                  <span className="block">Abylsen Italia</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-blue-dark/90 font-light leading-relaxed">
                Scopri la nostra partnership strategica con Abylsen e come stiamo lavorando insieme per offrire servizi di eccellenza
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COME È NATA LA PARTNERSHIP SECTION */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">La Storia</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Come è nata
              <span className="block text-blue-dark">
                la partnership
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Una storia di visione, benessere e collaborazione che ha portato a una partnership unica nel suo genere
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center mb-16">
            <div className="relative w-full max-w-md">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-dark/10 rounded-3xl blur-xl transform scale-110"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/30 shadow-2xl">
                <img 
                  src="/partnership/abylsen/abylsen1.png" 
                  alt="Mélody Bouvelle - Country Manager Abylsen Italia" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/20 via-transparent to-transparent"></div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-dark/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Main Story Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    👩‍💼
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Una Visionaria al Comando</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      La partnership tra Mobilitas e Abylsen Italia è nata grazie alla visione di <strong>Mélody Bouvelle</strong>, Country Manager di Abylsen Italia. Una leader che ha sempre creduto nell'importanza del benessere dei propri dipendenti.
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Experience */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💆‍♀️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Un'Esperienza Personale</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Mélody è sempre stata una paziente del nostro studio. Ha sperimentato in prima persona i grandi benefici dei nostri trattamenti osteopatici, vivendo un miglioramento significativo del suo benessere fisico e mentale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">L'Idea Geniale</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Un giorno, Mélody ha avuto un'intuizione: <strong>"Sarebbe meraviglioso dare la possibilità a tutti i dipendenti di Abylsen di usufruire di una convenzione con il vostro studio"</strong>. Una visione che ha trasformato un'esperienza personale in un beneficio per tutta l'azienda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Event Image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md h-96">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-dark/10 rounded-3xl blur-xl transform scale-110"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/30 shadow-2xl h-full">
                    <img 
                      src="/partnership/abylsen/abylsen2.png" 
                      alt="Evento di formazione Abylsen Italia - 16 Maggio 2024" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/20 via-transparent to-transparent"></div>
                    
                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-dark/30 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>

              {/* Right Column - Event Description */}
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">16 Maggio 2024: Un Evento Storico</h3>
                  <p className="text-lg text-blue-dark/80 leading-relaxed">
                    Il <strong>16 Maggio 2024</strong> è stato un momento storico per la partnership: il primo evento di formazione dedicato a tutti i dipendenti di Abylsen Italia. Durante l'evento si è parlato di <strong>educazione su come combattere la sedentarietà</strong>, esercizi pratici e abitudini quotidiane per stare bene e in salute. Un approccio olistico al benessere aziendale che ha dimostrato l'impegno concreto di Abylsen nel promuovere il benessere dei propri dipendenti, fornendo strumenti pratici per migliorare la qualità della vita lavorativa e personale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Da un'idea personale a un beneficio aziendale
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
              Grazie alla visione di Mélody Bouvelle, oggi tutti i dipendenti di Abylsen Italia possono accedere ai trattamenti osteopatici di Mobilitas attraverso una convenzione esclusiva, trasformando il benessere personale in un valore aziendale condiviso.
            </p>
          </div>
        </div>
      </section>

      {/* CHI È ABYLSEN SECTION */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Chi è Abylsen</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Chi è Abylsen,
              <span className="block text-blue-400">
                cosa fa e i suoi valori
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Un gruppo internazionale di consulenza ingegneristica che da oltre 15 anni esplora nuovi orizzonti per sviluppare soluzioni innovative
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Company Overview */}
            <div className="space-y-8">
              {/* Company Description */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Gruppo Internazionale di Consulenza</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Abylsen è un gruppo internazionale di consulenza ingegneristica che, da oltre 15 anni, esplora nuovi orizzonti per sviluppare soluzioni innovative e creare valore per i propri partner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">La Nostra Missione</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      I nostri ingegneri operano quotidianamente in diversi settori industriali e terziari, contribuendo al successo dei clienti attraverso l'innovazione e lo sviluppo di tecnologie all'avanguardia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sectors & Values */}
            <div className="space-y-8">
              {/* Sectors */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">Settori di Innovazione</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Aeronautica & Spazio",
                        "Automotive",
                        "Energia",
                        "Finanza",
                        "Infrastrutture",
                        "IT & Telecom",
                        "Life Sciences",
                        "Industria Pesante"
                      ].map((sector, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-dark/80 text-sm font-medium">{sector}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⭐
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">I Valori di Abylsen Italia</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Innovazione", desc: "Sviluppo di soluzioni all'avanguardia" },
                        { name: "Eccellenza", desc: "Qualità superiore in ogni progetto" },
                        { name: "Collaborazione", desc: "Lavoro di squadra e partnership" },
                        { name: "Responsabilità", desc: "Impegno verso clienti e società" }
                      ].map((value, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-blue-dark font-semibold mt-0 mb-2">{value.name}</h4>
                            <p className="text-blue-dark/70 text-sm mt-0">{value.desc}</p>
                          </div>
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
            <div className="text-5xl mb-6">🌟</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Abylsen trasforma il modo di pensare, lavorare e vivere
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
              Abylsen immagina e sviluppa tecnologie all'avanguardia, concentrandosi su aree strategiche per il futuro e promuovendo un ambiente di lavoro collaborativo e responsabile.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICI DELLA PARTNERSHIP SECTION */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-dark font-medium text-sm uppercase tracking-wider">I Benefici</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Benefici della
              <span className="block text-blue-dark">
                partnership
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              I vantaggi esclusivi riservati ai dipendenti di Abylsen Italia attraverso la nostra partnership
            </p>
          </div>

          {/* Main Benefits Content */}
          <div className="space-y-20 mb-16">
            {/* Priority Booking - Clean Design */}
            <div className="text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-4xl">⚡</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Priorità nelle Prenotazioni</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                Tutti i dipendenti di Abylsen hanno <strong>priorità assoluta</strong> nel prenotare le visite presso il nostro studio. Nessuna lista d'attesa, accesso immediato ai nostri servizi con un trattamento VIP dedicato.
              </p>
            </div>

            {/* Two Column Layout for Events and Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Exclusive Events - Clean Design */}
              <div className="text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">🎉</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-dark mb-4">Eventi Esclusivi</h3>
                <p className="text-lg text-blue-dark/80 leading-relaxed">
                  I dipendenti Abylsen sono <strong>i primi a ricevere inviti</strong> ai nostri eventi esclusivi: workshop, seminari di benessere, sessioni di formazione e molto altro.
                </p>
              </div>

              {/* Super Discounted Prices - Clean Design */}
              <div className="text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-dark to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">💰</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-dark mb-4">Prezzi Super Agevolati</h3>
                <p className="text-lg text-blue-dark/80 leading-relaxed">
                  Accesso a <strong>tutti i servizi e prodotti a prezzi super agevolati</strong>. Trattamenti osteopatici, consulenze e prodotti per il benessere a condizioni esclusive.
                </p>
              </div>
            </div>

            {/* Exclusive Pathways - Clean Design */}
            <div className="text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-dark to-blue-600 rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-4xl">🛤️</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Percorsi Esclusivi</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                <strong>Percorsi personalizzati</strong> studiati appositamente per i dipendenti Abylsen: programmi di benessere aziendale, check-up periodici e piani di prevenzione su misura per garantire il massimo benessere.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Una partnership che premia l'eccellenza
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
              La partnership tra Mobilitas e Abylsen Italia rappresenta un modello di collaborazione che mette al centro il benessere dei dipendenti, offrendo vantaggi concreti e misurabili per migliorare la qualità della vita lavorativa e personale.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Abylsen
