import React from 'react'
import { Link } from 'react-router-dom'

const SocialMediaManager = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white pt-20 pb-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lavori/smm.png" 
                alt="Social Media Manager"
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-sky-100"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark font-montserrat mb-4">
              Social Media Manager
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 font-montserrat">
              <span className="bg-sky-100 px-3 py-1 rounded-full text-sm">
                Partita IVA
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Remoto/Ibrido
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 1. Descrizione della posizione lavorativa */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0v16a1 1 0 001 1h6a1 1 0 001-1V4H7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Descrizione della posizione lavorativa
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                Stiamo cercando un <strong className="text-blue-dark">Social Media Manager</strong> creativo e dinamico 
                per gestire tutti i social media dell'azienda. La figura ricercata sarà responsabile della strategia 
                di comunicazione digitale, della creazione di contenuti coinvolgenti e della gestione della community 
                online di Mobilitas.
              </p>
              <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                Il Social Media Manager sarà chiamato a sviluppare e implementare strategie innovative per aumentare 
                la visibilità del brand, coinvolgere il pubblico target e supportare gli obiettivi di business dell'azienda. 
                Sarà fondamentale la capacità di proporre idee nuove e creative per differenziarsi nel settore sanitario.
              </p>
              <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                Questa posizione offre l'opportunità di lavorare in un ambiente giovane e ambizioso, con possibilità 
                di crescita professionale e di contribuire al successo di un'azienda in forte espansione nel settore 
                sanitario e dei social media.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Requisiti obbligatori */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
                  <strong className="text-blue-dark">Disponibilità di circa 5 ore a settimana</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Volontà di proporre idee nuove</strong> e creative per i contenuti
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Conoscenza delle principali piattaforme social</strong> (Instagram, Facebook, TikTok, LinkedIn)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Ottime capacità comunicative</strong> e di scrittura
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Creatività e senso estetico</strong> per la creazione di contenuti
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Requisiti aggiuntivi graditi
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Esperienza nel settore sanitario</strong> o wellness
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Conoscenza di strumenti di social media management</strong> (Hootsuite, Buffer, Later)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Competenze base di grafica</strong> (Canva, Photoshop, Illustrator)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Analisi dei dati e reporting</strong> delle performance social
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Conoscenza delle strategie di influencer marketing</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Attività principali */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Attività principali
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Gestione completa di tutti i social media</strong> dell'azienda (Instagram, Facebook, TikTok, LinkedIn)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Creazione e pianificazione di contenuti</strong> coinvolgenti e in linea con il brand
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Proposta di idee nuove e creative</strong> per differenziarsi nel settore
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Gestione della community</strong> e interazione con i follower
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Monitoraggio e analisi delle performance</strong> dei contenuti pubblicati
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Collaborazione con il team</strong> per lo sviluppo di campagne e iniziative
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Gestione delle collaborazioni</strong> con influencer e partner
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Creazione di report mensili</strong> sulle attività e risultati ottenuti
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Dettagli della collaborazione */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
                    📍 Modalità di lavoro
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Remoto con possibilità di incontri in presenza a Torino
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    📆 Impegno richiesto
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Circa 5 ore a settimana (20 ore mensili)
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    💰 Compenso
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Da definire in base all'esperienza e alle competenze
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    🧑🏻‍💻 Flessibilità
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Orari flessibili, possibilità di organizzare il lavoro in autonomia
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🚀 Cosa offriamo
                </h3>
                <ul className="space-y-2 text-gray-700 font-montserrat">
                  <li><strong>Ambiente di lavoro giovane e dinamico</strong> con focus sull'innovazione</li>
                  <li><strong>Libertà creativa</strong> per proporre e sviluppare nuove idee</li>
                  <li><strong>Opportunità di crescita</strong> professionale e imprenditoriale</li>
                  <li><strong>Collaborazione con un team</strong> di professionisti del settore sanitario</li>
                  <li><strong>Possibilità di espandere</strong> le competenze in marketing digitale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Iter di selezione */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
                Il processo di selezione si articolerà in <strong className="text-blue-dark">quattro fasi</strong>:
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
                    Analisi del curriculum, portfolio social media e proposte creative per valutare 
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
                    Primo colloquio conoscitivo
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Colloquio conoscitivo dove apprezziamo che arrivi già preparato con soluzioni 
                    e idee di miglioramento per le nostre strategie social media attuali.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Eventuale confronto sulle idee proposte
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Discussione approfondita sulle idee di miglioramento che hai portato, 
                    per valutare la fattibilità e l'impatto delle tue proposte strategiche.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  4
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
              <div className="bg-white p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  📧 Modalità di invio
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Email:</strong> 
                    <a href="mailto:colloqui@studiomobilitas.it" className="text-sky-600 hover:text-sky-700 ml-2">
                      colloqui@studiomobilitas.it
                    </a>
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>LinkedIn:</strong> Rispondi direttamente all'annuncio
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Oggetto:</strong> Candidatura Social Media Manager - [Nome Cognome]
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  📋 Documenti richiesti
                </h3>
                <ul className="space-y-2 text-gray-700 font-montserrat">
                  <li><strong>Curriculum aggiornato</strong></li>
                  <li><strong>Portfolio social media</strong> o esempi di campagne gestite</li>
                  <li><strong>Proposta creativa</strong> per i social media di Mobilitas (max 1 pagina)</li>
                  <li><strong>PLUS:</strong> video di presentazione creativa (max 2 minuti)</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🚀 PS: Se hai creatività da vendere e vuoi crescere, sei nel posto giusto.
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  Stiamo costruendo qualcosa di grande nel settore sanitario. E siamo aperti a persone creative 
                  che abbiano il coraggio di proporre idee innovative e crescere con noi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SocialMediaManager
