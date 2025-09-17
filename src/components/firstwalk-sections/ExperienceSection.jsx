import { motion } from 'framer-motion'
import { Users, Mountain, Wind, Utensils, Heart, Camera, ArrowRight, Sparkles } from 'lucide-react'

export default function ExperienceSection() {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offer-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Users,
      title: "Ritrovo e accoglienza",
      description: "Ci troviamo insieme, ci conosciamo e ricevi il tuo kit Mobilitas.",
      color: "azure"
    },
    {
      icon: Mountain,
      title: "Partenza camminata guidata",
      description: "Si parte a passo tranquillo, con osteopati presenti per tutto il percorso.",
      color: "azure"
    },
    {
      icon: Wind,
      title: "Tappa intermedia (facoltativa)",
      description: "Chi vuole può fermarsi a metà, rilassarsi e aspettare il gruppo al punto panoramico.",
      color: "azure"
    },
    {
      icon: Utensils,
      title: "Pausa merenda al sacco",
      description: "Ti consegniamo il pranzo preparato per te, da gustare nella natura.",
      color: "azure"
    },
    {
      icon: Heart,
      title: "Stretching e respirazione finale",
      description: "Un momento guidato per sciogliere il corpo e liberare la mente.",
      color: "azure"
    },
    {
      icon: Camera,
      title: "Foto e riprese con drone",
      description: "Chiudiamo con una foto di gruppo memorabile e qualche ripresa speciale da ricordare.",
      color: "azure"
    }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden overflow-x-hidden">
      {/* Nature Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }}
      ></div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Un'esperienza semplice, naturale, rigenerante
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Non serve essere allenati. Non serve preparazione. Basta venire con la voglia di respirare, muoverti e stare bene.
            Abbiamo pensato a ogni dettaglio per rendere questa camminata leggera, piacevole e accessibile a tutti.
          </p>
        </motion.div>
      </div>
    </section>
  )
}