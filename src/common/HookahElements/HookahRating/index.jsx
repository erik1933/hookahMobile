import React from "react";
import PropTypes from "prop-types";

//styles
import styles from './HookahRating.module.scss';

function ratingColor(rate) {
  if(parseFloat(rate) < 3) {
    return '#C22020';
  } else if(parseFloat(rate) >= 3 && parseFloat(rate) < 4) {
    return '#FF4D00';
  } else if(parseFloat(rate) >= 4) {
    return '#23C220';
  }
}

const HookahRating = ({label}) => {


  return (
    <p
      className={styles.HookahRating}
      style={{
        color: ratingColor(label)
      }}
    >
      {label}
    </p>
  );
}

HookahRating.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};


export default HookahRating