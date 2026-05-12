// components/ui/Footer.jsx
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { icon: <FiGithub className="text-lg" />, href: "https://github.com/Mighty-k", label: "GitHub" },
    { icon: <FiLinkedin className="text-lg" />, href: "https://linkedin.com/in/mighty-popoola", label: "LinkedIn" },
    { icon: <FiMail className="text-lg" />, href: "mailto:tiolupopo@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#2C2825", color: "#E8DFD5" }}>
      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: "#7A9E7E", color: "#FDFAF6" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#7A9E7E" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#7A9E7E" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#7A9E7E" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand - 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <a href="#" className="inline-block mb-6">
              <span className="text-3xl font-serif font-semibold" style={{ color: "#FDFAF6" }}>
                Mighty
              </span>
              <span className="text-3xl" style={{ color: "#7A9E7E" }}>.</span>
            </a>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#8B8680" }}>
              Frontend engineer based in Lagos, Nigeria. Building performant, beautiful web applications
              with attention to every detail.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: "rgba(139, 134, 128, 0.15)", color: "#8B8680" }}
                  whileHover={{ backgroundColor: "#7A9E7E", color: "#FDFAF6", y: -3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: "#7A9E7E" }}>
              Navigation
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm transition-colors"
                  style={{ color: "#8B8680" }}
                  onMouseEnter={(e) => (e.target.style.color = "#FDFAF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#8B8680")}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info - 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-6" style={{ color: "#7A9E7E" }}>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <p className="text-sm" style={{ color: "#8B8680" }}>
                tiolupopo@gmail.com
              </p>
              <p className="text-sm" style={{ color: "#8B8680" }}>
                Lagos, Nigeria
              </p>
              <p className="text-sm font-medium mt-6" style={{ color: "#7A9E7E" }}>
                Available for freelance projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ backgroundColor: "rgba(139, 134, 128, 0.2)" }} />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm" style={{ color: "#8B8680" }}>
            © {new Date().getFullYear()} Mighty Popoola. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#8B8680" }}>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;