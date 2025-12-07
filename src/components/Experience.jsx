import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useCustomHooks'

/**
 * Experience Component: Visual timeline of academic and project journey
 * Demonstrates: Timeline UI, animations, intersection observer
 */
function Experience() {
  const experiences = [
    {
      year: '2022',
      title: 'Started Software Engineering',
      organization: 'FAST-NUCES',
      description: 'Began my journey in Software Engineering, learning programming fundamentals with C++ and object-oriented design principles.',
      icon: '🎓',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Web Development Deep Dive',
      organization: 'FAST-NUCES',
      description: 'Mastered HTML, CSS, JavaScript, and React. Built multiple full-stack projects using MERN stack, including real-time chat applications.',
      icon: '💻',
      type: 'learning'
    },
    {
      year: '2023',
      title: 'Python Specialization',
      organization: 'Coursera',
      description: 'Completed comprehensive Python programming certification covering data structures, web scraping, and data visualization.',
      icon: '🐍',
      type: 'certification'
    },
    {
      year: '2024',
      title: 'Advanced Backend Development',
      organization: 'FAST-NUCES',
      description: 'Explored Django, Node.js, and database systems (PostgreSQL, MongoDB). Implemented RESTful APIs and authentication systems.',
      icon: '⚙️',
      type: 'learning'
    },
    {
      year: '2024',
      title: 'Database Systems & Security',
      organization: 'FAST-NUCES',
      description: 'Studied database design, normalization, and query optimization. Learned information security concepts and encryption techniques.',
      icon: '🔒',
      type: 'learning'
    },
    {
      year: '2025',
      title: 'Looking for Opportunities',
      organization: 'Open to Internships',
      description: 'Seeking internships and entry-level positions to apply academic knowledge in real-world production environments.',
      icon: '🚀',
      type: 'goal'
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white text-center mb-4">
            My Journey
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            A timeline of my academic progress and learning milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary dark:from-blue-400 dark:via-blue-500 dark:to-blue-400"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * TimelineItem Component: Individual timeline entry
 * Demonstrates: Component composition, conditional rendering, animations
 */
function TimelineItem({ experience, index }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 })
  const isLeft = index % 2 === 0

  const typeColors = {
    education: 'bg-blue-500',
    learning: 'bg-green-500',
    certification: 'bg-purple-500',
    goal: 'bg-orange-500'
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
    >
      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="text-3xl">{experience.icon}</span>
          </div>
          <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 text-sm font-semibold rounded-full mb-3">
            {experience.year}
          </span>
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
            {experience.title}
          </h3>
          <p className="text-secondary dark:text-blue-400 font-semibold mb-3">
            {experience.organization}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isIntersecting ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-4 h-4 rounded-full ${typeColors[experience.type]} border-4 border-white dark:border-gray-900`}
        />
      </div>

      {/* Empty space on the other side */}
      <div className="w-5/12"></div>
    </motion.div>
  )
}

export default Experience
