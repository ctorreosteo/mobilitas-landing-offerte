import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Shield, Heart, Users, TrendingUp, Star, CheckCircle, MessageCircle, Calendar } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-white to-cream/50 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric shapes with brand colors */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-dark/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-green/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-blue-dark/15 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,transparent_0%,rgba(0,37,82,0.1)_50%,transparent_100%),linear-gradient(0deg,transparent_0%,rgba(0,37,82,0.1)_50%,transparent_100%)] bg-[length:60px_60px]"></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-dark/40 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-green/25 rounded-full animate-bounce delay-3000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-[24px] pt-8 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column - Content */}
            <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mt-4 mb-2 shadow-lg backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span className="text-sm font-semibold text-sky-400 font-montserrat">
                  Rivoluzione nella cura della salute
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6 mt-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat leading-tight text-left">
                  <span className="text-blue-dark">La tua salute</span>
                  <br />
                  <span className="text-blue-dark">
                    nelle mani dello <span className="text-sky-400">Studio Osteopatico</span> più importante
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-dark/80 font-montserrat leading-relaxed max-w-2xl text-left">
                  <span className="text-blue-dark font-bold"> Riprendi il controllo</span> con un approccio scientifico e personalizzato che ti restituisce l'autonomia sulla tua salute.
                </p>
                
                {/* Hero Image */}
                <div className="mt-8 mb-8">
                  <img 
                    src="/home/home7.png" 
                    alt="Approccio scientifico e personalizzato per la salute" 
                    className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Key Benefits Grid - Horizontal Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="group relative">
                  <div className="relative bg-gradient-to-br from-red-50 to-orange-100 border border-white/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Heart className="w-6 h-6" />
                      </div>
                      
                       {/* Content */}
                       <div>
                         <div className="text-sm sm:text-xl font-bold text-blue-dark font-montserrat"><span className="font-bold">Dolori e problemi</span> - <span className="font-normal">elimina finalmente quei dolori che ti trascini da mesi o anni e che ti stanno rubando energia, movimento e libertà</span></div>
                       </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 border border-white/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      
                       {/* Content */}
                       <div>
                         <div className="text-sm sm:text-xl font-bold text-blue-dark font-montserrat"><span className="font-bold">Energia</span> - <span className="font-normal">Non è normale svegliarsi già stanchi. Ritrova la tua energia vera, ogni giorno, quella che ti permette di vivere, non solo sopravvivere.</span></div>
                       </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="relative bg-gradient-to-br from-green-50 to-green-100 border border-white/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      
                       {/* Content */}
                       <div>
                         <div className="text-sm sm:text-xl font-bold text-blue-dark font-montserrat">Controllo totale - <span className="font-normal">Riprendi il controllo del tuo corpo oggi e costruisci una vecchiaia senza farmaci, dipendenze o rimpianti.</span></div>
                       </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
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

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-blue-dark/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-dark" />
                  <span className="text-sm font-semibold text-blue-dark font-montserrat">Metodo scientifico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-dark" />
                  <span className="text-sm font-semibold text-blue-dark font-montserrat">Approccio personalizzato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-dark" />
                  <span className="text-sm font-semibold text-blue-dark font-montserrat">Risultati misurabili</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Main Stats Card */}
              <div className="relative bg-white/90 backdrop-blur-md border border-blue-dark/30 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-blue-dark font-montserrat mb-2">I nostri risultati</h3>
                    <p className="text-blue-dark/70 font-montserrat">Numeri che parlano</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-6">
                    <div className="text-left">
                      <div className="text-4xl font-bold text-blue-dark font-montserrat mb-1">4000+</div>
                      <div className="text-blue-dark/80 font-montserrat">Pazienti soddisfatti</div>
                    </div>
                    <div className="text-left">
                      <div className="text-4xl font-bold text-blue-dark font-montserrat mb-1">98%</div>
                      <div className="text-blue-dark/80 font-montserrat">Tasso di successo</div>
                    </div>
                    <div className="text-left">
                      <div className="text-4xl font-bold text-blue-dark font-montserrat mb-1">100%</div>
                      <div className="text-blue-dark/80 font-montserrat">Specializzazione dei professionisti</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 pt-4 border-t border-blue-dark/20">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-blue-dark fill-current" />
                      ))}
                    </div>
                    <span className="text-blue-dark/80 font-montserrat font-semibold">Recensioni 5.0/5 su Google</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-blue-dark rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-blue-dark/10 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-blue-dark" />
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-blue-dark/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-10 -left-10 w-32 h-32 bg-blue-dark/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default HeroSection
