import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Target,
  Zap,
  MessageCircle,
  Calendar
} from 'lucide-react'
import HealthAreasCarousel from '../HealthAreasCarousel'

const ServicesOverviewSection = () => {

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-[24px]">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-3 bg-sky-400/10 border border-sky-400/30 rounded-full px-6 py-3 mb-6 shadow-lg backdrop-blur-sm">
            <Target className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold text-sky-400 font-montserrat">
              Il nostro approccio olistico
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 mt-0 font-montserrat">
            I 5 pilastri della salute
          </h2>
          <p className="text-lg text-blue-dark/80 max-w-3xl font-montserrat">
            Non ci limitiamo a trattare i sintomi. 
            <span className="font-semibold text-blue-dark"> Il nostro approccio tocca ogni area della vita</span> per garantire risultati concreti e duraturi.
          </p>
        </div>

        {/* Services Carousel */}
        <HealthAreasCarousel variant="home" />


        {/* Bottom Message */}
        <div className="text-left mt-16">
          <p className="text-lg text-blue-dark/80 font-montserrat max-w-3xl">
            <span className="font-semibold text-blue-dark">"Non ti offriamo scorciatoie, ti offriamo una strada chiara e sicura per stare bene davvero."</span>
            <br />
            La salute non è qualcosa che ottieni da altri, è qualcosa che costruisci ogni giorno.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 max-w-4xl mx-auto">
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

export default ServicesOverviewSection
