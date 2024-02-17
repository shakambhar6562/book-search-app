import React from "react";
import styles from "./heroSection.module.css";
const HeroSection = () => {
  return (
    <div className={styles.booksSaleImage}>
      <h1>Year end sale</h1>
      <p className={styles.eightPercent}>Get 80% off on All finance related Books</p>
      <button>Avail now</button>
    </div>
  );
};

export default HeroSection;
