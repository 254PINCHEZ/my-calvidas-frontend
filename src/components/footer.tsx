import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="calvidas-footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <address className="footer-contact-info">
            <p>
              <a href="mailto:info@calvidashotel.com" className="footer-link">
                info@calvidashotel.com
              </a>
            </p>
            <p>
              <a href="tel:+2547-254-010-81" className="footer-link">
                +2547-254-010-81
              </a>
            </p>
            <p className="footer-address">
              Calvidas Hotel<br />
              Bagic HOSTELS,,,,, UNIVERSITY OF EMBU.
            </p>
          </address>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/meals" className="footer-link">products</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/register" className="footer-link">Register</Link>
          </nav>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">Facebook</a>
            <a href="#" aria-label="Instagram" className="social-icon">Instagram</a>
            <a href="#" aria-label="Twitter" className="social-icon">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} <strong>CALVIDAS HOTEL</strong>. All rights reserved. created by peter mungai❤️❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;