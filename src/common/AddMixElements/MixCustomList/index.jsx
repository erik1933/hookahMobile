import React from "react";
import PropTypes from "prop-types";

//styles
import styles from './MixCustomList.module.scss';

//assets
import arrowAngleDown from "../../../assets/arrow-angle-down.svg";


const MixCustomList = ({labelValue, btnValue}) => {
  return (
    <div className={styles.MixCustomList}>
      <span className={styles.MixCustomList__label}>
        {labelValue}
      </span>
      <div className={styles.MixCustomList__list}>
        <button type="button">
          {btnValue}
        </button>
        <img src={arrowAngleDown} alt=""/>
      </div>
    </div>
  )
};

MixCustomList.propTypes = {
  labelValue: PropTypes.string,
  btnValue: PropTypes.string
};

export default MixCustomList