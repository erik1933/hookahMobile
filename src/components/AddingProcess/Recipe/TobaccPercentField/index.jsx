import React from "react";

//styles
import styles from './TobaccPercentField.module.scss';


const TobaccPercentField = () => {
  return (
    <div className={styles.TobaxxPercentField}>
      <label htmlFor="percent">
        Процент табака:
      </label>
      <input type="text" name="percent" value="55"/>
    </div>
  )
};

export default TobaccPercentField;