import { motion } from 'framer-motion'
import { Mail, FileText, Shield, MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

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
            <h3 className="text-3xl font-bold text-green mb-4 font-montserrat">Studio Mobilitas</h3>
            <p className="text-cream/80 text-lg leading-relaxed mb-6">
              Trattamenti osteopatici specializzati per ogni esigenza specifica. 
              La tua salute e il tuo benessere sono la nostra priorità. 
              Offriamo percorsi personalizzati per ogni persona.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green" />
                <span className="text-cream">Via Peyron 54, Torino (comodo con la metro)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green" />
                <a 
                  href="tel:+393518198457" 
                  className="text-cream hover:text-green transition-colors duration-300"
                >
                  +39 3518198457
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green" />
                <a 
                  href="mailto:studio@studiomobilitas.it" 
                  className="text-cream hover:text-green transition-colors duration-300"
                >
                  studio@studiomobilitas.it
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green" />
                <span className="text-cream">Lun-Ven: 8:00-21:00 | Sab: 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-green mb-4 font-montserrat">I Nostri Servizi</h4>
            <div className="space-y-3">
              <p className="text-cream/80 hover:text-green transition-colors duration-300 cursor-pointer">
                Trattamenti osteopatici specifici
              </p>
              <p className="text-cream/80 hover:text-green transition-colors duration-300 cursor-pointer">
                Percorsi benessere multidisciplinari
              </p>
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-xl font-bold text-green mb-4 font-montserrat">Informazioni</h4>
            <div className="space-y-3 mb-6">
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
            
            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold text-green mb-3 font-montserrat">Seguici</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-cream/20 border border-cream/30 rounded-full flex items-center justify-center hover:bg-green hover:text-blue-dark hover:border-green transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-cream" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-cream/20 border border-cream/30 rounded-full flex items-center justify-center hover:bg-green hover:text-blue-dark hover:border-green transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-cream" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-cream/20 border border-cream/30 rounded-full flex items-center justify-center hover:bg-green hover:text-blue-dark hover:border-green transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-cream" />
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
          <p className="text-cream/60 text-sm mb-2">
            © 2024 Studio Mobilitas. Tutti i diritti riservati.
          </p>
          <p className="text-cream/60 text-xs">
            Trattamento osteopatico specializzato a Torino
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

