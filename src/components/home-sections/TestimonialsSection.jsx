import React from 'react'
import { Star, Quote, Play, Users, Award, TrendingUp } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marco R.",
      age: "45 anni",
      problem: "Mal di schiena cronico",
      testimonial: "Dopo 10 anni di farmaci e specialisti, finalmente ho capito che la mia salute dipendeva da me. Con Mobilitas ho imparato a prendermi cura del mio corpo ogni giorno. Ora mi sveglio senza dolore e ho l'energia di un ventenne.",
      result: "Libero dal dolore da 2 anni",
      rating: 5
    },
    {
      name: "Laura M.",
      age: "38 anni",
      problem: "Emicranie invalidanti",
      testimonial: "Pensavo che le mie emicranie fossero genetiche e che dovessi conviverci. Invece ho scoperto che erano legate al mio stile di vita. Ora ho gli strumenti per gestire tutto e vivo senza più paura del dolore.",
      result: "Emicranie ridotte del 90%",
      rating: 5
    },
    {
      name: "Giuseppe T.",
      age: "52 anni",
      problem: "Rigidità e dolori articolari",
      testimonial: "Avevo accettato che invecchiare significasse soffrire. Mobilitas mi ha insegnato che la salute è una scelta quotidiana. Ora mi muovo meglio di quando avevo 30 anni e mi godo la pensione in piena forma.",
      result: "Mobilità recuperata al 100%",
      rating: 5
    }
  ]

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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-green" />
            <span className="text-sm font-medium text-green font-montserrat">
              Storie di trasformazione
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-montserrat">
            Non siamo solo numeri, siamo storie
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl mx-auto font-montserrat">
            Ogni persona che entra da noi ha una storia. 
            <span className="font-semibold text-green"> Queste sono le storie di chi ha scelto di riprendere il controllo.</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
                <IconComponent className="w-8 h-8 text-green mx-auto mb-3" />
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-green" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-blue-dark/80 mb-6 font-montserrat leading-relaxed text-center">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Problem & Result */}
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <p className="text-sm text-red-700 font-medium font-montserrat">
                    <span className="font-semibold">Prima:</span> {testimonial.problem}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-sm text-green-700 font-medium font-montserrat">
                    <span className="font-semibold">Ora:</span> {testimonial.result}
                  </p>
                </div>
              </div>

              {/* Author */}
              <div className="text-center mt-6 pt-6 border-t border-cream">
                <p className="font-semibold text-blue-dark font-montserrat">
                  {testimonial.name}
                </p>
                <p className="text-sm text-blue-dark/60 font-montserrat">
                  {testimonial.age}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <div className="bg-gradient-to-r from-blue-dark to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green/20 rounded-full px-4 py-2 mb-6">
              <Play className="w-5 h-5 text-green" />
              <span className="text-sm font-medium text-green font-montserrat">
                Guarda le storie complete
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
              Vuoi sentire le loro voci?
            </h3>
            
            <p className="text-lg text-cream/90 mb-8 font-montserrat">
              Ascolta le storie complete di chi ha scelto di cambiare vita. 
              <span className="font-semibold text-green"> Le loro parole valgono più di mille promesse.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-green hover:bg-green/90 text-blue-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat">
                <Play className="inline-block mr-2 w-5 h-5" />
                Guarda i video testimonianze
              </button>
              <button className="group border-2 border-cream text-cream hover:bg-cream hover:text-blue-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 font-montserrat">
                Leggi tutte le recensioni
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-blue-dark/70 text-sm font-montserrat mb-4">
            Oltre <span className="font-semibold text-green">500 persone</span> hanno già scelto di riprendere il controllo della propria salute
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-dark/60">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-montserrat">4.9/5 su Google Reviews</span>
            <span className="mx-2">•</span>
            <span className="text-sm font-montserrat">+200 recensioni verificate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
