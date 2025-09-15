import { motion } from 'framer-motion'
import { CheckCircle, ShoppingCart } from 'lucide-react'

export default function OfferSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('pain-points-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{background: 'linear-gradient(to bottom right, #002552, rgba(0, 37, 82, 0.9))', padding: '48px 16px', position: 'relative'}}>
      {/* Content */}
      <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 8px'}}>
        
        {/* Offer Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{marginBottom: '32px'}}
        >
          <h2 style={{fontSize: '36px', fontWeight: '900', lineHeight: '1.1', marginBottom: '16px'}}>
            <div style={{color: '#F4F4F4', display: 'block'}}>LA NOSTRA</div>
            <div style={{color: '#72fa93', display: 'block'}}>OFFERTA</div>
          </h2>
        </motion.div>

        {/* Offer Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            padding: '32px 24px',
            borderRadius: '20px',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
            border: '3px solid rgba(114, 250, 147, 0.3)',
            backgroundColor: '#F4F4F4',
            color: '#002552'
          }}
        >
          {/* Treatment Title */}
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '16px',
            color: '#002552'
          }}>
            Trattamento osteopatico per emicrania
          </h3>

          {/* Price */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '24px'
          }}>
            <span style={{
              fontSize: '28px',
              fontWeight: 'bold',
              textDecoration: 'line-through',
              color: 'rgba(0, 37, 82, 0.6)'
            }}>
              €90
            </span>
            <span style={{
              fontSize: '48px',
              fontWeight: '900',
              color: '#72fa93'
            }}>
              €69
            </span>
          </div>

          {/* Treatment Description */}
          <div style={{marginBottom: '32px'}}>
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#002552',
              textAlign: 'left'
            }}>
              Il trattamento è composto da:
            </p>
            
            <div style={{textAlign: 'left'}}>
              {[
                "Anamnesi generale approfondita",
                "Trattamento osteopatico specializzato",
                "Consigli per evitare che il problema torni"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}
                >
                  <CheckCircle 
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#72fa93',
                      marginRight: '12px',
                      flexShrink: 0
                    }} 
                  />
                  <span style={{
                    fontSize: '16px',
                    color: '#002552',
                    fontWeight: '500'
                  }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.button 
            onClick={scrollToNext}
            style={{
              backgroundColor: '#72fa93',
              color: '#002552',
              padding: '16px 32px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              margin: '0 auto',
              boxShadow: '0 10px 30px rgba(114, 250, 147, 0.4)',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5ddb7a';
              e.target.style.boxShadow = '0 15px 40px rgba(114, 250, 147, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#72fa93';
              e.target.style.boxShadow = '0 10px 30px rgba(114, 250, 147, 0.4)';
            }}
          >
            <ShoppingCart style={{width: '20px', height: '20px'}} />
            ACQUISTA ORA
          </motion.button>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            backgroundColor: 'rgba(114, 250, 147, 0.2)',
            border: '2px solid rgba(114, 250, 147, 0.4)',
            borderRadius: '16px',
            padding: '20px',
            maxWidth: '500px',
            margin: '0 auto'
          }}
        >
          <p style={{
            color: '#F4F4F4',
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            textAlign: 'center'
          }}>
            ⚡ Offerta limitata - Sconto del 33% valido solo per i primi 10 prenotati
          </p>
        </motion.div>
      </div>
    </section>
  )
}
