import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDebounce } from '../hooks/useAdvancedHooks'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Debounce search term to avoid filtering on every keystroke
  const debouncedSearch = useDebounce(searchTerm, 300)

  const projects = [
    {
      title: 'AI Voice Calling Agent',
      description: 'Outbound AI calling agent with automated lead generation pipeline. Built n8n workflow integrating Waalaxy, LinkedIn scraping, Apollo, VAPI, and Retell AI. Extracted and fine-tuned dataset from real closer recordings to replicate human-like sales conversations.',
      tech: ['n8n', 'VAPI', 'Retell AI', 'Apollo', 'Dataset Extraction', 'Fine-tuning'],
      category: 'personal',
      type: 'Work in Progress',
      github: '',
      icon: '',
      highlight: true
    },
    {
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging application implementing ECDH key exchange, AES-256-GCM encryption, and real-time messaging with Socket.io. Built for Information Security course.',
      tech: ['React', 'Node.js', 'Socket.io', 'Web Crypto API', 'MongoDB'],
      category: 'personal',
      type: 'Personal Project',
      github: 'https://github.com/01-bandit/SecureChat',
      icon: ''
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with dark mode, animations, CI/CD pipeline, and automated deployment. Built with React, Vite, Tailwind CSS, and Framer Motion.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'CI/CD'],
      category: 'personal',
      type: 'Personal Project',
      github: 'https://github.com/01-bandit/portfolio-website',
      icon: ''
    },
    {
      title: '2D Chess Game',
      description: 'Complete chess implementation with game logic, move validation, and graphical UI built in C++ for Programming Fundamentals course.',
      tech: ['C++', 'OOP', 'Game Logic'],
      category: 'academic',
      type: 'FAST University Semester Project',
      github: 'https://github.com/01-bandit/PF-Project',
      icon: ''
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data visualization and API integration for Web Engineering assignment.',
      tech: ['JavaScript', 'HTML/CSS', 'Weather API'],
      category: 'academic',
      type: 'FAST University Assignment',
      github: 'https://github.com/01-bandit/Weather-Dashboard',
      icon: ''
    },
  ]

  // Filter projects by category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter
    const matchesSearch = debouncedSearch === '' || 
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(debouncedSearch.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

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

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              aria-label="Search projects"
            />
            <svg 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

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
              aria-pressed={filter === btn.value}
            >
              {btn.label}
            </button>
          ))}
        </div>
        
        {/* Results count */}
        {(searchTerm || filter !== 'all') && (
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Found {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        )}
        
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
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all border ${
                project.highlight 
                  ? 'border-secondary dark:border-blue-400 ring-2 ring-secondary/20 dark:ring-blue-400/20' 
                  : 'border-gray-100 dark:border-gray-700'
              }`}
            >
              {project.highlight && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary to-blue-500 text-white text-xs font-bold rounded-full">
                    FEATURED PROJECT
                  </span>
                </div>
              )}
              <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white break-words">
                    {project.title}
                  </h3>
                </div>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 transition-colors flex-shrink-0"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
              
              <p className="text-sm text-secondary dark:text-blue-400 font-semibold mb-3">
                {project.type}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 break-words">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 md:px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 text-xs md:text-sm rounded-full whitespace-nowrap"
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
