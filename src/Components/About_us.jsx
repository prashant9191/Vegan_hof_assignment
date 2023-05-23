import React from "react";
import styles from './About_us.module.css';
function About_us() {
  return (
    <div id={styles.about}>
      <p>
        VeganHof is a vegan brand that offers a variety of plant-based products.
        We are committed to providing our customers with delicious, healthy, and
        sustainable food options.
      </p>
      <p>
        Our products are made with fresh, high-quality ingredients and are free
        of animal products, dairy, eggs, and gluten. We also offer a wide
        variety of vegan desserts and snacks.
      </p>
      <p>
        We believe that everyone should have access to delicious and healthy
        food, regardless of their dietary restrictions. That's why we are
        committed to making our products affordable and accessible to everyone.
      </p>
    </div>
  );
}

export default About_us;
