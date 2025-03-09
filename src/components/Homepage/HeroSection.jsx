import React from 'react';
import './HeroSection.css';
import Whoarewe from '../Home/Whoarewe';
import Partner from '../Home/Partner';
import Vision from '../Home/Vision';
import Products from '../Home/Products';

const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here.</p>
      </div>
      
    </div>
    <Whoarewe />
    <Partner />
    <Products/>
    <Vision />
    </>
  );
};

export default HeroSection;
