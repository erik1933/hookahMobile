import React from "react";

//components
import MixHeading from "./MixHeading";
import MixAuthor from "./MixAuthor";

//styles
import styles from  './MixHeader.module.scss';


const MixHeader = () => {
  return (
    <div className={styles.MixHeader}>
      <MixHeading />
      <MixAuthor />
    </div>
  );
};


export default MixHeader;