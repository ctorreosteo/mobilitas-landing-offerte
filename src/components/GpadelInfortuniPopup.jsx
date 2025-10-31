import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

export default function GpadelInfortuniPopup({ isOpen, onClose }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    cellulare: '',
    email: '',
    privacy: false
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormErrors({})
    
    const errors = {}
    
    // Validazione nome
    if (!formData.nome.trim() || formData.nome.length < 2) {
      errors.nome = 'Il nome deve essere di almeno 2 caratteri'
    }
    
    // Validazione cognome
    if (!formData.cognome.trim() || formData.cognome.length < 2) {
      errors.cognome = 'Il cognome deve essere di almeno 2 caratteri'
    }
    
    // Validazione cellulare
    if (!formData.cellulare.trim() || formData.cellulare.length < 10) {
      errors.cellulare = 'Inserisci un numero di cellulare valido'
    }
    
    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = 'Inserisci un indirizzo email valido'
    }
    
    // Validazione privacy
    if (!formData.privacy) {
      errors.privacy = 'Devi accettare la privacy policy'
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    
    // Skip Zapier webhook in development/local to save resources
    if (import.meta.env.DEV) {
      console.log('Development mode: skipping Zapier webhook call')
      setIsSubmitting(false)
      navigate('/lm-gpadel-infortuni-grazie')
      return
    }
    
    // Send data to Zapier webhook
    try {
      // Format date and time as requested: dd/mm/yyyy and hh:mm
      const now = new Date()
      const day = String(now.getDate()).padStart(2, '0')
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const year = now.getFullYear()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      
      const webhookData = {
        nome: formData.nome,
        cognome: formData.cognome,
        telefono: formData.cellulare,
        email: formData.email,
        data: `${day}/${month}/${year}`,
        ora: `${hours}:${minutes}`,
        offerta: 'Guida Infortuni Padel - GRATIS',
        pagina: 'GPADEL Infortuni Landing',
        privacy_accettata: formData.privacy
      }
      
      // Send data to Zapier webhook
      const response = await fetch('https://hooks.zapier.com/hooks/catch/19401274/ui06lc2/', {
        method: 'POST',
        body: JSON.stringify(webhookData)
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('Zapier webhook response:', result)
      
      // Redirect to thank you page after success
      setIsSubmitting(false)
      navigate('/lm-gpadel-infortuni-grazie')
      
    } catch (error) {
      console.error('Error sending data to Zapier:', error)
      setFormErrors({ submit: 'Si è verificato un errore durante l\'invio. Riprova più tardi.' })
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) {
          onClose()
        }
      }}
    >
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            if (!isSubmitting) {
              onClose()
            }
          }}
          disabled={isSubmitting}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors font-montserrat disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-blue-dark mb-4">Compila il form</h3>
          <p className="text-blue-dark/70 text-sm leading-relaxed">
            Dopo che avrai compilato il form, la nostra segreteria farà un controllo manuale che si tratti di una richiesta vera e ti inverà la guida gratuita. 
            Compila subito il form! 👇🏼
          </p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome *"
                value={formData.nome}
                onChange={handleInputChange}
                required
                minLength={2}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat ${
                  formErrors.nome ? 'border-red-500' : 'border-gray-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {formErrors.nome && <p className="text-red-500 text-xs mt-1">{formErrors.nome}</p>}
            </div>
            <div>
              <input
                type="text"
                name="cognome"
                placeholder="Cognome *"
                value={formData.cognome}
                onChange={handleInputChange}
                required
                minLength={2}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat ${
                  formErrors.cognome ? 'border-red-500' : 'border-gray-300'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {formErrors.cognome && <p className="text-red-500 text-xs mt-1">{formErrors.cognome}</p>}
            </div>
          </div>
          
          <div>
            <input
              type="tel"
              name="cellulare"
              placeholder="Cellulare *"
              value={formData.cellulare}
              onChange={handleInputChange}
              required
              minLength={10}
              pattern="[0-9+\s\-\(\)]+"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat ${
                formErrors.cellulare ? 'border-red-500' : 'border-gray-300'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {formErrors.cellulare && <p className="text-red-500 text-xs mt-1">{formErrors.cellulare}</p>}
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-montserrat ${
                formErrors.email ? 'border-red-500' : 'border-gray-300'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>
          
          <div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="privacy"
                id="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="privacy" className="text-xs text-gray-600 leading-relaxed">
                Accetto la <a href="https://www.iubenda.com/privacy-policy/67925714" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">privacy policy</a> e autorizzo il trattamento dei miei dati personali
              </label>
            </div>
            {formErrors.privacy && <p className="text-red-500 text-xs mt-1">{formErrors.privacy}</p>}
          </div>

          {formErrors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm">{formErrors.submit}</p>
            </div>
          )}
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-green-600 transition-all font-montserrat disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              {isSubmitting ? 'Invio in corso...' : 'Scarica la guida gratis'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

