import React from "react";
import "../styles/Contact.css";
import { AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai";
import { FaLocationDot} from "react-icons/fa6";
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
    <div  id="contact" className="w-full text-center min-h-fit">
      <ToastContainer />
      <h2 className='text-5xl font-semibold'>Contact Me</h2>
      <div className="flex justify-center gap-40 py-10   h-[80vh] ">
        <div className="flex flex-col gap-5 justify-center ">
          <div className="main-left-card  flex items-center gap-3">
            <span>
              <AiOutlineWhatsApp size={30}    className="fill-green-700 hover:fill-red-300" />
            </span>
            <div className="main-left-card-content  flex  flex-col items-start">
              <span>whatsapp</span>
              <span>+917380860399</span>
            </div>
          </div>
          <div className="main-left-card gap-3  flex items-center">
            <span>
              <AiOutlineMail size={30} />
            </span>
            <div className="main-left-card-content flex flex-col items-start">
              <span>E-mail</span>
              <span>siddiquifaraz122001@gmail.com</span>
            </div>
          </div>
          <div className="main-left-card flex items-center gap-3">
            <span>
              <FaLocationDot size={30} />
            </span>
            <div className="main-left-card-content flex flex-col items-start">
              <span>Location</span>
              <span>India</span>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}
          className=" h-full flex flex-col gap-3">
            <input
            className="w-96 p-3 border-gray-500 border"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            className="w-96 p-3 border-gray-500 border"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            className="w-96 h-full p-3 border-gray-500 border"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit"
            className="bg-orange-600 mt-3 rounded-sm text-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
