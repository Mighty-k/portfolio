// components/ui/Loader.jsx
import { motion } from 'framer-motion'

const dotVariants = {
  animate: i => ({
    scale: [1, 0.5, 1],
    opacity: [1, 0.7, 1],
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeInOut"
      },
      opacity: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    }
  })
}

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <div className="flex items-end justify-center space-x-3">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className={`w-5 h-5 rounded-full bg-gradient-to-t ${
              i % 2 === 0
                ? "from-blue-500 to-purple-500"
                : "from-purple-500 to-blue-500"
            }`}
            custom={i}
            variants={dotVariants}
            initial="animate"
            animate="animate"
          />
        ))}
      </div>
    </div>
  )
}

export default Loader