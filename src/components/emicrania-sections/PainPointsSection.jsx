import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Heart, Users, Brain, Zap, Shield, Eye, Smile, Pill, ShoppingCart } from 'lucide-react'

export default function PainPointsSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const painPoints = [
    {
      icon: Clock,
      title: "Non puoi programmare la tua vita perché non sai mai quando arriva.",
      description: "Dolore improvviso che blocca appuntamenti, lavoro, viaggi."
    },
    {
      icon: Pill,
      title: "Hai provato di tutto, ma nulla ti libera davvero.",
      description: "Farmaci, integratori, neurologi, massaggi, agopuntura… sempre effetto tampone."
    },
    {
      icon: Users,
      title: "Nessuno ha mai davvero capito cosa ti succede.",
      description: "Medici liquidano con \"è stress\", familiari che non capiscono, amici che minimizzano."
    },
    {
      icon: AlertTriangle,
      title: "Hai paura che peggiori… e hai ragione.",
      description: "Emicranie sempre più frequenti e invalidanti. Il corpo sta lanciando un SOS ignorato."
    },
    {
      icon: Smile,
      title: "La tua emicrania ti spegne e nessuno se ne accorge.",
      description: "Nelle foto sforzi un sorriso, ma dentro sei KO. Vivi in modalità sopravvivenza."
    },
    {
      icon: Heart,
      title: "Ti prendi cura di tutti, ma nessuno si prende cura di te.",
      description: "Madri, caregiver, professioniste multitasking. Non hanno mai tempo per sé."
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
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-blue-dark mb-6">
            Ti riconosci in queste <span style={{color: '#00BFFF'}}>situazioni</span>?
          </h2>
          <p className="text-xl md:text-2xl text-blue-dark/80 max-w-4xl leading-relaxed">
            L'emicrania non è solo un sintomo. È un'esperienza che cambia la tua vita, 
            i tuoi rapporti, la tua identità. Ecco perché le soluzioni superficiali non funzionano.
          </p>
        </motion.div>

        {/* Pain Points Grid - Compact Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-dark/10 hover:border-green/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon and Content in one line */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-red-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-dark mb-2 leading-tight mt-0">
                    {point.title}
                  </h3>
                  
                  <p className="text-blue-dark text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
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
          <div style={{backgroundColor: 'rgba(255, 165, 0, 0.2)'}} className="text-blue-dark p-8 md:p-12 rounded-2xl shadow-2xl border border-orange-300 mb-8 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Se ti capita anche solo una di queste situazioni…
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              È arrivato il momento di smettere di <span style={{color: '#00BFFF'}} className="font-bold">sopportare</span> e iniziare a <span style={{color: '#00BFFF'}} className="font-bold">risolvere</span>.
            </p>
          </div>
          
          {/* CTA Button */}
          <motion.button 
            onClick={scrollToOffer}
            className="mt-6"
            style={{
              backgroundColor: '#002552',
              color: '#72fa93',
              padding: '20px 40px',
              borderRadius: '50px',
              fontSize: '20px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              margin: '0 auto',
              boxShadow: '0 10px 30px rgba(0, 37, 82, 0.4)',
              transition: 'all 0.3s ease',
              fontFamily: 'Montserrat, sans-serif'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#001a3a';
              e.target.style.boxShadow = '0 15px 40px rgba(0, 37, 82, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#002552';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 37, 82, 0.4)';
            }}
          >
            <ShoppingCart style={{width: '22px', height: '22px'}} />
            ACQUISTA ORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
