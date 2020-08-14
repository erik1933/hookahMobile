import React, {useState} from "react";

//styles
import styles from './CoalsQuantity.module.scss';


const CoalsQuantity = () => {

  const [coalsQuantity, setCoalsQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setCoalsQuantity((prevState) => {
      return prevState <= 1 ? 1 : prevState - 1;
    });
  };

  const handleIncreaseQuantity = () => {
    setCoalsQuantity((prevState) => prevState +1);
  };

  return (
    <div className={styles.CoalsQuantity}>
      <span className={styles.CoalsQuantity__text}>
        Количество։
      </span>
      <div className={styles.CoalsQuantity__select}>
        <button
          type="button"
          className={styles.CoalsQuantity__select_decrement}
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <span className={styles.CoalsQuantity__select_value}>
          {coalsQuantity}
        </span>
        <button
          type="button"
          className={styles.CoalsQuantity__select_increment}
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CoalsQuantity