import React from "react";

//styles
import styles from './AddMix.module.scss';

//components
import AddingProcess from "../../components/AddingProcess";


const AddMix = () => {


  return (
    <div className={styles.AddMix}>
      <div className={styles.wrapper}>
        <div className={styles.AddMix__content}>
          <h2 className={styles.AddMix__heading}>
            Создание микса
          </h2>
          <AddingProcess />
        </div>
      </div>
    </div>
  )
};


export default AddMix;