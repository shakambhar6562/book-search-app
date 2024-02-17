import React from "react";
import styles from "./header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
  return (
    <div className={styles?.headerPanel}>
      <div className={styles?.libraryLogo}>
        <div className={styles.book}>BOOK</div>
        <div className={styles.shop}>SHOP</div>
      </div>
    </div>
  );
};

export default Header;
