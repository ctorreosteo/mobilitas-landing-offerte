import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Phone } from 'lucide-react'
import { useState } from 'react'

export default function BookingPopup({ isOpen, onClose, packageType }) {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    cellulare: '',
    orarioChiamata: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simula invio form (qui potresti integrare con un'API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Chiudi popup dopo 3 secondi
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ nome: '', cognome: '', cellulare: '', orarioChiamata: '' })
      onClose()
    }, 3000)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false)
      setFormData({ nome: '', cognome: '', cellulare: '', orarioChiamata: '' })
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Minimal */}
            <div className="relative bg-cream p-6 border-b border-blue-dark/10">
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 w-8 h-8 bg-blue-dark/10 hover:bg-blue-dark/20 rounded-full flex items-center justify-center transition-colors duration-200 disabled:opacity-50"
              >
                <X className="w-4 h-4" style={{ color: '#002552' }} />
              </button>
              
              <div className="text-center">
                <h2 className="text-2xl font-black mb-1" style={{ color: '#002552' }}>
                  Prenota il tuo posto
                </h2>
                <p className="text-sm font-semibold mb-2" style={{ color: '#002552' }}>
                  {packageType === 'base' ? 'Pacchetto Base - 5€' : 'Pacchetto Premium - 39€'}
                </p>
                <p className="text-xs italic font-bold" style={{ color: '#0ea5e9' }}>
                  La nostra segreteria ti chiamerà per darti tutti i dettagli della camminata.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-bold text-blue-dark mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-blue-dark/20 rounded-xl focus:border-blue-dark focus:outline-none transition-colors duration-200 text-blue-dark font-medium bg-cream/30"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  {/* Cognome */}
                  <div>
                    <label htmlFor="cognome" className="block text-sm font-bold text-blue-dark mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="cognome"
                      name="cognome"
                      value={formData.cognome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-blue-dark/20 rounded-xl focus:border-blue-dark focus:outline-none transition-colors duration-200 text-blue-dark font-medium bg-cream/30"
                      placeholder="Il tuo cognome"
                    />
                  </div>

                  {/* Cellulare */}
                  <div>
                    <label htmlFor="cellulare" className="block text-sm font-bold text-blue-dark mb-2">
                      Numero di cellulare *
                    </label>
                    <input
                      type="tel"
                      id="cellulare"
                      name="cellulare"
                      value={formData.cellulare}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-blue-dark/20 rounded-xl focus:border-blue-dark focus:outline-none transition-colors duration-200 text-blue-dark font-medium bg-cream/30"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  {/* Orario Chiamata */}
                  <div>
                    <label htmlFor="orarioChiamata" className="block text-sm font-bold text-blue-dark mb-2">
                      Orario in cui vuoi essere chiamato/a *
                    </label>
                    <select
                      id="orarioChiamata"
                      name="orarioChiamata"
                      value={formData.orarioChiamata}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-blue-dark/20 rounded-xl focus:border-blue-dark focus:outline-none transition-colors duration-200 text-blue-dark font-medium bg-cream/30"
                    >
                      <option value="">Seleziona un orario</option>
                      <option value="mattina">Mattina (9:00 - 12:00)</option>
                      <option value="pausa-pranzo">Pausa pranzo (13:00 - 14:00)</option>
                      <option value="pomeriggio">Pomeriggio (14:00 - 18:00)</option>
                      <option value="sera">Sera (18:00 - 20:00)</option>
                      <option value="qualsiasi">Qualsiasi orario</option>
                    </select>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.nome.trim() || !formData.cognome.trim() || !formData.cellulare.trim() || !formData.orarioChiamata}
                    className="w-full bg-blue-dark text-green font-black py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wide disabled:cursor-not-allowed disabled:transform-none"
                    style={{ backgroundColor: '#002552', color: '#72fa93' }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-green border-t-transparent rounded-full animate-spin" style={{ borderColor: '#72fa93', borderTopColor: 'transparent' }}></div>
                        <span>Invio in corso...</span>
                      </div>
                    ) : (
                      'Sì, voglio partecipare alla camminata'
                    )}
                  </motion.button>
                </form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#72fa93' }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", damping: 15 }}
                      className="text-white text-2xl font-bold"
                    >
                      ✓
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-blue-dark mb-4">
                    Prenotazione confermata!
                  </h3>
                  
                  <p className="text-blue-dark/80 mb-6">
                    Grazie <strong>{formData.nome}</strong>! Ti contatteremo al numero <strong>{formData.cellulare}</strong> entro 24 ore.
                    {formData.orarioChiamata && (
                      <span className="block mt-2">
                        Ti chiameremo preferibilmente <strong>{formData.orarioChiamata}</strong>.
                      </span>
                    )}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm text-blue-dark/60"
                  >
                    Questo popup si chiuderà automaticamente...
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
