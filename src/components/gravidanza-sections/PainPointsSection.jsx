import { motion } from 'framer-motion'
import { AlertTriangle, Heart, Moon, Zap, Shield } from 'lucide-react'

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: <AlertTriangle className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Dolori e fastidi crescenti",
      description: "Il mal di schiena lombare diventa insopportabile e peggiora settimana dopo settimana, la sciatalgia ti impedisce di camminare normalmente, il bacino è sempre più rigido e limita ogni movimento, il dolore al pube ti accompagna tutto il giorno e il gonfiore alle gambe non ti dà tregua. Ogni settimana che passa sembra peggiorare e hai paura di non riuscire ad arrivare al parto."
    },
    {
      icon: <Moon className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Difficoltà a dormire bene",
      description: "La notte diventa un incubo: non riesci a trovare una posizione comoda nel letto, ogni volta che ti giri o cambi posizione provi dolore, i risvegli continui durante tutta la notte ti sfiancano, i crampi alle gambe ti svegliano di soprassalto e hai la sensazione di non aver mai riposato davvero. La stanchezza si accumula giorno dopo giorno e temi che questo stress possa danneggiare il bambino."
    },
    {
      icon: <Zap className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Sensazione di stanchezza e affaticamento",
      description: "Ti trascini tutto il giorno anche per le attività più semplici, la mancanza di fiato ti accompagna anche per piccoli sforzi quotidiani, l'impossibilità di concentrarti sul lavoro ti preoccupa, l'energia si esaurisce già a metà giornata e hai paura di non riuscire a gestire tutto quello che ti aspetta: lavoro, casa, preparativi per il bambino."
    },
    {
      icon: <Heart className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Sensazioni di ansia e a volte insicurezza",
      description: "I dubbi ti assillano continuamente: 'È tutto normale quello che provo?', 'Il dolore che provo è pericoloso per il bambino?', 'Posso fare qualcosa o rischio di peggiorare?', 'Cosa devo evitare per non danneggiare il bambino?'. L'amore per il bambino che porti in grembo si mescola alla paura di non fare la cosa giusta e all'ansia costante per la sua salute e il suo benessere."
    },
    {
      icon: <Shield className="w-8 h-8" style={{color: '#FF6869'}} />,
      title: "Paura del parto e del post-parto",
      description: "Il bacino ti sembra sempre più bloccato e poco mobile, non senti il corpo fisicamente pronto per il parto, hai paura di complicazioni durante il travaglio e il parto, temi per il recupero post-parto e le sue difficoltà, e l'ansia per il benessere del bambino durante tutto il processo ti accompagna ogni giorno. L'amore per il bambino si mescola alla paura del momento più importante della tua vita."
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
