import { motion } from 'framer-motion'
import { CheckCircle, Star, ChevronDown, ShoppingCart } from 'lucide-react'

export default function VSLSection({ y }) {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{background: 'linear-gradient(to bottom right, #002552, rgba(0, 37, 82, 0.9))', minHeight: '100vh', padding: '48px 16px', position: 'relative'}}>
      {/* Content */}
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 16px'}}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 24px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            border: '2px solid rgba(114, 250, 147, 0.3)',
            backgroundColor: 'rgba(114, 250, 147, 0.2)',
            color: '#F4F4F4',
            margin: '0 auto 20px auto'
          }}
        >
          <Star className="w-4 h-4 mr-2 fill-current" style={{color: '#72fa93'}} />
          Trattamento Specifico
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{marginBottom: '32px'}}
        >
          <h1 style={{fontSize: '32px', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px'}}>
            <div style={{color: '#F4F4F4', display: 'block'}}>TRATTAMENTO</div>
            <div style={{color: '#72fa93', display: 'block'}}>OSTEOPATICO</div>
            <div style={{color: '#F4F4F4', display: 'block'}}>PER IL MAL DI SCHIENA 💪🏼</div>
          </h1>
        </motion.div>


        {/* VSL Video - Pure Video Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{marginBottom: '32px', width: '100%', maxWidth: '800px', margin: '0 auto 32px auto'}}
        >
          {/* Video Container - Solo Video */}
          <div 
            style={{
              width: '100%',
              height: '0',
              paddingBottom: '56.25%',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
              border: '3px solid rgba(114, 250, 147, 0.3)'
            }}
          >
            {/* Video Iframe - Solo Video */}
            <iframe 
              src="https://player.vimeo.com/video/1119431291?badge=0&autopause=0&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              title="VSL_MAL_DI_SCHIENA01"
            />
          </div>
        </motion.div>


        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full max-w-4xl mx-auto mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#F4F4F4'}}>I 3 benefici immediati del Trattamento Osteopatico:</h3>
          <div className="space-y-4">
            {[
              "Sollievo dal dolore senza farmaci",
              "Ripristino della mobilità e libertà di movimento", 
              "Risolviamo il problema alla radice, non solo il sintomo"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-4 backdrop-blur-sm rounded-xl p-4 border"
                style={{borderColor: 'rgba(114, 250, 147, 0.4)', backgroundColor: 'rgba(0, 37, 82, 0.3)'}}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{color: '#72fa93'}} />
                <span className="text-lg font-semibold" style={{color: '#F4F4F4', textAlign: 'left'}}>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center space-y-8 mb-12"
        >
          <motion.button 
            onClick={scrollToOffer}
            className="group relative font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2 font-montserrat"
            style={{backgroundColor: '#72fa93', color: '#002552', borderColor: 'rgba(114, 250, 147, 0.3)'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <ShoppingCart style={{width: '24px', height: '24px'}} />
              <span>ACQUISTA ORA</span>
              <motion.div
                className="w-5 h-5"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
