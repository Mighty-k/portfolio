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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.8, 0.12, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ backgroundColor: "#FDFAF6" }}
    >
      {/* Optimized Background - Static gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(122, 158, 126, 0.06) 0%, transparent 70%)",
            willChange: "transform",
          }}
        />
        <div
          className="absolute -bottom-1/3 -left-1/6 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(196, 120, 92, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <motion.p variants={itemVariants} className="section-label mb-4">
              Frontend Engineer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-serif font-semibold leading-[0.95] tracking-tight mb-6"
              style={{ color: "#2C2825" }}
            >
              Crafting
              <br />
              <span className="text-gradient">Digital</span>
              <br />
              Experiences
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "#8B8680" }}
            >
              I build high-performance web applications with meticulous
              attention to detail, turning complex problems into elegant,
              intuitive interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                className="btn-primary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(139, 134, 128, 0.1)",
                    color: "#8B8680",
                  }}
                  whileHover={{
                    backgroundColor: "#7A9E7E",
                    color: "#FDFAF6",
                    y: -3,
                  }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Static floating shapes */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl"
                style={{ backgroundColor: "#7A9E7E", opacity: 0.1 }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full"
                style={{ backgroundColor: "#C4785C", opacity: 0.08 }}
              />

              {/* Avatar */}
              <motion.div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img
                  src="/images/me.webp"
                  alt="Mighty Popoola"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div
                  className="absolute inset-4 rounded-full border-2 border-dashed"
                  style={{ borderColor: "rgba(122, 158, 126, 0.3)" }}
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 px-4 py-2.5 rounded-full glass shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span
                  className="text-xs font-medium"
                  style={{ color: "#7A9E7E" }}
                >
                  Available
                </span>
                <span
                  className="ml-2 w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: "#7A9E7E" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: "#8B8680" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FiArrowDown className="text-base" style={{ color: "#8B8680" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
