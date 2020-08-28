import React, {useState} from "react";

//styles
import styles from './FilterForm.module.scss';

//assets
import dice from '../../assets/dice.svg';
import arrowAngleDown from '../../assets/arrow-angle-down.svg';

//components
import FilterList from "./FilterList";


const FilterForm = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.FilterForm}>
      <img src={dice} alt="" className={styles.FilterForm__img}/>
      <div className={styles.FilterForm__container}>
        <button
          className={`${styles.FilterForm__btn} ${isOpen ? styles.isOpen : ''}`}
          onClick={handleOpen}
        >
          <span>Сортировать по:</span> <img src={arrowAngleDown} alt={isOpen ? 'arrow up' : 'arrow down'}/>

        </button>
        <FilterList isListOpen={isOpen}/>

      </div>
    </div>
  )
};


export default FilterForm;