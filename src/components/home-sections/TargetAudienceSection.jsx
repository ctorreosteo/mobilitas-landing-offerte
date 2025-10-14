import React from 'react'
import { Check, X, Target, Users } from 'lucide-react'

const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green/15 rounded-full px-4 py-2 mb-6 border border-green/20">
            <Target className="w-5 h-5 text-blue-dark" />
            <span className="text-sm font-medium text-blue-dark font-montserrat">
              Chi siamo noi per te
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
            Non siamo per tutti
          </h2>
          <p className="text-lg text-blue-dark/90 max-w-2xl mx-auto font-montserrat">
            Siamo per chi è pronto a <span className="font-semibold text-blue-dark bg-green/20 px-3 py-1.5 rounded border border-green/30">prendere il controllo</span> della propria salute
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Per chi è */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-green border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green/15 rounded-full flex items-center justify-center border border-green/20">
                <Check className="w-6 h-6 text-blue-dark" />
              </div>
              <h3 className="text-2xl font-bold text-blue-dark font-montserrat">
                Per chi è Mobilitas
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-dark flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi è stanco di dipendere dai farmaci</span> e vuole una soluzione duratura
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-dark flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi vuole capire il proprio corpo</span> invece di delegare tutto ai medici
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-dark flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi è pronto a impegnarsi</span> per cambiare le proprie abitudini
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-dark flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi vuole invecchiare in salute</span> e godersi la pensione
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-dark flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi cerca un approccio olistico</span> che guarda alla persona nella sua totalità
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg border" style={{backgroundColor: '#0ea5e9', borderColor: '#0ea5e9'}}>
              <p className="text-white font-semibold font-montserrat text-center">
                "Sei pronto a diventare il leader della tua salute?"
              </p>
            </div>
          </div>

          {/* Per chi non è */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-500 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center border border-red-200">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-dark font-montserrat">
                Per chi non è Mobilitas
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi cerca soluzioni rapide</span> senza voler cambiare nulla
                </p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi vuole solo "la pillola magica"</span> per risolvere tutto
                </p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi non è disposto a prendersi responsabilità</span> per la propria salute
                </p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi preferisce delegare tutto</span> ai medici senza partecipare
                </p>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-blue-dark/90 font-montserrat">
                  <span className="font-semibold">Chi accetta il dolore</span> come parte inevitabile della vita
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-100 rounded-lg border border-red-300">
              <p className="text-red-700 font-semibold font-montserrat text-center">
                "Se cerchi scorciatoie, non siamo la soluzione giusta per te"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-blue-dark/10 rounded-full px-6 py-3 mb-6 border border-blue-dark/20">
            <Users className="w-5 h-5 text-blue-dark" />
            <span className="text-sm font-medium text-blue-dark font-montserrat">
              Riconosci te stesso in una di queste categorie?
            </span>
          </div>
          <p className="text-lg text-blue-dark/90 font-montserrat max-w-2xl mx-auto">
            Se ti sei riconosciuto nella prima categoria, sei nel posto giusto. 
            <span className="font-semibold text-blue-dark bg-green/20 px-3 py-1.5 rounded border border-green/30"> Iniziamo insieme il tuo viaggio verso una salute duratura.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TargetAudienceSection
