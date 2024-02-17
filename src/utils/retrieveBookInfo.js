/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
export const RetrieveBookInfo = (data) => {
  const items = data?.items;
  let bookItems = [];
  if (items) {
    if (Array.isArray(items)) {
      bookItems = items.reduce((prev, curr) => {
        if (curr?.volumeInfo && typeof curr?.volumeInfo === "object") {
          const { title, authors, language, publisher, imageLinks } = curr?.volumeInfo;
          prev.push({ title, authors, language, publisher, imageLinks });
        }
        return prev;
      }, []);
      return bookItems;
    } else {
      return [];
    }
  } else {
    return [];
  }
};
