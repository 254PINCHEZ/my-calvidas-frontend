import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import pic from "../assets/Hotel.avif"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand - Now CALVIDAS */}
        <Link to="/" className="navbar-brand">
          <div className="logo-icon"> 
           <img src={pic} alt="" /> 
            </div>
          <span className="brand-text">CALVIDAS HOTEL</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/products" className="navbar-link" onClick={() => setIsOpen(false)}>
            Meals
          </Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link to="/register" className="navbar-link" onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </div>

        {/* Login Button */}
        <div className="navbar-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;