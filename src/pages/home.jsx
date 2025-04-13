import { motion } from "framer-motion";
import coding from '../img/code.png';
import sydon from '../img/sydon.png';
import globe from '../img/globe.png';
import clearance from '../img/clearance.png';
import quiz from '../img/quiz.png';
import todo from '../img/todo.png';
import portfolioImg from '../img/portfolio.png';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import reactImg from '../img/react.png';
import bootstrap from '../img/bootstrap.png';
import node from '../img/node.png';
import express from '../img/express.png';
import php from '../img/php.png';
import vs from '../img/vs.png';
import git from '../img/git.png';
import typescript from '../img/typescript.png';
import figma from '../img/figma.png';

const Home = () => {
  const projects = [
    {
      image: sydon,
      title: 'Sydon',
      description: 'A beautiful homepage built with HTML/CSS for SydonCare.',
      link: 'https://mighty-k.github.io/sydon/'
    },
    {
      image: quiz,
      title: 'Quizme',
      description: 'A dynamic quiz app built in React.',
      link: 'https://ms-quizapp.netlify.app/'
    },
    {
      image: clearance,
      title: 'FYCL Clearance',
      description: 'Streamlined clearance system for Babcock University.',
      link: 'https://fycl.netlify.app/'
    },
    {
      image: todo,
      title: 'Todo List',
      description: 'A simple and elegant todo list built with React.',
      link: 'https://todolistm0001.netlify.app/'
    },
    {
      image: portfolioImg,
      title: 'Portfolio',
      description: 'My personal portfolio built with React.',
      link: 'https://portfolio-mighty.netlify.app/'
    }
  ];

  const skillsLeft = [
    { logo: html, name: "HTML" },
    { logo: css, name: "CSS" },
    { logo: bootstrap, name: "Bootstrap" },
    { logo: js, name: "JavaScript" },
    { logo: reactImg, name: "React" }
  ];
  const skillsRight = [
    { logo: node, name: "Node" },
    { logo: express, name: "Express" },
    { logo: php, name: "PHP" },
    { logo: vs, name: "VS Code" },
    { logo: git, name: "Git" },
    { logo: typescript, name: "TypeScript" },
    { logo: figma, name: "Figma" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-gray-900 bg-opacity-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-white text-2xl font-bold">
            MIGHTY
          </a>
          <div className="space-x-6">
            <a href="#about" className="text-gray-200 hover:text-white transition">
              About
            </a>
            <a href="#skills" className="text-gray-200 hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="text-gray-200 hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-200 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-6xl font-extrabold mb-4"
          >
            Hello, I'm Mighty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-200 text-xl md:text-2xl mb-8"
          >
            Crafting breathtaking digital experiences with smart design and clean code.
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            View My Work
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              I am a passionate web developer with a knack for solving design problems through code.
              My expertise includes building interactive user interfaces and responsive web applications
              that offer seamless experiences.
            </p>
            <p className="text-gray-600">
              I thrive on turning ideas into high‑end digital products with a focus on both aesthetics and functionality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img src={coding} alt="Coding" className="w-80 md:w-96 rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            Skills
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="grid grid-cols-3 gap-6 mb-8 md:mb-0 md:w-1/2">
              {skillsLeft.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex flex-col items-center"
                >
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                  <p className="text-gray-700 font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 md:w-1/2">
              {skillsRight.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + 0.1 * index }}
                  className="flex flex-col items-center"
                >
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                  <p className="text-gray-700 font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            Get In Touch
          </motion.h2>
          <div className="max-w-xl mx-auto">
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Mighty Portfolio. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;