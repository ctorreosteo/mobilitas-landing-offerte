import React, { useState, useEffect } from 'react'
import { Check, X, Target, Users, Heart, Zap, Shield, Star, ArrowRight, Sparkles, MessageCircle, Calendar } from 'lucide-react'

const TargetAudienceSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const targetPoints = [
    {
      icon: Heart,
      title: "Chi è stanco di dipendere dai farmaci",
      description: "e vuole una soluzione duratura"
    },
    {
      icon: Zap,
      title: "Chi vuole capire il proprio corpo",
      description: "invece di delegare tutto alla medicina tradizionale"
    },
    {
      icon: Shield,
      title: "Chi è pronto a impegnarsi",
      description: "per cambiare le proprie abitudini"
    },
    {
      icon: Star,
      title: "Chi vuole invecchiare in salute",
      description: "e godersi la pensione"
    }
  ]

  const notTargetPoints = [
    "Chi cerca soluzioni rapide senza voler cambiare nulla",
    "Chi vuole solo \"la pillola magica\" per risolvere tutto",
    "Chi non è disposto a prendersi responsabilità per la propria salute",
    "Chi preferisce delegare tutto alla medicina tradizionale senza partecipare",
    "Chi accetta il dolore come parte inevitabile della vita"
  ]

  return (
    <section className="relative py-12 bg-gradient-to-br from-white via-cream/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-8 w-24 h-24 bg-green/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-20 right-12 w-20 h-20 bg-blue-dark/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-green/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-blue-dark/15 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-[24px]">
        {/* Section Header */}
        <div className={`text-left mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
            <Target className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold text-sky-400 font-montserrat">
              Per chi è Mobilitas?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-dark mb-6 mt-0 font-montserrat leading-tight">
            Non siamo per tutti
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-4xl font-montserrat leading-relaxed">
            Siamo per chi è pronto a&nbsp;
            <span className="text-sky-400 font-bold">
              prendere il controllo
            </span>
            &nbsp;della propria salute
          </p>
          
          {/* Target Audience Image */}
          <div className="mt-8 mb-8">
            <img 
              src="/home/home4.png" 
              alt="Siamo per chi è pronto a prendere il controllo della propria salute" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Per chi è - Newsletter Style */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-green-50 to-green-100 border border-white/50 rounded-3xl p-4 md:p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Header with Icon and Text */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <Check className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-blue-dark mb-1 md:mb-2 font-montserrat">
                      Per chi è Mobilitas
                    </h3>
                    <p className="text-blue-dark/70 font-montserrat text-xs md:text-sm">Il tuo profilo ideale</p>
                  </div>
                </div>
                
                <div className="space-y-0">
                  {targetPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-green-400/5 transition-all duration-300">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-blue-dark font-semibold font-montserrat text-xs md:text-sm mb-0.5 md:mb-1 mt-0">
                          {point.title}
                        </p>
                        <p className="text-blue-dark/80 font-montserrat text-xs">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action Card */}
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                    </div>
                    <span className="text-white/90 font-semibold font-montserrat text-xs md:text-sm">La tua domanda</span>
                  </div>
                  <p className="text-white font-bold font-montserrat text-xs md:text-sm">
                    "Sei pronto a diventare il leader della tua salute?"
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Per chi non è - Newsletter Style */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-red-50 to-orange-100 border border-white/50 rounded-3xl p-4 md:p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Header with Icon and Text */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-blue-dark mb-1 md:mb-2 font-montserrat">
                      Per chi non è Mobilitas
                    </h3>
                    <p className="text-blue-dark/70 font-montserrat text-xs md:text-sm">Non è il momento giusto</p>
                  </div>
                </div>
                
                <div className="space-y-0">
                  {notTargetPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-red-400/5 transition-all duration-300">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-red-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                      </div>
                      <p className="text-blue-dark/90 font-montserrat text-xs md:text-sm mt-0" style={{marginTop: '2px'}}>
                        <span className="font-semibold">{point}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Warning Card */}
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-lg flex items-center justify-center">
                      <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                    </div>
                    <span className="text-white font-semibold font-montserrat text-xs md:text-sm">Attenzione</span>
                  </div>
                  <p className="text-white font-bold font-montserrat text-xs md:text-sm">
                    "Se cerchi scorciatoie, non siamo la soluzione giusta per te"
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-16 max-w-4xl mx-auto">
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

export default TargetAudienceSection
