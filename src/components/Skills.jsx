import { motion } from 'framer-motion'

function Skills() {
  // Component data: Array of objects containing skill information
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Django', 'Express.js', 'Python'],
      icon: '⚙️'
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
      icon: '🗄️'
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C/C++'],
      icon: '💻'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git/GitHub', 'MERN Stack', 'REST APIs', 'Data Analysis'],
      icon: '🔧'
    },
    {
      title: 'Concepts & Practices',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'Web Security'],
      icon: '📚'
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white text-center mb-4">
            Technical Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Skills acquired through university coursework, assignments, and semester projects at FAST-NUCES
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map function: Iterates over array and returns JSX for each item */}
          {skillCategories.map((category, index) => (
            // Key prop: Unique identifier for React to track list items efficiently
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-primary to-secondary dark:from-blue-600 dark:to-blue-400 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="text-white/90 flex items-center"
                  >
                    <span className="mr-2">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
