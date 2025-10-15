import React, { useState, useEffect } from 'react'

const StampaSubalpina = () => {
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
                  <span className="block">Stampa Subalpina</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-blue-dark/90 font-light leading-relaxed">
                Scopri la nostra partnership strategica con Stampa Subalpina e come stiamo lavorando insieme per promuovere il benessere nel mondo del giornalismo
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
              Una storia di collaborazione tra professionisti che ha portato a una partnership unica nel mondo del giornalismo
            </p>
          </div>

          {/* Main Story Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Un Incontro Professionale</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      La partnership tra Mobilitas e Stampa Subalpina è nata da un incontro tra <strong>Carlos</strong> (di Mobilitas) e <strong>Roberta Pellegrini</strong> della direzione della Subalpina. Un dialogo tra professionisti che ha portato a una collaborazione di valore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">L'Idea della Collaborazione</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      L'obiettivo comune era quello di portare consapevolezza sui temi del benessere e della prevenzione nel mondo del giornalismo, una professione che spesso comporta stress e posture scorrette durante il lavoro.
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
                <div className="relative w-full max-w-md">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-dark/10 rounded-3xl blur-xl transform scale-110"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/30 shadow-2xl">
                    <img 
                      src="/partnership/subalpina/subalpina1.png" 
                      alt="Evento di formazione Stampa Subalpina - 16 Giugno 2025" 
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                      style={{ marginBottom: '-2px' }}
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
                  <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">16 Giugno 2025: Il Primo Evento di formazione all'Ordine</h3>
                  <p className="text-lg text-blue-dark/80 leading-relaxed">
                    Il <strong>16 Giugno 2025</strong> si è tenuto il primo evento di formazione presso il <strong>Circolo della Stampa Sporting</strong>. Erano presenti giornalisti dell'Ordine dei Giornalisti del Piemonte. Durante l'evento si è parlato di <strong>sedentarietà, conseguenze sulla salute, consigli per una postura adeguata</strong> e come prevenire problemi e malattie legate al lavoro sedentario.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">📚</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Formazione e prevenzione per i professionisti dell'informazione
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              La partnership con Stampa Subalpina rappresenta un impegno concreto nel promuovere il benessere e la prevenzione tra i giornalisti, fornendo strumenti pratici per migliorare la qualità della vita lavorativa.
            </p>
          </div>
        </div>
      </section>

      {/* CHI È STAMPA SUBALPINA SECTION */}
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
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Chi è Stampa Subalpina</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Chi è Stampa Subalpina,
              <span className="block text-blue-400">
                cosa fa e i suoi valori
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Il sindacato unitario dei giornalisti del Piemonte, rappresentanza territoriale della Federazione Nazionale Stampa Italiana
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Organization Overview */}
            <div className="space-y-8">
              {/* Organization Description */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🏛️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Sindacato dei Giornalisti del Piemonte</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Stampa Subalpina è il sindacato unitario dei giornalisti del Piemonte, rappresentanza territoriale della Federazione Nazionale Stampa Italiana (FNSI). Opera per la tutela e la rappresentanza dei professionisti dell'informazione.
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
                      Fornire informazioni e consulenze sulla corretta applicazione dei contratti di lavoro, sui compensi previsti per le prestazioni professionali autonome, e offrire assistenza legale e tutela per i giornalisti.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Services & Values */}
            <div className="space-y-8">
              {/* Services */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🛠️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">Servizi agli Associati</h3>
                    <div className="space-y-2">
                      {[
                        "Consulenze contrattuali",
                        "Convenzioni vantaggiose",
                        "Assistenza legale",
                        "Controllo buste paga",
                        "Apertura partita IVA",
                        "Dichiarazione redditi"
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
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⭐
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">I Valori di Stampa Subalpina</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Tutela", desc: "Protezione dei diritti dei giornalisti" },
                        { name: "Formazione", desc: "Aggiornamento professionale continuo" },
                        { name: "Solidarietà", desc: "Supporto reciproco tra colleghi" },
                        { name: "Trasparenza", desc: "Chiarezza nelle informazioni" }
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

          {/* Casa dei Giornalisti Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  🏢
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Casa dei Giornalisti</h3>
                  <p className="text-blue-dark/80 leading-relaxed mb-4">
                    La sede di Stampa Subalpina si trova presso il <strong>Circolo della Stampa - Palazzo Ceriana Mayneri</strong> in Corso Stati Uniti 27 a Torino. Un punto di riferimento per tutti i giornalisti piemontesi.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-dark/70">Ordine dei Giornalisti del Piemonte</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-dark/70">INPGI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-dark/70">CASAGIT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-dark/70">Centro Studi Pestelli</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">📰</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Stampa Subalpina: il punto di riferimento per i giornalisti piemontesi
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
              Da oltre 50 anni, Stampa Subalpina rappresenta e tutela i giornalisti del Piemonte, promuovendo la formazione, la solidarietà e l'eccellenza professionale nel mondo dell'informazione.
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
              I vantaggi esclusivi riservati ai giornalisti associati a Stampa Subalpina attraverso la nostra partnership
            </p>
          </div>

          {/* Main Benefits Content */}
          <div className="space-y-20 mb-16">
            {/* Formazione Ricorrente - Clean Design */}
            <div className="text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Formazione Ricorrente con Crediti Formativi</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                <strong>Formazione ricorrente con crediti formativi riconosciuti</strong> per tutti i giornalisti associati a Stampa Subalpina. Eventi di formazione professionale continua su temi di benessere, prevenzione e salute, con rilascio di crediti formativi validi per l'aggiornamento professionale obbligatorio.
              </p>
            </div>

            {/* Two Column Layout for Events and Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Exclusive Events - Clean Design */}
              <div className="text-left">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🎉</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-dark mb-4">Eventi Esclusivi</h3>
                <p className="text-lg text-blue-dark/80 leading-relaxed">
                  I giornalisti associati sono <strong>i primi a ricevere inviti</strong> ai nostri eventi esclusivi: workshop, seminari di benessere, sessioni di formazione e molto altro.
                </p>
              </div>

              {/* Super Discounted Prices - Clean Design */}
              <div className="text-left">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-dark to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💰</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-dark mb-4">Prezzi Super Agevolati</h3>
                <p className="text-lg text-blue-dark/80 leading-relaxed">
                  Accesso a <strong>tutti i servizi e prodotti a prezzi super agevolati</strong>. Trattamenti osteopatici, consulenze e prodotti per il benessere a condizioni esclusive.
                </p>
              </div>
            </div>

            {/* Exclusive Pathways - Clean Design */}
            <div className="text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-dark to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🛤️</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Percorsi Esclusivi</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                <strong>Percorsi personalizzati</strong> studiati appositamente per i giornalisti: programmi di benessere professionale, check-up periodici e piani di prevenzione su misura per garantire il massimo benessere in una professione spesso stressante.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Una partnership che premia l'eccellenza professionale
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
              La partnership tra Mobilitas e Stampa Subalpina rappresenta un modello di collaborazione che mette al centro il benessere dei professionisti dell'informazione, offrendo vantaggi concreti e misurabili per migliorare la qualità della vita lavorativa e personale.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StampaSubalpina