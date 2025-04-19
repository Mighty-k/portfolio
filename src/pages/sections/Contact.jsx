// components/sections/Contact.jsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone,FiGithub,FiLinkedin,FiTwitter } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out - I would love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-dark-light rounded-xl p-8 border border-gray-800 h-full">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Email</h4>
                    <a
                      href="mailto:tiolupopo@gmail.com"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      tiolupopo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+2347042837826"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      +234 704 283 7826
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-gray-300 font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Mighty-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mighty-popoola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/mighty_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-dark-light rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send Me a Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact