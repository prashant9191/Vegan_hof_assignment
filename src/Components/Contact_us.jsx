import React from "react";
import styles from "./Contact_us.module.css";
function Contact_us() {
  return (
    <div id={styles.about}>
      <h1>Contact Us</h1>
      <div id={styles.container}>
        <div>
          <p>
            You can contact us by email at info@veganhof.com or by phone at
            1-800-555-1212.
          </p>
          <p>We are located at 123 Main Street, Anytown, CA 91234.</p>
        </div>
        <div id={styles.social_media}>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact_us;
