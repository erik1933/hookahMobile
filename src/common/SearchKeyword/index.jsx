import React from "react";


//styles
import styles from './SearchKeyword.module.scss';

//assets


const SearchKeyword = ({label, children}) => {
  return (
    <p className={styles.SearchKeyword}>
      <span>{label}</span>
      {children}
    </p>
  );
}


export default SearchKeyword;