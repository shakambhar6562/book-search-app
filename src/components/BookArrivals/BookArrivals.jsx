/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import React from "react";
import styles from "./bookArrivals.module.css";
import { Book } from "./book";
import SearchBar from "../SearchBar/SearchBar";
import { ColorRing } from "react-loader-spinner";
export const BookArrivals = (props) => {
  const { bookData, isBookDataLoading } = props;
  
  const Spinner = () => (
    <div className={styles.spinner}>
      <ColorRing visible={true} height="80" width="80" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]} />
    </div>
  );
  const BookComponents = () => (
    <div className={styles.booksContainer}>
      {bookData?.map((item, index) => (
        <Book {...item} key={index} />
      ))}
    </div>
  );

  return (
    <div className={styles.arrivalContainer}>
      <h2>New Arrivals</h2>
      <div className={styles.horizontalLine}></div>
      <SearchBar {...props} />
      {isBookDataLoading ? <Spinner /> : <BookComponents />}
    </div>
  );
};
