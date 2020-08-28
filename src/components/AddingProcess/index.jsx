import React from "react";

//styles
import styles from './AddingProcess.module.scss';

//components
import GeneralInfo from "./GeneralInfo";
import Recipe from "./Recipe";
import Coals from "./Coals";
import Bowl from "./Bowl";
import Note from "./Note";



const AddingProcess = () => {

  return (
    <form className={styles.AddingProcess}>
      <GeneralInfo />
      <Recipe />
      <Coals />
      <Bowl />
      <Note />

      <button className={styles.AddingProcess__submit}>
        Создать микс
      </button>
    </form>
  )

};

export default AddingProcess;