import { motion } from 'framer-motion'
import { CheckCircle, Star, ChevronDown, Calendar } from 'lucide-react'
import { useEffect } from 'react'

export default function VSLSection({ y }) {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Load Wistia player script
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/1uk1gn9uda.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    // Add Wistia styles
    const style = document.createElement('style');
    style.textContent = `wistia-player[media-id='1uk1gn9uda']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/1uk1gn9uda/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`;
    document.head.appendChild(style);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

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
            border: '2px solid rgba(255, 104, 105, 0.3)',
            backgroundColor: 'rgba(255, 104, 105, 0.2)',
            color: '#F4F4F4',
            margin: '0 auto 20px auto'
          }}
        >
          <Star className="w-4 h-4 mr-2 fill-current" style={{color: '#FF6869'}} />
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
            <div style={{color: '#FF6869', display: 'block'}}>OSTEOPATICO</div>
            <div style={{color: '#F4F4F4', display: 'block'}}>GRAVIDANZA 🤱</div>
          </h1>
        </motion.div>


        {/* VSL Video - Pure Video Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{marginBottom: '32px', width: '100%', maxWidth: '800px', margin: '0 auto 32px auto'}}
        >
          {/* Video Container - Wistia Player */}
          <div 
            style={{
              width: '100%',
              height: '0',
              paddingBottom: '56.25%',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
              border: '3px solid rgba(255, 104, 105, 0.3)'
            }}
          >
            {/* Wistia Player */}
            <wistia-player 
              media-id="1uk1gn9uda" 
              seo="false" 
              aspect="1.7777777777777777"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
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
              "Alleviamo i problemi tipici della gravidanza (mal di schiena, tensioni al collo, pesantezza alle gambe, nausea ecc.)",
              "Miglioriamo il benessere di mamma e bambino", 
              "Prepariamo il corpo al parto in modo naturale, migliorando la mobilità del bacino"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-4 backdrop-blur-sm rounded-xl p-4 border"
                style={{borderColor: 'rgba(255, 104, 105, 0.4)', backgroundColor: 'rgba(0, 37, 82, 0.3)'}}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{color: '#FF6869'}} />
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
            style={{backgroundColor: '#FF6869', color: '#002552', borderColor: 'rgba(255, 104, 105, 0.3)'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-pink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative flex items-center justify-center space-x-3">
              <Calendar style={{width: '24px', height: '24px'}} />
              <span>PRENOTA ORA CON SCONTO</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
