import React, { useState, useEffect } from 'react'

const GPADEL = () => {
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
    <div className="min-h-screen bg-cream text-blue-dark font-montserrat">
      
      {/* HERO SECTION */}
      <section className="relative flex items-start justify-center overflow-hidden bg-cream pt-8 pb-0">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cream"></div>
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
                  <span className="block">GPADEL</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-blue-dark/90 font-light leading-relaxed">
                Scopri la nostra partnership strategica con GPADEL e come stiamo lavorando insieme per promuovere il benessere nel mondo del padel
              </p>
            </div>

            {/* Image Section */}
            <div className={`flex items-center justify-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-full max-w-md">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-dark/10 rounded-3xl blur-xl transform scale-110"></div>
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/30 shadow-2xl aspect-square">
                  <img 
                    src="/partnership/gpadel/gpadel1.png" 
                    alt="Lorenzo Veglia - Founder e CEO GPADEL" 
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
          </div>
        </div>
      </section>

      {/* COME È NATA LA PARTNERSHIP SECTION */}
      <section className="pt-8 pb-20 bg-cream relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cream"></div>
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
              Una storia di innovazione e visione imprenditoriale che ha portato a una partnership unica nel mondo del padel
            </p>
          </div>

          {/* Main Story Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎾
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Una Visione Imprenditoriale</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      La partnership tra Mobilitas e GPADEL è nata grazie alla visione innovativa di <strong>Lorenzo Veglia</strong>, Founder e CEO di GPADEL. Un imprenditore che ha sempre creduto nell'importanza di offrire servizi di qualità ai propri clienti.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovation */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💡
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">L'Idea Innovativa</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Lorenzo voleva portare qualcosa di innovativo all'interno della sua catena di centri padel. Ha avuto l'ottima idea di portare i nostri servizi all'interno delle strutture GPADEL, per offrire un servizio di estrema qualità a tutti i clienti che frequentano i centri.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Service */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⭐
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Servizio di Eccellenza</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      L'obiettivo della partnership è quello di offrire ai giocatori di padel un'esperienza completa: non solo campi di alta qualità, ma anche servizi di benessere e prevenzione degli infortuni direttamente disponibili nei centri GPADEL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 mt-32">Una Partnership Strategica</h3>
              
              {/* Image */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-full max-w-md">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-dark/10 rounded-3xl blur-xl transform scale-110"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/30 shadow-2xl aspect-[3/4]">
                    <img 
                      src="/partnership/gpadel/gpadel2.png" 
                      alt="Partnership Mobilitas e GPADEL" 
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

              {/* Partnership Description */}
              <p className="text-lg text-blue-dark/80 leading-relaxed">
                La collaborazione tra Mobilitas e GPADEL rappresenta un modello innovativo nel settore dello sport: unire l'eccellenza delle strutture sportive con servizi di benessere e prevenzione degli infortuni, creando un'esperienza completa per tutti gli appassionati di padel.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Innovazione e qualità al servizio del benessere
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              Grazie alla visione di Lorenzo, oggi tutti i tesserati GPADEL possono accedere ai servizi di Mobilitas direttamente nei centri, trasformando ogni partita in un'opportunità per prendersi cura del proprio benessere.
            </p>
          </div>
        </div>
      </section>

      {/* CHI È GPADEL SECTION */}
      <section className="pt-8 pb-20 bg-cream relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cream"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Chi è GPADEL</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Chi è GPADEL,
              <span className="block text-blue-400">
                il primo network di centri padel in Italia
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Divertente, semplice, per tutti. L'azienda è specializzata nel padel e offre un'esperienza unica e completa
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Company Overview */}
            <div className="space-y-8">
              {/* Company Description */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎾
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Il Primo Network di Centri Padel</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      L'azienda è il primo network di centri padel in Italia. Con centri ubicati in posizioni strategiche, facilmente raggiungibili e sempre aperti 7 su 7, GPADEL offre un'esperienza di gioco unica e accessibile a tutti.
                    </p>
                  </div>
                </div>
              </div>

              {/* Specialization */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Specializzato nel Padel</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      La scelta strategica ha permesso di concentrarsi soprattutto sul padel, senza distrazioni. Nei loro centri tutto è progettato per offrire la migliore esperienza di gioco, con campi di alta qualità e servizi dedicati
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Services & Values */}
            <div className="space-y-8">
              {/* Services */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🏆
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">Servizi Dedicati</h3>
                    <div className="space-y-3">
                      {[
                        "G-Academy - Scuola di padel",
                        "G-Shop - Negozio attrezzature",
                        "G-Bar - Punto ristoro",
                        "Tornei e competizioni",
                        "Eventi speciali"
                      ].map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-dark/80 text-sm font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⭐
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">I Punti di Forza</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Specializzato", desc: "Concentrato solo sul padel" },
                        { name: "Dedicato", desc: "Servizi pensati per l'esperienza di gioco" },
                        { name: "Vicino a te", desc: "Centri in posizioni strategiche" }
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
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🌟</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              GPADEL: divertente, semplice, per tutti
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              Il team trasforma il modo di giocare a padel in Italia, offrendo centri specializzati, servizi dedicati e un'esperienza completa per tutti gli appassionati di questo sport in crescita.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICI DELLA PARTNERSHIP SECTION */}
      <section className="pt-8 pb-20 bg-cream relative overflow-hidden">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cream"></div>
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
              I vantaggi esclusivi riservati a tutti i tesserati GPADEL attraverso la nostra partnership
            </p>
          </div>

          {/* Main Benefits Content */}
          <div className="space-y-20 mb-16">
            {/* Presence at Fields - Clean Design */}
            <div className="text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-4xl">🎾</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Presenza tra i Campi</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                Siamo presenti tra i campi del GPADEL e, con <strong>trattamenti gratuiti</strong>, aiutiamo tutti coloro che sono lì a giocare a stare bene e prevenire il più possibile infortuni. Siamo presenti ad <strong>allenamenti, tornei ed eventi speciali</strong>, garantendo supporto immediato quando serve.
              </p>
            </div>

            {/* Two Column Layout for Pricing and Events */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Special Prices - Clean Design */}
              <div className="text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">💰</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-dark mb-4">Prezzi Speciali</h3>
                <p className="text-lg text-blue-dark/80 leading-relaxed">
                  <strong>Prezzi speciali per tutti i tesserati GPADEL</strong>, sia atleti agonistici sia amatoriali. Accesso a tutti i nostri servizi e trattamenti a condizioni esclusive riservate alla community GPADEL.
                </p>
              </div>

              {/* Educational Events - Clean Design */}
              <div className="text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-dark to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-3xl">📚</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-dark mb-4">Eventi di Formazione</h3>
                <p className="text-lg text-blue-dark/80 leading-relaxed">
                  <strong>Eventi di formazione ed educazione</strong> su come prevenire infortuni e stare bene nella quotidianità. Workshop, seminari e sessioni pratiche per migliorare la performance e il benessere.
                </p>
              </div>
            </div>

            {/* Custom Pathways - Clean Design */}
            <div className="text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-dark to-blue-600 rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-4xl">🛤️</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Percorsi su Misura</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                <strong>Percorsi su misura per chi pratica tanto padel</strong>, percorsi pensati anche per tutto l'anno. Programmi personalizzati che accompagnano gli atleti durante tutta la stagione, dalla preparazione alle competizioni, garantendo il massimo benessere e la prevenzione degli infortuni.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Una partnership che premia l'eccellenza sportiva
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              La partnership tra Mobilitas e GPADEL rappresenta un modello innovativo di collaborazione che unisce l'eccellenza sportiva al benessere, offrendo vantaggi concreti e misurabili per migliorare la performance, prevenire gli infortuni e garantire il massimo benessere a tutti gli appassionati di padel.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GPADEL
