// components/ui/Navbar.jsx
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[rgba(253,250,246,0.9)] backdrop-blur-md shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif font-semibold" style={{ color: "#2C2825" }}>
            Mighty<span style={{ color: "#7A9E7E" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-[#7A9E7E]"
                style={{ color: "#2C2825" }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4 pl-5" style={{ borderLeft: "1px solid rgba(139, 134, 128, 0.2)" }}>
              <a href="https://github.com/Mighty-k" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#7A9E7E]" style={{ color: "#8B8680" }}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/mighty-popoola" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#7A9E7E]" style={{ color: "#8B8680" }}>
                <FaLinkedin />
              </a>
              <a href="#contact" className="btn-primary ml-2">
                <span>Let's Talk</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: "#2C2825" }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgba(253,250,246,0.98)] backdrop-blur-md border-t" style={{ borderColor: "rgba(139, 134, 128, 0.1)" }}>
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-xl font-serif"
                style={{ color: "#2C2825" }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid rgba(139, 134, 128, 0.2)" }}>
              <a href="https://github.com/Mighty-k" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(139, 134, 128, 0.1)", color: "#8B8680" }}>
                <FaGithub className="text-lg" />
              </a>
              <a href="https://linkedin.com/in/mighty-popoola" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(139, 134, 128, 0.1)", color: "#8B8680" }}>
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;