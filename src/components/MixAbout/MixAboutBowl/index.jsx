import React from "react";

//styles
import styles from './MixAboutBowl.module.scss';

//hoc
import withMixAboutItem from "../../../hoc/MixAboutItem";


const MixAboutBowl = () => {
  return (
    <div className={styles.MixAboutBowl}>
      <p className={`${styles.MixAboutBowl__detail} ${styles.type}`}>
        <b>Тип:</b> Убивашка
      </p>
      <p className={`${styles.MixAboutBowl__detail} ${styles.material}`}>
        <b>Материал:</b> Глина
      </p>
      <p className={`${styles.MixAboutBowl__detail} ${styles.wormTime}`}>
        <b>Время прогрева:</b> 3 минуты
      </p>
      <p className={`${styles.MixAboutBowl__detail} ${styles.hammering}`}>
        <b>Забивка:</b> Воздушно с колодцем
      </p>
      <p className={`${styles.MixAboutBowl__detail} ${styles.cap}`}>
        <b>Колпак</b>
      </p>
    </div>
  );
};


export default withMixAboutItem(MixAboutBowl);