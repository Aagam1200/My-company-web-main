import React, { useState, useEffect } from 'react';
import './Whoarewe.css';


const imageData = [
  {
    id: 1,
    src: 'w2.jpg',
    alt: 'Image 1',
    bullet: 'Wide range of products to meet all project needs.',
  },
  {
    id: 2,
    src: 'w1.jpg',
    alt: 'Image 2',
    bullet: 'Superior quality for strength and durability.',
  },
  {
    id: 3,
    src: 'w3.jpg',
    alt: 'Image 3',
    bullet: 'Reliable service with customer-first support.',
  },
];

const Whoarewe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPos({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => {
    document.body.style.cursor = 'none';  // Hide default cursor
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'default';  // Restore default cursor
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only respond to left-click
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (e.button !== 0) return; // Ensure it's left-click
    setIsDragging(false);
    const dragDistance = e.clientX - dragStartX;

    if (dragDistance > 50) {
      handlePrev();  // Swipe left to go to the previous image
    } else if (dragDistance < -50) {
      handleNext();  // Swipe right to go to the next image
    }
  };

  // Handle previous image (with circular navigation)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  // Handle next image (with circular navigation)
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle image click to go to the next image
  const handleImageClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle bullet point click
  const handleBulletClick = (index) => {
    setCurrentIndex(index);  // Change image based on bullet point click
  };

  // Automatically change image every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Move to next image
    }, 5500); // Change every 4 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-slider">
      <div className="content-container">
        {/* Left Section: Image */}
        <div
          className="image-wrapper"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="image-container" onClick={handleImageClick}>
            {imageData.map((item, index) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                className={index === currentIndex ? 'active' : ''}
                onDragStart={(e) => e.preventDefault()}  // Prevent dragging
              />
            ))}
            <div
              className="custom-cursor"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
              }}
            >
              &lt;&gt;
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="content">
          <h3 className="section-title">WHO WE ARE</h3>
          <h2 className="main-heading">
          Building the Future with Iron and Steel
          </h2>
          <p className="description">
          At J M Shah And Co., we are dedicated to supplying high-quality iron and steel products to support construction and industrial projects. With a focus on reliability and customer satisfaction, we ensure our materials meet the highest standards.
          </p>
          <ul className="bullet-points">
            {imageData.map((item, index) => (
              <li
                key={item.id}
                className={currentIndex === index ? 'active' : ''}
                onClick={() => handleBulletClick(index)}
              >
                {item.bullet}
              </li>
            ))}
          </ul>
          <button className="about-button">About Us</button>
        </div>
      </div>
      
    </div>
    
  );
};

export default Whoarewe;
