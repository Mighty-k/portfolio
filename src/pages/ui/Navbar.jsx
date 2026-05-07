// components/ui/Navbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "" : ""
      }`}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div
        className={`transition-all duration-300 ${scrolled ? "px-6 py-1.5 mt-3 " : "px-0 py-0"}`}
      >
        <motion.div
          animate={{
            borderRadius: scrolled ? "9999px" : "0px",
            backgroundColor: scrolled
              ? "rgba(253, 248, 243, 0.85)"
              : "transparent",
            border: scrolled ? "1px solid rgba(107, 142, 111, 0.2)" : "none",
            boxShadow: scrolled ? "0 8px 32px rgba(45, 45, 45, 0.12)" : "none",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="container mx-auto max-w-6xl"
        >
          <div
            className={`px-6 ${scrolled ? "py-2" : "py-4"} flex justify-between items-center`}
          >
            <motion.a
              href="#"
              className="text-2xl font-serif font-bold"
              style={{ color: "#2d2d2d" }}
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
                  className="relative group font-medium transition-colors"
                  style={{ color: "#2d2d2d" }}
                  whileHover={{ color: "#6b8e6f" }}
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
                    style={{ backgroundColor: "#6b8e6f" }}
                  />
                </motion.a>
              ))}

              {/* Social Icons */}
              <div className="flex gap-4 ml-6 border-l border-gray-300 border-opacity-30 pl-6">
                <motion.a
                  href="https://github.com/Mighty-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "#a0a0a0" }}
                  whileHover={{ color: "#6b8e6f", y: -2 }}
                >
                  <FaGithub className="text-lg" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mighty-popoola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "#a0a0a0" }}
                  whileHover={{ color: "#6b8e6f", y: -2 }}
                >
                  <FaLinkedin className="text-lg" />
                </motion.a>
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className={`btn-primary ${scrolled ? "rounded-full" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 12,
                  mass: 0.8,
                }}
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 focus:outline-none"
                style={{ color: "#2d2d2d" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-6 py-6 border-t"
          style={{
            backgroundColor: "#fdf8f3",
            borderColor: "#a0a0a0",
            borderOpacity: 0.2,
          }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="font-medium py-2 transition-colors"
                style={{ color: "#2d2d2d" }}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 8, color: "#6b8e6f" }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Mobile Social Links */}
            <div
              className="pt-4 border-t flex gap-4"
              style={{ borderColor: "#a0a0a0", borderOpacity: 0.2 }}
            >
              <motion.a
                href="https://github.com/Mighty-k"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a0a0a0" }}
                whileHover={{ color: "#6b8e6f" }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mighty-popoola"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a0a0a0" }}
                whileHover={{ color: "#6b8e6f" }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="mailto:tiolupopo@gmail.com"
                style={{ color: "#a0a0a0" }}
                whileHover={{ color: "#6b8e6f" }}
              >
                <HiOutlineMail className="text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
