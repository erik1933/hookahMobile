import React from "react";

//styles
import styles from './Recipe.module.scss';

//common components
import MixCustomList from "../../../common/AddMixElements/MixCustomList";

//components
import TobaccPercentField from "./TobaccPercentField";

const Recipe = () => {

  return (
    <div className={styles.Recipe}>
      <h3 className={styles.Recipe__heading}>
        Состав
      </h3>

      <MixCustomList
        labelValue="Производитель табака:"
        btnValue="Daily Hookah"
      />

      <MixCustomList
        labelValue="Вкус табака"
        btnValue="Яблочный пирог"
      />

      <TobaccPercentField />

      <button className={styles.Recipe__submit} type="button">
        Добавить табак
      </button>
    </div>
  )
};

export default Recipe;