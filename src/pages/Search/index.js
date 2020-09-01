import React from "react";

//components
import SearchForm from "../../components/SearchForm";
import FilterForm from "../../components/FilterForm";
import Hookahs from "../../components/Hookahs";

//styles
import styles from './Search.module.scss';


const Search = () => {
  return (
    <div className={styles.Search}>
      <SearchForm />
      <FilterForm />
      <Hookahs />
    </div>
  );
};

export default Search;