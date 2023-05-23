import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [displayScrollButton, setDisplayScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 800) {
        setDisplayScrollButton(true);
      } else {
        setDisplayScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div id={styles.footer_}>
        <p>Copyright © 2023 VeganHof. All rights reserved.</p>
        <div id={styles.me}>
          <a href="https://prashant9191.github.io/" target="_blank">
            <p>Prashant Verma</p>
          </a>
          <a href="https://www.linkedin.com/in/prashant-verma-b44738178/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/prashant9191" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      {displayScrollButton && (
        <p id={styles.scroll_btn} onClick={handleScrollToTop}>
          ^
        </p>
      )}
    </>
  );
}

export default Footer;
