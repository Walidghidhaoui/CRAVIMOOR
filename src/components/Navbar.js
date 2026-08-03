import React, { useState } from 'react';
// 1. استورد الصورة هنا (عدل المسار إذا كان مختلفاً)
import logo from './logo.png'; 

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
      
      {/* 2. استخدم المتغير logo هنا بدلاً من المسار النصي */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: '60px' }} /> 
      </div>

      {/* بقية الروابط كما هي... */}
      <nav className={`nav-links ${isOpen ? 'show' : ''}`} id="navLinks" style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        {/* ... نفس الروابط ... */}
      </nav>
    </header>
  );
};

export default Navbar;