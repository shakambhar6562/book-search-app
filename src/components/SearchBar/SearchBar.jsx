import React from "react";
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { TailSpin } from "react-loader-spinner";
const SearchBar = (props) => {
  const { searchValue, setSearchValue, handleSearch, isBookDataLoading } = props;
  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.searchBar}>
      <input onKeyDownCapture={handleKeyPress} placeholder="Search" id="search" name="search" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <div onClick={handleSearch} className={styles.icon}>
        {isBookDataLoading ? <TailSpin color="white" width={80} height={80} /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
      </div>
    </div>
  );
};

export default SearchBar;
