import React from "react";

//styles
import styles from './RatingBy.module.scss';


const RatingBy = ({label}) => {
  return (
    <p className={styles.RatingBy}>
      {label}
    </p>
  );
};


export default RatingBy;