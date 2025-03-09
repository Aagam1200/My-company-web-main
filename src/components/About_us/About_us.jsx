import React, { useEffect, useState } from "react";
import "./About_us.css";
import Partner from '../Home/Partner';


const easeOutQuad = (t) => t * (2 - t); // Easing function for smooth transition
const About_us = () => {
  const logos = [
    { src: "metro.png", alt: "Metro" },
    { src: "triangle.png", alt: "AECOM" },
    { src: "aecom.png", alt: "AECOM" },
    { src: "blokur.png", alt: "Blokur" },
    { src: "beuth.png", alt: "Beuth" },
    { src: "fire.png", alt: "Fire" },
  ];

  const [year, setYear] = useState(0);

  useEffect(() => {
    const startYear = 0;
    const endYear = 2005;
    const duration = 2000; // Total duration in ms
    const frameRate = 60; // Frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate); // Total frames for the animation

    let frame = 0;

    const smoothCounter = () => {
      frame++;
      const progress = frame / totalFrames; // Progress between 0 and 1
      const easedProgress = easeOutQuad(progress); // Apply easing
      const currentYear = Math.round(
        startYear + easedProgress * (endYear - startYear)
      );

      setYear(currentYear);

      if (frame < totalFrames) {
        requestAnimationFrame(smoothCounter);
      }
    };

    requestAnimationFrame(smoothCounter);
  }, []);

  const targetPercentages = [95, 90]; // Target percentages for Automation and Engineering
  const [showBars, setShowBars] = useState(false);

  useEffect(() => {
    // Trigger animation when the component is mounted
    const timeout = setTimeout(() => setShowBars(true), 100); // Delay to ensure animation is noticeable
    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <>
      <div className="top-section">
        <div className="overlay">
          <h1 className="title">ABOUT US</h1>
          <div className="scroll-indicator">
            <span className="arrow">&#x25BC;</span>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="about-us-section">
        {/* Left Images Section */}
        <div className="about-us-images">
          <div className="about-image-wrapper">
            <img
              src="about_us/1.jpg"
              alt="Image One"
              className="about-image-one"
              draggable="false"
            />
            <div className="counter-wrapper">
              <span className="counter">{year}</span>
              <span className="counter-label">START IN</span>
            </div>
            <img
              src="about_us/2.jpg"
              alt="Image Two"
              className="about-image-two"
              draggable="false"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="about-us-content">
          <h2 className="about-sub-heading">ABOUT US</h2>
          <h2 className="about-heading">
          Creating Value Through Superior Steel Solutions
          </h2>
          <p className="about-description">
          J M Shah And Co delivers top-quality iron and steel products, ensuring strength, reliability, and excellence for every project.
          </p>
          <div className="about-working-hours">
            <p>
              <strong>Mon-Fri:</strong> 9 AM – 8 PM
            </p>
            <p>
              <strong>Saturday:</strong> 9 AM – 6 PM
            </p>
          </div>
          <button className="about-us-button">Contact Us</button>
        </div>
      </div>{" "}
      {/* Partners Section */}
     <div>
       <Partner />  
     </div>
      <section className="quality-section">
      <div className="quality-content">
        <h5 className="quality-sub-heading">QUALITY SERVICE</h5>
        <h2 className="quality-heading">We Give Top Product Quality</h2>
        <p className="quality-description">
        At our core, we are committed to delivering products that meet the highest standards of quality and reliability. With a focus on excellence, we ensure that every solution we provide is crafted to perfection, offering durability and unmatched performance. Trust us to bring you the best because quality is our priority.
        </p>
        <div className="progress-bars">
          <div className="progress-bar">
            <div className="progress-label">
              <span>Material Quality</span>
              <span>{targetPercentages[0]}%</span>
            </div>
            <div className="progress-track">
              <div
                className={`progress-fill ${showBars ? 'animate' : ''}`}
                style={{ '--target-width': `${targetPercentages[0]}%` }}
              ></div>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-label">
              <span>Structural Solutions</span>
              <span>{targetPercentages[1]}%</span>
            </div>
            <div className="progress-track">
              <div
                className={`progress-fill ${showBars ? 'animate' : ''}`}
                style={{ '--target-width': `${targetPercentages[1]}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="quality-image">
        <img src="about_us/3.jpg" alt="Production Solutions" />
      </div>
    </section>
    </>
  );
};

export default About_us;
