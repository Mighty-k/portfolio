import "./home.css"
import coding from '../img/code.png'
import sydon from '../img/sydon.png'
import globe from '../img/globe.png'
import clearance from '../img/clearance.png'
import quiz from '../img/quiz.png'
import todo from '../img/todo.png'
import portfolio from '../img/portfolio.png'
import {  motion} from "framer-motion"
// import { useState } from "react"
import Skills from "./skills"
import Carousel from "./carousel"


const Home = () => {
  

  const slideImages = [
    {
      image: sydon,
      text:'Sydon : A basic homepage built with html and css, built for sydoncare',
      link: 'https://mighty-k.github.io/sydon/'
    },
    {
      image: quiz,
      text:'Quizme : a quiz app built using react and json',
      link: 'https://ms-quizapp.netlify.app/'
    },
    {
      image: clearance ,
      text:'FYCL: A clearance system built to streamline the clearnce process for Babcock university graduates, my final year project built with React js, Express js and json. for instructions https://mighty-k.github.io/clearance-database/',
      link: 'https://fycl.netlify.app/'
    },
   
    {
      image: todo ,
      text:'Todo list: A basic todo list app built with react js was my first react project ',
      link: 'https://todolistm0001.netlify.app/'
    },
    {
      image: portfolio ,
      text:'My portfolio: built with react js ',
      link: 'https://portfolio-mighty.netlify.app/'
    },
  ];

    return(
        <>
        <nav className="navbar">
            <a  href="#section2">
            <p className="me">MIGHTY</p>
            </a >
            <ul>
                <li className="nav-item">
                    <a  href='#section5'>
                    <button className="btn">
                        Contact
                    </button>
                    </a >
                </li>
            </ul>
        </nav>
        <section className="one" id="section1"
           >
            <div  className=" container align-items-center  row">
                <motion.div
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, type:'spring'}}
                // viewport={{
                //   amount:0.5,
                // }}
                style={{willChange:'transform, opacity'}}
                className="col ">
                    <h2
                      
                    >
                    Web Developer
                    </h2>
                    <p
                      
                    >
                    Resolving design problems, building smart user interfaces 
                    and useful interactions, developing rich web applications 
                    and seamless web experiences.

                    </p>
                </motion.div>
                <motion.div
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, type:'spring'}}
                // viewport={{
                //   amount:0.5,
                // }}
                style={{willChange:'transform, opacity'}}
                className="col">
                    <img src={coding}alt="" />
                </motion.div>
            </div>
        </section>

        <section className="two" id="section2" >
            <div className="container align-items-center row">
                <motion.div
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, type:'spring'}}
                // viewport={{
                //   amount:0.5,
                // }}
                style={{willChange:'transform, opacity'}}
                className="col">
                    <h2>
                        Hi, I&apos;m Mighty,<br />
                        a web developer.
                    </h2>
                    <p>
                        Frontend / backend developer
                    </p>
                </motion.div>
                <motion.div
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, type:'spring'}}
                // viewport={{
                //   amount:0.5,
                // }}
                style={{willChange:'transform, opacity'}}
                className="col">
                Passionate and results-driven Full-Stack Developer specializing in React.js for front-end development.
                 Committed to delivering high-quality solutions, I bring a strong foundation in web development to every project. 
                </motion.div>
            </div>

        </section>

        <Skills/>
        
        <section className="four" id="section4">
            <div className="container align-items-center text-center">
                <motion.h2
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1,type:'spring'}}
                style={{willChange:'transform, opacity'}}
                >
                    My Projects
                </motion.h2>
                <motion.p
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.1, type:'spring'}}
                style={{willChange:'transform, opacity'}}>
                Over time, I&apos;ve built a variety of web applications primarily using React.js. <br />
                 These projects span from simple yet effective tools to more complex platforms.
                </motion.p>
                <motion.p
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.11, type:'spring'}}
                style={{willChange:'transform, opacity'}}>
                <a  href="#section7">veiw projects &gt;</a >
                </motion.p>
            </div>
        </section>
        <section id="section7">
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, delay:0.1, type:'spring'}}
        style={{willChange:'transform, opacity'}}
        className="container" >
        <Carousel slides={slideImages} />
        
        </motion.div>
        </section>
        
       


        <section className="five" id="section5">
            <div className="row align-items-center">
                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, type:'spring'}}
                // viewport={{
                //   amount:0.5,
                // }}
                style={{willChange:'transform, opacity'}}
                className="col">
                    <img src={globe} alt="globe" />
                </motion.div>
                <motion.div
                initial={{opacity:0, x:50}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                className="col">
                    <p>
                        What website would like to build?
                    </p>
                    <p>    
                        Want to start new project?<br /> 
                        You can send a mail to <span className="txt">tiolupopo@gmail.com</span> <br />
                        or whatsapp <span className="txt">+234 7042837826</span>. <br/>
                        My Linkedin profile is <a target="blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mighty-popoola-3b5766260">here</a>. <br/>
                        My Github profile is <a target="blank" rel="noopener noreferrer" href="https://github.com/Mighty-k">here</a> .
                    </p>
                </motion.div>
            </div>
        </section>
        </>
    )
}

export default Home;