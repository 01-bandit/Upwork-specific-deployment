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
      icon: '🐍',
      skills: ['Python', 'Data Structures', 'Web Scraping', 'SQL']
    },
    {
      title: 'Web Engineering',
      issuer: 'FAST-NUCES',
      date: '2024',
      description: 'Advanced web development course covering React, Node.js, REST APIs, and modern web architecture.',
      icon: '🌐',
      skills: ['React', 'Node.js', 'REST APIs', 'MongoDB']
    },
    {
      title: 'Database Systems',
      issuer: 'FAST-NUCES',
      date: '2024',
      description: 'In-depth study of database design, SQL, normalization, query optimization, and DBMS fundamentals.',
      icon: '🗄️',
      skills: ['SQL', 'PostgreSQL', 'Database Design', 'Normalization']
    },
    {
      title: 'Information Security',
      issuer: 'FAST-NUCES',
      date: '2024',
      description: 'Security fundamentals including cryptography, network security, authentication, and secure coding practices.',
      icon: '🔐',
      skills: ['Cryptography', 'Security', 'Authentication', 'Encryption']
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
          <h2 className="text-4xl font-bold text-primary dark:text-white text-center mb-4">
            Certifications & Coursework
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Academic achievements and specialized training in software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{cert.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-secondary dark:text-blue-400 font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 text-xs font-semibold rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-blue-500/20 dark:to-blue-400/20 text-primary dark:text-blue-400 text-xs rounded-full font-medium"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: 'Courses Completed', value: '15+', icon: '📚' },
            { label: 'Projects Built', value: '20+', icon: '🚀' },
            { label: 'Technologies Learned', value: '25+', icon: '⚡' },
            { label: 'Current CGPA', value: '3.5+', icon: '🎯' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
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
