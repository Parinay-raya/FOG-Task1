import React, { useState, useEffect, useRef } from 'react';
import '../assets/Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null); // Reference to the header element

  // Toggle menu state when hamburger icon is clicked
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close menu if user clicks outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${isMenuOpen ? 'active' : ''}`} ref={headerRef}>
      <div className="logo">
        <img 
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHYUtz7tAuXtVykN8JVrHZLW3JV4T4louoal2Pb55cLfhrjrQC" 
          alt="Logo" 
          className="logo-image"
        />
        Furniro
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Icons below the navbar when hamburger is active */}
      <div className={`icons ${isMenuOpen ? 'active' : ''}`}>
        <a href="/login">
          <img 
            src="https://img.icons8.com/?size=100&id=11727&format=png&color=000000" 
            alt="Login" 
            className="icon" 
          />
        </a>
        <a href="/search">
          <img 
            src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" 
            alt="Search" 
            className="icon" 
          />
        </a>
        <a href="/wishlist">
          <img 
            src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" 
            alt="Wishlist" 
            className="icon" 
          />
        </a>
        <a href="/cart">
          <img 
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" 
            alt="Cart" 
            className="icon" 
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
