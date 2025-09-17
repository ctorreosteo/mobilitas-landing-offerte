import { motion } from 'framer-motion'

export default function AnnouncementBar() {
  // Calcola i posti rimasti basandosi sui giorni del mese
  const calculateRemainingSpots = () => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const totalSpots = 60;
    const remainingSpots = Math.max(1, totalSpots - (2 * dayOfMonth)); // Minimo 1 posto
    return remainingSpots;
  };

  const remainingSpots = calculateRemainingSpots();

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-sm"
      style={{
        backgroundColor: '#F4F4F4', // Color panna aziendale
        borderBottom: '1px solid #E0E0E0'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <motion.div
            className="flex items-center space-x-2 font-semibold text-sm md:text-base"
            style={{ color: '#002552' }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-lg">⚠️</span>
            <span>
              {remainingSpots} posti rimasti su 60
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
