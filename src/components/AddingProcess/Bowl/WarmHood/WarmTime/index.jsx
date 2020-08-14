import React, {useState} from "react";

//styles
import styles from './WarmTime.module.scss';


const WarmTime = () => {

  const [warmTime, setWarmTime] = useState(3);

  const handleTimeDecrease = () => {
    setWarmTime((prevState) => prevState <= 1 ? 1 : prevState - 1);
  }

  const handleTimeIncrease = () => {
    setWarmTime((prevState) => prevState + 1);
  }

  return (
    <div className={styles.WarmTime}>
      <span className={styles.WarmTime__text}>
        Время прогрева (мин):
      </span>
      <div className={styles.WarmTime__select}>
        <button
          type="button"
          className={styles.WarmTime__select_decrement}
          onClick={handleTimeDecrease}
        >
          -
        </button>
        <span className={styles.WarmTime__select_value}>
          {warmTime}
        </span>
        <button
          type="button"
          className={styles.WarmTime__select_increment}
          onClick={handleTimeIncrease}
        >
          +
        </button>
      </div>
    </div>
  )
};


export default WarmTime;