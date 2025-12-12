import { motion } from 'framer-motion'

function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
      location: 'Islamabad, Pakistan',
      period: '2022 - 2026 (Expected)',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Engineering, Information Security',
        'Hands-on experience with MERN stack, Django, and mobile app development',
        'Team projects in OOP, Software Design, and Distributed Systems'
      ]
    },
    {
      degree: 'Python for Everybody Specialization',
      institution: 'Coursera',
      location: 'Online',
      period: '2023',
      highlights: [
        'Completed comprehensive Python programming course',
        'Covered data structures, web scraping, databases, and data visualization',
        'Applied Python skills in academic and personal projects'
      ]
    },
    {
      degree: 'Software Quality Engineering',
      institution: 'FAST-NUCES',
      location: 'Islamabad, Pakistan',
      period: '2025',
      highlights: [
        'Comprehensive testing methodology course covering unit testing, integration testing, black-box testing, and API testing',
        'Hands-on experience with testing frameworks and tools: Cypress (E2E), Jest, Vitest, Postman (API testing), and pytest',
        'Studied QA principles, test case design, test execution strategies, and quality assurance best practices',
        'Applied testing techniques to real-world applications and built robust test suites'
      ]
    },
    {
      degree: 'Software Design and Architecture',
      institution: 'FAST-NUCES',
      location: 'Islamabad, Pakistan',
      period: '2024-2025',
      highlights: [
        'Learned design patterns, architectural patterns, and SOLID principles',
        'Studied microservices architecture, monolithic design, and scalable system design',
        'Implemented clean code practices and refactoring techniques',
        'Analyzed real-world system architectures and design trade-offs'
      ]
    },
    {
      degree: 'Software Re-Engineering',
      institution: 'FAST-NUCES',
      location: 'Islamabad, Pakistan',
      period: '2025',
      highlights: [
        'Focused on legacy code analysis, refactoring, and modernization techniques',
        'Worked with testing frameworks including pytest for Python and Jest for JavaScript',
        'Studied code smell detection, technical debt assessment, and continuous improvement',
        'Practical experience in transforming monolithic systems and improving code quality'
      ]
    },
    {
      degree: 'Fundamentals of Software Project Management',
      institution: 'FAST-NUCES',
      location: 'Islamabad, Pakistan',
      period: '2025',
      highlights: [
        'Learned project management methodologies: Waterfall, Agile (Scrum, Kanban), and hybrid approaches',
        'Studied risk management, resource allocation, scheduling, and budgeting techniques',
        'Explored team dynamics, stakeholder management, and communication strategies',
        'Analyzed real-world case studies of successful and failed software projects'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white text-center mb-12">
            Education
          </h2>
        </motion.div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 border-l-4 border-secondary rounded-lg shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-2 break-words">
                    {edu.degree}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium break-words">
                    {edu.institution}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                </div>
                <div className="mt-2 lg:mt-0 flex-shrink-0">
                  <span className="inline-block bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {edu.highlights.map((highlight, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                    className="text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-secondary dark:text-blue-400 mr-2 mt-1">▹</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary to-secondary dark:from-blue-600 dark:to-blue-400 rounded-lg shadow-lg p-8 text-white"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Academic Approach</h3>
          <p className="text-base md:text-lg leading-relaxed">
            My education at FAST-NUCES emphasizes practical, hands-on learning. Every course includes 
            substantial project work where we implement real-world applications. While I don't have 
            professional work experience yet, I've completed numerous semester projects that mirror 
            industry scenarios - from building secure chat applications with end-to-end encryption to 
            developing full-stack web platforms with authentication systems.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            I'm now looking to bridge the gap between academic learning and production environments, 
            bringing strong fundamentals and a genuine enthusiasm for learning industry best practices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
