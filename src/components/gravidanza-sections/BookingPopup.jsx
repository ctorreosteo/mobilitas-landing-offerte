import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Phone, Mail, User, MessageCircle } from 'lucide-react'
import { useState } from 'react'

// Utility functions for date and time formatting
const formatCurrentDate = () => {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  
  return `${day}/${month}/${year}`
}

const formatCurrentTime = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  
  return `${hours}:${minutes}`
}

export default function BookingPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    pregnancyWeek: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    
    try {
      // Clean and format the form data
      const cleanedData = {
        data: formatCurrentDate(),
        orario: formatCurrentTime(),
        nome: formData.firstName.trim(),
        cognome: formData.lastName.trim(),
        telefono: formData.phone.trim(),
        email: formData.email.trim(),
        settimana_gravidanza: formData.pregnancyWeek,
        fonte: 'Gravidanza'
      }
      
      console.log('Sending data to Zapier:', cleanedData)
      
      // Send data to Zapier webhook (same format as walk popup)
      const response = await fetch('https://hooks.zapier.com/hooks/catch/19401274/u1twbuc/', {
        method: 'POST',
        body: JSON.stringify(cleanedData)
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('Zapier webhook response:', result)
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          pregnancyWeek: ''
        })
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Error sending data to Zapier:', error)
      setIsSubmitting(false)
      setSubmitError(true)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="bg-white rounded-2xl p-4 sm:p-6 max-w-md w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border border-gray-100"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(255, 104, 105, 0.1)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-pink/10 rounded-full transition-colors group"
          >
            <X className="w-5 h-5 text-gray-500 group-hover:text-pink transition-colors" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink/20 to-pink/10 border-2 border-pink/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#FF6869'}} />
                </div>
                <h2 className="text-xl sm:text-2xl font-black mb-2" style={{color: '#002552'}}>
                  Prenota il tuo trattamento
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Compila il form e la nostra segretaria ti chiamerà <strong>entro 24h lavorative</strong> per prenotare l'appuntamento quando sei comoda
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2">
                    Nome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-pink/20 focus:border-pink transition-all duration-300 text-sm sm:text-base"
                      placeholder="Nome"
                      style={{backgroundColor: '#fafafa', maxWidth: '80%'}}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2">
                    Cognome *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-pink/20 focus:border-pink transition-all duration-300 text-sm sm:text-base"
                      placeholder="Cognome"
                      style={{backgroundColor: '#fafafa', maxWidth: '80%'}}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2">
                    Numero di telefono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-pink/20 focus:border-pink transition-all duration-300 text-sm sm:text-base"
                      placeholder="Il tuo numero di telefono"
                      style={{backgroundColor: '#fafafa', maxWidth: '80%'}}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-pink/20 focus:border-pink transition-all duration-300 text-sm sm:text-base"
                      placeholder="La tua email"
                      style={{backgroundColor: '#fafafa', maxWidth: '80%'}}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1 sm:mb-2">
                    Settimana di gravidanza
                  </label>
                  <select
                    name="pregnancyWeek"
                    value={formData.pregnancyWeek}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-pink/20 focus:border-pink transition-all duration-300 text-sm sm:text-base font-montserrat"
                    style={{backgroundColor: '#fafafa', maxWidth: '80%'}}
                  >
                    <option value="">Seleziona la settimana</option>
                    <option value="1-4">1-4 settimane</option>
                    <option value="5-8">5-8 settimane</option>
                    <option value="9-12">9-12 settimane</option>
                    <option value="13-16">13-16 settimane</option>
                    <option value="17-20">17-20 settimane</option>
                    <option value="21-24">21-24 settimane</option>
                    <option value="25-28">25-28 settimane</option>
                    <option value="29-32">29-32 settimane</option>
                    <option value="33-36">33-36 settimane</option>
                    <option value="37-40">37-40 settimane</option>
                  </select>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-600 text-sm font-medium text-center">
                      ❌ Errore nell'invio della richiesta. Riprova o contattaci direttamente al +39 3518198457
                    </p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg font-montserrat"
                  style={{
                    background: 'linear-gradient(135deg, #FF6869 0%, #FF8A95 100%)',
                    boxShadow: '0 8px 25px rgba(255, 104, 105, 0.4)',
                    maxWidth: '80%',
                    color: '#002552'
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 12px 35px rgba(255, 104, 105, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Invio in corso...
                    </div>
                  ) : (
                    'Invia richiesta'
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-black text-green-600 mb-4">
                Richiesta inviata!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                La nostra segretaria ti chiamerà <strong>entro 24h lavorative</strong> per prenotare l'appuntamento quando sei comoda.
              </p>
              <div 
                className="rounded-2xl p-6 border-2"
                style={{
                  backgroundColor: 'rgba(255, 104, 105, 0.1)',
                  borderColor: 'rgba(255, 104, 105, 0.3)'
                }}
              >
                <p className="text-base text-gray-700 font-medium">
                  <strong>Numero di telefono:</strong> +39 3518198457<br />
                  <strong>Orari:</strong> Lun-Ven 9:00-19:00, Sab 9:00-13:00
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
