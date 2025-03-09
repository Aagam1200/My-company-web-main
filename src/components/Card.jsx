import React, { useState } from 'react';
import './Card.css';

const Card = ({ product, onDoubleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSingleClick = () => {
    setIsHovered(!isHovered);
  };

  const handleDoubleClick = () => {
    if (onDoubleClick) {
      onDoubleClick(product.id); // Redirect to the product details page
    }
  };

  return (
    <div
      className={`product-card ${isHovered ? 'hover' : ''}`}
      onClick={handleSingleClick}
      onDoubleClick={handleDoubleClick}
    >
      <img className="card-image" src={product.image} alt={product.title} />
      <div className="card-content">
        <h2 className="product-number">{product.number}</h2>
        <h3 className="product-title">{product.title}</h3>
        <div className="card-description">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
