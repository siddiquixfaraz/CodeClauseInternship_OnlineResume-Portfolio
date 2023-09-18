import '../styles/About.css'
import React from 'react'
import 'animate.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <div className='about-border-div'></div>
        <img src='./images/profile-pic4.png' alt="" />
      </div>
      <div className="about-right animate__animated animate__fadeInRight">
        <h2 className='text-5xl font-semibold' >About</h2>
        {/* <h3>Im </h3> */}
        {/* <p>Innovative & creative Web developer with extensive knowledge of UI development using React Js, HTML5, CSS3 & Java Scripting.
          I possess Bachelor’s degree and professional training in Front End development building, developing, and managing websites, and applications.</p> */}
        <p>I'm Faraz Ahmad, a 21-year-old full-stack developer based in Lucknow, India. With a strong focus on both frontend and backend development, I've cultivated a versatile skill set that includes HTML, CSS, JavaScript, React, Node.js, and Express.</p>

         <p> In the realm of frontend development, I excel in crafting visually stunning and highly responsive user interfaces. Leveraging my proficiency in React, I specialize in building dynamic and interactive web applications. </p>

         <p> On the backend, I bring projects to life using Node.js and Express.js. </p>
         <button className='resume'><a href="./Faraz_resume.pdf" download target="_blank"  >Resume</a></button>
         
      </div>
    </div>
  )
}

export default About