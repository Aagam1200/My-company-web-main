import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Import the hook
import "./Vision.css";

const Vision = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Apply animation class based on the visibility of the section
  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Set to true to prevent re-triggering
    }
  }, [inView, hasAnimated]);

  return (
    <section className="vision-values-section" ref={ref}>
      <div className={`vision-values-container ${hasAnimated ? 'animated' : ''}`}>
        {/* Image Section */}
        <div className="vision-values-image-section">
          <img
            src="vision-1.jpg"
            alt="Person presenting"
            className="vision-values-image"
          />
        </div>
        {/* Text Section */}
        <div className="vision-values-text-section">
          <h4 className="vision-values-subtitle">
            <span className="vision-values-bullet"></span>Complete Honesty and
            Transparency
          </h4>
          <h2 className="vision-values-title">Our Vision and Values</h2>
          <p className="vision-values-description">
            To be the leading innovator in the iron and steel industry, setting
            the standard for quality, sustainability, and technological
            advancement, while empowering our employees and contributing to the
            growth of our communities.
          </p>
          <ul className="vision-values-list">
            <li>
              <span className="vision-values-checkmark">✔</span>
              Integrity: We uphold the highest ethical
              standards in all our operations, ensuring transparency, honesty,
              and fairness in every interaction.
            </li>
            <li>
              <span className="vision-values-checkmark">✔</span> Get the best quality of Iron and Steel.
            </li>
            <li>
              <span className="vision-values-checkmark">✔</span> Great Price
              Competitive
            </li>
          </ul>
          <a href="#" className="vision-values-learn-more">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vision;
