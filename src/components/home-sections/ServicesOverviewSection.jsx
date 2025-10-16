import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Activity, 
  Utensils, 
  Moon, 
  Brain, 
  Heart, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react'

const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Activity,
      title: "Movimento",
      subtitle: "La vita è movimento, la morte è immobilità",
      description: "Aiutiamo i nostri pazienti a riconquistare libertà di movimento, fluidità e forza. L'inattività è il nemico numero uno da combattere.",
      benefits: ["Libertà di movimento", "Forza e resistenza", "Postura corretta", "Mobilità articolare"],
      color: "green"
    },
    {
      icon: Utensils,
      title: "Alimentazione",
      subtitle: "Il nostro carburante",
      description: "Ciò che mettiamo nel nostro corpo determina come ci sentiamo e funzioniamo. Guidiamo verso scelte alimentari consapevoli e sostenibili.",
      benefits: ["Energia costante", "Recupero ottimale", "Peso ideale", "Digestione perfetta"],
      color: "blue"
    },
    {
      icon: Moon,
      title: "Sonno",
      subtitle: "Il potere del recupero",
      description: "Un sonno di qualità è il segreto per rigenerarsi e per una vita senza tensioni e dolori. Costruiamo routine di riposo che rigenerano corpo e mente.",
      benefits: ["Riposo profondo", "Rigenerazione cellulare", "Mente lucida", "Energia mattutina"],
      color: "purple"
    },
    {
      icon: Brain,
      title: "Gestione dello Stress",
      subtitle: "L'equilibrio interiore",
      description: "Lo stress cronico è uno dei maggiori nemici della salute. Offriamo strumenti pratici per imparare a gestirlo in modo efficace.",
      benefits: ["Calma interiore", "Focus mentale", "Relazioni migliori", "Pace emotiva"],
      color: "orange"
    },
    {
      icon: Heart,
      title: "Relazioni",
      subtitle: "Siamo connessi",
      description: "Siamo esseri sociali e la qualità delle relazioni influisce sul benessere più di quanto pensiamo. Creiamo un ambiente di fiducia reciproca.",
      benefits: ["Supporto emotivo", "Connessioni profonde", "Ambiente positivo", "Crescita personale"],
      color: "pink"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: "bg-green/10",
        border: "border-green/20",
        icon: "text-green",
        button: "bg-green hover:bg-green/90 text-white"
      },
      blue: {
        bg: "bg-blue-100",
        border: "border-blue-200",
        icon: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700 text-white"
      },
      purple: {
        bg: "bg-purple-100",
        border: "border-purple-200",
        icon: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700 text-white"
      },
      orange: {
        bg: "bg-orange-100",
        border: "border-orange-200",
        icon: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700 text-white"
      },
      pink: {
        bg: "bg-pink-100",
        border: "border-pink-200",
        icon: "text-pink-600",
        button: "bg-pink-600 hover:bg-pink-700 text-white"
      }
    }
    return colors[color] || colors.green
  }

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-[24px]">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
            <Target className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold text-sky-400 font-montserrat">
              Il nostro approccio olistico
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 mt-0 font-montserrat">
            I 5 pilastri della salute
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl font-montserrat">
            Non ci limitiamo a trattare i sintomi. 
            <span className="font-semibold text-blue-dark"> Il nostro approccio tocca ogni area della vita</span> per garantire risultati concreti e duraturi.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {services.map((service, index) => {
                const IconComponent = service.icon
                const colors = getColorClasses(service.color)
                
                return (
                  <div key={index} className="flex-shrink-0 w-80 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-dark/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-lg font-bold text-blue-dark mb-2 font-montserrat">
                        {service.title}
                      </h3>
                      <p className="text-xs text-blue-dark/60 mb-3 font-montserrat italic">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-blue-dark/80 mb-4 font-montserrat leading-relaxed text-sm flex-1">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-1 mb-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-blue-dark flex-shrink-0" />
                            <span className="text-xs text-blue-dark/80 font-montserrat">
                              {benefit}
                            </span>
                          </div>
                        ))}
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
              {services.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-blue-dark/30 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Message */}
        <div className="text-left mt-16">
          <p className="text-lg text-blue-dark/80 font-montserrat max-w-3xl">
            <span className="font-semibold text-blue-dark">"Non ti offriamo scorciatoie, ti offriamo una strada chiara e sicura per stare bene davvero."</span>
            <br />
            La salute non è qualcosa che ottieni da altri, è qualcosa che costruisci ogni giorno.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverviewSection
