// LandingComp.js
import React from 'react';
import './LandingComp.css';
import backgroundImage from '../../images/borad.jpg';


const LandingComp = () => {
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
   
      <div className="landing-content">
        <h1>Welcome to Our Meat Shop</h1>
        <p>Discover the finest quality meat for your culinary needs.</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default LandingComp;
