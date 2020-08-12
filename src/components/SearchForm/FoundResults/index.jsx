import React from "react";

//styles
import styles from './FoundResults.module.scss';

//components
import FoundResult from "./FoundResult";

const FoundResults = ({collapsed}) => {
  return (
    <div className={`${styles.FoundResults} ${collapsed ? styles.collapsed : null}`}>
      Ничего не найдено
    </div>
  )
};

export default FoundResults;