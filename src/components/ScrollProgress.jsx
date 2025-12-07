import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress Component: Visual indicator of scroll depth
 * Demonstrates: Framer Motion scroll hooks, performance optimization
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-secondary dark:bg-blue-400 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
