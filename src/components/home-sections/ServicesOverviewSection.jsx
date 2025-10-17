import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight,
  Target,
  Zap
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
      </div>
    </section>
  )
}

export default ServicesOverviewSection
