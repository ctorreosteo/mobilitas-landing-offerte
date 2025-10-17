import React from 'react'

const Magazine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-blue-dark font-montserrat">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">📰</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark mb-4">
              Magazine
            </h1>
            <p className="text-xl text-blue-dark/70 leading-relaxed">
              La nostra rivista digitale con approfondimenti, storie e contenuti esclusivi
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-12 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
              Pagina in Costruzione
            </h2>
            <p className="text-lg text-blue-dark/70 leading-relaxed mb-8">
              Stiamo lavorando per portarti contenuti di qualità. Torna presto per scoprire articoli, 
              interviste e approfondimenti esclusivi sul mondo della salute e del benessere.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-dark mb-3">Cosa troverai nel Magazine:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📖</span>
                  <span className="text-blue-dark/80">Articoli approfonditi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">🎯</span>
                  <span className="text-blue-dark/80">Consigli pratici</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">👥</span>
                  <span className="text-blue-dark/80">Storie di successo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500">🔬</span>
                  <span className="text-blue-dark/80">Ricerca e innovazione</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/newsletter" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-green-600 transition-all duration-300 no-underline"
              >
                📧 Iscriviti alla Newsletter
              </a>
              <a 
                href="/contatti" 
                className="inline-flex items-center px-6 py-3 bg-white border border-blue-300 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 no-underline"
              >
                📞 Contattaci
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Magazine
