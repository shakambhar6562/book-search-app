import React from "react";
import styles from "./book.module.css";
export const Book = (props) => {
  const { title, imageLinks } = props;
  return (
    <div className={styles.book}>
      <img src={imageLinks?.thumbnail} alt={"book image"} />
      <div className={styles.bookDetails}>
        <p>{title}</p>
        <p>{`₹ ${Math.floor((Math.random() + 100) * (7 - 1))}`}</p>
      </div>
    </div>
  );
};
