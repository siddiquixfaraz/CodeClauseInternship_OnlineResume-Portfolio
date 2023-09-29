import '../styles/About.css'
import React from 'react'
import 'animate.css';

const About = () => {
  return (
    <div id='about' className=' h-screen p-10 xl:h-[80vh]'>
          <h2 className='text-5xl font-semibold text-center' >About</h2>
    <main className='flex justify-center items-start  pt-16 h-full gap-12 md:flex-col md:h-auto md:items-center'>
    <div className="about-left md:hidden">
        {/* <div className='about-border-div'></div> */}
        <img src='./images/widhoutbg.png' alt="" className='h-96 absolute top-4'/>
        <img src="https://th.bing.com/th/id/R.e8644c9b9458991592dcb686dbff3700?rik=bROBDu1DEUx1QA&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f189635_lightbulb-icon-png.png&ehk=QKDstJVtdRlAueBZdKz4r8Q0IrH2oEohHrR67izbY9s%3d&risl=&pid=ImgRaw&r=0" alt="" srcset="" 
        className='w-20 absolute -top-10 -left-10' />
      </div>
      <div className="about-right animate__animated animate__fadeInRight">
        <p>Hello, I'm Faraz Ahmad, a 21-year-old full-stack developer based in Lucknow, India. With a strong focus on both frontend and backend development, I've cultivated a versatile skill set that includes HTML, CSS, JavaScript, React, Node.js, and Express.</p>

         <p> In the realm of frontend development, I excel in crafting visually stunning and highly responsive user interfaces. Leveraging my proficiency in React, I specialize in building dynamic and interactive web applications. </p>

         <p> On the backend, I bring projects to life using Node.js and Express.js. </p>
         
      </div>
    </main>
    </div>
  )
}

export default About