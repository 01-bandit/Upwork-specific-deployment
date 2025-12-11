import { motion } from 'framer-motion'

/**
 * Certifications Component: Showcase certifications and achievements
 * Demonstrates: Grid layout, card design, hover effects
 */
function Certifications() {
  const certifications = [
    {
      title: 'Python for Everybody Specialization',
      issuer: 'University of Michigan (Coursera)',
      date: '2023',
      description: 'Comprehensive Python programming covering data structures, web scraping, databases, and data visualization.',
      icon: '',
      skills: ['Python', 'Data Structures', 'Web Scraping', 'SQL']
    },
    {
      title: 'Information Security',
      issuer: 'FAST-NUCES',
      date: 'Fall 2025',
      description: 'Comprehensive security course covering cryptography, network security, secure software development, and attack/defense techniques. Built SecureChat with E2E encryption.',
      icon: '',
      skills: ['Cryptography', 'E2E Encryption', 'Security', 'ECDH/AES-GCM']
    },
    {
      title: 'Web Engineering',
      issuer: 'FAST-NUCES',
      date: 'Fall 2024',
      description: 'Full-stack web development covering React, Node.js, REST APIs, and modern web architecture with hands-on projects.',
      icon: '',
      skills: ['React', 'Node.js', 'REST APIs', 'MongoDB']
    },
    {
      title: 'Database Systems',
      issuer: 'FAST-NUCES',
      date: 'Fall 2024',
      description: 'Advanced database design, SQL optimization, normalization, transactions, and distributed database systems.',
      icon: '',
      skills: ['PostgreSQL', 'SQL', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Software Construction & Development',
      issuer: 'FAST-NUCES',
      date: 'Spring 2025',
      description: 'Software engineering best practices, design patterns, testing, CI/CD, and collaborative development workflows.',
      icon: '',
      skills: ['Design Patterns', 'Testing', 'CI/CD', 'Agile']
    },
    {
      title: 'MLOps',
      issuer: 'FAST-NUCES',
      date: 'Fall 2025',
      description: 'Machine Learning Operations covering model deployment, monitoring, versioning, and production ML workflows.',
      icon: '',
      skills: ['ML Deployment', 'Model Monitoring', 'MLOps', 'Automation']
    }
  ]

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-4">
            Certifications & Coursework
          </h2>
          <p className="text-sm md:text-base text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Academic achievements and specialized training in software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all"
            >
              <div className="mb-3 md:mb-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-primary dark:text-white mb-1 md:mb-2 break-words">
                    {cert.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary dark:text-blue-400 font-semibold mb-1 break-words">
                    {cert.issuer}
                  </p>
                  <span className="inline-block px-2 md:px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 text-xs font-semibold rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed break-words">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-blue-500/20 dark:to-blue-400/20 text-primary dark:text-blue-400 text-xs rounded-full font-medium whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional achievement stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12"
        >
          {[
            { label: 'Courses Completed', value: '25+', icon: '' },
            { label: 'Projects Built', value: '15+', icon: '' },
            { label: 'Technologies Learned', value: '12+', icon: '' },
            { label: 'Current CGPA', value: '2.15', icon: '' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 md:p-6 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 break-words">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
