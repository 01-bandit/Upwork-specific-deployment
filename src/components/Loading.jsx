import { motion } from 'framer-motion'

/**
 * Loading Component: Loading screen/splash animation
 * Demonstrates: CSS animations, component lifecycle, transitions
 */
function Loading({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary to-secondary"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white mb-4"
        >
          <h1 className="text-6xl font-bold mb-2">MH</h1>
          <p className="text-xl">Muhammad Hammad ur Rehman</p>
        </motion.div>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto mt-8"
        />
      </div>
    </motion.div>
  )
}

export default Loading
