import React from "react";
import {nanoid} from 'nanoid';


//styles
import styles from './RaitingsBy.module.scss';

//components
import RatingBy from "./RatingBy";


const ratingBy = [
  'Микс', 'Кальянщик', 'Кальянная'
];


const RatingsBy = () => {
  return (
    <div className={styles.RatingsBy}>
      <h3 className={styles.RatingsBy__heading}>
        Рейтинг:
      </h3>
      <div className={styles.RatingsBy__types}>
        {
          ratingBy.map((by) => {
            return (
              <RatingBy label={by} key={nanoid()} />
            )
          })
        }
      </div>
    </div>
  );
};


export default RatingsBy;