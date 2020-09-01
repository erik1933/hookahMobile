import React from "react";
import {PieChart} from 'react-minimal-pie-chart';

//assets
import greenHookahImg from '../../../../assets/hoocah-icon-green.svg';


//styles
import styles from './MixAboutTobaccoPieChart.module.scss';


const MixAboutTobaccoPieChart = ({children}) => {
  return (
    <div className={styles.MixAboutTobaccoPieChart}>
      {children}
      <img
        className={styles.MixAboutTobaccoPieChart__img}
        src={greenHookahImg}
        alt="Hookah Icon"
      />
    </div>
  );
};

export default MixAboutTobaccoPieChart;