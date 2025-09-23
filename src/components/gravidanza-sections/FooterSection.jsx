import { motion } from 'framer-motion'
import { Mail, FileText, Shield, MapPin, Phone, Heart } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer className="bg-blue-dark text-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#FF6869'}}>Studio Mobilitas</h3>
            <p className="text-cream/80 text-lg leading-relaxed mb-6">
              Specializzati nel trattamento osteopatico per la gravidanza e le disfunzioni 
              posturali. Il benessere di mamma e bambino è la nostra priorità.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" style={{color: '#FF6869'}} />
                <span className="text-cream">Via Peyron 54, Torino (comodo con la metro)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" style={{color: '#FF6869'}} />
                <span className="text-cream">+39 3518198457</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{color: '#FF6869'}}>Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" style={{color: '#FF6869'}} />
                <a 
                  href="mailto:studio@studiomobilitas.it" 
                  className="text-cream hover:text-pink transition-colors duration-300"
                  style={{'--hover-color': '#FF6869'}}
                >
                  studio@studiomobilitas.it
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{color: '#FF6869'}}>Informazioni Legali</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5" style={{color: '#FF6869'}} />
                <span className="text-cream">P.IVA: 13020400019</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" style={{color: '#FF6869'}} />
                <a 
                  href="https://www.iubenda.com/privacy-policy/67925714" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-pink transition-colors duration-300"
                  style={{'--hover-color': '#FF6869'}}
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" style={{color: '#FF6869'}} />
                <a 
                  href="https://www.iubenda.com/privacy-policy/67925714/cookie-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-pink transition-colors duration-300"
                  style={{'--hover-color': '#FF6869'}}
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t mb-8"
          style={{borderColor: 'rgba(255, 104, 105, 0.2)'}}
        ></motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cream/60 text-sm">
            © 2024 Studio Mobilitas. Tutti i diritti riservati.
          </p>
          <p className="text-cream/60 text-xs mt-2">
            Trattamento osteopatico specializzato per la gravidanza e il benessere di mamma e bambino
          </p>
          <div className="flex items-center justify-center mt-4">
            <Heart className="w-4 h-4 mr-2" style={{color: '#FF6869'}} />
            <span className="text-cream/60 text-xs">Fatto con amore per le mamme</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
