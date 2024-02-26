// Nav.js
import React, { useState } from 'react';
import './Nav.css'; // Import the CSS file for styling

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">YourLogo</div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-btn" onClick={toggleMenu}>
          Menu
        </button>
        <div className="menu-items">
          <a href="/">Home</a>
          <a href="/recipes">Recipes</a>
          <a href="/variables">Variables</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
