import React from 'react'
import '../styles/home.css';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import { AiFillTwitterSquare ,AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <h3 className="animate__animated animate__fadeInDown">Hello I'm</h3>
      <h1 className="animate__animated animate__fadeInDown">Faraz.</h1>

      <h2 >
        <Typewriter
          options={
            {
              strings: ["Front End Developer", "Programmer"],
              autoStart: true,
              loop: true,
              // cursor: "|",
              wrapperClassName: "TypewriterPara",
            }
          }
        />
      </h2>
    </div>
    <div className="socials">
      <a href="https://www.linkedin.com/in/faraz-ahmad-71b837233/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
      <a href="https://github.com/siddiquixfaraz" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
      <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
      
    </div>
    </>
  )
}

export default Home