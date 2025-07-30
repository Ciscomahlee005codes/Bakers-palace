import React from 'react';
import { assets } from "../../assets/assets";
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <img className='logo-slide-left' src={assets.logo} alt="Logo" />
        <div className="text-slide-right">Baker's Palace.</div>
      </div>
    </div>
  );
};

export default Loader;
