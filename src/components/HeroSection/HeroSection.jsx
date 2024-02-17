import React from "react";
import styles from "./heroSection.module.css";
const HeroSection = () => {
  return (
    <div className={styles.booksSaleImage}>
      <h1>Year end sale</h1>
      <p>Get 80% off on All finance related Books</p>
      <p>Offer expires in :12hrs</p>
      <button>Avail now</button>
    </div>
  );
};

export default HeroSection;
