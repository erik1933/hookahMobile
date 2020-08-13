import React from "react";

//assets
import deleteItemIcon from '../../assets/delete-cross.svg';



const HookahKeywordChip = ({onDelete}) => {
  return (
    <button onClick={onDelete}>
      <img src={deleteItemIcon} alt="cross"/>
    </button>
  );
}


export default HookahKeywordChip;