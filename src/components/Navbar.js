import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem', 
      background: 'rgba(0, 0, 0, 0.4)', 
      backdropFilter: 'blur(2px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '80px',
      zIndex: 1000
    }}>
      
      {/* مجموعة الشعار والبادج */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '60px' }} />
        
        <a 
          href="https://www.credly.com/badges/da72feed-ed1f-4f06-84d3-6a2ecd96e46e/public_url"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="/images/pmp-badge.png" 
            alt="PMP Certified" 
            style={{ height: '35px' }} 
          />
        </a>
      </div>

      {/* الروابط */}
      <nav className={`nav-links ${isOpen ? 'show' : ''}`} id="navLinks" style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <a href="#home" onClick={closeMenu} style={{ color: '#00ffe7', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
        <a href="#projects" onClick={closeMenu} style={{ color: '#00ffe7', textDecoration: 'none', fontWeight: 'bold' }}>Projects</a>
        <a href="#about" onClick={closeMenu} style={{ color: '#00ffe7', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
        <a href="#services" onClick={closeMenu} style={{ color: '#00ffe7', textDecoration: 'none', fontWeight: 'bold' }}>Services</a>
        <a href="#contact" onClick={closeMenu} style={{ color: '#00ffe7', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
      </nav>

      {/* هامبرغر للموبايل */}
      <div className="hamburger" id="burger" onClick={toggleMenu} style={{ display: 'none', flexDirection: 'column', gap: '6px', cursor: 'pointer' }}>
        <span style={{ width: '25px', height: '3px', background: '#00ffe7', borderRadius: '3px' }}></span>
        <span style={{ width: '25px', height: '3px', background: '#00ffe7', borderRadius: '3px' }}></span>
        <span style={{ width: '25px', height: '3px', background: '#00ffe7', borderRadius: '3px' }}></span>
      </div>
    </header>
  );
};

export default Navbar;