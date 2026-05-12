// components/sections/About.jsx
import { FiCode, FiHeart, FiLayers, FiArrowRight } from "react-icons/fi";

const About = () => {
  const highlights = [
    { icon: <FiCode className="text-xl" />, label: "Frontend Focus", desc: "React, TypeScript, Modern CSS" },
    { icon: <FiHeart className="text-xl" />, label: "User-Centric", desc: "Clean, intuitive interfaces" },
    { icon: <FiLayers className="text-xl" />, label: "Quality Code", desc: "Maintainable & scalable" },
  ];

  const whatIDo = [
    {
      title: "Build High-Performance Web Apps",
      desc: "I create fast, responsive applications with React and Next.js, optimized for both user experience and search engines."
    },
    {
      title: "Design Systems & Components",
      desc: "I develop reusable component libraries and design systems that ensure consistency across projects."
    },
    {
      title: "Collaborate & Iterate",
      desc: "I work closely with designers and backend developers to deliver cohesive, production-ready products."
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-5 leading-tight" style={{ color: "#2C2825" }}>
            A frontend engineer who cares about the <span className="text-gradient">details</span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: "#8B8680" }}>
            I'm Mighty Popoola, a frontend engineer based in Lagos, Nigeria. I specialize in building
            high-performance web applications that combine technical excellence with beautiful design.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card p-6"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(122, 158, 126, 0.1)", color: "#7A9E7E" }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold mb-1" style={{ color: "#2C2825" }}>
                {item.label}
              </h3>
              <p className="text-sm" style={{ color: "#8B8680" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Stats */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="section-label mb-5">By The Numbers</p>
              <div className="space-y-6">
                <div>
                  <span className="text-5xl md:text-6xl font-serif font-semibold text-gradient">2+</span>
                  <p className="text-sm mt-1" style={{ color: "#8B8680" }}>Years of Experience</p>
                </div>
                <div>
                  <span className="text-5xl md:text-6xl font-serif font-semibold text-gradient">20+</span>
                  <p className="text-sm mt-1" style={{ color: "#8B8680" }}>Projects Completed</p>
                </div>
                <div>
                  <span className="text-5xl md:text-6xl font-serif font-semibold text-gradient">100%</span>
                  <p className="text-sm mt-1" style={{ color: "#8B8680" }}>Passion for Quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - What I Do */}
          <div className="lg:col-span-8">
            <p className="section-label mb-6">What I Do</p>
            <div className="space-y-8">
              {whatIDo.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full" style={{ backgroundColor: "#7A9E7E" }} />
                  {index < whatIDo.length - 1 && (
                    <div className="absolute left-[5px] top-5 bottom-0 w-px" style={{ backgroundColor: "rgba(122, 158, 126, 0.2)" }} />
                  )}
                  <h4 className="text-lg font-serif font-semibold mb-2" style={{ color: "#2C2825" }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#8B8680" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 group"
            >
              <span className="text-sm font-medium" style={{ color: "#7A9E7E" }}>Let's work together</span>
              <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors group-hover:bg-[#7A9E7E] group-hover:text-white" style={{ backgroundColor: "rgba(122, 158, 126, 0.1)", color: "#7A9E7E" }}>
                <FiArrowRight className="text-xs" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;