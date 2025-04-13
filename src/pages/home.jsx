import "./home.css"
import coding from '../img/code.png'
import sydon from '../img/sydon.png'
import globe from '../img/globe.png'
import clearance from '../img/clearance.png'
import quiz from '../img/quiz.png'
import todo from '../img/todo.png'
import portfolio from '../img/portfolio.png'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import bootstrap from '../img/bootstrap.png'
import node from '../img/node.png'
import express from '../img/express.png'
import php from '../img/php.png'
import vs from '../img/vs.png'
import git from '../img/git.png'
import typescript from '../img/typescript.png'
import figma from '../img/figma.png'
import { motion } from "framer-motion"
import Carousel from "./carousel"

const Home = () => {
  const slideImages = [
    {
      image: sydon,
      text: 'Sydon: A basic homepage built with HTML and CSS, built for sydoncare',
      link: 'https://mighty-k.github.io/sydon/',
    },
    {
      image: quiz,
      text: 'Quizme: a quiz app built using React and JSON',
      link: 'https://ms-quizapp.netlify.app/',
    },
    {
      image: clearance,
      text: 'FYCL: A clearance system built for Babcock university graduates. My final year project using React.js, Express.js, and JSON. Instructions: https://mighty-k.github.io/clearance-database/',
      link: 'https://fycl.netlify.app/',
    },
    {
      image: todo,
      text: 'Todo list: A basic todo list app built with React.js – my first React project',
      link: 'https://todolistm0001.netlify.app/',
    },
    {
      image: portfolio,
      text: 'My portfolio: Built with React.js',
      link: 'https://portfolio-mighty.netlify.app/',
    },
  ]

  return (
    <>
      <nav className="navbar">
        <a href="#section2">
          <p className="me">MIGHTY</p>
        </a>
        <ul>
          <li className="nav-item">
            <a href="#section5">
              <button className="btn">Contact</button>
            </a>
          </li>
        </ul>
      </nav>

      <section className="one" id="section1">
        <div className="container align-items-center row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ willChange: "transform, opacity" }}
            className="col"
          >
            <h2>Web Developer</h2>
            <p>
              Resolving design problems, building smart user interfaces and
              useful interactions, developing rich web applications and
              seamless web experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ willChange: "transform, opacity" }}
            className="col"
          >
            <img src={coding} alt="" />
          </motion.div>
        </div>
      </section>

      <section className="two" id="section2">
        <div className="container align-items-center row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ willChange: "transform, opacity" }}
            className="col"
          >
            <h2>
              Hi, I&apos;m Mighty,
              <br />
              a web developer.
            </h2>
            <p>Frontend / backend developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            style={{ willChange: "transform, opacity" }}
            className="col"
          >
            Passionate and results-driven Full-Stack Developer specializing in
            React.js for front-end development. Committed to delivering
            high-quality solutions, I bring a strong foundation in web
            development to every project.
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="three" id="section3">
        <div className="container align-items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, type: "spring" }}
          >
            My main area of expertise is front end development (client side of
            the web).
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.11, type: "spring" }}
          >
            HTML, CSS, JS, building small and medium web applications <br />
            with React, custom plugins, features, animations, and coding
            interactive layouts. <br />
            I also have an intermediate experience in backend development with
            Express.js.
          </motion.p>

          <motion.div
            className="technologies"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, type: "spring" }}
          >
            <div className="row1 row">
              {[html, css, bootstrap, js, react].map((img, i) => (
                <motion.div
                  key={i}
                  className="icons col"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.13 + i * 0.01, type: "spring" }}
                >
                  <img src={img} alt="" />
                  <p>{img.split('/').pop()?.split('.')[0]}</p>
                </motion.div>
              ))}
            </div>
            <div className="row2 row">
              {[node, express, php, vs, git, typescript, figma].map((img, i) => (
                <motion.div
                  key={i}
                  className="icons col"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.18 + i * 0.01, type: "spring" }}
                >
                  <img src={img} alt="" />
                  <p>{img.split('/').pop()?.split('.')[0]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="four" id="section4">
        <div className="container align-items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, type: "spring" }}
          >
            Over time, I&apos;ve built a variety of web applications primarily
            using React.js.
            <br />
            These projects span from simple yet effective tools to more complex
            platforms.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.11, type: "spring" }}
          >
            <a href="#section7">view projects &gt;</a>
          </motion.p>
        </div>
      </section>

      <section id="section7">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: "spring" }}
        >
          <Carousel slides={slideImages} />
        </motion.div>
      </section>

      <section className="five" id="section5">
        <div className="row align-items-center">
          <motion.div
            className="col"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <img src={globe} alt="globe" />
          </motion.div>
          <motion.div
            className="col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <p>What website would you like to build?</p>
            <p>
              Want to start a new project?
              <br />
              You can send a mail to{" "}
              <span className="txt">tiolupopo@gmail.com</span>
              <br />
              or WhatsApp <span className="txt">+234 7042837826</span>.
              <br />
              My LinkedIn profile is{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mighty-popoola-3b5766260"
              >
                here
              </a>
              .
              <br />
              My GitHub profile is{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mighty-k"
              >
                here
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home