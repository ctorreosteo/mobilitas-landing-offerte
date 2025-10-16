import React from 'react'
import { Star, Play, Users, Award, TrendingUp, ExternalLink, MessageCircle, ThumbsUp } from 'lucide-react'

const TestimonialsSection = () => {
  const stats = [
    { number: "500+", label: "Persone trasformate", icon: Users },
    { number: "95%", label: "Soddisfazione clienti", icon: Star },
    { number: "3 anni", label: "Media durata risultati", icon: Award },
    { number: "85%", label: "Riduzione farmaci", icon: TrendingUp }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-dark/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-blue-dark" />
            <span className="text-sm font-medium text-blue-dark font-montserrat">
              Storie di trasformazione
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
            Non siamo solo numeri, siamo storie
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl font-montserrat">
            Ogni persona che entra da noi ha una storia. 
            <span className="font-semibold text-blue-dark"> Scopri le storie di chi ha scelto di riprendere il controllo.</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-dark/20">
                <IconComponent className="w-8 h-8 text-blue-dark mx-auto mb-3" />
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

        {/* Google Reviews CTA - Main Section */}
        <div className="bg-gradient-to-br from-blue-dark via-blue-900 to-blue-dark rounded-3xl p-8 md:p-12 text-white text-left mb-16 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            {/* Google Logo and Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl font-bold text-white">G</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-white font-montserrat">4.9/5</span>
                </div>
                <p className="text-white/80 font-montserrat">+200 recensioni verificate</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-green/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-5 h-5 text-green" />
              <span className="text-sm font-medium text-green font-montserrat">
                Recensioni autentiche
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Leggi le storie vere dei nostri clienti
            </h3>
            
            <p className="text-xl text-white/90 mb-8 font-montserrat leading-relaxed">
              Non credere solo alle nostre parole. 
              <span className="font-semibold text-green"> Leggi le recensioni autentiche</span> di chi ha già scelto di riprendere il controllo della propria salute su Google.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://www.google.com/search?q=mobilitas+recensioni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green hover:bg-green/90 text-blue-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-center flex items-center justify-center"
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                Leggi le recensioni su Google
              </a>
              <button className="group border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-all duration-300 font-montserrat text-center flex items-center justify-center backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Guarda i video testimonianze
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <ThumbsUp className="w-6 h-6 text-green" />
                <div className="text-left">
                  <div className="text-lg font-bold text-white font-montserrat">95%</div>
                  <div className="text-sm text-white/80 font-montserrat">Soddisfazione</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-green" />
                <div className="text-left">
                  <div className="text-lg font-bold text-white font-montserrat">4.9/5</div>
                  <div className="text-sm text-white/80 font-montserrat">Rating medio</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-green" />
                <div className="text-left">
                  <div className="text-lg font-bold text-white font-montserrat">200+</div>
                  <div className="text-sm text-white/80 font-montserrat">Recensioni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-dark/20 shadow-lg">
          <div className="text-left">
            <h4 className="text-2xl font-bold text-blue-dark mb-4 font-montserrat">
              Pronto a iniziare il tuo percorso?
            </h4>
            <p className="text-blue-dark/80 mb-6 font-montserrat">
              Unisciti alle centinaia di persone che hanno già scelto di riprendere il controllo della propria salute
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contatti"
                className="group bg-green hover:bg-green/90 text-blue-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat text-center"
              >
                Inizia ora
              </a>
              <a 
                href="https://www.google.com/search?q=mobilitas+recensioni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border-2 border-blue-dark/30 text-blue-dark hover:bg-blue-dark hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 font-montserrat text-center flex items-center justify-center"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                Leggi le recensioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
