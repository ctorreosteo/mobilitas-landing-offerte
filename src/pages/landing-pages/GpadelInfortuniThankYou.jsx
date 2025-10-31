import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function GpadelInfortuniThankYou() {
  const navigate = useNavigate()

  const handleRequestTreatment = () => {
    // Navigate to contact page or open WhatsApp
    const message = encodeURIComponent("Ciao, dopo aver richiesto la guida gratuita per gli infortuni nel padel, vorrei prenotare il trattamento osteopatico scontato a 39€ per GPADEL. Quando avete posto? Grazie!");
    window.open(`https://wa.me/393518198457?text=${message}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Success Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-left"
          >
            {/* Title */}
            <h1 className="text-4xl font-black text-blue-dark mb-4">
              Richiesta inviata con successo!
            </h1>

            {/* Description */}
            <div className="text-blue-dark/80 text-lg leading-relaxed space-y-4">
              <p>
                La tua richiesta è stata registrata correttamente nel nostro sistema.
              </p>
              <p className="text-blue-dark/90">
                La nostra segreteria farà un <strong>controllo manuale</strong> per verificare che si tratti di una richiesta vera. Dopo la verifica, ti invieremo la <strong>guida gratuita via email</strong> entro 48 ore lavorative.
              </p>
            </div>
          </motion.div>

          {/* Offer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green/30"
          >
            <h2 className="text-3xl font-black text-blue-dark mb-8 text-left">
              Nel frattempo...
            </h2>
            
            <div className="mb-0">
              <img
                src="/landing-pages/lm-gpadel-infortuni-foto1.png"
                alt="Trattamento osteopatico per padelisti"
                className="w-full rounded-xl"
              />
            </div>
            
            <div className="bg-gradient-to-br from-blue-dark/5 to-green/10 rounded-xl py-6 px-0 mb-6">
              <p className="text-xl text-blue-dark/90 mb-4 text-left">
                Se ti fa piacere, puoi usufruire della <strong className="text-azure-dark">scontistica GPADEL</strong>
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold line-through text-red-600">90€</span>
                <span className="text-4xl font-black text-azure-dark">39€</span>
              </div>

              <p className="text-blue-dark/80 text-left mb-6">
                Per un nostro trattamento osteopatico specializzato
              </p>

              <button
                onClick={handleRequestTreatment}
                className="w-full bg-blue-dark text-green font-bold px-8 py-5 text-lg rounded-xl shadow-lg hover:brightness-110 transition uppercase tracking-wide font-montserrat"
              >
                Richiedi il trattamento scontato
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-blue-dark mb-8">
                I benefici del trattamento osteopatico per chi pratica Padel anche amatoriale)
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mt-1 mr-4 w-6 h-6 bg-azure-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </span>
                  <p className="text-blue-dark/90 mt-0">
                    <strong>Risoluzione dei dolori acuti o cronici</strong> che ti porti dietro da tempo, senza magari neanche accorgertene perché ti ci sei abituato
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="mt-1 mr-4 w-6 h-6 bg-azure-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </span>
                  <p className="text-blue-dark/90 mt-0">
                    <strong>Prevenzione degli infortuni più comuni</strong> nel padel: riduce il rischio di lesioni a spalla, gomito e caviglia attraverso il riequilibrio posturale e la mobilità articolare
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="mt-1 mr-4 w-6 h-6 bg-azure-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </span>
                  <p className="text-blue-dark/90 mt-0">
                    <strong>Recupero più rapido dopo le partite</strong>: migliora la circolazione e riduce l'accumulo di tensioni muscolari, permettendoti di giocare più spesso senza dolori
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="mt-1 mr-4 w-6 h-6 bg-azure-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </span>
                  <p className="text-blue-dark/90 mt-0">
                    <strong>Miglioramento delle performance</strong>: ottimizza la postura e la coordinazione, rendendo i tuoi movimenti più fluidi e potenti
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="mt-1 mr-4 w-6 h-6 bg-azure-dark rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">5</span>
                  </span>
                  <p className="text-blue-dark/90 mt-0">
                    <strong>Gestione del carico di gioco</strong>: aiuta il corpo a gestire meglio lo stress ripetitivo tipico del padel, prevenendo sovraccarichi e infiammazioni
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-left mt-8"
          >
            <p className="text-blue-dark/70">
              Hai domande? Contattaci al <strong>+39 3518198457</strong> o via email a <strong>studio@studiomobilitas.it</strong>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

