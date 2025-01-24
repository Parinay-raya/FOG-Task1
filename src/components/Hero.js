// src/components/Hero.js
import React from 'react';
import '../assets/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Shop</h1>
        <div className='tag'>
          <p>Home &gt; <span>Shop</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
