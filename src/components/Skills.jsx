import '../styles/Skills.css';
import { motion } from 'framer-motion';
import React from 'react'

const Skill = ({name,x,y})=>{
    return(
        <motion.div 
        whileHover={{ scale:1.01}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
            className="skills-tag">
                <span>{name}</span>
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
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="JavaScript" x="-20vw" y="2vw" />
            <Skill name="Nodejs" x="20vw" y="6vw" />
            <Skill name="HTML" x="-20vw" y="-15vw" />
            <Skill name="React js" x="15vw" y="-12vw" />
            <Skill name="Express" x="32vw" y="-5vw" />
        </div>
    </div>
  )
}

export default Skills