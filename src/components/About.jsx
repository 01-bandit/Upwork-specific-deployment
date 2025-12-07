import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-12">
            About Me
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl p-8 text-left border border-gray-100 dark:border-gray-700"
          >
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                👋 Hi! I'm a passionate Software Engineering student from Islamabad, Pakistan, 
                with a keen interest in full-stack development, AI/ML, and building innovative software solutions.
              </p>
              <p>
                💡 <strong className="text-primary dark:text-blue-400">Honest Background:</strong> I'm currently studying at FAST-NUCES and haven't worked 
                in a production environment yet. My technical skills come from university coursework, semester projects, 
                and personal exploration. I'm eager to learn industry best practices and transition from academic 
                projects to real-world applications.
              </p>
              <p>
                🚀 <strong className="text-primary dark:text-blue-400">What Drives Me:</strong> I love the challenge of solving complex problems through code. 
                Whether it's implementing end-to-end encryption, building interactive web applications, or exploring 
                data structures, I approach each project as an opportunity to learn something new.
              </p>
              <p>
                🎯 <strong className="text-primary dark:text-blue-400">Currently:</strong> Working with React, Node.js, Django, PostgreSQL, and MongoDB through 
                university assignments and side projects. Always exploring new technologies and frameworks to expand my toolkit.
              </p>
            </div>
          </motion.div>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: '🎓', title: 'Education', desc: 'BS Software Engineering' },
              { icon: '💻', title: 'Focus', desc: 'Full-Stack Development' },
              { icon: '🌟', title: 'Goal', desc: 'Industry Excellence' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-primary dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
