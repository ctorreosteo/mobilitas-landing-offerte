import React from 'react'
import { AlertTriangle, Pill, Clock, UserX, Zap, Shield, MessageCircle, Calendar } from 'lucide-react'

const ProblemsSection = () => {
  const problems = [
    {
      icon: Pill,
      title: "Farmaci che non curano, ma ti rendono dipendente",
      description: "Ti danno un sollievo momentaneo, mentre nel frattempo il tuo corpo grida aiuto. Non risolvono il problema, lo nascondono, fino a quando diventa troppo grande per essere ignorato.",
      pain: "Ti senti intrappolato in un ciclo infinito di dipendenza"
    },
    {
      icon: Clock,
      title: "Una società che ti spinge a ignorare il tuo benessere",
      description: "Ti vendono stili di vita frenetici, ti fanno credere che puoi mangiare male, dormire poco e non muoverti... E poi ti propongono soluzioni rapide e costose per i danni che hai causato a te stesso.",
      pain: "Ti senti in colpa per non riuscire a 'stare al passo'"
    },
    {
      icon: UserX,
      title: "Un percorso frammentato, senza una vera guida",
      description: "Dopo diversi tentativi, hai girato tra specialisti senza mai ottenere una visione completa del tuo problema. Ti manca qualcuno che ti segua davvero e ti aiuti a ritrovare equilibrio. Così finisci per convivere con il dolore, anche se dentro di te sai che meriti di meglio.",
      pain: "Ti senti invisibile e senza speranza"
    },
    {
      icon: AlertTriangle,
      title: "Il dolore che diventa la tua 'normalità'",
      description: "Hai iniziato ad accettare il dolore come parte inevitabile della vita. Ti svegli con la schiena rigida, vai a letto con il mal di testa, e hai dimenticato come ci si sente a stare davvero bene.",
      pain: "Hai smesso di credere che possa esistere una vita senza dolore"
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-[24px]">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-red-600 font-montserrat">
              I problemi della società moderna
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 mt-0 font-montserrat">
            Ti riconosci in questa realtà?
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl font-montserrat">
            Viviamo in un mondo che ci ha abituati ad accettare il dolore come parte inevitabile della vita. 
            <span className="font-semibold text-blue-dark"> Ma tu non devi accettarlo.</span>
          </p>
        </div>

        {/* Problems Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {problems.map((problem, index) => {
                const IconComponent = problem.icon
                return (
                  <div key={index} className="flex-shrink-0 w-80 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-red-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-blue-dark mb-3 mt-0 font-montserrat leading-tight">
                            {problem.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-blue-dark/80 mb-4 font-montserrat leading-relaxed text-sm flex-1">
                        {problem.description}
                      </p>
                      
                      <div className="bg-red-50 rounded-lg p-3 border border-red-200 mt-auto">
                        <p className="text-red-700 font-medium text-sm font-montserrat">
                          💔 {problem.pain}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {problems.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-red-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* The Turning Point - Redesigned */}
        <div className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-green/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-sky-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-green/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-left mb-12">
              <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mt-4 mb-0 shadow-lg backdrop-blur-sm">
                <Zap className="w-5 h-5 text-sky-400" />
                <span className="text-sm font-semibold text-sky-400 font-montserrat">
                  Il momento del cambiamento
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-dark mb-6 font-montserrat leading-tight">
                Ma c'è una verità che nessuno ti ha mai detto
              </h3>
              
              {/* Problems Section Image */}
              <div className="mt-8 mb-8">
                <img 
                  src="/home/home1.png" 
                  alt="Ma c'è una verità che nessuno ti ha mai detto" 
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Truth Paragraph */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-blue-dark/90 font-montserrat leading-relaxed">
                <span className="font-semibold">Il dolore non è una condanna, è un segnale.</span> Un segnale che indica la necessità di cambiare, di evolvere, di prendersi cura di sé in modo profondo e duraturo.
              </p>
            </div>

            {/* Main Content Cards */}
            <div className="grid lg:grid-cols-1 gap-8 mb-12">
              {/* Your Power Card - Updated Design */}
              <div className="group relative">
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 border border-white/50 rounded-3xl p-4 md:p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Header with Icon and Text */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      <Zap className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className="text-lg md:text-2xl font-bold text-blue-dark font-montserrat mb-1 md:mb-2">
                        Il tuo potere
                      </h4>
                      <p className="text-blue-dark/70 font-montserrat text-xs md:text-sm mt-0">La fortuna è che la scelta è nelle tue mani</p>
                    </div>
                  </div>
                  
                  <div className="space-y-0">
                    <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-blue-400/5 transition-colors">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      </div>
                      <p className="text-blue-dark font-semibold font-montserrat text-xs md:text-sm mt-0"><span className="font-bold">Tu hai il controllo</span> – <span className="font-normal">Le tue abitudini quotidiane influenzano in modo diretto la qualità del tuo corpo, del tuo recupero e della tua energia.</span></p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-blue-400/5 transition-colors">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      </div>
                      <p className="text-blue-dark font-semibold font-montserrat text-xs md:text-sm mt-0"><span className="font-bold">Il cambiamento è possibile</span> – <span className="font-normal">Con il giusto approccio, anche dolori cronici e disturbi ricorrenti possono migliorare in modo misurabile.</span></p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-blue-400/5 transition-colors">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      </div>
                      <p className="text-blue-dark font-semibold font-montserrat text-xs md:text-sm mt-0"><span className="font-bold">La salute è una scelta</span> – <span className="font-normal">Non delegarla ad antidolorifici o rimedi temporanei: il tuo corpo può guarire, se lo metti nelle condizioni giuste.</span></p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Bottom Message - Minimal */}
            <div className="text-left mt-8">
              <p className="text-lg md:text-xl text-blue-dark/80 font-montserrat leading-relaxed mb-4">
                Ogni sintomo è un <span className="font-bold">segnale</span>, non un punto di arrivo. Rigidità, infiammazioni, dolori cronici: sono spesso il risultato di tensioni accumulate e compensazioni che il corpo non riesce più a gestire.
              </p>
              <p className="text-lg md:text-xl text-blue-dark/80 font-montserrat leading-relaxed">
                Con il giusto <span className="font-bold">approccio manuale</span>, è possibile agire sulla causa e non solo sul sintomo (migliorando la mobilità, riducendo il dolore e prevenendo peggioramenti futuri).
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 max-w-4xl mx-auto">
              <button
                onClick={() => {
                  const message = encodeURIComponent("Ciao, vorrei effettuare una breve consulenza conoscitiva per comprendere se potete essermi di aiuto. Quando ci sarebbe posto? Grazie");
                  window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                }}
                className="group bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-left flex items-center justify-between text-lg md:text-base uppercase min-h-[100px] w-full"
              >
                <div className="flex-1 pr-4">
                  Prenota un<br />consulto gratuito
                </div>
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Ciao, vorrei effettuare una prima visita con sconto. Quando ci sarebbe posto? Grazie");
                  window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
                }}
                className="group bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-left flex items-center justify-between text-lg md:text-base uppercase min-h-[100px] w-full"
              >
                <div className="flex-1 pr-4">
                  Prenota una prima<br />visita con sconto
                </div>
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
