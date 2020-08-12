import React from "react";
import PropTypes from "prop-types";

//styles
import styles from './HookahName.module.scss';


const HookahName = ({label}) => {
  return (
    <h2 className={styles.HookahName}>{label}</h2>
  );
}

HookahName.propTypes = {
  label: PropTypes.string
}

export default HookahName;