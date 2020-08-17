import React from "react";

//styles
import styles from './FilterForm.module.scss';


const FilterList = ({isListOpen}) => {
  return (
    <ul className={`${styles.FilterList} ${isListOpen ? styles.isOpen : ''}`}>
      <li className={styles.FilterList__item}>
        <button>Рейтингу</button>
      </li>
      <li className={styles.FilterList__item}>
        <button>Дате добавления (новые)</button>
      </li>
      <li className={styles.FilterList__item}>
        <button>Дате добавления (старые)</button>
      </li>
    </ul>
  );
};

export default FilterList;