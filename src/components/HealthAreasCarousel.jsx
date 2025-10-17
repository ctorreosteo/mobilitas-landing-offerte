import React from 'react'
import { 
  Activity, 
  Utensils, 
  Moon, 
  Brain, 
  Heart, 
  CheckCircle
} from 'lucide-react'

const HealthAreasCarousel = ({ variant = 'home' }) => {
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
      subtitle: "Il supporto emotivo e sociale",
      description: "Le relazioni sane sono fondamentali per il benessere. Lavoriamo per migliorare la qualità delle tue connessioni umane.",
      benefits: ["Relazioni autentiche", "Supporto emotivo", "Comunicazione efficace", "Benessere sociale"],
      color: "red"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'bg-green/20',
        icon: 'text-green'
      },
      blue: {
        bg: 'bg-blue-dark/20',
        icon: 'text-blue-dark'
      },
      purple: {
        bg: 'bg-purple-500/20',
        icon: 'text-purple-500'
      },
      orange: {
        bg: 'bg-orange-500/20',
        icon: 'text-orange-500'
      },
      red: {
        bg: 'bg-red-500/20',
        icon: 'text-red-500'
      }
    }
    return colors[color] || colors.green
  }

  // Variante per la pagina "La nostra storia"
  if (variant === 'story') {
    return (
      <div className="relative max-w-6xl mx-auto mb-8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {services.map((service, index) => {
              const IconComponent = service.icon
              const colors = getColorClasses(service.color)
              
              return (
                <div key={index} className="flex-shrink-0 w-80 bg-green/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green/30 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-bold text-blue-dark mb-2 font-montserrat">
                      {service.title}
                    </h3>
                    <p className="text-xs text-cream/60 mb-3 font-montserrat italic">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-cream/80 mb-4 font-montserrat leading-relaxed text-sm flex-1">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-1 mb-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green flex-shrink-0" />
                          <span className="text-xs text-cream/80 font-montserrat">
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
              <div key={index} className="w-2 h-2 bg-green/30 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Variante per la homepage (originale)
  return (
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
  )
}

export default HealthAreasCarousel
