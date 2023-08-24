import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPlay,faCodeFork,faSquareGithub} from '@fortawesome/free-solid-svg-icons'
import React from 'react'


export const Card = () => {
  return (
    <div className="cards">
            <div className='border-div'></div>
                <div className="cards-img">
                    <img src="./images/project-ss-1.png" alt="" />
                </div>
                <div className="cards-content">
                <span>Beat Buddy</span>
                <span>Music website Made in reactjs</span>
                <div className="content-logo">
                <a href="/"><img src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg" alt="" /></a>
                <a href="https://reactjs-beat-buddy.vercel.app/" target="_blank"><FontAwesomeIcon icon={faLink} /></a>
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
            <h2>Portfolio</h2>
        </div>
        <div className="projects">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
           
            
        </div>
    </div>
    
    </section>
  )
}

export default Portfolio