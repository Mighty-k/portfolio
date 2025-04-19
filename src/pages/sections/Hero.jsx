// components/sections/Hero.jsx
import { motion } from 'framer-motion'
import Particles from '../ui/Particles'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaArrowDown } from 'react-icons/fa'
// import me from '/images/me.jpj'
const Hero = () => {
  const socialLinks = [
    {
      icon: <FiGithub className="text-xl" />,
      url: 'https://github.com/Mighty-k',
      name: 'GitHub'
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      url: 'https://linkedin.com/in/mighty-popoola',
      name: 'LinkedIn'
    },
    {
      icon: <FiMail className="text-xl" />,
      url: 'mailto:tiolupopo@gmail.com',
      name: 'Email'
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                Hi, I am <span className="text-primary">Mighty</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-display font-semibold mb-6 text-gray-300">
                Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-lg">
                I build exceptional digital experiences with modern technologies.
                Focused on creating clean, efficient, and user-friendly applications.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium hover:shadow-lg transition-all flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Content */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-dark-light rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src="/images/me.jpg" // Replace with your image
                  alt="Mighty Popoola"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Social Links */}
        <motion.div
          className="fixed left-6 bottom-6 hidden lg:flex flex-col space-y-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-primary transition-colors"
              whileHover={{ y: -5 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
          <div className="w-px h-16 bg-gray-600"></div>
        </motion.div>
        
        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-800 hover:text-primary transition-colors">
            <span className="mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaArrowDown />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero