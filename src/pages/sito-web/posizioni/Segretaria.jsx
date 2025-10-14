import React from 'react'
import { Link } from 'react-router-dom'

const Segretaria = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white pt-20 pb-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lavori/segretaria.png" 
                alt="Segretaria Generale"
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-sky-100"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark font-montserrat mb-4">
              Segretaria Generale
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600 font-montserrat">
              <span className="bg-sky-100 px-3 py-1 rounded-full text-sm">
                Partita IVA
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                In presenza
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Descrizione della posizione lavorativa
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                Stiamo cercando una <strong className="text-blue-dark">Segretaria Generale</strong> dinamica e organizzata 
                per unirsi al nostro team in crescita. La figura ricercata sarà il punto di riferimento per la gestione 
                amministrativa e organizzativa del centro, supportando sia i professionisti sanitari che la direzione.
              </p>
              <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                La segretaria sarà responsabile della gestione completa della reception, dell'organizzazione degli appuntamenti, 
                della gestione della documentazione e del supporto ai pazienti. Sarà il primo punto di contatto per chiunque 
                entri nel nostro centro, rappresentando l'immagine professionale e accogliente di Mobilitas.
              </p>
              <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                Questa posizione offre l'opportunità di lavorare in un ambiente stimolante, con possibilità di crescita 
                professionale e di contribuire al successo di un'azienda in forte espansione nel settore sanitario.
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
                  <strong className="text-blue-dark">Diploma di scuola superiore</strong> o titolo equivalente
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Esperienza minima di 2 anni</strong> in ruoli amministrativi o di segreteria
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Ottima conoscenza del pacchetto Office</strong> (Word, Excel, Outlook)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Disponibilità full-time</strong> (40 ore settimanali)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Ottime capacità comunicative</strong> e relazionali
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Precisione e attenzione ai dettagli</strong>
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
                  <strong className="text-blue-dark">Esperienza nel settore sanitario</strong> o in centri medici
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Conoscenza di software gestionali</strong> per centri medici
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Competenze di base in contabilità</strong> e fatturazione
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Conoscenza di lingue straniere</strong> (inglese, francese, tedesco)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Capacità di lavorare sotto pressione</strong> e gestire più attività contemporaneamente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Possibilità di carriera */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Possibilità di carriera
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🚀 Crescita rapida e meritocratica
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  In Mobilitas crediamo nel talento e nella meritocrazia. La segretaria avrà l'opportunità di 
                  crescere rapidamente verso ruoli di maggiore responsabilità attraverso un sistema di valutazione 
                  trasparente e obiettivo.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    📈 Percorsi di sviluppo
                  </h4>
                  <ul className="space-y-2 text-gray-700 font-montserrat">
                    <li>• Coordinatrice amministrativa</li>
                    <li>• Responsabile reception e accoglienza</li>
                    <li>• Assistente di direzione</li>
                    <li>• Responsabile amministrativo</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    💼 Competenze da sviluppare
                  </h4>
                  <ul className="space-y-2 text-gray-700 font-montserrat">
                    <li>• Leadership e gestione team</li>
                    <li>• Project management</li>
                    <li>• Gestione budget e contabilità</li>
                    <li>• Marketing e comunicazione</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🎯 Opportunità imprenditoriali
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  Per i collaboratori più meritevoli, Mobilitas offre la possibilità di entrare in società 
                  e sviluppare progetti imprenditoriali insieme, con accesso a know-how, risorse umane 
                  qualificate e capitali per realizzare le idee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Iter di selezione */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-dark font-montserrat">
                Iter di selezione
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Invio candidatura
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Invia il tuo CV e una lettera di presentazione attraverso il form di candidatura. 
                    Valuteremo il tuo profilo entro 48 ore.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Colloquio telefonico (15-20 min)
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Breve colloquio telefonico per conoscerti meglio e verificare la compatibilità 
                    con la posizione e l'ambiente di lavoro.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Colloquio in presenza (45-60 min)
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Colloquio approfondito con il team HR e il responsabile amministrativo. 
                    Visita del centro e presentazione dell'ambiente di lavoro.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Test pratico (30 min)
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Test pratico su Excel e gestione di situazioni tipiche della segreteria 
                    per valutare le competenze operative.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Comunicazione esito
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Comunicazione dell'esito entro 3 giorni lavorativi. In caso di esito positivo, 
                    definizione delle modalità di inserimento e formazione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Come candidarti */}
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
                  📋 Documenti richiesti
                </h3>
                <ul className="space-y-2 text-gray-700 font-montserrat">
                  <li>• <strong>CV aggiornato</strong> in formato PDF</li>
                  <li>• <strong>Lettera di presentazione</strong> personalizzata</li>
                  <li>• <strong>Certificazioni</strong> e attestati (se disponibili)</li>
                  <li>• <strong>Referenze</strong> di precedenti esperienze lavorative</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  📧 Modalità di invio
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Email:</strong> 
                    <a href="mailto:lavora@mobilitas.it" className="text-sky-600 hover:text-sky-700 ml-2">
                      lavora@mobilitas.it
                    </a>
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Oggetto:</strong> Candidatura Segretaria Generale - [Nome Cognome]
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>WhatsApp:</strong> 
                    <a href="https://wa.me/393401234567" className="text-sky-600 hover:text-sky-700 ml-2">
                      +39 340 123 4567
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  ⚡ Candidatura rapida
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed mb-4 mt-0">
                  Per una candidatura più veloce, puoi inviare il tuo CV direttamente via WhatsApp 
                  con una breve presentazione di te stesso e del perché vorresti lavorare con noi.
                </p>
                <a 
                  href="https://wa.me/393401234567?text=Ciao! Sono interessato/a alla posizione di Segretaria Generale. Ecco il mio CV:"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors font-montserrat"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Candidati via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Jobs */}
        <div className="text-center">
          <Link
            to="/lavora-con-noi"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors font-montserrat"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alle posizioni disponibili
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Segretaria
