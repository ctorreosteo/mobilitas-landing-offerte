import { motion } from 'framer-motion'
import { CheckCircle, Star, ChevronDown } from 'lucide-react'

export default function VSLSection({ y }) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('pain-points-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
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
          Trattamento Specializzato
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
            <div style={{color: '#F4F4F4', display: 'block'}}>PER EMICRANIA</div>
          </h1>
        </motion.div>

        {/* Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            padding: '24px 32px',
            borderRadius: '16px',
            marginBottom: '32px',
            maxWidth: '400px',
            margin: '0 auto 32px auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            border: '4px solid rgba(114, 250, 147, 0.3)',
            backgroundColor: '#F4F4F4',
            color: '#002552'
          }}
        >
          <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px'}}>Trattamento osteopatico specifico e mirato</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
              <span style={{fontSize: '24px', fontWeight: 'bold', textDecoration: 'line-through', color: 'rgba(0, 37, 82, 0.6)'}}>€90</span>
              <span style={{fontSize: '40px', fontWeight: '900', color: '#72fa93'}}>€60</span>
            </div>
            <p style={{fontSize: '14px', marginTop: '8px', color: 'rgba(0, 37, 82, 0.8)'}}>Sconto del 33% - Offerta limitata</p>
          </div>
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
              src="https://player.vimeo.com/video/1118754358?badge=0&autopause=0&player_id=0&app_id=58479" 
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
              title="VSL_EMICRANIA01"
            />
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-4xl mx-auto mb-8 px-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#F4F4F4'}}>I 3 benefici del Trattamento Osteopatico:</h3>
          <div className="space-y-4">
            {[
              "Sollievo dal dolore senza farmaci",
              "Ripristino del controllo sulla tua vita quotidiana", 
              "Trattamento al radice del problema, non solo sintomatica"
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
                <span className="text-lg font-semibold" style={{color: '#F4F4F4'}}>{benefit}</span>
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
            onClick={scrollToNext}
            className="group relative font-black py-6 px-12 rounded-3xl text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide border-2"
            style={{backgroundColor: '#72fa93', color: '#002552', borderColor: 'rgba(114, 250, 147, 0.3)'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <span className="text-xl">🎯</span>
              <span>Scopri perché funziona</span>
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 text-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-4 rounded-full shadow-xl border-2 mx-auto inline-block"
          style={{backgroundColor: '#F4F4F4', borderColor: '#72fa93'}}
        >
          <ChevronDown className="w-8 h-8" style={{color: '#002552'}} />
        </motion.div>
        <p className="text-sm mt-3 font-semibold" style={{color: '#F4F4F4'}}>
          Scorri per scoprire
        </p>
      </motion.div>
    </section>
  )
}
