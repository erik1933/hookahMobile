import React from "react";
import PropTypes from "prop-types";

//styles
import styles from './HookahCreatorName.scss';

const HookahCreatorName = ({label}) => {
  return (
    <span className={styles.HookahCreatorName}>
      {label}
    </span>
  );
}

HookahCreatorName.propTypes = {
  label: PropTypes.string
};

export default HookahCreatorName;