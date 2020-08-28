import React from "react";

//styles
import styles from './Mix.module.scss';

//components
import MixHeader from "../../components/MixHeader";
import MixAbout from "../../components/MixAbout";


const Mix = () => {
  return (
    <div className={styles.Mix}>
      <MixHeader />
      <MixAbout />
    </div>
  );
};


export default Mix;