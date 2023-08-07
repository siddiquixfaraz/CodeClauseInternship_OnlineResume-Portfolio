import '../styles/About.css'
import React from 'react'
import 'animate.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <div className='about-border-div'></div>
        <img src='./images/profile1.jpg' alt="" />
      </div>
      <div className="about-right animate__animated animate__fadeInRight">
        <h2 >About</h2>
        {/* <h3>Im </h3> */}
        <p>Innovative & creative Web developer with extensive knowledge of UI development using React Js, HTML5, CSS3 & Java Scripting.
          I possess Bachelor’s degree and professional training in Front End development building, developing, and managing websites, and applications.</p>
          <button className='resume'>Resume</button>
      </div>
    </div>
  )
}

export default About