// components/sections/Skills.jsx
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "VS Code", "Vercel"],
  },
];

const icons = {
  React: "/images/react.webp",
  TypeScript: "/images/typescript.webp",
  "Tailwind CSS": "/images/css.webp",
  Node: "/images/node.webp",
  Git: "/images/git.webp",
  Figma: "/images/figma.webp",
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12" style={{ backgroundColor: "#F5F0EB" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 leading-tight" style={{ color: "#2C2825" }}>
            Tools I use to <span className="text-gradient">create</span>
          </h2>
          <p className="text-base" style={{ color: "#8B8680" }}>
            Frontend-focused with full-stack capabilities.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#7A9E7E" }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{ backgroundColor: "rgba(122, 158, 126, 0.1)", color: "#2C2825" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-label mb-6">Technologies</p>
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(icons).map(([name, src]) => (
              <div
                key={name}
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                <img src={src} alt={name} className="w-10 h-10 object-contain opacity-70" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;