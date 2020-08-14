import React from "react";

//styles
import styles from './WarmHood.module.scss';


const WarmHood = () => {
  return (
    <div className={styles.WarmHood}>
      <span className={styles.WarmHood__text}>
        Греть под колпаком?
      </span>
      <input type="checkbox" className={styles.WarmHood__checkbox} name="warmHood"/>
    </div>
  )
};


export default WarmHood;