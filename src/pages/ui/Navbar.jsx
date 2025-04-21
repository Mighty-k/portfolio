// components/ui/Navbar.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? ' backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-display text-blue-200 font-bold bg-gradient-to-r from-primary to-accent bg-clip-text "
          whileHover={{ scale: 1.05 }}
        >
          Mighty
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className=" text-blue-200 hover:text-white transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <div className="flex space-x-4 ml-6">
            <a href="https://github.com/Mighty-k" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-white text-xl transition-colors" />
            </a>
            <a href="https://linkedin.com/in/mighty-popoola" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-white text-xl transition-colors" />
            </a>
          </div>
          <motion.a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-950-light/95 backdrop-blur-md px-6 py-4"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/Mighty-k" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-400 hover:text-white text-xl transition-colors" />
              </a>
              <a href="https://linkedin.com/in/mighty-popoola" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-white text-xl transition-colors" />
              </a>
              <a href="mailto:tiolupopo@gmail.com">
                <HiOutlineMail className="text-gray-400 hover:text-white text-xl transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar