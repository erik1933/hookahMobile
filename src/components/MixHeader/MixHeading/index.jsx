import React from "react";

//styles
import styles from './MixHeading.module.scss';

//assets
import chevronLeft from '../../../assets/chevron-left.svg';
import editPencil from '../../../assets/edit-pencil.svg';


const MixHeading = () => {
  return (
    <div className={styles.MixHeading}>
      <button className={styles.MixHeading__backBtn}>
        <img src={chevronLeft} alt=""/>
      </button>
      <h2 className={styles.MixHeading__heading}>
        Секс на пляже
      </h2>
      <button className={styles.MixHeading__editBtn}>
        <img src={editPencil} alt=""/>
      </button>

    </div>
  );
};

export default MixHeading;