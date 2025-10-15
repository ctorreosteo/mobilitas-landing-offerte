import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-blue-dark font-montserrat">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-4xl">🔧</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-blue-dark mb-6">
            Blog in Manutenzione
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-dark/80 mb-8 leading-relaxed">
            Stiamo lavorando per migliorare questa sezione del sito
          </p>

          {/* Main Message */}
          <div className="bg-gradient-to-r from-blue-400/10 to-blue-dark/10 border border-blue-400/30 rounded-3xl p-8 md:p-12 mb-8">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
              Qualcosa di grande sta arrivando
            </h2>
            <p className="text-lg text-blue-dark/80 max-w-2xl mx-auto leading-relaxed">
              La sezione Blog è attualmente in manutenzione per essere migliorata e offrirti contenuti ancora più utili e interessanti sui temi del benessere e dell'osteopatia.
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-blue-dark/70 mb-6">
              Nel frattempo, puoi:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white border border-blue-dark/10 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-blue-dark mb-2">Chiamaci</h3>
                <p className="text-sm text-blue-dark/70">Per qualsiasi domanda sui nostri servizi</p>
              </div>
              <div className="bg-white border border-blue-dark/10 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-blue-dark mb-2">Leggi le FAQ</h3>
                <p className="text-sm text-blue-dark/70">Trova risposte alle domande più comuni</p>
              </div>
              <div className="bg-white border border-blue-dark/10 rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-semibold text-blue-dark mb-2">Prenota</h3>
                <p className="text-sm text-blue-dark/70">La tua visita presso il nostro studio</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-blue-dark/10">
            <p className="text-blue-dark/60">
              Torna presto per scoprire i nuovi contenuti del nostro blog!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
