import React from "react";

//styles
import styles from './DaysMixDetails.module.scss';

//assets
import hookah from '../../../assets/o-beach.png';
import creatorImg from '../../../assets/greyson.png';

//components
import DaysMixBadge from "./DaysMixBadge";
import DaysMixKeyword from "./DaysMixKeyword";


const DaysMixDetails = () => {
  return (
    <div className={styles.DaysMixDetails}>
      <div className={styles.DaysMixDetails__img}>
        <img src={hookah} alt=""/>
      </div>
      <div className={styles.DaysMixDetails__info}>
        <div className={styles.DaysMixDetails__info_name}>
          <h4>Злая Аня</h4>
          <DaysMixBadge />
        </div>
        <div className={styles.DaysMixDetails__info_creator}>
          <img src={creatorImg} alt=""/>
          <h5 className={styles.creator__name}>Шамиль Шахиев</h5>
          <span className={styles.rating}>8Б</span>
        </div>
        <div className={styles.DaysMixDetails__info_keywords}>
          <DaysMixKeyword />
        </div>
      </div>
    </div>
  );
};


export default DaysMixDetails;