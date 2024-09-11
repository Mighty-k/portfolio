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
import { motion } from 'framer-motion'


const Skills = () =>{
    return(
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
                    <img src={typescript} alt="figma" />
                    <p>typescript</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, delay:0.24, type:'spring'}}
                style={{willChange:'transform, opacity'}}
                    className="icons col">
                    <img src={figma} alt="figma" />
                    <p>figma</p>
                    </motion.div>
                </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Skills;