import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithubSquare} from 'react-icons/fa';
import { faLink, faPlay,faCodeFork,faSquareGithub} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { AiFillGithub,AiOutlineLink } from 'react-icons/ai';


export const Card = ({img,gitlink,livelink,title,des}) => {
  return (
    <div className="cards">
            <div className='border-div'></div>
                <div className="cards-img">
                    <img src={img} alt="" />
                </div>
                <div className="cards-content">
                <span>{title}</span>
                <span>{des}</span>
                <div className="content-logo">
                <a href={gitlink} target="_blank"><AiFillGithub /></a>
                <a href={livelink} target="_blank"><AiOutlineLink /></a>
                </div>
            </div>
    </div>
  )
}


const Portfolio = () => {
  return (
    <section id='portfolio'>
    <div className="main">
        <div className="title">
            <h2 className='text-5xl font-semibold'>Portfolio</h2>
        </div>
        <div className="projects">
            <Card 
            img="./images/project-ss-1.png" 
            gitlink="https://github.com/siddiquixfaraz/ReactPortfolioXfaraz" 
            livelink="https://faraz-portfolio.vercel.app/" 
            title="Personal Portfolio"
            des="Personal Portfolio made in reactjs "/>
            
            <Card 
            img="./images/project-ss-2.png" 
            gitlink="https://github.com/siddiquixfaraz/ReactjsBeatBuddy" 
            livelink="https://reactjs-beat-buddy.vercel.app/" 
            title="Beat Buddy"
            des="Music Website made in reactjs "/>
            <Card
            img="./images/project-ss-3.png"
            gitlink="https://github.com/siddiquixfaraz/blogapp"
            livelink="https://postblog-ten.vercel.app/"
            title="Blog Post"
            des="Blog Website made with MERN Stack"
            />
            
        </div>
    </div>
    </section>
  )
}

export default Portfolio