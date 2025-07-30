import React from 'react'
import './Footer.css'
// React Icons
import { FaFacebookF } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <p>Copyright {new Date().getFullYear()} <span id='foot-text'>Baker's Palace.com</span></p>
      <div className="social-icons">
        <FaFacebookF width={100} />
        < BsWhatsapp width={100} />
        <MdEmail width={100} />
        <FaLinkedin width={100} />
        <li><FaPhoneVolume width={100} /></li>
      </div>
    </div>
  )
}

export default Footer