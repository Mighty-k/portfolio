// components/ui/Footer.jsx
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "#a0a0a0",
        borderOpacity: 0.2,
        backgroundColor: "#fdf8f3",
      }}
    >
      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-lg flex items-center justify-center shadow-lg z-40"
          style={{ backgroundColor: "#6b8e6f", color: "#fdf8f3" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp className="text-2xl" />
        </motion.button>
      )}

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="text-2xl font-serif font-bold"
              style={{ color: "#2d2d2d" }}
            >
              Mighty
            </a>
            <p className="mt-2 leading-relaxed" style={{ color: "#a0a0a0" }}>
              Frontend engineer crafting exceptional digital experiences with
              clean code and thoughtful design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-serif font-bold mb-4"
              style={{ color: "#2d2d2d" }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block transition-colors"
                  style={{ color: "#a0a0a0" }}
                  onMouseEnter={(e) => (e.target.style.color = "#6b8e6f")}
                  onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-serif font-bold mb-4"
              style={{ color: "#2d2d2d" }}
            >
              Follow
            </h4>
            <div className="flex gap-4">
              {[
                {
                  icon: <FiGithub className="text-xl" />,
                  href: "https://github.com/Mighty-k",
                },
                {
                  icon: <FiLinkedin className="text-xl" />,
                  href: "https://linkedin.com/in/mighty-popoola",
                },
                {
                  icon: <FiTwitter className="text-xl" />,
                  href: "https://twitter.com/mighty_dev",
                },
                {
                  icon: <FiMail className="text-xl" />,
                  href: "mailto:tiolupopo@gmail.com",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="h-px"
          style={{ backgroundColor: "#a0a0a0", opacity: 0.2 }}
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p style={{ color: "#a0a0a0" }} className="text-sm">
            © {new Date().getFullYear()} Mighty Popoola. All rights reserved.
          </p>
          <p style={{ color: "#a0a0a0" }} className="text-sm mt-2">
            Built with React, Tailwind CSS, Framer Motion and IBM Plex Serif.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
