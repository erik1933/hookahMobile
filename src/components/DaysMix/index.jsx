import React from "react";

//styles
import styles from './DaysMix.module.scss';

const DaysMix = ({children}) => {
  return (
    <div className={styles.DaysMix}>
      <h3 className={styles.DaysMix__heading}>
        Микс дня:
      </h3>
      {children}
    </div>
  );
};


export default DaysMix;