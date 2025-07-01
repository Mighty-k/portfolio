// components/sections/Projects.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
     {
      id: 1,
      title: 'Movie-Explorer',
      description: 'A sleek movie discovery app built with React, TypeScript, and Tailwind CSS, powered by the TMDb API. Users can search for movies, view detailed information such as ratings, cast, trailers, and genres, and explore trending or popular titles',
      tags:  ['react', 'tailwind', 'typescript'],
      image: '/images/movies.png',
      github: 'https://github.com/Mighty-k/movie-explorer',
      live: 'https://movie-explorer-psi.vercel.app/'
    },
    {
      id: 2,
      title: 'QuizMe App',
      description: 'Interactive quiz application with multiple categories and score tracking',
      tags: ['react'],
      image: '/images/quiz.png',
      github: 'https://github.com/Mighty-k/quiz-app',
      live: 'https://ms-quizapp.netlify.app/'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design',
      tags: ['react', 'tailwind'],
      image: '/images/portfolio.png',
      github: 'https://github.com/Mighty-k/portfolio',
      live: 'https://mighty-dev.netlify.app'
    },
   
    {
      id: 4,
      title: 'Notes App',
      description: 'A  lightweight notes application with user authentication and basic notes app functionalities ',
      tags: ['HTML', 'css', 'express','mongodb'],
      image: '/images/notes.png',
      github: 'https://github.com/Mighty-k/notesApp',
      live: 'https://notes-lazydev.vercel.app/'
    },
      {
      id: 5,
      title: 'FYCL Clearance System',
      description: 'A comprehensive clearance system for university graduates with automated workflows',
      tags: ['react', 'express', 'mongodb'],
      image: '/images/clearance.png',
      github: 'https://github.com/Mighty-k/clearance-system',
      live: 'https://fycl.netlify.app'
    },

  ]

  const filters = ['all', 'react', 'express', 'HTML', 'mongodb', 'tailwind', 'typescript']

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-gray-950-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            or to explore new technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent max-sm:opacity-100  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub className="text-xl" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-950-light rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects