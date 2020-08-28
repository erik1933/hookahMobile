import React from "react";

//styles
import styles from './MixAboutItemDetails.module.scss';


const MixAboutItemDetails = ({children, close}) => {
  return (
    <div className={`${styles.MixAboutItemDetails} ${close ? styles.close : ''}`}>
      {children}
    </div>
  );
};


export default MixAboutItemDetails;