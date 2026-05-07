// components/sections/Skills.jsx
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-2xl" /> },
      { name: "CSS3/Tailwind", icon: <FaCss3Alt className="text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-2xl" /> },
      { name: "React.js", icon: <FaReact className="text-2xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-2xl" /> },
      { name: "REST APIs", icon: <div className="text-2xl">API</div> },
      { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
    ],
    tools: [
      { name: "Git/GitHub", icon: <FaGitAlt className="text-2xl" /> },
      { name: "VS Code", icon: <VscVscode className="text-2xl" /> },
      { name: "Figma", icon: <FaFigma className="text-2xl" /> },
      { name: "Postman", icon: <SiPostman className="text-2xl" /> },
    ],
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ backgroundColor: "#fdf8f3" }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-end gap-4 mb-6">
            <h2
              className="text-5xl md:text-6xl font-serif font-bold"
              style={{ color: "#2d2d2d" }}
            >
              My <span style={{ color: "#6b8e6f" }}>Skills</span>
            </h2>
            {/* <div className="accent-line mb-3" /> */}
          </div>
          <p className="text-xl max-w-3xl" style={{ color: "#a0a0a0" }}>
            Proficient across modern web technologies. I bring expertise in
            frontend frameworks, backend systems, and development tools to build
            scalable, maintainable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-2xl"
                  style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
                >
                  {category === "frontend" ? (
                    <FiCode />
                  ) : category === "backend" ? (
                    <FiDatabase />
                  ) : (
                    <FiTool />
                  )}
                </div>
                <h3
                  className="text-2xl font-serif font-bold capitalize"
                  style={{ color: "#2d2d2d" }}
                >
                  {category}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/3 transition-colors group cursor-default"
                  >
                    <div
                      style={{ color: "#6b8e6f" }}
                      className="group-hover:scale-110 transition-transform"
                    >
                      {skill.icon}
                    </div>
                    <span className="font-medium" style={{ color: "#2d2d2d" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
