// components/sections/Skills.jsx
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool } from 'react-icons/fi'
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaReact, 
    FaNodeJs,
    FaGitAlt,
    FaFigma
  } from 'react-icons/fa';
  import { 
    SiTypescript, 
    SiExpress, 
    SiMongodb,
    SiPostman,
  } from 'react-icons/si';
  import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const skills = {
        frontend: [
          { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
          { name: 'CSS3/Tailwind', level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
          { name: 'JavaScript', level: 85, icon: <FaJs className="text-yellow-400" /> },
          { name: 'React.js', level: 80, icon: <FaReact className="text-blue-400" /> },
          { name: 'TypeScript', level: 75, icon: <SiTypescript className="text-blue-600" /> },
        ],
        backend: [
          { name: 'Node.js', level: 60, icon: <FaNodeJs className="text-green-500" /> },
          { name: 'Express.js', level: 75, icon: <SiExpress className="text-gray-400" /> },
          { name: 'REST APIs', level: 85, icon: <div className="text-purple-500">API</div> },
          { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-600" /> },
        ],
        tools: [
          { name: 'Git/GitHub', level: 85, icon: <FaGitAlt className="text-orange-600" /> },
          { name: 'VS Code', level: 90, icon: <VscVscode className="text-blue-500" /> },
          { name: 'Figma', level: 70, icon: <FaFigma className="text-purple-500" /> },
          { name: 'Postman', level: 60, icon: <SiPostman className="text-orange-400" /> },
        ]
      }

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I have worked with a variety of technologies in the web development world.
            Here are the tools and technologies I am most proficient with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="bg-gray-950-light rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  {category === 'frontend' ? <FiCode /> : 
                   category === 'backend' ? <FiDatabase /> : <FiTool />}
                </div>
                <h3 className="text-xl font-poppins font-semibold capitalize">
                  {category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-1">
                      <span className="mr-2">{skill.icon}</span>
                      <span className="text-gray-300 flex-1">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills