import React, {useEffect} from "react";

//styles
import styles from './FoundResult.module.scss';


const FoundResult = ({label, onSelect}) => {


  return (
    <button
      className={styles.FoundResult}
      onClick={() => onSelect(label)}
    >
      {label}
    </button>
  )
};


export default FoundResult;