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
      title: "Medici che ti trattano come un numero, non come una persona",
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-red-600 font-montserrat">
              I problemi che affronti ogni giorno
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
            Ti riconosci in questa realtà?
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto font-montserrat">
            Viviamo in un mondo che ci ha abituati ad accettare il dolore come parte inevitabile della vita. 
            <span className="font-semibold text-red-600"> Ma tu non devi accettarlo.</span>
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <div key={index} className="bg-cream rounded-2xl p-8 border-l-4 border-red-400 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-dark mb-3 font-montserrat">
                      {problem.title}
                    </h3>
                    <p className="text-blue-dark/80 mb-4 font-montserrat leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                      <p className="text-red-700 font-medium text-sm font-montserrat">
                        💔 {problem.pain}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* The Turning Point */}
        <div className="bg-gradient-to-r from-blue-dark to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-green" />
              <span className="text-sm font-medium text-green font-montserrat">
                Il momento del cambiamento
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
              Ma c'è una verità che nessuno ti ha mai detto
            </h3>
            
            <p className="text-xl text-cream/90 mb-8 font-montserrat leading-relaxed">
              <span className="font-semibold text-green">Il dolore non è una condanna, è un segnale.</span>
              <br />
              Un segnale che indica la necessità di cambiare, di evolvere, di prendersi cura di sé in modo profondo e duraturo.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="w-8 h-8 text-green mx-auto mb-3" />
                <p className="font-semibold font-montserrat">Tu hai il controllo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="w-8 h-8 text-green mx-auto mb-3" />
                <p className="font-semibold font-montserrat">Il cambiamento è possibile</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="w-8 h-8 text-green mx-auto mb-3" />
                <p className="font-semibold font-montserrat">La salute è una scelta</p>
              </div>
            </div>

            <p className="text-lg text-cream font-montserrat">
              <span className="font-bold text-green">Non sei più una vittima delle circostanze.</span>
              <br />
              È ora di iniziare a costruire la vita che desideri.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
