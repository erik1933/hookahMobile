import React from "react";


//styles
import styles from './FamousCompilations.module.scss';

//components
import FamousCompilationsCarousel from "./FamousCompilationsCarousel";


const FamousCompilations = () => {
  return (
    <div className={styles.FamousCompilations}>
      <h3 className={styles.FamousCompilations__heading}>
        Популярные подборки:
      </h3>
      <FamousCompilationsCarousel />
    </div>
  );
};


export default FamousCompilations;