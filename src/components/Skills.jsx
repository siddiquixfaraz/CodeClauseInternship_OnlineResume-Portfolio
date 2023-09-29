import '../styles/Skills.css';
import { motion, transform } from 'framer-motion';
import React from 'react'

const Skill = ({name,x,y})=>{
    return(
        <motion.div 
        whileHover={{ scale:1.1}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:0.9}}
        viewport={{once:true}}
            className="skills-tag md:w-12">
                <img src={name} alt="" className='md:w-12'/>
            </motion.div>
    )
}

const Skills = () => {
  return (
    <div className='skills lg:[80vh] md:h-[60vh]' id='skills'>
        <h2 className='text-5xl font-semibold'>Skills</h2>
        <div className="skills-main xl:h-[80vh] md:[10vh] mobile:h-[40vh]">
            <motion.div 
            whileHover={{ scale:1.01}}>
                <span className='md:text-2xl md:font-semibold'>Web</span>
            </motion.div>
            <Skill name="./logos/css.svg" x="-5vw" y="-10vw" />
            <Skill name="./logos/express.svg" x="-20vw" y="2vw" />
            <Skill name="./logos/html5.svg" x="20vw" y="6vw" />
            <Skill name="./logos/java.svg" x="-20vw" y="-15vw" />
            <Skill name="./logos/javascript.svg" x="15vw" y="-12vw" />
            <Skill name="./logos/react.svg" x="32vw" y="-5vw" />
            <Skill name="./logos/node-js.svg" x="0vw" y="-20vw" />
            <Skill name="./logos/github.svg" x="-25vw" y="18vw" />
            <Skill name="./logos/mongodb.svg" x="18vw" y="18vw" />
            <Skill name="./logos/tailwind-css.svg" x="-2vw" y="10vw" />
        </div>
    </div>
  )
}

export default Skills