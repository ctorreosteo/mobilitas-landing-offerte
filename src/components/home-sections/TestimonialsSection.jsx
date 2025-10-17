import React from 'react'
import { Star, Users, Award, TrendingUp, ExternalLink, MessageCircle, ThumbsUp } from 'lucide-react'
import SectionDivider from '../SectionDivider'

const TestimonialsSection = () => {
  const stats = [
    { number: "500+", label: "Persone trasformate", icon: Users },
    { number: "95%", label: "Soddisfazione clienti", icon: Star },
    { number: "3 anni", label: "Media durata risultati", icon: Award },
    { number: "85%", label: "Riduzione farmaci", icon: TrendingUp }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-[24px]">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
            <Star className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold text-sky-400 font-montserrat">
              Storie di trasformazione
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 mt-0 font-montserrat">
            Non siamo solo numeri, siamo storie
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl font-montserrat">
            Ogni persona che entra da noi ha una storia. 
            <span className="font-semibold text-blue-dark"> Scopri le storie di chi ha scelto di riprendere il controllo.</span>
          </p>
          
          {/* Testimonials Section Image */}
          <div className="mt-8 mb-8">
            <img 
              src="/home/home2.png" 
              alt="Ogni persona che entra da noi ha una storia" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
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
        <div className="bg-emerald-100 rounded-3xl p-8 md:p-12 text-blue-dark text-left mb-16 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            {/* Google Logo and Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                  alt="Google Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-blue-dark font-montserrat">5.0/5</span>
                </div>
                <p className="text-blue-dark/80 font-montserrat">+420 recensioni verificate</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-400/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-medium text-sky-400 font-montserrat">
                Recensioni autentiche
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-blue-dark">
              Leggi le storie vere dei nostri clienti
            </h3>
            
            <p className="text-xl text-blue-dark/90 mb-8 font-montserrat leading-relaxed">
              Non credere solo alle nostre parole. 
              <span className="font-semibold text-sky-400"> Leggi le recensioni autentiche</span> di chi ha già scelto di riprendere il controllo della propria salute su Google.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-8">
              <a 
                href="https://www.google.com/search?q=mobilitas+recensioni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-center flex items-center justify-center"
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                Leggi le recensioni su Google
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <SectionDivider />

        {/* Il Teatro della Trasformazione - Vertical Journey */}
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-left">
            <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
              <Users className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-semibold text-sky-400 font-montserrat">
                Il teatro della trasformazione
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4 font-montserrat">
              La tua storia inizia qui, nel teatro della trasformazione
            </h3>
            <p className="text-lg text-blue-dark/80 max-w-2xl font-montserrat">
            Il trattamento osteopatico diventa il teatro in cui possiamo educare le persone e condurle a prendere nuove scelte, per vivere ogni singolo giorno in salute. Ogni grande cambiamento inizia con un primo passo. Nel teatro della trasformazione, 
              <span className="font-semibold text-sky-400"> scegli il tuo percorso verso la libertà.</span>
            </p>
            
            {/* Theater of Transformation Image */}
            <div className="mt-8 mb-8">
              <img 
                src="/home/home5.png" 
                alt="Il trattamento osteopatico diventa il teatro della trasformazione" 
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl mb-8"
              />
            </div>
          </div>

          {/* Vertical Journey Steps */}
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Discovery */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-dark rounded-full flex items-center justify-center shadow-xl">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-blue-dark mb-3 font-montserrat">
                  Non sai se possiamo esserti di aiuto?
                </h4>
                <p className="text-blue-dark/80 font-montserrat leading-relaxed mb-6">
                  Un consulto gratuita per capire come possiamo aiutarti a raggiungere i tuoi obiettivi di salute e benessere.
                </p>
                <a 
                  href="/contatti"
                  className="inline-flex items-center gap-2 bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat"
                >
                  <span>Prenota un consulto gratuito</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-12">
              <div className="w-1 h-16 bg-gradient-to-b from-sky-400 to-green rounded-full"></div>
            </div>

            {/* Step 2: Transformation */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-green to-sky-400 rounded-full flex items-center justify-center shadow-xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-blue-dark mb-3 font-montserrat">
                  Inizia la trasformazione
                </h4>
                <p className="text-blue-dark/80 font-montserrat leading-relaxed mb-6">
                  Il tuo percorso personalizzato con un primo trattamento con sconto speciale. Un investimento nella tua salute di oggi e futura.
                </p>
                <a 
                  href="/contatti"
                  className="inline-flex items-center gap-2 bg-blue-dark hover:bg-blue-dark/90 text-green font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat"
                >
                  <span>Prima visita con sconto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-12">
              <div className="w-1 h-16 bg-gradient-to-b from-green to-sky-400 rounded-full"></div>
            </div>

            {/* Step 3: Success */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-green rounded-full flex items-center justify-center shadow-xl">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-blue-dark mb-3 font-montserrat">
                  Raggiungi i tuoi obiettivi
                </h4>
                <p className="text-blue-dark/80 font-montserrat leading-relaxed mb-6">
                  Unisciti alle centinaia di persone che hanno già trasformato la loro vita. La tua storia di successo inizia oggi.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-blue-dark font-bold font-montserrat">5.0/5</span>
                </div>
                <p className="text-blue-dark/80 font-montserrat">
                  <span className="font-semibold text-sky-400">+420 persone</span> hanno raccontato come la loro vita sia cambiata con il nostro aiuto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
