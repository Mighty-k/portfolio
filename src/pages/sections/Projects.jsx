// components/sections/Projects.jsx
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Mighty Estates",
    description: "Full-featured real estate platform connecting buyers, sellers, and agents across Nigeria.",
    tags: ["nextjs", "tailwind", "typescript"],
    image: "/images/mighty-estates.webp",
    github: "https://github.com/Mighty-k/mighty-estates",
    live: "https://mighty-estates.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "BookHaven",
    description: "Full-stack e-commerce bookstore with React, Express, and MongoDB.",
    tags: ["react", "tailwind", "typescript", "express", "mongodb"],
    image: "/images/bookhaven.webp",
    github: "https://github.com/Mighty-k/BookHaven",
    live: "https://bookhaven-mocha.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Movie-Explorer",
    description: "Movie discovery app powered by TMDb API with search and filtering.",
    tags: ["react", "tailwind", "typescript"],
    image: "/images/movies.webp",
    github: "https://github.com/Mighty-k/movie-explorer",
    live: "https://movie-explorer-psi.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio",
    description: "This portfolio with modern animations and responsive design.",
    tags: ["react", "tailwind"],
    image: "/images/portfolio.webp",
    github: "https://github.com/Mighty-k/portfolio",
    live: "https://mighty-dev.netlify.app",
    featured: false,
  },
  {
    id: 5,
    title: "Notes App",
    description: "Lightweight notes app with authentication and clean interface.",
    tags: ["HTML", "css", "express", "mongodb"],
    image: "/images/notes.webp",
    github: "https://github.com/Mighty-k/notesApp",
    live: "https://notes-lazydev.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "QuizMe App",
    description: "Interactive quiz app with multiple categories and scoring.",
    tags: ["react"],
    image: "/images/quiz.webp",
    github: "https://github.com/Mighty-k/quiz-app",
    live: "https://ms-quizapp.netlify.app/",
    featured: false,
  },
  {
    id: 7,
    title: "FYCL Clearance",
    description: "University clearance system with automated workflows.",
    tags: ["react", "express", "mongodb"],
    image: "/images/clearance.webp",
    github: "https://github.com/Mighty-k/clearance-system",
    live: "https://fycl.netlify.app",
    featured: false,
  },
];

const filters = ["all", "react", "nextjs", "typescript", "express", "mongodb", "tailwind", "html"];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    viewport={{ once: true }}
    className="card overflow-hidden"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {project.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "rgba(122, 158, 126, 0.1)", color: "#7A9E7E" }}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-serif font-semibold mb-1" style={{ color: "#2C2825" }}>{project.title}</h3>
      <p className="text-sm line-clamp-2 mb-3" style={{ color: "#8B8680" }}>{project.description}</p>
      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium flex items-center gap-1 transition-colors" style={{ color: "#8B8680" }}>
            <FiGithub className="text-sm" /> Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-medium flex items-center gap-1 transition-colors" style={{ color: "#8B8680" }}>
            <FiExternalLink className="text-sm" /> Live
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl"
    style={{ backgroundColor: "#E8DFD5" }}
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-serif font-semibold text-white mb-1">{project.title}</h3>
      <p className="text-sm text-white/80 line-clamp-1">{project.description}</p>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    return activeFilter === "all" ? projects : projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const regular = useMemo(() => filtered.filter((p) => !p.featured), [filtered]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-3">Selected Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold" style={{ color: "#2C2825" }}>
              Projects that <span className="text-gradient">tell stories</span>
            </h2>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {featured.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-sm font-medium capitalize transition-all"
              style={
                activeFilter === filter
                  ? { backgroundColor: "#2C2825", color: "#FDFAF6" }
                  : { border: "1px solid #8B8680", color: "#8B8680", backgroundColor: "transparent" }
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regular.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Mighty-k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "#2C2825" }}
          >
            View all on GitHub <FiArrowRight className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;