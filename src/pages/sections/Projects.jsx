// components/sections/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Mighty Estates",
      description:
        "Mighty Estates is a full-featured real estate platform connecting buyers, renters, sellers, and agents across Nigeria. Built with Next.js and TypeScript, it delivers a seamless property search experience with advanced filtering by city, property type, and price range.",
      tags: ["nextjs", "tailwind", "typescript"],
      image: "/images/mighty-estates.webp",
      github: "https://github.com/Mighty-k/mighty-estates",
      live: "https://mighty-estates.vercel.app/",
    },
    {
      id: 2,
      title: "BookHaven",
      description:
        "BookHaven is a full-stack e-commerce platform for books that lets users browse, search, and purchase books online. It combines a modern React frontend with an Express backend and MongoDB database to deliver a complete bookstore experience. Users can explore a wide range of books, view detailed information, and manage their shopping cart with ease.",
      tags: ["react", "tailwind", "typescript", "express", "mongodb"],
      image: "/images/bookhaven.webp",
      github: "https://github.com/Mighty-k/BookHaven",
      live: "https://bookhaven-mocha.vercel.app/",
    },
    {
      id: 3,
      title: "Movie-Explorer",
      description:
        "A sleek movie discovery app built with React, TypeScript, and Tailwind CSS, powered by the TMDb API. Users can search for movies, view detailed information such as ratings, cast, trailers, and genres, and explore trending or popular titles",
      tags: ["react", "tailwind", "typescript"],
      image: "/images/movies.webp",
      github: "https://github.com/Mighty-k/movie-explorer",
      live: "https://movie-explorer-psi.vercel.app/",
    },

    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Modern portfolio website with animations and responsive design",
      tags: ["react", "tailwind"],
      image: "/images/portfolio.webp",
      github: "https://github.com/Mighty-k/portfolio",
      live: "https://mighty-dev.netlify.app",
    },

    {
      id: 5,
      title: "Notes App",
      description:
        "A lightweight notes application with user authentication and basic notes app functionalities ",
      tags: ["HTML", "css", "express", "mongodb"],
      image: "/images/notes.webp",
      github: "https://github.com/Mighty-k/notesApp",
      live: "https://notes-lazydev.vercel.app/",
    },
    {
      id: 6,
      title: "QuizMe App",
      description:
        "Interactive quiz application with multiple categories and score tracking",
      tags: ["react"],
      image: "/images/quiz.webp",
      github: "https://github.com/Mighty-k/quiz-app",
      live: "https://ms-quizapp.netlify.app/",
    },
    {
      id: 7,
      title: "FYCL Clearance System",
      description:
        "A comprehensive clearance system for university graduates with automated workflows",
      tags: ["react", "express", "mongodb"],
      image: "/images/clearance.webp",
      github: "https://github.com/Mighty-k/clearance-system",
      live: "https://fycl.netlify.app",
    },
  ];

  const filters = [
    "all",
    "react",
    "express",
    "HTML",
    "mongodb",
    "tailwind",
    "typescript",
    "nextjs",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section
      id="projects"
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
              My <span style={{ color: "#6b8e6f" }}>Projects</span>
            </h2>
            {/* <div className="accent-line mb-3" /> */}
          </div>
          <p className="text-xl max-w-3xl" style={{ color: "#a0a0a0" }}>
            A curated selection of work showcasing web development expertise,
            from full-stack e-commerce platforms to real-time interactive
            applications. Each project demonstrates attention to performance,
            user experience, and modern development practices.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-sm font-medium capitalize transition-all"
              style={
                activeFilter === filter
                  ? { backgroundColor: "#6b8e6f", color: "#fdf8f3" }
                  : {
                      border: "1px solid #a0a0a0",
                      color: "#2d2d2d",
                      backgroundColor: "transparent",
                    }
              }
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-100px" }}
              className="card overflow-hidden group h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-56 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(45,45,45,0)" }}
                  whileHover={{ backgroundColor: "rgba(45,45,45,0.15)" }}
                  transition={{ duration: 0.3 }}
                />
                {/* Accent bar on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 w-1 h-0"
                  style={{ backgroundColor: "#6b8e6f" }}
                  whileHover={{ height: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3
                  className="text-xl font-serif font-bold mb-2"
                  style={{ color: "#2d2d2d" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm mb-4 flex-1" style={{ color: "#a0a0a0" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ color: "#a0a0a0" }}
                    >
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* CTA Links */}
                <div
                  className="flex gap-3 pt-4 border-t"
                  style={{ borderColor: "#a0a0a0", borderOpacity: 0.2 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium flex-1 justify-center py-2 transition-all"
                      style={{ color: "#6b8e6f" }}
                      whileHover={{ y: -2 }}
                    >
                      <FiGithub className="text-lg" />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium flex-1 justify-center py-2 transition-all"
                      style={{ color: "#6b8e6f" }}
                      whileHover={{ y: -2 }}
                    >
                      <FiExternalLink className="text-lg" />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
