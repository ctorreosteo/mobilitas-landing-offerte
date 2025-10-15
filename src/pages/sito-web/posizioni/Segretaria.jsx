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
                Contratto a tempo determinato o indeterminato
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
                  <strong className="text-blue-dark">Volontù di imparare e mettersi in gioco</strong> continuamente
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Facilità e rapidità nell'utilizzo dei dispositivi digitali</strong> (computer, tablet, cellulare)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Disponibilità part-time 80% o full-time</strong> (40 ore settimanali)
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
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Essere una persona organizzata</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Ottima padronanza della lingua italiana scritta</strong>
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
                  <strong className="text-blue-dark">Accoglienza dei pazienti</strong> e gestione della reception
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Gestione degli appuntamenti</strong> e ottimizzazione del calendario dello studio
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Invio di promemoria</strong> e gestione delle comunicazioni con i pazienti
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Gestione tempestiva di disdette</strong> e riprogrammazioni
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Uso e aggiornamento del CRM</strong> dello studio
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Fatturazione e contabilità di base</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Gestione documentazione pazienti</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Attività telefoniche per Customer Care</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  <strong className="text-blue-dark">Disponibilità a comparire in eventuali video</strong> di presentazione e promozione dello studio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Possibilità di carriera */}
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
                    <li>Coordinatrice amministrativa</li>
                    <li>Responsabile studio</li>
                    <li>Assistente di direzione</li>
                    <li>Responsabile amministrativo</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-blue-dark font-montserrat mb-3 mt-0">
                    💼 Competenze da sviluppare
                  </h4>
                  <ul className="space-y-2 text-gray-700 font-montserrat">
                    <li>Leadership e gestione team</li>
                    <li>Project management</li>
                    <li>Gestione budget e contabilità</li>
                    <li>Marketing e comunicazione</li>
                    <li>Capacità di vendita</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-3 mt-0">
                  🎯 Opportunità imprenditoriali
                </h3>
                <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                  Per i collaboratori più meritevoli, Mobilitas offre la possibilità di entrare in società 
                  e/o sviluppare progetti imprenditoriali insieme, con accesso a know-how, risorse umane 
                  qualificate e capitali per realizzare le idee.
                </p>
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
                Iter di selezione
              </h2>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 font-montserrat leading-relaxed text-lg">
                Il processo di selezione si articolerà in <strong className="text-blue-dark">tre fasi</strong>:
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Primo colloquio
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Breve, conoscitivo e orientato a rispondere a eventuali domande sul ruolo e sulle attività quotidiane, 
                    per valutare l'idoneità del candidato.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Secondo colloquio
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Esercitazione pratica sulle capacità di ragionamento e problem-solving utilizzando Google Sheets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-dark font-montserrat mb-2 mt-0">
                    Terzo colloquio
                  </h3>
                  <p className="text-gray-700 font-montserrat leading-relaxed mt-0">
                    Presentazione dell'offerta lavorativa e conclusione del processo di selezione.
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
                    Inviaci il tuo CV
                  </p>
                  <p className="text-gray-700 font-montserrat mt-0">
                    <strong>Oggetto:</strong> Candidatura Segretaria Generale - [Nome Cognome]
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-sky-200">
                <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-4 mt-0">
                  📋 Documenti richiesti
                </h3>
                <ul className="space-y-2 text-gray-700 font-montserrat">
                  <li>• <strong>CV aggiornato</strong></li>
                  <li>• <strong>Certificazioni e attestati</strong> (se disponibili)</li>
                  <li>• <strong>PLUS:</strong> allega un breve video personale per presentarti</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Segretaria
