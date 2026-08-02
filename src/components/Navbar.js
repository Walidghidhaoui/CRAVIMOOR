import React, { useState } from 'react';
import './Responsive Home Css.css'; // Assure-toi que le chemin est correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <img src="/logo.png" alt="Logo" className="logo" />
      {/* 👇 ADDED PMP BADGE HERE 👇 */}
        <a 
          href="https://www.credly.com/badges/da72feed-ed1f-4f06-84d3-6a2ecd96e46e/public_url"  
          target="_blank" 
          rel="noopener noreferrer"
          className="pmp-badge-link"
        >
          <img 
            src="/images/pmp-badge.png" /* ضع مسار صورة الشارة هنا */
            alt="PMP Certified" 
            className="pmp-badge-img"
          />
        </a>
        {/* 👆 END OF PMP BADGE 👆 */}
      </div>

      <nav className={`nav-links ${isOpen ? 'show' : ''}`} id="navLinks">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="hamburger" id="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
