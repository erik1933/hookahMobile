import React from "react";

//styles
import styles from './MixAuthor.module.scss';

//assets
import authorImg from '../../../assets/shamil.png';


const MixAuthor = () => {
  return (
    <div className={styles.MixAuthor}>
      <img className={styles.MixAuthor__img} src={authorImg} alt=""/>
      <span className={styles.MixAuthor__name}>Шамиль Шахиев</span>
    </div>
  );
};


export default MixAuthor;