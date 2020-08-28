import React from "react";

//styles
import styles from './MixAboutCoals.module.scss';

//hoc
import withMixAboutItem from "../../../hoc/MixAboutItem";


const MixAboutCoals = () => {
  return (
    <div className={styles.MixAboutCoals}>
      <p className={styles.MixAboutCoals__detail}>
        <b>Тип:</b> Кокосовые
      </p>
      <p className={styles.MixAboutCoals__detail}>
        <b>Размер:</b> 25мм
      </p>
      <p className={styles.MixAboutCoals__detail}>
        <b>Количество:</b> 3 штуки
      </p>
    </div>
  );
};


export default withMixAboutItem(MixAboutCoals);