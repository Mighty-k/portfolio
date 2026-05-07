// components/sections/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
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
              Get In <span style={{ color: "#6b8e6f" }}>Touch</span>
            </h2>
            {/* <div className="accent-line mb-3" /> */}
          </div>
          <p className="text-xl max-w-3xl" style={{ color: "#a0a0a0" }}>
            I'm always open to new projects, collaborations, and conversations.
            Feel free to reach out via email or social channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
              >
                <FiMail className="text-2xl" />
              </div>
              <div>
                <h4
                  className="font-serif font-bold mb-1"
                  style={{ color: "#2d2d2d" }}
                >
                  Email
                </h4>
                <a
                  href="mailto:tiolupopo@gmail.com"
                  style={{ color: "#6b8e6f" }}
                  className="hover:underline text-lg font-medium"
                >
                  tiolupopo@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
              >
                <FiPhone className="text-2xl" />
              </div>
              <div>
                <h4
                  className="font-serif font-bold mb-1"
                  style={{ color: "#2d2d2d" }}
                >
                  Phone
                </h4>
                <a
                  href="tel:+2347042837826"
                  style={{ color: "#6b8e6f" }}
                  className="hover:underline text-lg font-medium"
                >
                  +234 704 283 7826
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
              >
                <FiMapPin className="text-2xl" />
              </div>
              <div>
                <h4
                  className="font-serif font-bold mb-1"
                  style={{ color: "#2d2d2d" }}
                >
                  Location
                </h4>
                <p style={{ color: "#a0a0a0" }} className="text-lg font-medium">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="pt-8 border-t"
              style={{ borderColor: "#a0a0a0", borderOpacity: 0.2 }}
            >
              <h4
                className="font-serif font-bold mb-4"
                style={{ color: "#2d2d2d" }}
              >
                Follow Me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Mighty-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl transition-colors"
                  style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
                  whileHover={{ y: -4, scale: 1.1 }}
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mighty-popoola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xl transition-colors"
                  style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
                  whileHover={{ y: -4, scale: 1.1 }}
                >
                  <FiLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 card p-8"
          >
            <h3
              className="text-2xl font-serif font-bold mb-8"
              style={{ color: "#2d2d2d" }}
            >
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#2d2d2d" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none"
                    style={{
                      backgroundColor: "#fdf8f3",
                      borderColor: "#a0a0a0",
                      borderOpacity: 0.3,
                    }}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#2d2d2d" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none"
                    style={{
                      backgroundColor: "#fdf8f3",
                      borderColor: "#a0a0a0",
                      borderOpacity: 0.3,
                    }}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#2d2d2d" }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none resize-none"
                  style={{
                    backgroundColor: "#fdf8f3",
                    borderColor: "#a0a0a0",
                    borderOpacity: 0.3,
                  }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <p className="text-sm text-center" style={{ color: "#a0a0a0" }}>
                I'll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
