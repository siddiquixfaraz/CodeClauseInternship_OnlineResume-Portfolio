import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPlay,faCodeFork,faSquareGithub} from '@fortawesome/free-solid-svg-icons'
import React from 'react'


export const Card = () => {
  return (
    <div className="cards">
            <div className='border-div'></div>
                <div className="cards-img">
                    <img src="https://img.freepik.com/free-photo/close-up-hand-with-painting-pallete_23-2148915877.jpg?w=1380&t=st=1691370022~exp=1691370622~hmac=44462d05ef7549bd8ef970d7cb85c688bd95e750578fa4754aeba125a6c4337e" alt="" />
                </div>
                <div className="cards-content">
                <span>Website Template</span>
                <span>NFT collection Website</span>
                <a href="/"><img src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg" alt="" /></a>
                <a href="/"><FontAwesomeIcon icon={faLink} /></a>
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
           
            
        </div>
    </div>
    
    </section>
  )
}

export default Portfolio