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
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green/10 rounded-full px-4 py-2 mb-6">
            <Target className="w-5 h-5 text-green" />
            <span className="text-sm font-medium text-green font-montserrat">
              Il nostro approccio olistico
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
            I 5 pilastri della salute
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto font-montserrat">
            Non ci limitiamo a trattare i sintomi. 
            <span className="font-semibold text-green"> Il nostro approccio tocca ogni area della vita</span> per garantire risultati concreti e duraturi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colors = getColorClasses(service.color)
            
            return (
              <div key={index} className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-shadow">
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-blue-dark mb-2 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-sm text-blue-dark/60 mb-4 font-montserrat italic">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-blue-dark/80 mb-6 font-montserrat leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green flex-shrink-0" />
                      <span className="text-sm text-blue-dark/80 font-montserrat">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full ${colors.button} font-bold py-3 px-4 rounded-lg transition-all duration-300 font-montserrat text-sm`}>
                  Scopri di più
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Osteopathic Treatment Highlight */}
        <div className="bg-gradient-to-r from-blue-dark to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-green" />
              <span className="text-sm font-medium text-green font-montserrat">
                Il trattamento osteopatico
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
              Il teatro della trasformazione
            </h3>
            
            <p className="text-lg text-cream/90 mb-8 font-montserrat leading-relaxed">
              Il trattamento osteopatico diventa il <span className="font-semibold text-green">teatro in cui possiamo educare le persone</span> e condurle a prendere nuove scelte, per vivere ogni singolo giorno in salute.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Activity className="w-8 h-8 text-green mx-auto mb-3" />
                <p className="font-semibold font-montserrat">Trattamento d'eccellenza</p>
                <p className="text-sm text-cream/80 font-montserrat">Tecniche osteopatiche avanzate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Brain className="w-8 h-8 text-green mx-auto mb-3" />
                <p className="font-semibold font-montserrat">Educazione continua</p>
                <p className="text-sm text-cream/80 font-montserrat">Imparare a prendersi cura di sé</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Heart className="w-8 h-8 text-green mx-auto mb-3" />
                <p className="font-semibold font-montserrat">Supporto personalizzato</p>
                <p className="text-sm text-cream/80 font-montserrat">Accompagnamento nel cambiamento</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contatti"
                className="group bg-green hover:bg-green/90 text-blue-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat"
              >
                Inizia il tuo percorso
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group border-2 border-cream text-cream hover:bg-cream hover:text-blue-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 font-montserrat">
                Scopri i trattamenti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-lg text-blue-dark/80 font-montserrat max-w-3xl mx-auto">
            <span className="font-semibold text-green">"Non ti offriamo scorciatoie, ti offriamo una strada chiara e sicura per stare bene davvero."</span>
            <br />
            La salute non è qualcosa che ottieni da altri, è qualcosa che costruisci ogni giorno.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverviewSection
