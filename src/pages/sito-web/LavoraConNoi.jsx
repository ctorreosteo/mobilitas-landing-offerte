import React from 'react'

const LavoraConNoi = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-dark mb-8 font-montserrat">
          Lavora con Noi
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center text-blue-dark/80 mb-8 font-montserrat">
            Unisciti al nostro team di professionisti dedicati al benessere dei nostri pazienti.
          </p>
          <div className="bg-blue-dark/5 border border-blue-dark/10 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
              Opportunità di Lavoro
            </h2>
            <p className="text-blue-dark/80 font-montserrat">
              Stiamo sempre alla ricerca di professionisti qualificati e motivati 
              che condividano la nostra passione per la salute e il benessere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LavoraConNoi
