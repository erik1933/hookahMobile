import React from "react";

//styles
import styles from './FamousCompilationsCarousel.module.scss';


const FamousCompilationsCarousel = () => {
  return (
    <div className={styles.FamousCompilationsCarousel}>
      <div className={styles.FamousCompilationsCarousel__item}>
        compliation 1
      </div>
      <div className={styles.FamousCompilationsCarousel__dots}>
        <div className={styles.FamousCompilationsCarousel__dots_dot}></div>
        <div className={styles.FamousCompilationsCarousel__dots_dot}></div>
        <div className={styles.FamousCompilationsCarousel__dots_dot}></div>
      </div>
    </div>
  );
};


export default FamousCompilationsCarousel;