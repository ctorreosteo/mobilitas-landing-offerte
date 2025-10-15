import React from 'react'
import { Link } from 'react-router-dom'

const LavoraConNoi = () => {
  const jobRoles = [
    {
      id: 'osteopata_junior',
      title: 'Osteopata Junior',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/osteo_junior.png',
      status: 'closed'
    },
    {
      id: 'osteopata_senior',
      title: 'Osteopata Senior',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/osteo_senior.png',
      status: 'closed'
    },
    {
      id: 'osteopata_leader',
      title: 'Osteopata Team Leader o Manager',
      type: 'Assunzione',
      location: 'In presenza',
      image: '/lavori/osteo_leader.png',
      status: 'closed'
    },
    {
      id: 'nutrizionista',
      title: 'Nutrizionista',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/nutrizionista.png',
      status: 'closed'
    },
    {
      id: 'segretaria',
      title: 'Segretaria Generale',
      type: 'Assunzione',
      location: 'In presenza',
      image: '/lavori/segretaria.png',
      status: 'closed'
    },
    {
      id: 'commerciale',
      title: 'Commerciale',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/commerciale.png',
      status: 'closed'
    },
    {
      id: 'pilates',
      title: 'Istruttore Pilates',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/pilates.png',
      status: 'closed'
    },
    {
      id: 'personal-trainer',
      title: 'Personal Trainer',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/pt.png',
      status: 'closed'
    },
    {
      id: 'video-maker',
      title: 'Video Maker',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/video_maker.jpg',
      status: 'closed'
    },
    {
      id: 'social-media-manager',
      title: 'Social Media Manager',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/smm.png',
      status: 'closed'
    },
    {
      id: 'marketer-full-stack',
      title: 'Marketer Full Stack',
      type: 'Partita iva',
      location: 'In presenza',
      image: '/lavori/marketer.png',
      status: 'closed'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Why Work With Us Section */}
      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-dark font-montserrat mb-6">
              Perché lavorare in
              <span className="text-sky-600 block mt-3">Mobilitas</span>
            </h1>
            <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-dark font-montserrat leading-tight">
                  Un'alternativa perfetta al mondo del lavoro tossico
                </h2>
                <p className="text-lg text-gray-600 font-montserrat leading-relaxed">
                  In un mercato sempre più competitivo e spesso caratterizzato da ambienti tossici, 
                  <span className="text-sky-600 font-semibold"> Mobilitas rappresenta un'alternativa reale </span> 
                  a tutto quello che non funziona nelle aziende tradizionali.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-2">
                      Team giovane e collaborativo
                    </h3>
                    <p className="text-gray-600 font-montserrat leading-relaxed">
                      Clima meraviglioso, atmosfera familiare e supporto reciproco reale. 
                      La collaborazione e l'innovazione sono al centro di tutto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-2">
                      Leadership positiva
                    </h3>
                    <p className="text-gray-600 font-montserrat leading-relaxed">
                      Niente terrorismo psicologico. Leadership basata su fiducia, rispetto 
                      e crescita personale. Solo obiettivi chiari e feedback costruttivi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-2">
                      Crescita accelerata
                    </h3>
                    <p className="text-gray-600 font-montserrat leading-relaxed">
                      Azienda in forte espansione con opportunità di fare esperienza 
                      significativa velocemente. La crescita è tangibile e meritata.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-3xl p-8 h-full shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-16 h-16 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-dark font-montserrat mb-4">
                    Il futuro del lavoro
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed">
                    Unisciti a un team che crede nel talento, nella crescita e nell'innovazione. 
                    La tua carriera merita un ambiente dove il successo è condiviso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Section */}
          <div className="bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50 border border-sky-200 rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-dark font-montserrat mb-6">
                Il tuo successo è il nostro investimento
              </h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-dark font-montserrat mb-4 text-left">
                    Stipendi e compensi sopra la media
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-left">
                    Compensi competitivi che riconoscono il valore del tuo lavoro quotidiano.
                  </p>
                </div>

                <div>
                  <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-dark font-montserrat mb-4 text-left">
                    Possibilità di crescita professionale e carriera rapida
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-left">
                    Opportunità concrete di sviluppo professionale attraverso il continuo apprendimento e miglioramente di Soft Skills e Hard Skills. E, in aggiunta, spazio di avanzamento di carriera 
                    attraverso un sistema meritocratico reale.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-dark font-montserrat mb-4 text-left">
                    Possibilità di assumere ruoli gestionali e direzionali velocemente con meritocrazia
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-left">
                    Sistema meritocratico che premia competenza e risultati, permettendo 
                    di raggiungere posizioni di leadership in tempi rapidi.
                  </p>
                </div>

                <div>
                  <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-dark font-montserrat mb-4 text-left">
                    Possibilità di entrare in società e/o sviluppare progetti imprenditoriali insieme con know-how, risorse umane e capitali alle spalle
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed text-left">
                    Opportunità concrete di entrare in società e/o sviluppare progetti imprenditoriali insieme con accesso 
                    a competenze, risorse umane qualificate e capitali per realizzare le idee insieme.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-16">
            <p className="text-2xl md:text-3xl font-bold text-blue-dark font-montserrat leading-relaxed max-w-4xl mx-auto">
              La tua carriera merita un ambiente dove il successo è condiviso, 
              dove la crescita è reale e dove il futuro si costruisce insieme.
            </p>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white pt-16 pb-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark font-montserrat mb-4">
              Figure professionali e Posizioni aperte
            </h1>
          </div>
        </div>
      </div>

      {/* Job Roles Grid */}
      <div className="bg-gray-50 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((job, index) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-200"
              >
                {/* Image */}
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={job.image} 
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-blue-dark font-montserrat">
                      {job.title}
                    </h3>
                    <span className="text-sm text-gray-600 font-montserrat bg-sky-100 px-2 py-1 rounded min-w-[100px] whitespace-nowrap">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 font-montserrat">
                      {job.location}
                    </span>
                    <Link
                      to={`/lavora-con-noi/${job.id}`}
                      className="text-sm font-medium text-sky-600 hover:text-sky-700 font-montserrat no-underline"
                    >
                      Candidati →
                    </Link>
                  </div>

                  {/* Status Indicator */}
                  <div className="border-t border-gray-100 pt-3 pb-0">
                    <div className="flex items-center justify-start">
                      <span className={`text-sm font-medium font-montserrat px-3 py-1 rounded-full ${
                        job.status === 'open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {job.status === 'open' ? 'Posizione Aperta' : 'Posizione Chiusa'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LavoraConNoi