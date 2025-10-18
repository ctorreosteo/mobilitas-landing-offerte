import React from 'react'
import { Link } from 'react-router-dom'

const VideoMaker = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-cream pt-20 pb-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lavori/video_maker.jpg" 
                alt="Video Maker"
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-sky-100"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark font-montserrat mb-4">
              Video Maker
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 font-montserrat">
              <span className="bg-sky-100 px-3 py-1 rounded-full text-sm">
                Partita IVA
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Presenza/Ibrido/Remoto
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 1. Descrizione della posizione lavorativa */}
        <section className="mb-16">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Descrizione della posizione lavorativa
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                Mobilitas è alla ricerca di un <strong className="text-blue-dark">Video Maker Freelance</strong> da integrare 
                all'interno del proprio team. Siamo il più grande studio osteopatico di Torino, con un focus importante 
                sul mondo dei social media, diverse collaborazioni attive con influencer e un ambizioso progetto di crescita.
              </p>
              <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                Stiamo cercando una figura che sappia essere ben organizzata e autonoma, che desideri crescere in un 
                contesto giovanile e dinamico, con la voglia di portare un contributo reale e concreto alla crescita dell'azienda.
              </p>
              <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                Questa collaborazione offre l'opportunità di lavorare in un ambiente stimolante, con possibilità di crescita 
                professionale e di contribuire al successo di un'azienda in forte espansione nel settore sanitario e dei social media.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Requisiti obbligatori */}
        <section className="mb-16">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Requisiti obbligatori
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Skill base di editing</strong> video
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Computer proprio</strong> per il lavoro
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Partita IVA</strong> attiva
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Disponibilità per 40 ore mensili</strong> (circa 10 ore a settimana)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Organizzazione e autonomia</strong> nel lavoro
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Requisiti aggiuntivi graditi */}
        <section className="mb-16">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Plus (non necessari ma apprezzati)
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Proattività nell'ideazione</strong> e proposta di nuove tipologie video/grafiche
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Attrezzatura personale per riprese</strong> (fotocamera, microfono, ecc.)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Competenze di marketing/vendita</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Volontà di crescere professionalmente</strong> come video maker e/o come figura gestionale/imprenditoriale
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Indole imprenditoriale</strong> e voglia di crescere insieme all'azienda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Attività principali */}
        <section className="mb-16">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Responsabilità principali
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Realizzazione di contenuti video</strong> per i social media e per il sito web
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">[Non obbligatorio] Riprese in studio</strong> e durante eventi/presentazioni aziendali
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Montaggio e post-produzione</strong> di video (Reel, storie, YouTube long form)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Utilizzo dei template aziendali</strong> per mantenere coerenza visiva
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Collaborazione con il team</strong> per lo sviluppo di contenuti creativi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Dettagli della collaborazione */}
        <section className="mb-16">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Dettagli della collaborazione
              </h2>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    📍 Sede operativa
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Torino, via Peyron 54 (se lavorerarai in presenza)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    📆 Impegno richiesto
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    40 ore mensili (circa 10 ore a settimana)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    💰 Compenso
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    A partire da 600€ lordi/mese con Partita IVA
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    🧑🏻‍💻 Modalità di lavoro
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Ibrida (in studio per riprese/collaborazioni; remoto per montaggi) oppure full remote
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🚀 Cosa offriamo
                </h3>
                <ul className="space-y-2 text-gray-700 font-montserrat">
                  <li><strong>Stabilità mensile</strong> con compenso garantito e semplicità di processi di lavoro</li>
                  <li><strong>Accesso a un ambiente di lavoro</strong> giovane, ambizioso e meritocratico</li>
                  <li><strong>Opportunità reale di crescita</strong> (anche imprenditoriale)</li>
                  <li><strong>Referenze:</strong> possibilità di espandere la collaborazione su più clienti</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Iter di selezione */}
        <section className="mb-16">
          <div className="bg-cream rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Processo di selezione
              </h2>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 font-montserrat leading-relaxed text-lg">
                Il processo di selezione prevede la <strong className="text-blue-dark">valutazione dei candidati</strong> attraverso:
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Valutazione candidatura
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Analisi del curriculum, portfolio video e canali social di riferimento per valutare 
                    l'idoneità del candidato.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Presentazione personale
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Valutazione della presentazione scritta o video dove il candidato spiega perché 
                    dovremmo scegliere lui/lei.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Colloquio finale
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Incontro conoscitivo per presentare l'offerta di collaborazione e concludere 
                    il processo di selezione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Come candidarti */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-sky-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Come candidarti
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  📧 Modalità di invio
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Email:</strong> 
                    <a href="mailto:colloqui@osteotouch.it" className="text-sky-600 hover:text-sky-700 ml-2">
                      colloqui@studiomobilitas.it
                    </a>
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>LinkedIn:</strong> Rispondi direttamente all'annuncio
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Oggetto:</strong> Candidatura Video Maker - [Nome Cognome]
                  </p>
                </div>
              </div>
              
              <div className="bg-cream p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  📋 Documenti richiesti
                </h3>
                <ul className="space-y-2 text-gray-700 font-montserrat">
                  <li><strong>Curriculum aggiornato</strong></li>
                  <li><strong>Portfolio video</strong> o canali social di riferimento</li>
                  <li><strong>Presentazione personale</strong> scritta o video dove ci racconti perché dovremmo scegliere te</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🚀 PS: Se hai un'indole imprenditoriale e vuoi crescere, sei nel posto giusto.
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  Stiamo costruendo qualcosa di grande. E siamo aperti a persone che abbiano il coraggio di crescere con noi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default VideoMaker
