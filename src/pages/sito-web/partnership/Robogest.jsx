import React, { useState, useEffect } from 'react'

const Robogest = () => {
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
                  <span className="block">Robogest</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mx-3"></div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-blue-dark/90 font-light leading-relaxed">
                Scopri la nostra partnership strategica con Robogest e come stiamo lavorando insieme per promuovere il benessere nell'industria della robotica
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
              Una storia di visione imprenditoriale e innovazione che ha portato a una partnership unica nel settore della robotica industriale
            </p>
          </div>

          {/* Main Story Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    👨‍💼
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Una Famiglia di Imprenditori Visionari</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      La partnership tra Mobilitas e Robogest è nata grazie alla visione di <strong>Mauro Bigelli</strong>, imprenditore titolare di Robogest, e di suo figlio <strong>Mattia Bigelli</strong>. Una famiglia di leader che ha sempre creduto nell'importanza di portare innovazione sulla salute per la loro impresa e i loro dipendenti.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-r from-blue-400/5 to-blue-dark/5 border border-blue-400/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    💡
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">L'Idea dell'Innovazione</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Mauro e Mattia Bigelli hanno riconosciuto che l'innovazione non riguarda solo la tecnologia robotica, ma anche il benessere delle persone che lavorano con essa. Una visione olistica che unisce l'eccellenza tecnologica alla cura del capitale umano.
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
              <div className="flex items-start justify-start">
                <div className="relative w-full max-w-md">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-dark/10 rounded-3xl blur-xl transform scale-110"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-3xl border-2 border-blue-400/30 shadow-2xl">
                    <img 
                      src="/partnership/robogest/robogest1.png" 
                      alt="Evento di formazione Robogest - 8 Novembre 2024" 
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

              {/* Right Column - Event Description */}
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">8 Novembre 2024: Il Primo Evento</h3>
                  <p className="text-lg text-blue-dark/80 leading-relaxed">
                    L'<strong>8 Novembre 2024</strong> si è tenuto il primo evento di formazione presso Robogest. Durante l'evento il Dr. Ricciardi ha parlato di <strong>sedentarietà, conseguenze sulla salute, consigli per una postura adeguata</strong> e come prevenire problemi e malattie legate al lavoro in ufficio e alla robotica industriale con posture scorrette.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Innovazione tecnologica e benessere umano
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              La partnership con Robogest rappresenta un modello di collaborazione che unisce l'eccellenza nella robotica industriale alla cura del benessere dei dipendenti, dimostrando come l'innovazione tecnologica e la salute possano andare di pari passo.
            </p>
          </div>
        </div>
      </section>

      {/* CHI È ROBOGEST SECTION */}
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
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Chi è Robogest</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-dark mb-6 mt-3 leading-tight">
              Chi è Robogest,
              <span className="block text-blue-400">
                cosa fa e i suoi valori
              </span>
            </h2>
            <p className="text-lg text-blue-dark/70 max-w-2xl leading-relaxed">
              Trasformiamo le idee dell'imprenditore nella lingua dei robot, portando innovazione e automazione nell'industria
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
                    🤖
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">Trasformiamo le Idee in Robot</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Robogest è un'azienda specializzata nella programmazione robotica, assistenza tecnica e formazione. Trasformiamo le idee dell'imprenditore nella lingua dei robot, velocizzando e migliorando la produzione industriale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-blue-dark/5 to-blue-400/5 border border-blue-dark/20 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-dark to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">La Missione di Robogest</h3>
                    <p className="text-blue-dark/80 leading-relaxed">
                      Offriamo programmazione robot, assistenza tecnica specializzata e formazione continua. Siamo sempre alla ricerca di modi per diffondere la conoscenza e la comprensione dei robot, unita alla loro esperienza pluriennale.
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
                    🛠️
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">I Servizi di Robogest</h3>
                    <div className="space-y-3">
                      {[
                        "Programmazione robot",
                        "Assistenza tecnica specializzata",
                        "Formazione aziendale",
                        "Manutenzione ordinaria",
                        "Upgrade e ottimizzazione",
                        "Consulenza automazione"
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
                    <h3 className="text-2xl font-bold text-blue-dark mb-4 mt-0">I Valori di Robogest</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Innovazione", desc: "Sempre all'avanguardia nella robotica" },
                        { name: "Eccellenza", desc: "Qualità superiore in ogni progetto" },
                        { name: "Formazione", desc: "Diffusione della conoscenza" },
                        { name: "Affidabilità", desc: "Assistenza tempestiva e competente" }
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

          {/* Company Stats Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📊
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-dark mb-3 mt-0">I Numeri di Robogest</h3>
                  <p className="text-blue-dark/80 leading-relaxed mb-6">
                    Robogest vanta una solida esperienza nel settore della robotica industriale, con risultati che testimoniano la qualità e l'affidabilità dei loro servizi.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-dark mb-2">3+</div>
                      <div className="text-blue-dark/70 text-sm">Anni di esperienza</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-dark mb-2">10+</div>
                      <div className="text-blue-dark/70 text-sm">Tecnici specializzati</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-dark mb-2">50+</div>
                      <div className="text-blue-dark/70 text-sm">Robot programmati ogni anno</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Robogest: il futuro della robotica industriale
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              Con sede a Grugliasco (TO), Robogest continua a innovare nel settore della robotica industriale, offrendo soluzioni all'avanguardia per l'automazione e il benessere dei dipendenti.
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
              I vantaggi esclusivi riservati ai dipendenti di Robogest attraverso la nostra partnership
            </p>
          </div>

          {/* Main Benefits Content */}
          <div className="space-y-20 mb-16">
            {/* Priority Booking - Clean Design */}
            <div className="text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-dark mb-6">Priorità nelle Prenotazioni</h3>
              <p className="text-xl text-blue-dark/80 leading-relaxed">
                Tutti i dipendenti di Robogest hanno <strong>priorità assoluta</strong> nel prenotare le visite presso il nostro studio. Nessuna lista d'attesa, accesso immediato ai nostri servizi con un trattamento VIP dedicato.
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
                  I dipendenti Robogest sono <strong>i primi a ricevere inviti</strong> ai nostri eventi esclusivi: workshop, seminari di benessere, sessioni di formazione e molto altro.
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
                <strong>Percorsi personalizzati</strong> studiati appositamente per i dipendenti Robogest: programmi di benessere aziendale, check-up periodici e piani di prevenzione su misura per garantire il massimo benessere in un ambiente di lavoro tecnologicamente avanzato.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 text-left">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 mt-0">
              Una partnership che premia l'eccellenza tecnologica
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-3xl leading-relaxed">
              La partnership tra Mobilitas e Robogest rappresenta un modello di collaborazione che unisce l'innovazione tecnologica al benessere dei dipendenti, offrendo vantaggi concreti e misurabili per migliorare la qualità della vita lavorativa e personale.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Robogest
