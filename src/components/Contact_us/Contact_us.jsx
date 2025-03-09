import React from "react";
import "./Contact_us.css";

const ContactUs = () => {
  return (
    <div>
      {/* First Section */}
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <p>Get In Touch</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="contact-info-container">
        <div className="contact-info-overlay">
          <div className="contact-info-card">
            <div className="icon-circle">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Phone</h3>
            <div className="divider"></div>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these.
            </p>
            <a href="tel:+919408234443">+91 9408234443</a>
          </div>

          <div className="contact-info-card">
            <div className="icon-circle">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <div className="divider"></div>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these.
            </p>
            <a href="mailto:test@gmail.com">test@gmail.com</a>
          </div>

          <div className="contact-info-card">
            <div className="icon-circle">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <div className="divider"></div>
            <p> Arjun Icconic, A-504, opp. Satya 2, Shastrinagar, Naranpura, Ahmedabad, Gujarat 380013</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              View On Google Map
            </a>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="contact-form-section">
        <h2>Leave us your info</h2>
        <p>and we will get back to you.</p>
        <form className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name:"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City:"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email:"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message:"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
