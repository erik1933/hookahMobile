import React from "react";

//styles
import styles from './MixAboutTobbaco.module.scss';

//HOC
import withMixAboutItem from "../../../hoc/MixAboutItem";


const MixAboutTobbaco = () => {

  return (
    <div className={styles.MixAboutTobbaco}>
      <div
        className={`${styles.MixAboutTobbaco__tobbaco} ${styles.tobbaco1}`}
      >
        <h3 className={styles.MixAboutTobbaco__tobbaco_name}>
          Darkside
        </h3>
        <div className={styles.MixAboutTobbaco__tobbaco_details}>
          <span className={styles.MixAboutTobbaco__tobbaco_taste}>
            Яблочный пирог
          </span>
          <span className={styles.MixAboutTobbaco__tobbaco_percentage}>
            60%
          </span>
        </div>
      </div>
      <div
        className={`${styles.MixAboutTobbaco__tobbaco} ${styles.tobbaco2}`}
      >
        <h3 className={styles.MixAboutTobbaco__tobbaco_name}>
          Daily Hookah
        </h3>
        <div className={styles.MixAboutTobbaco__tobbaco_details}>
          <span className={styles.MixAboutTobbaco__tobbaco_taste}>
            Вишня
          </span>
          <span className={styles.MixAboutTobbaco__tobbaco_percentage}>
            40%
          </span>
        </div>
      </div>
    </div>
  );
};


export default withMixAboutItem(MixAboutTobbaco);