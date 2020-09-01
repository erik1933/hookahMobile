import React from "react";
import {PieChart} from "react-minimal-pie-chart";


//styles
import styles from './MixAboutTobbaco.module.scss';

//HOC
import withMixAboutItem from "../../../hoc/MixAboutItem";

//components
import MixAboutTobaccoPieChart from "./MixAboutTobaccoPieChart";


const MixAboutTobbaco = () => {
  return (
    <div className={styles.MixAboutTobbaco}>
      <MixAboutTobaccoPieChart>
        <PieChart
          lineWidth={20}
          startAngle={125}
          paddingAngle={20}
          rounded={true}
          data={[
            {value: 30, color: '#3D81C0'},
            {value: 12, color: '#3DC062'},
          ]}
        />
      </MixAboutTobaccoPieChart>

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