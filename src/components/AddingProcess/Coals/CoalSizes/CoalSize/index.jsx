import React, {useState} from "react";

//styles
import styles from './CoalSize.module.scss';


const CoalSize = ({label, id, onSelect, selected}) => {
  return (
    <button
      onClick={() => onSelect(id)}
      id={id}
      type="button"
      className={`${styles.CoalSize} ${selected ? styles.selected : ''}`}
    >
      {label}
    </button>
  )
}

export default CoalSize;