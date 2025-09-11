import { motion } from 'framer-motion'
import { Users, Mountain, Wind, Utensils, Heart, Camera } from 'lucide-react'

export default function ExperienceSection() {
  const steps = [
    {
      icon: Users,
      title: "Ritrovo e accoglienza",
      description: "Ci troviamo insieme, ci conosciamo e ricevi il tuo kit Mobilitas.",
      color: "green"
    },
    {
      icon: Mountain,
      title: "Partenza camminata guidata",
      description: "Si parte a passo tranquillo, con osteopati presenti per tutto il percorso.",
      color: "green"
    },
    {
      icon: Wind,
      title: "Tappa intermedia (facoltativa)",
      description: "Chi vuole può fermarsi a metà, rilassarsi e aspettare il gruppo al punto panoramico.",
      color: "blue-dark"
    },
    {
      icon: Utensils,
      title: "Pausa pranzo al sacco",
      description: "Ti consegniamo il pranzo preparato per te, da gustare nella natura.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Stretching e respirazione finale",
      description: "Un momento guidato per sciogliere il corpo e liberare la mente.",
      color: "green"
    },
    {
      icon: Camera,
      title: "Foto e riprese con drone",
      description: "Chiudiamo con una foto di gruppo memorabile e qualche ripresa speciale da ricordare.",
      color: "blue-dark"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Un'esperienza semplice, naturale, rigenerante
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              className={`${step.color === 'green' ? 'bg-green/5 border-green/20' : 'bg-blue-dark/5 border-blue-dark/20'} p-6 rounded-2xl border hover:shadow-lg transition-shadow`}
            >
              <div className={`w-12 h-12 ${step.color === 'green' ? 'bg-green/10' : 'bg-blue-dark/10'} rounded-full flex items-center justify-center mb-4`}>
                <step.icon className={`w-6 h-6 ${step.color === 'green' ? 'text-green' : 'text-blue-dark'}`} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-slate-600 mb-6">Ogni momento è pensato per farti stare bene.</p>
          <button className="bg-green hover:bg-green/90 text-blue-dark font-semibold py-3 px-6 rounded-full transition-colors">
            Scopri i pacchetti disponibili
          </button>
        </motion.div>
      </div>
    </section>
  )
}