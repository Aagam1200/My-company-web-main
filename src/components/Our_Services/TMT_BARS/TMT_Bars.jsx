// TopSection.jsx
import React from 'react';
import './TMT.css';

const TMT_Bars = () => {
    const logos = [
        { src: "metro.png", alt: "Metro" },
        { src: "triangle.png", alt: "AECOM" },
        { src: "aecom.png", alt: "AECOM" },
        { src: "blokur.png", alt: "Blokur" },
        { src: "beuth.png", alt: "Beuth" },
        { src: "fire.png", alt: "Fire" }
    ];

    return (
        <>
            <div className="top-section"   >
                <div className="overlay">
                    <h1 className="title">TMT BARS</h1>
                    <div className="scroll-indicator">
                        <span className="arrow">&#x25BC;</span>
                    </div>
                </div>
            </div>
            {/* Partners in TMT BARS */}
            <div className="tmt-logo-gallery">
                {logos.map((logo, index) => (
                    <div key={index} className="tmt-logo-item">
                        <img src={logo.src} alt={logo.alt} className="tmt-logo" draggable="false" />
                    </div>
                ))}
            </div>
            
        </>
    );
};

export default TMT_Bars;
