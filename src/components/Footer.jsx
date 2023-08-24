import '../styles/Footer.css'
import { FaGithubSquare} from 'react-icons/fa';
import { BsInstagram,} from 'react-icons/bs';
import { AiFillTwitterSquare ,AiFillLinkedin} from 'react-icons/ai';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer' id='about'>
      <h2>Fara Ahmad</h2>
      <div className="footer-link">
        <a href="/"><BsInstagram/></a>
        <a href="/"><AiFillTwitterSquare/></a>
        <a href="/"><AiFillLinkedin/></a>
        <a href="/"><FaGithubSquare/></a>
      </div>
      <h5>@All rights reserved</h5>
    </div>
  )
}

export default Footer