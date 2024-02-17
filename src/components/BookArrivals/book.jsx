import React from "react";
import styles from "./book.module.css";
import { languageNames } from "../../utils/languageDetector";
export const Book = (props) => {
  const { title, imageLinks, authors, language } = props;
  return (
    <div className={styles.booksCard}>
      <div className={styles.book}>
        <img src={imageLinks?.thumbnail} alt={"book image"} />
      </div>
      <div className={styles.bookDetails}>
        <p>{authors?.[0]}</p>
        <p>{title}</p>
        <p>{languageNames.of(language)}</p>
        <p>{`₹ ${Math.floor((Math.random() + 100) * (7 - 1))}`}</p>
      </div>
    </div>
  );
};
