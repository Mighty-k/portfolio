// components/sections/About.jsx
import { motion } from "framer-motion";
import { FiAward, FiCode, FiLayout } from "react-icons/fi";

const About = () => {
  const stats = [
    {
      icon: <FiAward className="text-3xl" />,
      value: "2+",
      label: "Years Experience",
    },
    {
      icon: <FiCode className="text-3xl" />,
      value: "20+",
      label: "Projects Built",
    },
    {
      icon: <FiLayout className="text-3xl" />,
      value: "100%",
      label: "Focus on Quality",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Started Coding Journey",
      description:
        "Began learning web development fundamentals with HTML, CSS, and JavaScript",
    },
    {
      year: "2022",
      title: "Frontend Specialization",
      description:
        "Mastered React.js and modern frontend development practices",
    },
    {
      year: "2023",
      title: "Full Stack Development",
      description:
        "Expanded skills to include Node.js, Express, and database management",
    },
    {
      year: "2024",
      title: "Professional Projects",
      description:
        "Started working on complex applications with focus on user experience",
    },
    {
      year: "2025",
      title: "Scaling & Excellence",
      description:
        "Building scalable systems with emphasis on performance and maintainability",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
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
              About <span style={{ color: "#6b8e6f" }}>Me</span>
            </h2>
            {/* <div className="accent-line mb-3" /> */}
          </div>
          <p className="text-xl max-w-3xl" style={{ color: "#a0a0a0" }}>
            Frontend engineer with a passion for building scalable,
            high-performance web applications. I specialize in translating
            complex problems into clean, intuitive user experiences using modern
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-xl transition-shadow"
            >
              <motion.div
                className="flex justify-center mb-4"
                style={{ color: "#6b8e6f" }}
                whileHover={{ y: -8 }}
              >
                {stat.icon}
              </motion.div>
              <h3
                className="text-4xl font-serif font-bold mb-2"
                style={{ color: "#2d2d2d" }}
              >
                {stat.value}
              </h3>
              <p className="font-medium" style={{ color: "#a0a0a0" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-20"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: Timeline */}
            <div className="flex-1 w-full">
              <div className="mb-12">
                <p
                  className="text-sm font-medium tracking-[0.28em] uppercase mb-3"
                  style={{ color: "#6b8e6f" }}
                >
                  Professional Journey
                </p>
                <h3
                  className="text-4xl md:text-5xl font-serif font-bold"
                  style={{ color: "#2d2d2d" }}
                >
                  My <span style={{ color: "#6b8e6f" }}>Path</span>
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative grid gap-6 md:gap-8"
              >
                <div
                  className="absolute left-4 md:left-0 top-0 bottom-0 w-px"
                  style={{ backgroundColor: "#6b8e6f", opacity: 0.2 }}
                />

                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-12 md:pl-8"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-[#6b8e6f]/30 bg-[#fdf8f3] px-3 py-1.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#6b8e6f" }}
                      />
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase"
                        style={{ color: "#6b8e6f" }}
                      >
                        {item.year}
                      </span>
                    </div>

                    <div
                      className="absolute left-0 top-4 w-1.5 h-1.5 rounded-full border border-[#6b8e6f] bg-[#fdf8f3]"
                      style={{
                        backgroundColor: "#fdf8f3",
                        borderColor: "#6b8e6f",
                      }}
                    />

                    <h4
                      className="text-lg md:text-xl font-serif font-bold mb-2"
                      style={{ color: "#2d2d2d" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="leading-relaxed text-sm md:text-base"
                      style={{ color: "#a0a0a0" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual Accent */}
            <motion.div
              className="hidden lg:flex flex-1 justify-end items-center relative h-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-72 h-full min-h-96">
                {/* Decorative background shapes */}
                <div className="absolute inset-0">
                  {/* Large gradient bar */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-80 w-1 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(107,142,111,0.4), rgba(107,142,111,0.05), transparent)",
                    }}
                  />
                  {/* Accent rectangles */}
                  <motion.div
                    className="absolute right-12 top-0 rounded-lg"
                    style={{
                      width: 120,
                      height: 24,
                      backgroundColor: "#6b8e6f",
                      opacity: 0.12,
                    }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
                  <motion.div
                    className="absolute right-0 top-40 rounded-lg"
                    style={{
                      width: 90,
                      height: 20,
                      backgroundColor: "#6b8e6f",
                      opacity: 0.1,
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute right-16 bottom-20 rounded-lg"
                    style={{
                      width: 140,
                      height: 28,
                      backgroundColor: "#6b8e6f",
                      opacity: 0.08,
                    }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, delay: 1 }}
                  />

                  {/* Floating orb */}
                  <motion.div
                    className="absolute right-6 bottom-0 rounded-full blur-2xl"
                    style={{
                      width: 200,
                      height: 200,
                      backgroundColor: "#6b8e6f",
                      opacity: 0.06,
                    }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.06, 0.1, 0.06],
                    }}
                    transition={{ repeat: Infinity, duration: 6 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
