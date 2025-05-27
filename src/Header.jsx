import React, { useState } from 'react';
import './ResponsiveHome.css'; // si ton fichier CSS s'appelle comme ça
import logo from './assets/logo.png'; // remplace avec le chemin de ton logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img src={logo} alt="CRAVIMOOR Logo" className="logo" />

      <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
