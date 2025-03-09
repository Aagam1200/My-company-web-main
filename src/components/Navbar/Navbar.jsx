import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src="logo.png" alt="Logo" className="navbar-logo-image" />
        </div>
        <ul className="navbar-links">
          <li className="navbar-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-link">
            <Link to="/about-us">About Us</Link>
          </li>
          <li
            className="navbar-link dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Products
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item"><Link to="/products/tmt-bars">TMT Bars</Link></li>
                <li className="dropdown-item"><Link to="/products/ms-plate">MS Plate</Link></li>
                <li className="dropdown-item"><Link to="/products/ms-beam">MS Beam</Link></li>
                <li className="dropdown-item"><Link to="/products/ms-gi-pipe">MS And GI Pipe</Link></li>
                <li className="dropdown-item"><Link to="/products/ms-channel">MS Channel</Link></li>
                <li className="dropdown-item"><Link to="/products/flat-angle">Flat And Angle</Link></li>
                <li className="dropdown-item"><Link to="/products">View More<span className="arrow-symbol">→</span></Link></li>
              </ul>
            )}
          </li>
          <li className="navbar-link">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="navbar-logo">
            <img src="logo.png" alt="Logo" className="navbar-logo-image" />
          </div>
          <button className="close-button" onClick={() => setIsMenuOpen(false)}>
            <HiX />
          </button>
          <Link to="/" className="mobile-menu-link">Home</Link>
          <Link to="/about-us" className="mobile-menu-link">About Us</Link>
          <Link to="/products" className="mobile-menu-link">Products</Link>
          <Link to="/contact-us" className="mobile-menu-link">Contact Us</Link>
          <div className="mobile-social-icons">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
