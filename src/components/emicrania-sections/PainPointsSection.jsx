import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Heart, Users, Brain, Zap, Shield, Eye, Smile, Pill } from 'lucide-react'

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: Clock,
      title: "Non puoi programmare la tua vita perché non sai mai quando arriva.",
      description: "Dolore improvviso che blocca appuntamenti, lavoro, viaggi.",
      driver: "perdita di controllo, ansia anticipatoria, tempo sprecato"
    },
    {
      icon: Pill,
      title: "Hai provato di tutto, ma nulla ti libera davvero.",
      description: "Farmaci, integratori, neurologi, massaggi, agopuntura… sempre effetto tampone.",
      driver: "frustrazione, senso di impotenza, sfiducia nel sistema sanitario"
    },
    {
      icon: Users,
      title: "Nessuno ha mai davvero capito cosa ti succede.",
      description: "Medici liquidano con \"è stress\", familiari che non capiscono, amici che minimizzano.",
      driver: "bisogno di riconoscimento, empatia, appartenenza"
    },
    {
      icon: AlertTriangle,
      title: "Hai paura che peggiori… e hai ragione.",
      description: "Emicranie sempre più frequenti e invalidanti. Il corpo sta lanciando un SOS ignorato.",
      driver: "paura degenerativa, senso d'urgenza"
    },
    {
      icon: Smile,
      title: "La tua emicrania ti spegne e nessuno se ne accorge.",
      description: "Nelle foto sforzi un sorriso, ma dentro sei KO. Vivi in modalità sopravvivenza.",
      driver: "status, immagine sociale, bisogno di rinascita"
    },
    {
      icon: Heart,
      title: "Ti prendi cura di tutti, ma nessuno si prende cura di te.",
      description: "Madri, caregiver, professioniste multitasking. Non hanno mai tempo per sé.",
      driver: "amore, sacrificio, bisogno di recupero e centralità"
    },
    {
      icon: Zap,
      title: "Ti svegli già con il dolore o vivi nella paura che torni.",
      description: "Emicrania mattutina, notturna, o ricorrente dopo determinati trigger.",
      driver: "ansia, paura, bisogno di prevedibilità"
    },
    {
      icon: Brain,
      title: "Non è solo mal di testa. È un terremoto interno.",
      description: "Nausea, fotofobia, fonofobia, stanchezza, tensione cervicale…",
      driver: "desiderio di comprensione profonda del proprio corpo"
    },
    {
      icon: Eye,
      title: "Non sai più se sei tu… o la versione stanca e irritabile di te stesso.",
      description: "Cambiamenti dell'umore, bassa energia, difficoltà cognitive.",
      driver: "identità, performance, bisogno di tornare sé stessi"
    },
    {
      icon: Shield,
      title: "Il tuo corpo ti sta parlando… ma tu zittisci tutto con un farmaco.",
      description: "Il dolore è un segnale, ma si cerca solo di eliminarlo.",
      driver: "risveglio consapevole, desiderio di soluzione profonda, non palliativa"
    }
  ]

  return (
    <section id="pain-points-section" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-6">
            Ti riconosci in questi <span className="text-green">dolori</span>?
          </h2>
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-4xl mx-auto leading-relaxed">
            L'emicrania non è solo un sintomo. È un'esperienza che cambia la tua vita, 
            i tuoi rapporti, la tua identità. Ecco perché le soluzioni superficiali non funzionano.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-dark/10 hover:border-green/30 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <point.icon className="w-8 h-8 text-red-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-blue-dark mb-4 leading-tight">
                "{point.title}"
              </h3>
              
              <p className="text-blue-dark text-lg mb-4 leading-relaxed">
                {point.description}
              </p>
              
              <div className="bg-green/20 border-l-4 border-green p-4 rounded-r-xl">
                <p className="text-blue-dark font-semibold text-sm">
                  <span className="text-green font-bold">➤ Driver:</span> {point.driver}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-dark text-cream p-8 md:p-12 rounded-2xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Se ti sei riconosciuta in almeno 3 di questi punti...
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              È il momento di smettere di <span className="text-green font-bold">sopportare</span> e iniziare a <span className="text-green font-bold">risolvere</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
