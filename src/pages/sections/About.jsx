// components/sections/About.jsx
import { motion } from 'framer-motion'
import { FiAward /*, FiCode, FiUsers*/ } from 'react-icons/fi'

const About = () => {
  const stats = [
    { icon: <FiAward className="text-2xl" />, value: '2+', label: 'Years Experience' },
    // { icon: <FiCode className="text-2xl" />, value: '50+', label: 'Projects Completed' },
    // { icon: <FiUsers className="text-2xl" />, value: '30+', label: 'Happy Clients' },
  ]

  const timeline = [
    {
      year: '2021',
      title: 'Started Coding Journey',
      description: 'Began learning web development fundamentals with HTML, CSS, and JavaScript'
    },
    {
      year: '2022',
      title: 'Frontend Specialization',
      description: 'Mastered React.js and modern frontend development practices'
    },
    {
      year: '2023',
      title: 'Full Stack Development',
      description: 'Expanded skills to include Node.js, Express, and database management'
    },
    {
      year: '2024',
      title: 'Professional Projects',
      description: 'Started working on complex applications for clients and personal projects'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-950-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I am a passionate web developer with expertise in creating modern web applications.
            My journey in tech has been driven by curiosity and a love for solving complex problems.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">
              Who am I?
            </h3>
            <p className="text-gray-400 mb-6">
              I am Mighty Popoola, a web developer specializing in JavaScript technologies.
              I create fast, responsive, and accessible web applications with clean, maintainable code.
            </p>
        

            <div className="grid grid-cols-3   gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-950  rounded-lg p-4 text-center border border-gray-800"
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-700"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16 pb-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-dark-light z-10"></div>
                  
                  <div className="bg-gray-950 rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all">
                    <span className="text-primary font-medium">{item.year}</span>
                    <h4 className="text-xl font-semibold mt-1 mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About