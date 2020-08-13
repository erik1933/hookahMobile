import React from "react";
import PropTypes from "prop-types";

//styles
import styles from './HookahKeyword.module.scss';


const HookahKeyword = ({label}) => {
  return (
    <span className={styles.HookahKeyword}>
      {label}
    </span>
  );
}

HookahKeyword.propTypes = {
  label: PropTypes.string
};


export default HookahKeyword;