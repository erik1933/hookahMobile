import React, {useState} from "react";

//styles
import styles from './FilterForm.module.scss';

//assets
import dice from '../../assets/dice.svg';
import arrowAngleDown from '../../assets/arrow-angle-down.svg';


const FilterForm = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.FilterForm}>
      <img src={dice} alt="" className={styles.FilterForm__img}/>
      <button
        className={`${styles.FilterForm__btn} ${isOpen ? styles.isOpen : null}`}
        onClick={handleOpen}
      >
        <span>Сортировать по:</span> <img src={arrowAngleDown} alt=""/>
      </button>
    </div>
  )
};


export default FilterForm;