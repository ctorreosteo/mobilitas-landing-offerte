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
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#002552' }}>
            Il Mal di Schiena Sta <span style={{ color: '#00BFFF' }}>Rovinando le Tue Giornate</span><span style={{ color: '#002552' }}>?</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl leading-relaxed mb-12" style={{ color: '#002552' }}>
            Sappiamo quanto il mal di schiena possa influenzare ogni aspetto della tua vita. 
            Ecco perché il trattamento osteopatico è la soluzione che stavi cercando.
          </p>
          
          {/* Infographic: Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: '#FF6363' }}>30%</div>
              <p className="text-sm font-semibold" style={{ color: '#002552' }}>
                degli adulti soffre di mal di schiena ricorrente
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: '#00BFFF' }}>70%</div>
              <p className="text-sm font-semibold" style={{ color: '#002552' }}>
                dei casi di mal di schiena sono causati da problemi muscolo-scheletrici
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-black mb-2" style={{ color: '#2E7D32' }}>98%</div>
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
                    className="relative p-3 sm:p-4 md:p-8 text-white rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #FF6363 0%, #FF8E8E 50%, #FFB3B3 100%)'
                    }}
                  >
                    <div className="max-w-xl sm:max-w-2xl pr-2 sm:pr-3 md:pr-6">
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0" style={{ marginTop: '20px' }}>
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black leading-tight text-left">
                            {item.painPoint}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg italic opacity-90 leading-relaxed text-left mb-4 sm:mb-6 md:mb-8">
                            {item.empathy}
                          </p>
                          
                          {/* Solution card positioned after empathy text */}
                          <div className="bg-red-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-2xl max-w-[85%] text-left border-l-4 border-red-400">
                            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-600" />
                              </div>
                              <h4 className="text-xs sm:text-xs md:text-sm font-bold text-red-600 text-left">
                                La Soluzione
                              </h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed text-left">
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                        <h3 className="text-lg font-bold mb-2 text-gray-800">
                          {item.painPoint}
                        </h3>
                        <p className="text-sm text-gray-600 italic">
                          {item.empathy}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                        <h4 className="text-base font-bold mb-2 text-green-700">
                          La Soluzione Osteopatica
                        </h4>
                        <p className="text-sm text-gray-700">
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
                      <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                        <h3 className="text-lg font-bold mb-2 text-gray-800">
                          {item.painPoint}
                        </h3>
                        <p className="text-sm text-gray-600 italic">
                          {item.empathy}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                        <h4 className="text-base font-bold mb-2 text-green-700">
                          La Soluzione Osteopatica
                        </h4>
                        <p className="text-sm text-gray-700">
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
                      <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                        <h3 className="text-lg font-bold mb-2 text-gray-800">
                          {item.painPoint}
                        </h3>
                        <p className="text-sm text-gray-600 italic">
                          {item.empathy}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                        <h4 className="text-base font-bold mb-2 text-green-700">
                          La Soluzione Osteopatica
                        </h4>
                        <p className="text-sm text-gray-700">
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
                    className="relative p-6 md:p-8 text-white rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, #00BFFF, #40E0D0, #00BFFF)'
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold">
                            {item.painPoint}
                          </h3>
                        </div>
                        <p className="text-sm md:text-base italic opacity-90 my-0">
                          {item.empathy}
                        </p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                          </div>
                          <h4 className="text-base md:text-lg font-bold">
                            La Soluzione Osteopatica
                          </h4>
                        </div>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
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
                  style={{ backgroundColor: '#90EE90' }}
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
                  style={{ backgroundColor: '#32CD32' }}
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
                  style={{ backgroundColor: '#228B22' }}
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
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black"
                style={{ backgroundColor: '#002552', color: '#72fa93' }}
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
      </div>
    </section>
  )
}
