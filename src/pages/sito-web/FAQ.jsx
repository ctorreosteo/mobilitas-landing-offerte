import React from 'react'

const FAQ = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-dark mb-8 font-montserrat">
          Domande Frequenti
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center text-blue-dark/80 mb-8 font-montserrat">
            Trova risposte alle domande più comuni sui nostri servizi e trattamenti.
          </p>
          <div className="space-y-6">
            <div className="bg-blue-dark/5 border border-blue-dark/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-dark mb-2 font-montserrat">
                Domanda di esempio
              </h3>
              <p className="text-blue-dark/80 font-montserrat">
                Risposta di esempio che fornisce informazioni utili ai visitatori.
              </p>
            </div>
            <div className="bg-blue-dark/5 border border-blue-dark/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-dark mb-2 font-montserrat">
                Altra domanda frequente
              </h3>
              <p className="text-blue-dark/80 font-montserrat">
                Altra risposta di esempio per aiutare gli utenti a comprendere meglio i nostri servizi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
