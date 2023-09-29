import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
  return (
    <nav className='md:px-5 relative'>
        <NavContent/>
    </nav>
  )
}

const NavContent = () =>{
    const[isopen , setIsopen] = useState(false)

    return (
        <>
            <motion.div 
            whileHover={{backgroundColor: ["#121212" , "rgba(123,58,180,1)","rgba(253,29,29,1)","rgba(252,165,69,1)","rgba(136,15,69,1)","rgba(138,58,180,1)","#121212"],
            transition:{duration: 1, repeat: Infinity}
                         }}
            className="brand">
                <h2>FA.</h2>
            </motion.div>
            <div className='nav-main-content lg:gap-6 md:hidden'>
                <a className='hover-link' href='/'>Home</a>
                <a className='hover-link' href='#about'>About</a>
                <a className='hover-link' href='#portfolio'>Portfolio</a>
                <a className='hover-link' href='#contact'>Contact</a>
            </div>
            <button className='hidden md:block'><img className='w-8' src="./icons/hamburger.png" alt="" onClick={()=>{setIsopen(!isopen);
            console.log(isopen)}}/></button>
            <button className='resume'><a href="./Faraz_resume.pdf" download target="_blank"  >Resume</a></button>

            <div className={`${isopen ? "block" : "hidden" } flex flex-col gap-3 border  border-black absolute w-full top-28 left-0 right-0`}>
                <a className='hover-link' href='#home' onClick={()=>setIsopen(false)}>Home</a>
                <a className='hover-link' href='#about' onClick={()=>setIsopen(false)}>About</a>
                <a className='hover-link' href='#portfolio' onClick={()=>setIsopen(false)}>Portfolio</a>
                <a className='hover-link' href='#contact' onClick={()=>setIsopen(false)}>Contact</a>
            </div>
        </>
    )
}

export default Header