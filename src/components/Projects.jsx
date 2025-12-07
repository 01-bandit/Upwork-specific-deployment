import { useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: '2D Chess Game',
      description: 'Programming Fundamentals semester project implementing a complete chess game with game logic and UI.',
      tech: ['C++', 'OOP'],
      category: 'academic',
      type: 'FAST University Semester Project',
      github: 'https://github.com/01-bandit/PF-Project',
      icon: '♟️'
    },
    {
      title: 'Weather Dashboard',
      description: 'Web Engineering assignment featuring real-time weather data visualization with API integration.',
      tech: ['JavaScript', 'HTML/CSS', 'Weather API'],
      category: 'academic',
      type: 'FAST University Assignment',
      github: 'https://github.com/01-bandit/Weather-Dashboard',
      icon: '🌤️'
    },
    {
      title: 'Enchanted Labyrinth Explorer',
      description: 'Object-Oriented Programming project featuring game mechanics and design patterns.',
      tech: ['Java', 'OOP', 'Game Development'],
      category: 'academic',
      type: 'FAST University Semester Project',
      github: 'https://github.com/01-bandit/finalproject',
      icon: '🎮'
    },
    {
      title: 'SecureChat',
      description: 'Real-time encrypted chat application with secure messaging features and user authentication.',
      tech: ['React', 'Node.js', 'Socket.io', 'Encryption'],
      category: 'personal',
      type: 'Personal Project',
      github: 'https://github.com/01-bandit/secureChat',
      icon: '💬'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio built with React, Vite, and Tailwind CSS showcasing web engineering concepts.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'personal',
      type: 'Personal Project',
      github: 'https://github.com/01-bandit/portfolio-website',
      icon: '🌐'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white text-center mb-4">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Selected projects from my coursework and personal exploration
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Academic', value: 'academic' },
            { label: 'Personal', value: 'personal' }
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === btn.value
                  ? 'bg-primary dark:bg-secondary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <h3 className="text-2xl font-bold text-primary dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 transition-colors"
                  aria-label="View on GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <p className="text-sm text-secondary dark:text-blue-400 font-semibold mb-3">
                {project.type}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
