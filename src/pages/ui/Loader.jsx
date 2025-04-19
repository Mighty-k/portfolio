// components/ui/Loader.jsx
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-display text-gray-300"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </div>
  )
}

export default Loader