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
            className="skills-tag">
                <img src={name} alt="" />
            </motion.div>
    )
}

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h2>Skills</h2>
        <div className="skills-main">
            <motion.div 
            whileHover={{ scale:1.01}}>
                <span>Web</span>
            </motion.div>
            <Skill name="./logos/css.svg" x="-5vw" y="-10vw" />
            <Skill name="./logos/express.svg" x="-20vw" y="2vw" />
            <Skill name="./logos/html5.svg" x="20vw" y="6vw" />
            <Skill name="./logos/java.svg" x="-20vw" y="-15vw" />
            <Skill name="./logos/javascript.svg" x="15vw" y="-12vw" />
            <Skill name="./logos/react.svg" x="32vw" y="-5vw" />
        </div>
    </div>
  )
}

export default Skills