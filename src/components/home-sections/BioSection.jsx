import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Award, 
  Users, 
  Heart, 
  ArrowRight, 
  Quote,
  Shield,
  Zap,
  Target
} from 'lucide-react'

const BioSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Estrema responsabilità",
      description: "La salute del paziente è la nostra responsabilità, ci assumiamo il controllo di ogni aspetto per portarlo al miglior risultato possibile"
    },
    {
      icon: Heart,
      title: "Empatia autentica",
      description: "Non ci limitiamo ad ascoltare, comprendiamo il vissuto del paziente e lo accompagniamo nel suo percorso"
    },
    {
      icon: Award,
      title: "Eccellenza quotidiana",
      description: "La formazione e il miglioramento costante sono il nostro mantra per offrire sempre il meglio"
    },
    {
      icon: Zap,
      title: "Essere dei leader",
      description: "Siamo i primi a trattare i nostri corpi come un tempio, migliorando giorno dopo giorno e incarnando i principi e valori"
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-[24px]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
              <Users className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-semibold text-sky-400 font-montserrat">
                Chi siamo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 mt-0 font-montserrat">
              Non siamo semplici osteopati
            </h2>
            <p className="text-lg text-blue-dark/90 max-w-3xl font-montserrat">
              Siamo<span className="font-semibold text-blue-dark bg-blue-dark/10 px-2 py-1 rounded">coach del benessere, leader del cambiamento, catalizzatori di trasformazioni reali.</span>
            </p>
            
            {/* Bio Image */}
            <div className="mt-8 mb-8">
              <img 
                src="/home/home8.png" 
                alt="Coach del benessere, leader del cambiamento" 
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Mission Statement */}
            <div>
              <div className="bg-cream rounded-2xl p-8 shadow-xl border border-gray-100">
                {/* Mission Statement */}
                <div className="flex items-start gap-3 mb-6">
                  <Award className="w-5 h-5 text-blue-dark mt-1 flex-shrink-0" />
                  <p className="text-xl text-blue-dark mb-8 mt-0 font-montserrat leading-relaxed text-left">
                    Ogni giorno ci alziamo con una missione chiara e potente:<span className="font-semibold text-blue-dark bg-blue-dark/10 py-1 rounded">restituire alle persone il diritto di vivere senza dolore</span>, di sentirsi libere nel proprio corpo, di riprendersi in mano la propria salute.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-dark mt-1 flex-shrink-0" />
                    <p className="text-blue-dark/90 font-montserrat mt-0">
                      <span className="font-semibold">La nostra visione:</span> Un mondo in cui le persone camminano senza paura di muoversi, lavorano con energia e vivono con gioia.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-blue-dark mt-1 flex-shrink-0" />
                    <p className="text-blue-dark/90 font-montserrat mt-0">
                      <span className="font-semibold">Il nostro impegno:</span> Liberare le persone dal dolore, prevenire anziché curare, diffondere una cultura del benessere.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-dark mt-1 flex-shrink-0" />
                    <p className="text-blue-dark/90 font-montserrat mt-0">
                      <span className="font-semibold">La nostra causa:</span> Un mondo senza dolori evitabili, una società più consapevole e responsabile del proprio benessere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Values */}
            <div>
              <h3 className="text-2xl font-bold text-blue-dark mb-8 font-montserrat text-left">
                I nostri principi guida
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div key={index} className="bg-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-dark/15 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-dark/20">
                          <IconComponent className="w-6 h-6 text-blue-dark" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-dark mb-2 mt-0 font-montserrat">
                            {value.title}
                          </h4>
                          <p className="text-blue-dark/90 font-montserrat leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>



          {/* Final Message */}
          <div className="text-left mt-16">
            <div className="max-w-4xl mx-auto">
              {/* Final Message Image */}
              <div className="mb-8">
                <img 
                  src="/home/home3.png" 
                  alt="Un nuovo modo di vivere la salute" 
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <h4 className="text-xl font-bold text-blue-dark mb-4 font-montserrat">
                Un nuovo modo di vivere la salute
              </h4>
              <p className="text-blue-dark/90 font-montserrat leading-relaxed">
                Entrare a fare un percorso in Mobilitas significa fare una scelta diversa. 
                Significa smettere di delegare la propria salute a terzi e prenderne il controllo, giorno dopo giorno.
                <br />
                <span className="font-semibold text-blue-dark">Noi siamo la guida, tu sei il protagonista.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BioSection
