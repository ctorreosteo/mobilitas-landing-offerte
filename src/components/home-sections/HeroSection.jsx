import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Heart, Zap } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-dark via-blue-800 to-blue-900 text-white overflow-hidden w-full max-w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-green/50 rounded-full px-3 py-1.5 mb-6 shadow-lg">
            <Shield className="w-4 h-4 text-green" />
            <span className="text-sm font-medium text-white font-montserrat">
              La tua salute è nelle tue mani
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight drop-shadow-lg">
            <span className="text-white">Smetti di delegare</span>
            <br />
            <span className="text-green drop-shadow-md">la tua salute ai farmaci</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto font-montserrat leading-relaxed drop-shadow-md">
            Viviamo in un mondo che ci ha fatto credere che la salute dipenda da altri. 
            <span className="text-green font-semibold drop-shadow-md"> Noi diciamo NO.</span>
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 max-w-md mx-auto w-full">
            <div className="flex flex-col items-center gap-1 sm:gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-white/20 min-w-0">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green drop-shadow-sm" />
              <span className="text-white font-medium font-montserrat text-xs drop-shadow-sm text-center">Libertà dal dolore</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-white/20 min-w-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green drop-shadow-sm" />
              <span className="text-white font-medium font-montserrat text-xs drop-shadow-sm text-center">Energia quotidiana</span>
            </div>
            <div className="flex flex-col items-center gap-1 sm:gap-2 bg-white/15 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-white/20 min-w-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green drop-shadow-sm" />
              <span className="text-white font-medium font-montserrat text-xs drop-shadow-sm text-center">Controllo totale</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 w-full max-w-full px-4">
            <Link
              to="/contatti"
              className="group bg-green hover:bg-green/90 text-blue-dark font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat border-2 border-green w-full sm:w-auto text-center"
            >
              Riprendi il controllo
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/chi-siamo"
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-dark font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 font-montserrat shadow-lg hover:shadow-xl backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Scopri la nostra missione
            </Link>
          </div>

          {/* Trust Indicator */}
          <div className="pt-6 border-t border-white/30">
            <p className="text-white/90 text-sm font-montserrat drop-shadow-sm">
              <span className="font-semibold text-green drop-shadow-md">+500</span> persone hanno già scelto di 
              <span className="font-semibold text-green drop-shadow-md"> riprendere il controllo</span> della propria salute
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
