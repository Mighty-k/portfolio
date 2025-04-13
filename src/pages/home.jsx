import { useState } from 'react';
import { motion } from 'framer-motion';
import './home.css';

// Import all images
import coding from '../img/code.png';
import sydon from '../img/sydon.png';
import globe from '../img/globe.png';
import clearance from '../img/clearance.png';
import quiz from '../img/quiz.png';
import todo from '../img/todo.png';
import portfolio from '../img/portfolio.png';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import bootstrap from '../img/bootstrap.png';
import node from '../img/node.png';
import express from '../img/express.png';
import php from '../img/php.png';
import vs from '../img/vs.png';
import git from '../img/git.png';
import typescript from '../img/typescript.png';
import figma from '../img/figma.png';

const Skills = () => {
  return (
    <section className="three" id="section3">
      <div className="container align-items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ willChange: 'transform, opacity' }}
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: 'spring' }}
          style={{ willChange: 'transform, opacity' }}
        >
          My main area of expertise is front end development (client side of the web).
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.11, type: 'spring' }}
          style={{ willChange: 'transform, opacity' }}
        >
          HTML, CSS, JS, building small and medium web applications <br />
          with React, custom plugins, features, animations, and coding interactive layouts. <br />
          I also have an intermediate experience in backend development with express js.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, type: 'spring' }}
          style={{ willChange: 'transform, opacity' }}
          className="technologies"
        >
          <div className="row1 row">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.13, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={html} alt="html" />
              <p>HTML</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.14, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={css} alt="css" />
              <p>css</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={bootstrap} alt="bootstrap" />
              <p>bootstrap</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.16, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={js} alt="js" />
              <p>js</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.17, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={react} alt="react" />
              <p>react</p>
            </motion.div>
          </div>
          <div className="row2 row">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={node} alt="node" />
              <p>node</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.19, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={express} alt="express" />
              <p>express</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={php} alt="php" />
              <p>php</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.21, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={vs} alt="vs" />
              <p>vs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.22, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={git} alt="git" />
              <p>git</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.23, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={typescript} alt="figma" />
              <p>typescript</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.24, type: 'spring' }}
              style={{ willChange: 'transform, opacity' }}
              className="icons col"
            >
              <img src={figma} alt="figma" />
              <p>figma</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (event) => {
    event.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (event) => {
    event.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='carousel'>
      <button className='left-arrow' onClick={prevSlide}>
        &lt;
      </button>
      <button className='right-arrow' onClick={nextSlide}>
        &gt;
      </button>

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='carousel-img'>
                <img src={slide.image} alt='work' className='image' />
              </div>
            )}
            <p>
              <p className='carousel-desc'> {slide.text}</p>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                visit
              </a>
            </p>
          </div>
        );
      })}
    </section>
  );
};


const Home = () => {
  const slideImages = [
    {
      image: sydon,
      text: 'Sydon: A responsive homepage built with HTML and CSS for Sydoncare',
      link: 'https://mighty-k.github.io/sydon/'
    },
    {
      image: quiz,
      text: 'QuizMe: An interactive quiz app built with React and JSON',
      link: 'https://ms-quizapp.netlify.app/'
    },
    {
      image: clearance,
      text: 'FYCL Clearance System: Streamlines graduation clearance process (React + Express)',
      link: 'https://fycl.netlify.app/',
      instructions: 'https://mighty-k.github.io/clearance-database/'
    },
    {
      image: todo,
      text: 'Todo List: My first React project - a simple task management app',
      link: 'https://todolistm0001.netlify.app/'
    },
    {
      image: portfolio,
      text: 'Portfolio: This website built with React and Framer Motion',
      link: 'https://portfolio-mighty.netlify.app/'
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <nav className="navbar">
        <a href="#section2" className="logo-link">
          <p className="me">MIGHTY</p>
        </a>
        <ul className="nav-list">
          <li className="nav-item">
            <a href='#section5' className="contact-link">
              <button className="btn contact-btn">
                Contact
              </button>
            </a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="section1">
          <div className="container hero-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="hero-content"
            >
              <h1 className="hero-title">Web Developer</h1>
              <p className="hero-description">
                Creating intuitive interfaces, solving design challenges, and building seamless web experiences.
              </p>
              <motion.a 
                href="#section4"
                className="projects-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
              className="hero-image"
            >
              <img src={coding} alt="Web development illustration" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="section2">
          <div className="container about-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-intro"
            >
              <h2 className="section-title">
                Hi, I'm <span className="highlight">Mighty</span>,<br />
                a full-stack developer.
              </h2>
              <p className="section-subtitle">
                Frontend Specialist | Backend Developer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="about-content"
            >
              <p>
                I'm a passionate developer specializing in React.js and Node.js with 3+ years of experience 
                building responsive web applications. My approach combines clean code principles with 
                user-centered design to create efficient, scalable solutions.
              </p>
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-text">Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-text">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <section className="projects" id="section4">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-header"
            >
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-description">
                Selected work showcasing my range of capabilities from simple apps to complex systems
              </p>
            </motion.div>

            <div className="projects-carousel" id="section7">
              <Carousel slides={slideImages} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="section5">
          <div className="container contact-container">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-image"
            >
              <img src={globe} alt="Global connectivity illustration" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="contact-content"
            >
              <h2 className="section-title">Let's Build Something Amazing</h2>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email Me</h3>
                    <a href="mailto:tiolupopo@gmail.com" className="contact-link">
                      tiolupopo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h3>WhatsApp</h3>
                    <a 
                      href="https://wa.me/2347042837826" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      +234 7042837826
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">🔗</span>
                  <div>
                    <h3>Connect</h3>
                    <div className="social-links">
                      <a 
                        href="https://www.linkedin.com/in/mighty-popoola-3b5766260" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        LinkedIn
                      </a>
                      <a 
                        href="https://github.com/Mighty-k" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cta-box"
              >
                <p>Ready to start your project?</p>
                <a 
                  href="mailto:tiolupopo@gmail.com" 
                  className="cta-button"
                >
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Mighty Popoola. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </footer>
    </>
  );
};

export default Home;