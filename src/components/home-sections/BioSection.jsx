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
      description: "Siamo i primi a trattare i nostri corpi come un tempio, migliorando giorno dopo giorno"
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-green" />
              <span className="text-sm font-medium text-green font-montserrat">
                Chi siamo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
              Non siamo semplici osteopati
            </h2>
            <p className="text-lg text-blue-dark/90 max-w-3xl mx-auto font-montserrat">
              Siamo <span className="font-semibold text-blue-dark bg-green/10 px-2 py-1 rounded">coach del benessere, leader del cambiamento, catalizzatori di trasformazioni reali.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Mission Statement */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                {/* Quote */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green/15 rounded-full flex items-center justify-center border border-green/20">
                    <Quote className="w-8 h-8 text-green" />
                  </div>
                </div>

                <blockquote className="text-xl text-blue-dark mb-8 font-montserrat leading-relaxed text-center">
                  "Ogni giorno ci alziamo con una missione chiara e potente: 
                  <span className="font-semibold text-blue-dark bg-green/10 px-2 py-1 rounded"> restituire alle persone il diritto di vivere senza dolore</span>, 
                  di sentirsi libere nel proprio corpo, di riprendersi in mano la propria salute."
                </blockquote>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-green mt-1 flex-shrink-0" />
                    <p className="text-blue-dark/90 font-montserrat">
                      <span className="font-semibold">La nostra visione:</span> Un mondo in cui le persone camminano senza paura di muoversi, lavorano con energia e vivono con gioia.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-green mt-1 flex-shrink-0" />
                    <p className="text-blue-dark/90 font-montserrat">
                      <span className="font-semibold">Il nostro impegno:</span> Liberare le persone dal dolore, prevenire anziché curare, diffondere una cultura del benessere.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green mt-1 flex-shrink-0" />
                    <p className="text-blue-dark/90 font-montserrat">
                      <span className="font-semibold">La nostra causa:</span> Un mondo senza dolori evitabili, una società più consapevole e responsabile del proprio benessere.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Values */}
            <div>
              <h3 className="text-2xl font-bold text-blue-dark mb-8 font-montserrat text-center lg:text-left">
                I nostri principi guida
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green/15 rounded-full flex items-center justify-center flex-shrink-0 border border-green/20">
                          <IconComponent className="w-6 h-6 text-green" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-dark mb-2 font-montserrat">
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

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-dark to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat drop-shadow-lg">
                Vuoi conoscere meglio la nostra storia?
              </h3>
              
              <p className="text-lg text-white/95 mb-8 font-montserrat leading-relaxed drop-shadow-md">
                Scopri come è nata Mobilitas, chi siamo veramente e perché abbiamo scelto di 
                <span className="font-semibold text-green bg-white/20 px-2 py-1 rounded drop-shadow-md"> combattere l'inerzia</span> e rompere lo schema mentale che ci fa pensare che essere "malati" sia normale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/chi-siamo"
                  className="group bg-green hover:bg-green/90 text-blue-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat border-2 border-green"
                >
                  Scopri la nostra storia
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contatti"
                  className="group border-2 border-white text-white hover:bg-white hover:text-blue-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 font-montserrat shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Incontra il team
                </Link>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-blue-dark mb-4 font-montserrat">
                Un nuovo modo di vivere la salute
              </h4>
              <p className="text-blue-dark/90 font-montserrat leading-relaxed">
                Entrare a fare un percorso in Mobilitas significa fare una scelta diversa. 
                Significa smettere di delegare la propria salute a terzi e prenderne il controllo, giorno dopo giorno.
                <br />
                <span className="font-semibold text-blue-dark bg-green/10 px-2 py-1 rounded">Noi siamo la guida, tu sei il protagonista.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BioSection
