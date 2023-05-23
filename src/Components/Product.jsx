import React, { useState } from "react";
import styles from './Product.module.css';

const Product = ({ name, price, images,rating,chef,color,expiry_date ,mfg_date,size}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleImageChange = (index) => {
    if (index >= images.length) {
      setCurrentImage(0);
    } else if(index <0) {
      setCurrentImage(images.length-1);
    }else{
      setCurrentImage(index);
    }
  };

  const addToCart = () => {
    alert(`Added ${name} to cart!`);
  };

  return (
   <div className={styles.product_container}>
    <div className={styles.product}>
      <div className={styles.thumbnails}>
        <img
          src={images[currentImage]}
          alt={`${name} thumbnail`}
          onClick={() => handleImageChange(currentImage)}
        />
        <button onClick={() => handleImageChange(currentImage-1)}>{"<"}</button>
        <button onClick={() => handleImageChange(currentImage+1)}>{">"}</button>
      </div>
      <div className={styles.details_div}>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Color: {color}</p>
        <p>Rating: {rating} <span class="fa fa-star"></span></p>
       <p>Chef: {chef}</p>
       <p>Manufectured Date: {mfg_date} Expiry Date: {expiry_date}</p>
       <p>Size: {size} </p>
        <button onClick={addToCart}>Add to Cart</button><br />
        <button onClick={toggleDetails}>
          {showDetails ? "Hide Description" : "Show Description"}
        </button>

        {showDetails && (
          <div className={styles.details}>
            <p>
              Description: Mix raspberries, sugar, tapioca, lemon juice, cinnamon, and salt together in a large bowl until raspberries are well coated; pour into pie crust and dot with butter.
            </p>
          </div>
        )}

      </div>
    </div>
   </div>
  );
};

export default Product;
