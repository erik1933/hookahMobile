import React from "react";

//styles
import styles from './WarmHood.module.scss';
import './cstmInput.css';


const WarmHood = () => {
  return (
    <div className={styles.WarmHood}>
      <span className={styles.WarmHood__text}>
        Греть под колпаком?
      </span>

      <label className="b-contain">
        {/*<span>First checkbox</span>*/}
        <input type="checkbox"/>
        <div className="b-input"></div>
      </label>

    </div>
  )
};


export default WarmHood;