import React from 'react'
import '../styles/Contact.css'
import { AiFillTwitterSquare ,AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineWhatsApp, AiOutlineContacts, AiOutlinePhone} from 'react-icons/ai';


const Contact = () => {
  return (
    <div className='contact' id='contact' >
      <h2>Contact Me</h2>
      <div className="contact-main">
        <div className="main-left">
          <div className="main-left-card">
            <span><AiOutlineWhatsApp/></span>
            <span>logo</span>
            <span>logo</span>
          </div>
          <div className="main-left-card">
          <span><AiOutlinePhone/></span>

          </div>
          <div className="main-left-card"></div>
        </div>
        <div className="main-right"><form>
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email'/>
          <textarea placeholder='Your Message'/>
          <button type='submit'>Send Message</button>
        </form></div>
      </div>
    </div>
  )
}

export default Contact