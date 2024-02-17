import React, { useDeferredValue, useState } from "react";
import { Header } from "./components/Header";
import { NavPanel } from "./components/NavPanel";
import { HeroSection } from "./components/HeroSection";
import { BOOKS_API } from "./routingApi";
import { RetrieveBookInfo } from "./utils/retrieveBookInfo";
import { BookArrivals } from "./components/BookArrivals";
import { useEffect } from "react";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isBookDataLoading, setBookDataLoading] = useState(false);
  const url = BOOKS_API + `=${searchValue || 'finance'}`;
  const isValueChanged = useDeferredValue(searchValue);
  useEffect(() => {
    handleSearch();
  }, [isValueChanged]);

  const handleSearch = async () => {
    setBookDataLoading(true);
    const response = await fetch(url);
    const jsonData = await response.json();
    setBookData(RetrieveBookInfo(jsonData));
    setBookDataLoading(false);
  };
  const headerProps = {
    searchValue,
    setSearchValue,
    handleSearch,
    isBookDataLoading,
  };

  return (
    <>
      <Header {...headerProps} />
      <NavPanel />
      <HeroSection />
      <BookArrivals {...headerProps} bookData={bookData} />
    </>
  );
};
