// components/sections/Hero.jsx
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FiGithub className="text-2xl" />,
      url: "https://github.com/Mighty-k",
      name: "GitHub",
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      url: "https://linkedin.com/in/mighty-popoola",
      name: "LinkedIn",
    },
    {
      icon: <FiMail className="text-2xl" />,
      url: "mailto:tiolupopo@gmail.com",
      name: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "#fdf8f3" }}
    >
      {/* Organic blob background (decorative) */}
      <div className="absolute top-10 right-20 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          width="300"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6b8e6f"
            d="M50,100 Q0,150 50,200 T150,200 Q200,150 150,100 T150,0 Q100,0 50,0 T50,100 Z"
          />
        </svg>
      </div>

      {/* Wavy separator (subtle) */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity="0.04"
      >
        <path
          d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z"
          fill="#6b8e6f"
        />
      </svg>

      <div className="container mx-auto px-6 z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p
                className="text-sm font-medium tracking-widest uppercase mb-4"
                style={{ color: "#6b8e6f" }}
              >
                Frontend Engineer
              </p>
              <h1
                className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                style={{ color: "#2d2d2d" }}
              >
                Hi, I&apos;m <span style={{ color: "#6b8e6f" }}>Mighty.</span>
              </h1>
              <p
                className="text-xl md:text-2xl font-light mb-8 max-w-lg leading-relaxed"
                style={{ color: "#a0a0a0" }}
              >
                I build high-performance, scalable web applications with modern
                architecture, thoughtful design, and seamless user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <motion.a
                  href="#projects"
                  className="btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: "#a0a0a0" }}
                    whileHover={{ color: "#6b8e6f", y: -3 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Organic Illustration */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-96 h-96">
              {/* Glowing orb background */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: "#6b8e6f" }}
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />

              {/* Geometric accent */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#6b8e6f"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#6b8e6f"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <path
                  d="M 100 20 Q 170 100 100 180 Q 30 100 100 20"
                  fill="none"
                  stroke="#6b8e6f"
                  strokeWidth="1"
                  opacity="0.15"
                />
              </svg>

              {/* Profile Image */}
              {/* Uncomment when ready to add profile image */}
              {/* <img
                src="/images/me.png"
                alt="Mighty Popoola"
                className="w-full h-full object-cover rounded-full shadow-xl"
              /> */}

              {/* Placeholder for now */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-6xl font-serif font-bold"
                style={{ backgroundColor: "#e8e3d9", color: "#6b8e6f" }}
              >
                M
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2"
            style={{ color: "#a0a0a0" }}
          >
            <span className="text-sm font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowDown className="text-xl" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
