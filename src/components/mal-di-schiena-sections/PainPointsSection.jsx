import { motion } from 'framer-motion'
import { Heart, Target, Zap, Shield, Clock, CheckCircle } from 'lucide-react'

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: Heart,
      painPoint: "Il dolore ti impedisce di goderti la vita quotidiana",
      empathy: "Sappiamo quanto sia frustrante non riuscire a fare le cose più semplici senza dolore",
      solution: "Il trattamento osteopatico agisce direttamente sulla causa del dolore, non solo sui sintomi, restituendoti la libertà di movimento che meriti"
    },
    {
      icon: Target,
      painPoint: "I farmaci non risolvono il problema alla radice",
      empathy: "È normale sentirsi scoraggiati quando i farmaci alleviano temporaneamente ma il dolore torna sempre",
      solution: "L'osteopatia identifica e corregge le disfunzioni strutturali che causano il dolore, offrendo una soluzione duratura senza dipendenza da farmaci"
    },
    {
      icon: Zap,
      painPoint: "Il dolore peggiora con il movimento, oppure se stai tanto tempo nella stessa posizione",
      empathy: "Ti senti limitato nelle tue attività preferite e questo influisce negativamente sulla tua qualità di vita",
      solution: "Il trattamento osteopatico ripristina la mobilità articolare e la funzionalità muscolare, permettendoti di tornare alle tue attività con fiducia"
    },
    {
      icon: Shield,
      painPoint: "Hai paura che il dolore peggiori con il tempo",
      empathy: "È comprensibile preoccuparsi per il futuro quando il dolore sembra peggiorare progressivamente",
      solution: "L'osteopatia previene il peggioramento del problema correggendo le cause alla radice, proteggendo la tua salute a lungo termine"
    },
    {
      icon: Clock,
      painPoint: "Il dolore influisce sul tuo sonno e sulla concentrazione",
      empathy: "Quando il dolore ti tiene sveglio la notte, tutto il resto della tua vita ne risente",
      solution: "Risolvendo le tensioni muscolari e articolari, il trattamento osteopatico migliora la qualità del sonno e la tua capacità di concentrazione"
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#002552' }}>
            Ti Riconosci in <span style={{ color: '#00BFFF' }}>Questi Problemi?</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12" style={{ color: '#002552' }}>
            Sappiamo quanto il mal di schiena possa influenzare ogni aspetto della tua vita. 
            Ecco perché il trattamento osteopatico è la soluzione che stavi cercando.
          </p>
          
          {/* Infographic: Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: '#FF6363' }}>80%</div>
              <p className="text-sm font-semibold" style={{ color: '#002552' }}>
                delle persone soffre di mal di schiena almeno una volta nella vita
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: '#00BFFF' }}>60%</div>
              <p className="text-sm font-semibold" style={{ color: '#002552' }}>
                dei casi di mal di schiena sono causati da problemi posturali
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: '#2E7D32' }}>95%</div>
              <p className="text-sm font-semibold" style={{ color: '#002552' }}>
                dei nostri pazienti risolve il problema in 1-4 sedute
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Creative Pain Points Layout */}
        <div className="space-y-16">
          {painPoints.map((item, index) => {
            if (index === 0) {
              // Hero card with diagonal design
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                >
                  <div 
                    className="relative p-12 text-white min-h-[400px]"
                    style={{
                      background: 'linear-gradient(135deg, #FF6363 0%, #FF8E8E 50%, #FFB3B3 100%)',
                      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
                    }}
                  >
                    <div className="max-w-4xl pr-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl md:text-3xl font-black leading-tight mb-4 text-left">
                            {item.painPoint}
                          </h3>
                          <p className="text-lg md:text-xl italic opacity-90 leading-relaxed text-left">
                            {item.empathy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Solution card overlapping */}
                  <div className="absolute bottom-8 left-12 bg-white rounded-2xl p-6 shadow-2xl max-w-sm text-left" style={{ marginTop: '24px' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="text-lg font-bold text-green-600 text-left">
                        La Soluzione
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed text-left">
                      {item.solution}
                    </p>
                  </div>
                </motion.div>
              );
            }
            
            if (index === 1) {
              // Timeline style
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center gap-8">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="w-1 h-32 bg-gradient-to-b from-red-400 to-blue-400"></div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mt-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-8 shadow-lg mb-4">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">
                          {item.painPoint}
                        </h3>
                        <p className="text-gray-600 italic">
                          {item.empathy}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-400">
                        <h4 className="text-xl font-bold mb-3 text-green-700">
                          La Soluzione Osteopatica
                        </h4>
                        <p className="text-gray-700">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            if (index === 2) {
              // Timeline style (inverted)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-8 shadow-lg mb-4">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">
                          {item.painPoint}
                        </h3>
                        <p className="text-gray-600 italic">
                          {item.empathy}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-400">
                        <h4 className="text-xl font-bold mb-3 text-green-700">
                          La Soluzione Osteopatica
                        </h4>
                        <p className="text-gray-700">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="w-1 h-32 bg-gradient-to-b from-red-400 to-blue-400"></div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mt-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            if (index === 3) {
              // Timeline style (normal)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center gap-8">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="w-1 h-32 bg-gradient-to-b from-red-400 to-blue-400"></div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mt-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-8 shadow-lg mb-4">
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">
                          {item.painPoint}
                        </h3>
                        <p className="text-gray-600 italic">
                          {item.empathy}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-400">
                        <h4 className="text-xl font-bold mb-3 text-green-700">
                          La Soluzione Osteopatica
                        </h4>
                        <p className="text-gray-700">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            if (index === 4) {
              // Wave design
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden"
                >
                  <div 
                    className="relative p-12 text-white"
                    style={{
                      background: 'linear-gradient(45deg, #00BFFF, #40E0D0, #00BFFF)',
                      clipPath: 'polygon(0 0%, 100% 0%, 95% 100%, 0 100%)'
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">
                            {item.painPoint}
                          </h3>
                        </div>
                        <p className="text-lg italic opacity-90">
                          {item.empathy}
                        </p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-xl font-bold">
                            La Soluzione Osteopatica
                          </h4>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            return null;
          })}
        </div>

        {/* Infographic: Treatment Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-black text-center mb-12" style={{ color: '#002552' }}>
              Come Funziona il <span style={{ color: '#00BFFF' }}>Trattamento Osteopatico</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
                  style={{ backgroundColor: '#FF6363' }}
                >
                  1
                </motion.div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#002552' }}>
                  Anamnesi
                </h4>
                <p className="text-sm text-gray-600">
                  Analizziamo la tua storia clinica e i sintomi per capire la causa del problema
                </p>
              </div>
              
              {/* Arrow 1 */}
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#00BFFF' }}
                >
                  <span className="text-white font-bold">→</span>
                </motion.div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
                  style={{ backgroundColor: '#00BFFF' }}
                >
                  2
                </motion.div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#002552' }}>
                  Valutazione
                </h4>
                <p className="text-sm text-gray-600">
                  Esaminiamo la tua postura e identifichiamo le disfunzioni strutturali
                </p>
              </div>
              
              {/* Arrow 2 */}
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#00BFFF' }}
                >
                  <span className="text-white font-bold">→</span>
                </motion.div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
                  style={{ backgroundColor: '#2E7D32' }}
                >
                  3
                </motion.div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#002552' }}>
                  Trattamento
                </h4>
                <p className="text-sm text-gray-600">
                  Applichiamo tecniche osteopatiche specifiche per correggere le disfunzioni
                </p>
              </div>
            </div>
            
            {/* Step 4 - Full width */}
            <div className="mt-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
                style={{ backgroundColor: '#72fa93' }}
              >
                4
              </motion.div>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#002552' }}>
                Risultato
              </h4>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Recuperi la mobilità, elimini il dolore e previeni il ritorno del problema con i nostri consigli personalizzati
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#002552' }}>
              Non Lasciare che il Dolore Controlli la Tua Vita
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Il trattamento osteopatico specializzato per il mal di schiena può restituirti la libertà 
              di movimento e la qualità di vita che meriti. Agisci ora, prima che il problema peggiori.
            </p>
            <motion.button
              onClick={() => {
                const offerSection = document.getElementById('offer-section');
                if (offerSection) {
                  offerSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-dark text-green font-black py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#002552', color: '#72fa93' }}
            >
              Scopri la Nostra Offerta
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
