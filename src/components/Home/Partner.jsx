import React from 'react';
import './Partner.css';

const logos = [
  { id: 1, src: 'Partners/JSP1.svg', alt: 'Jindal Steel And Power' },
  { id: 2, src: 'Partners/Sail.png', alt: 'Sail' },
  { id: 3, src: 'Partners/asian tubes.png', alt: 'Asian Tubes & Pipes' },
  { id: 4, src: 'Partners/vibrant.png', alt: 'Vibrant TMT' },
  { id: 5, src: 'Partners/apollo.png', alt: 'Apollo Steel Pipes' },
  { id: 6, src: 'Partners/Surya.jpeg', alt: 'Surya Prakesh' },
  { id: 7, src: 'Partners/TATA.png', alt: 'TATA Steel' },
  { id: 8, src: 'Partners/ET.jpeg', alt: 'Electrotherm Steel(ET TMT)' },
  { id: 9, src: 'Partners/Vinayak.png', alt: 'Vinayak TMT Bars' },
  { id: 10, src: 'Partners/Steefo.svg', alt: 'Steefo TMT Bars' },
  { id: 11, src: 'Partners/Hitech.png', alt: 'Hi-Tech Pipes' },
  { id: 12, src: 'Partners/German.png', alt: 'German TMT' },
  
];

const Partner = () => {
  return (
    <>
    <h1 className='main-title'>Licensed Partner for Success</h1>
    <div className="logo-gallery">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-item">
          <img src={logo.src} alt={logo.alt} className="logo" />
        </div>
      ))}
    </div>
    </>
  );
};

export default Partner;
