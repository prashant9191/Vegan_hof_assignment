import React, { useState } from "react";
import './Product.module.css';
const Product = ({ name, price, images }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleImageChange = (index) => {
    if(index>=images.length-1){  
      setCurrentImage(0);
    }else{
      setCurrentImage(index + 1);
    }
  };

  const addToCart = () => {
    alert(`Added ${name} to cart!`);
  };

  return (
    <div className="product">
      <div className="thumbnails">
        <img 
          src={images[currentImage]}
          alt={`${name} thumbnail`}
          onClick={() => handleImageChange(currentImage)}
        />
      </div>
      <div className="details_div">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="details">
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <p>Rating: 4.5/5</p>
          <p>Color: Blue</p>
          <p>Size: Medium</p>
        </div>
      )}

      <button onClick={addToCart}>Add to Cart</button>
    </div>
      </div>
     
  );
};

export default Product;
