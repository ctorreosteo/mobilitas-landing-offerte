import React, { useState, useEffect } from 'react'
import { Check, X, Target, Users, Heart, Zap, Shield, Star, ArrowRight, Sparkles } from 'lucide-react'

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

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-left mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
            <Target className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold text-sky-400 font-montserrat">
              Chi siamo noi per te
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-dark mb-6 font-montserrat leading-tight">
            Non siamo per tutti
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-4xl font-montserrat leading-relaxed">
            Siamo per chi è pronto a&nbsp;
            <span className="text-sky-400 font-bold">
              prendere il controllo
            </span>
            &nbsp;della propria salute
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Per chi è - Enhanced Design */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-dark/20 overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-sky-400/80 to-sky-400/60"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-sky-400/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-sky-400" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-400/80 rounded-lg flex items-center justify-center shadow-lg">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-0">
                    Per chi è Mobilitas
                  </h3>
                  <p className="text-blue-dark/70 font-montserrat text-xs">Il tuo profilo ideale</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {targetPoints.map((point, index) => (
                  <div key={index} className="group flex items-start gap-2 p-2 rounded-lg hover:bg-sky-400/5 transition-all duration-300">
                    <div className="w-6 h-6 bg-sky-400/20 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-sky-400/30 transition-colors">
                      <point.icon className="w-3 h-3 text-sky-400" />
                    </div>
                    <div>
                      <p className="text-blue-dark font-semibold font-montserrat text-xs mb-0.5 mt-0">
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
              <div className="mt-4 p-3 bg-gradient-to-r from-sky-400 to-sky-400/80 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-white/20 rounded-sm flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 font-semibold font-montserrat text-xs">La tua domanda</span>
                </div>
                <p className="text-white font-bold font-montserrat text-xs">
                  "Sei pronto a diventare il leader della tua salute?"
                </p>
              </div>
            </div>
          </div>

          {/* Per chi non è - Enhanced Design */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-red-200/50 overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-400 to-red-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-red-500" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                  <X className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-dark font-montserrat mb-0">
                    Per chi non è Mobilitas
                  </h3>
                  <p className="text-blue-dark/70 font-montserrat text-xs">Non è il momento giusto</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {notTargetPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-red-50/50 transition-all duration-300">
                    <div className="w-6 h-6 bg-red-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <p className="text-blue-dark/90 font-montserrat text-xs mt-0">
                      <span className="font-semibold">{point}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Warning Card */}
              <div className="mt-4 p-3 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-red-200 rounded-sm flex items-center justify-center">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <span className="text-red-700 font-semibold font-montserrat text-xs">Attenzione</span>
                </div>
                <p className="text-red-700 font-bold font-montserrat text-xs">
                  "Se cerchi scorciatoie, non siamo la soluzione giusta per te"
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TargetAudienceSection
