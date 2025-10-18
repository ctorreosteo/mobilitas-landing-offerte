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
  Target,
  MessageCircle,
  Calendar
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

          {/* Mission Statement - Minimal Paragraph */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-blue-dark/90 font-montserrat leading-relaxed mb-6">
              Ogni giorno ci alziamo con una missione chiara e potente: <span className="font-semibold text-blue-dark">restituire alle persone il diritto di vivere senza dolore</span>, di sentirsi libere nel proprio corpo, di riprendersi in mano la propria salute.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg md:text-xl text-blue-dark/90 font-montserrat leading-relaxed">
                  <span className="font-semibold">La nostra visione:</span> Un mondo in cui le persone camminano senza paura di muoversi, lavorano con energia e vivono con gioia.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg md:text-xl text-blue-dark/90 font-montserrat leading-relaxed">
                  <span className="font-semibold">Il nostro impegno:</span> Liberare le persone dal dolore, prevenire anziché curare, diffondere una cultura del benessere.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg md:text-xl text-blue-dark/90 font-montserrat leading-relaxed">
                  <span className="font-semibold">La nostra causa:</span> Un mondo senza dolori evitabili, una società più consapevole e responsabile del proprio benessere.
                </p>
              </li>
            </ul>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-dark mb-8 font-montserrat text-left">
              I nostri principi guida
            </h3>
            
            {/* Image moved here */}
            <div className="mb-8">
              <img 
                src="/home/home3.png" 
                alt="Un nuovo modo di vivere la salute" 
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                const gradients = [
                  { icon: "from-blue-500 to-blue-600", bg: "from-blue-50 to-blue-100" },
                  { icon: "from-green-500 to-green-600", bg: "from-green-50 to-green-100" },
                  { icon: "from-purple-500 to-purple-600", bg: "from-purple-50 to-purple-100" },
                  { icon: "from-orange-500 to-orange-600", bg: "from-orange-50 to-orange-100" }
                ]
                const gradient = gradients[index]
                
                return (
                  <div key={index} className="group relative">
                    <div className={`relative bg-gradient-to-br ${gradient.bg} border border-white/50 rounded-3xl p-6 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                      {/* Icon */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${gradient.icon} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-xl font-bold text-blue-dark mb-3 mt-0 font-montserrat">
                        {value.title}
                      </h4>
                      <p className="text-blue-dark/70 font-montserrat leading-relaxed text-sm">
                        {value.description}
                      </p>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient.icon} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>



          {/* Final Message */}
          <div className="text-left mt-16">
            <div className="max-w-4xl mx-auto">
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 max-w-4xl mx-auto">
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
    </section>
  )
}

export default BioSection
