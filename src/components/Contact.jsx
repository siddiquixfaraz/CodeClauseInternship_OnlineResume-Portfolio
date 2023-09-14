import React from "react";
import "../styles/Contact.css";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineContacts,
  AiOutlinePhone,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contact"), {
        name,
        email,
        message,
      });
      
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
    } catch (error) {
      toast.error("Error occured")
      console.log(error);
    }
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer />
      <h2>Contact Me</h2>
      <div className="contact-main">
        <div className="main-left">
          <div className="main-left-card shadow-lg bg-black border border-black">
            <span>
              <AiOutlineWhatsApp size={30} />
            </span>
            <div className="main-left-card-content">
              <span>logo</span>
              <span>logo</span>
            </div>
          </div>
          <div className="main-left-card">
            <span>
              <AiOutlineVideoCamera size={30} />
            </span>
            <div className="main-left-card-content">
              <span>logo</span>
              <span>logo</span>
            </div>
          </div>
          <div className="main-left-card">
            <span>
              <AiOutlineWhatsApp size={30} />
            </span>
            <div className="main-left-card-content">
              <span>logo</span>
              <span>logo</span>
            </div>
          </div>
        </div>
        <div className="main-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
