import React, { useDeferredValue, useState } from "react";
import { Header } from "./components/Header";
import { NavPanel } from "./components/NavPanel";
import { HeroSection } from "./components/HeroSection";
import { BOOKS_API } from "./routingApi";
import { RetrieveBookInfo } from "./utils/retrieveBookInfo";
import { BookArrivals } from "./components/BookArrivals";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isBookDataLoading, setBookDataLoading] = useState(false);
  const [isSiteLoading, setSiteLoading] = useState(true);
  const url = BOOKS_API + `=${searchValue || "finance"}`;
  const isValueChanged = useDeferredValue(searchValue);
  useEffect(() => {
    handleSearch();
  }, [isValueChanged]);

  useEffect(() => {
    setTimeout(() => {
      setSiteLoading(false);
    }, 1500);
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
  if (isSiteLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ColorRing visible={true} height="80" width="80" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]} />
      </div>
    );
  }
  return (
    <>
      <Header {...headerProps} />
      <NavPanel />
      <HeroSection />
      <BookArrivals {...headerProps} bookData={bookData} />
    </>
  );
};
