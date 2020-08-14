import React from "react";

//styles
import styles from './Coals.module.scss';

//common components
import MixCustomList from "../../../common/AddMixElements/MixCustomList";

//components
import CoalSizes from "./CoalSizes";
import CoalsQuantity from "./CoalsQuantity";




const Coals = () => {
  return (
    <div className={styles.Coals}>
      <h3 className={styles.Coals__heading}>
        Угли
      </h3>

      <MixCustomList
        labelValue="Тип:"
        btnValue="Кокосовые"
      />

      <CoalSizes />

      <CoalsQuantity />

    </div>
  )
};

export default Coals