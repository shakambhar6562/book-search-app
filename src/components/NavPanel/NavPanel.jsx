import React from "react";
import styles from "./navPanel.module.css";
const NavPanel = () => {
  return (
    <div className={styles.navpanelBar}>
      <ul>
        <a>Home</a>
        <select>
          <option>Categories</option>
        </select>
        <select>
          <option>Brands</option>
        </select>
        <select>
          <option>Best Sellers</option>
        </select>
        <select>
          <option>Pages</option>
        </select>
      </ul>
    </div>
  );
};

export default NavPanel;
