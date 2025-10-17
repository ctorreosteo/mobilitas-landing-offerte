import React from 'react'
import { Star, Users, Award, TrendingUp, ExternalLink, Shield, CheckCircle, Heart } from 'lucide-react'

const Testimonianze = () => {


  const stats = [
    { number: "420+", label: "Recensioni verificate", icon: Star, color: "text-yellow-500" },
    { number: "5.0/5", label: "Valutazione media", icon: Award, color: "text-azure-dark" },
    { number: "95%", label: "Soddisfazione clienti", icon: Heart, color: "text-azure-dark" },
    { number: "1°", label: "Studio più richiesto d'Italia", icon: TrendingUp, color: "text-blue-dark" }
  ]

  const achievements = [
    {
        icon: Shield,
        title: "Grandezza",
        description: "Siamo lo Studio Osteopatico più grande d'Italia",
        highlight: false
    },
    {
        icon: Shield,
        title: "Specializzazione",
        description: "I nostri professionisti sono specializzati in ogni area della salute",
        highlight: false
    },
    {
      icon: Shield,
      title: "Recensioni Verificate",
      description: "Tutte le nostre recensioni sono autentiche e verificate da Google",
      highlight: false
    },
    {
      icon: Users,
      title: "Oltre 4000 Clienti Soddisfatti",
      description: "Persone che hanno scelto di riprendere il controllo della propria salute",
      highlight: false
    },
    {
      icon: CheckCircle,
      title: "Risultati Duraturi",
      description: "I nostri clienti mantengono i risultati nel tempo, non solo durante il trattamento",
      highlight: false
    }
  ]

  const handleGoogleReviewsClick = () => {
    window.open('https://www.google.com/search?q=Studio+Osteopatico+-+OsteoTouch+SRL+-+Osteopata+Torino&stick=H4sIAAAAAAAA_-NgU1IxqEhLNUo1skwztjBMS0m2NLYyqLA0T01NNTQ3SU5MMjBPTElcxGoWXFKakpmv4F9ckppfkFiSmZyvoAvhheSXJmcoBAf5wASA0okKI%20flFmXn5AE3a9AxhAAAA&hl=it&mat=CXo9HS-cpKcEElYBmzl_pSjKAk19ZjNmiUWNb1lVW4Rrxha9bmGQktuOJIndl5ahaBrVIi0EYe_OIThjlUSv5uUay4jbSfowMvuOp2Pwo4pd9UW4rHzQpGMyOnvtsuDoxg&authuser=0#mpd=~335417687974690170/customers/reviews', '_blank')
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-left">
              <div className="flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm w-fit">
                <Award className="w-6 h-6 text-sky-400 flex-shrink-0" />
                <span className="text-lg font-bold text-sky-400 font-montserrat leading-tight">
                  #1 Studio Osteopatico<br />d'Italia
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 font-montserrat text-blue-dark">
                Lo Studio Osteopatico più
                <span className="text-azure-dark block">richiesto d'Italia</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-dark/80 mb-12 font-montserrat leading-relaxed">
                Con oltre <span className="font-bold text-azure-dark">420+ recensioni verificate</span> e una valutazione di <span className="font-bold text-azure-dark">5.0/5 stelle</span>, 
                siamo lo studio osteopatico con più testimonianze e richieste di tutta Italia.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
                <button 
                  onClick={handleGoogleReviewsClick}
                  className="group bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat text-lg"
                >
                  <ExternalLink className="inline-block mr-3 w-6 h-6" />
                  Leggi tutte le recensioni su Google
                </button>
                <div className="flex items-center gap-2 text-blue-dark/70">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-montserrat">5.0/5 su Google Reviews</span>
                </div>
              </div>
        </div>

        <div className="text-left mb-16 mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
                Perché siamo il <span className="text-azure-dark">#1</span>
              </h2>
              <p className="text-lg text-blue-dark/80 max-w-3xl font-montserrat">
                I numeri parlano chiaro: siamo lo studio osteopatico più richiesto e recensito d'Italia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className={`text-left p-8 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                    achievement.highlight 
                      ? 'bg-gradient-to-br from-azure-dark/10 to-azure-dark/20 border-2 border-azure-dark/30' 
                      : 'bg-white shadow-sm'
                  }`}>
                    <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${
                      achievement.highlight ? 'bg-azure-dark/20' : 'bg-blue-dark/10'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        achievement.highlight ? 'text-azure-dark' : 'text-blue-dark'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 font-montserrat ${
                      achievement.highlight ? 'text-azure-dark' : 'text-blue-dark'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-blue-dark/70 font-montserrat">
                      {achievement.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-left bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <IconComponent className={`w-8 h-8 mb-3 ${stat.color}`} />
                    <div className="text-2xl md:text-3xl font-bold text-blue-dark mb-2 font-montserrat">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-dark/70 font-montserrat">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

        <div className="text-left mt-16">
              <div className="inline-flex items-center gap-2 bg-blue-dark/10 rounded-full p-0 m-0">
                <ExternalLink className="w-5 h-5 text-blue-dark" />
                <span className="text-sm font-medium text-blue-dark font-montserrat">
                  Leggi tutte le recensioni
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat text-blue-dark">
                Vuoi leggere tutte le nostre recensioni?
              </h3>
              
              <p className="text-lg text-blue-dark/80 mb-8 font-montserrat">
                Su Google puoi trovare oltre <span className="font-semibold text-azure-dark">420+ recensioni verificate</span> di persone che hanno scelto di cambiare vita con noi.
              </p>

              <button 
                onClick={handleGoogleReviewsClick}
                className="group bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat text-lg"
              >
                <ExternalLink className="inline-block mr-3 w-6 h-6" />
                Leggi tutte le recensioni su Google
              </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonianze
