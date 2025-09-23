import { motion } from 'framer-motion'
import { AlertTriangle, Heart, Moon, Zap, Shield } from 'lucide-react'

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: <AlertTriangle className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Dolori e fastidi crescenti",
      description: "Il mal di schiena diventa insopportabile, la sciatalgia ti blocca, il bacino si irrigidisce e il dolore al pube ti accompagna tutto il giorno. Ogni settimana peggiora e temi di non farcela fino al parto. Capiamo la tua paura e il tuo dolore."
    },
    {
      icon: <Moon className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Difficoltà a dormire bene",
      description: "La notte è un tormento: nessuna posizione è comoda, ogni movimento fa male, i risvegli continui ti sfiancano e i crampi ti svegliano. Non riposi mai davvero e la stanchezza si accumula. Temi che questo stress possa far male al tuo bambino."
    },
    {
      icon: <Zap className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Stanchezza e affaticamento",
      description: "Ti trascini tutto il giorno, anche per le cose più semplici. Mancanza di fiato, difficoltà a concentrarti, energia che si esaurisce a metà giornata. Temi di non riuscire a gestire tutto: lavoro, casa, preparativi per il bambino. La stanchezza ti fa sentire inadeguata."
    },
    {
      icon: <Heart className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Sensazioni di ansia e a volte insicurezza",
      description: "I dubbi ti assillano: 'È normale quello che provo?', 'Il dolore è pericoloso per il bambino?', 'Posso fare qualcosa o rischio di peggiorare?'. L'amore per il tuo bambino si mescola alla paura di sbagliare e all'ansia per la sua salute. Non sei sola in questo."
    },
    {
      icon: <Shield className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Paura del parto e del post-parto",
      description: "Il bacino si blocca, non senti il corpo pronto per il parto. Temi complicazioni, il recupero post-parto, l'ansia per il benessere del bambino. L'amore per il tuo bambino si mescola alla paura del momento più importante della tua vita. Ti accompagniamo in questo percorso."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6" style={{color: '#002552'}}>
            Sei in gravidanza e probabilmente stai vivendo almeno una di queste situazioni 😕
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Non sei sola. Questi sono i dolori e le preoccupazioni più comuni che vivono le donne in gravidanza.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {point.icon}
                <h3 className="text-xl font-bold ml-3" style={{color: '#002552'}}>
                  {point.title}
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div 
            className="rounded-3xl p-10 border-2 shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 104, 105, 0.2) 0%, rgba(255, 104, 105, 0.15) 50%, rgba(255, 104, 105, 0.1) 100%)',
              borderColor: 'rgba(255, 104, 105, 0.3)'
            }}
          >
            {/* Background decoration */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16"
              style={{backgroundColor: 'rgba(255, 104, 105, 0.1)'}}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12"
              style={{backgroundColor: 'rgba(255, 104, 105, 0.15)'}}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4" style={{color: '#002552'}}>
                Non devi sopportare tutto questo
              </h3>
              <p className="text-xl text-slate-700 mb-6 font-medium">
                Esiste una soluzione naturale e sicura per te e il tuo bambino
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
                <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#FF6869'}}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
