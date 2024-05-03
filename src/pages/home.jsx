import "./home.css"
import coding from '../img/code.png'
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
import figma from '../img/figma.png'
import globe from '../img/globe.png'
import {  motion} from "framer-motion"


const Home = () => {
  

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

        <section className="three" id="section3">
            <div className="container align-items-center text-center">
                <motion.h2
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                >Skills</motion.h2>
                <motion.p
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1,delay:0.1, type:'spring'}}
                style={{willChange:'transform, opacity'}}>
                My main area of expertise is front end development (client side of the web).
                </motion.p>
                <motion.p
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.11, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                >
                HTML, CSS, JS, building small and medium web applications <br />
                 with React, custom plugins, features, animations, and coding interactive layouts. <br /> 
                 I also have an intermediate experience in backend development with express js. 
                </motion.p>
                <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1,delay:0.12, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                className="technologies">
                <div className="row1 row">
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.13, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={html} alt="html" />
                    <p>HTML</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.14, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={css} alt="css" />
                    <p>css</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.15, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={bootstrap} alt="bootstrap" />
                    <p>bootstrap</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.16, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={js} alt="js" />
                    <p>js</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.17, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={react} alt="react" />
                    <p>react</p>
                    </motion.div>
                </div>
                <div className="row2 row">
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.18, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={node} alt="node" />
                    <p>node</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.19, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={express} alt="express" />
                    <p>express</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.2, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={php} alt="php" />
                    <p>php</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.21, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={vs} alt="vs" />
                    <p>vs</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.22, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={git} alt="git" />
                    <p>git</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.23, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={figma} alt="figma" />
                    <p>figma</p>
                    </motion.div>
                </div>
                </motion.div>

            </div>
        </section>
        
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
                <a  to=''>veiw projects &gt;</a >
                </motion.p>
            </div>
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
                        or whatsapp <span className="txt">+234 8113851121</span>.
                    </p>
                </motion.div>
            </div>
        </section>
        </>
    )
}

export default Home;