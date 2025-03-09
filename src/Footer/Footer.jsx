import React, { useState } from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon

const Footer = () => {
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleCheckboxChange = () => {
    setPrivacyChecked(!privacyChecked);
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-brand">
          <img
            src="logo.png"
            alt="Company Logo" 
            className="footer-brand-logo"
          />
          <p class="footer-brand-text">We supply high-quality iron and steel products to support construction and industrial projects, ensuring reliability, superior quality, and customer satisfaction. </p>

        </div>
        <div className="footer-nav">
          <h3 className="footer-nav-title">Quick Links</h3>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Home
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                About Us
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Services
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-office">
          <h3 className="footer-office-title">Our Office</h3>
          <p className="footer-office-address">
          Arjun Icconic, A-504, opp. Satya 2, Shastrinagar, Naranpura, Ahmedabad, Gujarat 380013
          </p>
          <p className="footer-office-email">Email: <a href="mailto:jmshah9@rediffmail.com">jmshah9@rediffmail.com</a></p>
          <p className="footer-office-phone">Phone: <a href="tel:+91 9408234443"> +91 9408234443</a></p>
        </div>
        <div className="footer-brand">
        <h3 className="footer-office-title">Our Mission</h3>
          <p class="footer-brand-text">To deliver top-tier iron and steel materials that meet the highest standards, ensuring long-term customer satisfaction and industry excellence. </p>

        </div>

      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <p>J M Shah And Co © 2025. All Rights Reserved.</p>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-link">
            <FaFacebookF />
          </a>
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
          <a href="#" className="social-link">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
