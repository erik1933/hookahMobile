import React from "react";

//styles
import styles from './Bowl.module.scss';

//common components
import MixCustomList from "../../../common/AddMixElements/MixCustomList";
import WarmHood from "./WarmHood";
import WarmTime from "./WarmHood/WarmTime";


const Bowl = () => {
  return (
    <div className={styles.Bowl}>
      <h3 className={styles.Bowl__heading}>
        Чаша
      </h3>

      <MixCustomList
        labelValue="Тип чаши:"
        btnValue="Убивашка"
      />

      <MixCustomList
        labelValue="Материал чаши:"
        btnValue="Силикон"
      />

      <MixCustomList
        labelValue="Технология забивки:"
        btnValue="Воздушно с колодцем"
      />

      <WarmHood />

      <WarmTime />

    </div>
  )
};

export default Bowl;