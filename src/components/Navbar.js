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
