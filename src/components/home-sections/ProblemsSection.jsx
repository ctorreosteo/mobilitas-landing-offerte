import React from 'react'
import { AlertTriangle, Pill, Clock, UserX, Zap, Shield } from 'lucide-react'

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
      title: "Visite in cui ti trattano come un numero, non come una persona",
      description: "Vieni rimbalzato da uno specialista all'altro, senza che nessuno si prenda davvero cura di te. Ti senti perso, frustrato, e alla fine pensi che il tuo destino sia convivere con il dolore.",
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
      <div className="container mx-auto px-4">
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
            <span className="font-semibold text-red-600"> Ma tu non devi accettarlo.</span>
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
            </div>

            {/* Main Content Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Left Card - The Truth */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-green/20 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green via-green/80 to-green/60"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green to-green/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-blue-dark font-montserrat mb-0">
                      La verità nascosta
                    </h4>
                    <p className="text-blue-dark/70 font-montserrat text-sm">Quello che nessuno ti dice</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green/5 rounded-xl border border-green/20">
                    <p className="text-blue-dark font-semibold font-montserrat text-lg mb-2">
                      Il dolore non è una condanna, è un segnale.
                    </p>
                    <p className="text-blue-dark/80 font-montserrat">
                      Un segnale che indica la necessità di cambiare, di evolvere, di prendersi cura di sé in modo profondo e duraturo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card - Your Power */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-sky-400/20 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-sky-400/80 to-sky-400/60"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-400/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-blue-dark font-montserrat mb-0">
                      Il tuo potere
                    </h4>
                    <p className="text-blue-dark/70 font-montserrat text-sm">Quello che hai sempre avuto</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-400/5 transition-colors">
                    <div className="w-8 h-8 bg-sky-400/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-sky-400" />
                    </div>
                    <p className="text-blue-dark font-semibold font-montserrat">Tu hai il controllo</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-400/5 transition-colors">
                    <div className="w-8 h-8 bg-sky-400/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-sky-400" />
                    </div>
                    <p className="text-blue-dark font-semibold font-montserrat">Il cambiamento è possibile</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-400/5 transition-colors">
                    <div className="w-8 h-8 bg-sky-400/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-sky-400" />
                    </div>
                    <p className="text-blue-dark font-semibold font-montserrat">La salute è una scelta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="text-left">
              <div className="relative bg-gradient-to-r from-green/10 to-sky-400/10 border border-green/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
                <div className="absolute top-2 right-2 w-12 h-12 bg-green/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green" />
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4 font-montserrat">
                  Non sei più una vittima delle circostanze
                </h4>
                <p className="text-xl text-blue-dark/80 font-montserrat mb-6">
                  È ora di iniziare a costruire la vita che desideri
                </p>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green to-green/80 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-montserrat">
                  <span>Inizia il tuo cambiamento</span>
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
