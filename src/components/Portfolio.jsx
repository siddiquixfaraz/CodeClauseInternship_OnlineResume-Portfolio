import '../styles/Portfolio.css';
// import img1 from 'public/images/project-ss-1.png'
// import img2 from 'public/images/project-ss-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPlay,faCodeFork,faSquareGithub} from '@fortawesome/free-solid-svg-icons'
import React from 'react'


export const Card = ({img,gitlink,livelink}) => {
  return (
    <div className="cards">
            <div className='border-div'></div>
                <div className="cards-img">
                    <img src={img} alt="" />
                </div>
                <div className="cards-content">
                <span>Beat Buddy</span>
                <span>Music website Made in reactjs</span>
                <div className="content-logo">
                <a href={gitlink} target="_blank"><img src="https://img.favpng.com/4/20/21/github-computer-icons-icon-design-png-favpng-KaDTwuHWgG8D1qn47QW2hK7Gj.jpg" alt="" /></a>
                <a href={livelink} target="_blank"><FontAwesomeIcon icon={faLink} /></a>
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
            <Card img="./images/project-ss-1.png" gitlink="https://github.com/siddiquixfaraz/ReactPortfolioXfaraz" livelink="https://faraz-portfolio.vercel.app/"/>
            <Card img="./images/project-ss-2.png" gitlink="https://github.com/siddiquixfaraz/ReactjsBeatBuddy" livelink="https://reactjs-beat-buddy.vercel.app/"/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </section>
  )
}

export default Portfolio