import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
}

const NavContent = () =>{
    return (
        <>
            <motion.div 
            whileHover={{backgroundColor: ["#121212" , "rgba(123,58,180,1)","rgba(253,29,29,1)","rgba(252,165,69,1)","rgba(136,15,69,1)","rgba(138,58,180,1)","#121212"],
            transition:{duration: 1, repeat: Infinity}
        }}
            className="brand">
                <h2>FA.</h2>
            </motion.div>
            <div>
                <a className='hover-link' href='/'>Home</a>
                <a className='hover-link' href='#about'>About</a>
                <a className='hover-link' href='#portfolio'>Portfolio</a>
                <a className='hover-link' href='#contact'>Contact</a>
            </div>
            <Button/>
        </>
    )
}

export default Header