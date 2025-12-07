import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

/**
 * Hero Component: Animated landing section
 * Demonstrates: Framer Motion animations, TypeAnimation, modern hero design
 */
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div 
        className="container mx-auto max-w-6xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <img 
            src="/profile.jpg" 
            alt="Muhammad Hammad ur Rehman"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-secondary mx-auto hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-white mb-6"
        >
          Muhammad Hammad ur Rehman
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-20"
        >
          <TypeAnimation
            sequence={[
              'Software Engineering Student',
              2000,
              'Full-Stack Developer',
              2000,
              'React Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-secondary dark:text-blue-400"
          />
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Passionate about building innovative web applications and solving complex problems.
          Currently studying at FAST-NUCES, exploring the intersection of technology and creativity.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#projects"
            className="px-8 py-4 bg-primary dark:bg-secondary text-white rounded-lg font-semibold hover:bg-secondary dark:hover:bg-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-primary dark:text-white border-2 border-primary dark:border-secondary rounded-lg font-semibold hover:bg-primary hover:text-white dark:hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <svg 
              className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
