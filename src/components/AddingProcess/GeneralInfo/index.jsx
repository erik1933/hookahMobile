import React from "react";

//styles
import styles from './GeneralInfo.module.scss';

//components
import StrongnessScale from "./StrongnessScale";


const GeneralInfo = () => {

  return (
    <div className={styles.GeneralInfo}>
      <h3 className={styles.GeneralInfo__heading}>
        Общяя информация
      </h3>
      <div className={styles.GeneralInfo__name}>
        <label htmlFor="name">
          Название:
        </label>
        <input type="text" name="name" value="Секс на пляже"/>
      </div>

      <StrongnessScale />

    </div>
  )
}

export default GeneralInfo;