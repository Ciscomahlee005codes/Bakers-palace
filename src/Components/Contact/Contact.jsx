import React from "react";
import { useState } from "react";
import "./Contact.css";
import { FaPhoneVolume, FaEnvelope, FaGlobe } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
  const [isProceeding, setIsProceeding] = useState(false);

  const handleClick = () => {
    setIsProceeding(true);

    setTimeout(() => {
      navigate("/");
    }, 2000); // 5 seconds delay
  };
  return (
    <div className="Contact-container">
      <div className="contact-content">
        <h2>We are Very Responsive to Messages</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit.
        </p>
        <div className="contact-box">
          <div className="contact-info">
            <h2>Contact Us On:</h2>
            <ul>
             <li><FaEnvelope /> <a href="mailto: ciscomahlee@gmail.com"> ciscomahlee@gmail.com</a></li>
              <li><FaPhoneVolume /> <a href="tel:+234 812 126 9433">+234 812 126 9433</a></li>
              <li><FaGlobe /> <a href="https://nemerem-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">nemerem-portfolio.vercel.app</a></li>
            </ul>
          </div>
          <div className="contact-message">
            <h1>Get In Touch </h1>
            <h3>Send Us a Message</h3>
             <form action='https://formspree.io/f/movwdepg' method="post" className="con-form">
              <label>Name:</label>
              <input type="text" name="name" placeholder="Enter Your Name" required/>

              <label>Email Address: </label>
              <input type="email" name="email" placeholder="Enter Your Email Address" required/>

               <label>Write a Message</label>
               <textarea name="message" rows='6' cols="50"  placeholder="Enter Your Message" required>
               </textarea>
               <div className="btn">
                <button
                onClick={handleClick}
                className={`checkout-button ${
                  isProceeding ? "Submitting...." : ""
                }`}
                disabled={isProceeding}
              >
                  {isProceeding ? 'Submitting....' : 'Submit'}
              </button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;