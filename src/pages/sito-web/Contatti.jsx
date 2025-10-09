import React from 'react'

const Contatti = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-dark mb-8 font-montserrat">
          Contatti e Dove Siamo
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
                Informazioni di Contatto
              </h2>
              <p className="text-blue-dark/80 mb-4 font-montserrat">
                Siamo qui per aiutarti. Contattaci per prenotare una visita o per qualsiasi domanda.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
                La Nostra Sede
              </h2>
              <p className="text-blue-dark/80 mb-4 font-montserrat">
                Vieni a trovarci nella nostra struttura moderna e accogliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contatti
