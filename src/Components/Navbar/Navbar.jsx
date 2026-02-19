import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">▶</span> Lekhan's<span>Portfolio</span>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/#home" onClick={closeMenu}>Home</a></li>
        <li><a href="/#about" onClick={closeMenu}>About</a></li>
        <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;