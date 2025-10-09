import React from 'react'

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-dark mb-8 font-montserrat">
          Chi Siamo
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center text-blue-dark/80 mb-8 font-montserrat">
            La nostra storia, la nostra missione e i valori che ci guidano ogni giorno.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
                La Nostra Storia
              </h2>
              <p className="text-blue-dark/80 font-montserrat">
                Da anni ci dedichiamo con passione al benessere dei nostri pazienti, 
                offrendo servizi di alta qualità nel campo dell'osteopatia.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-dark mb-4 font-montserrat">
                La Nostra Missione
              </h2>
              <p className="text-blue-dark/80 font-montserrat">
                Il nostro obiettivo è aiutare ogni persona a raggiungere il massimo 
                del proprio potenziale di salute e benessere attraverso terapie personalizzate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiSiamo
