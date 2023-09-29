import React from 'react'
import '../styles/home.css';
import Typewriter from 'typewriter-effect';
import { AiFillTwitterSquare,AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div id='home' className='w-full h-[90vh] flex justify-center items-center flex-col lg:h-[80vh] md:h-[60px]' >
      <h3 className="text-[2rem] mobile:text-[1.3rem] font-extrabold">Hello I'm</h3>
      <h1 className="text-[6rem] mobile:text-[4rem] font-extrabold">Faraz.</h1>

      <h2 className='text-2xl  font-semibold' >
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
    {/* <div className="socials">
      <a href="https://www.linkedin.com/in/faraz-ahmad-71b837233/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
      <a href="https://github.com/siddiquixfaraz" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
      <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
    </div> */}
    </>
  )
}

export default Home