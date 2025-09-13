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
      title: "Pausa pranzo al sacco",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 border-azure-dark/20 p-6 rounded-2xl border hover:shadow-lg transition-shadow backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-azure-dark/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-primary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-xl md:text-2xl text-primary mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ogni momento è pensato per farti stare bene.
          </motion.p>
          
          <motion.button 
            onClick={scrollToOffers}
            className="group relative overflow-hidden bg-gradient-to-r from-green to-green/90 text-primary font-black py-6 px-12 rounded-3xl text-xl shadow-2xl hover:shadow-green/50 transition-all duration-500 transform hover:scale-105 border-4 border-green/30 hover:border-green/60 font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green/80 to-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative flex items-center justify-center space-x-4">
              <motion.span 
                className="text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <span>Scopri i pacchetti disponibili</span>
              <motion.div
                className="w-6 h-6"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Floating sparkles */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 bg-white/30 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -top-1 -right-3 w-3 h-3 bg-white/40 rounded-full"
              animate={{ 
                y: [0, -8, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                delay: 1
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}