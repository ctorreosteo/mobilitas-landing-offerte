import { motion } from 'framer-motion'
import { Mail, FileText, Shield, MapPin, Phone } from 'lucide-react'

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
            <h3 className="text-2xl font-bold text-green mb-4">Studio Mobilitas</h3>
            <p className="text-cream/80 text-lg leading-relaxed mb-6">
              Specializzati nel trattamento osteopatico del mal di schiena e delle disfunzioni 
              posturali. La tua salute è la nostra priorità.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green" />
                <span className="text-cream">Via Peyron 54, Torino (comodo con la metro)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green" />
                <span className="text-cream">+39 3518198457</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-green mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green" />
                <a 
                  href="mailto:studio@studiomobilitas.it" 
                  className="text-cream hover:text-green transition-colors duration-300"
                >
                  studio@studiomobilitas.it
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold text-green mb-4">Informazioni Legali</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-green" />
                <span className="text-cream">P.IVA: 13020400019</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green" />
                <a 
                  href="https://www.iubenda.com/privacy-policy/67925714" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-green transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green" />
                <a 
                  href="https://www.iubenda.com/privacy-policy/67925714/cookie-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream hover:text-green transition-colors duration-300"
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
          className="border-t border-green/20 mb-8"
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
            Trattamento osteopatico specializzato per mal di schiena e disfunzioni posturali
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
