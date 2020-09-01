import React from "react";

//styles
import styles from './MixAbout.module.scss';

//components
import MixAboutTobbaco from "./MixAboutTobacco";
import MixAboutCoals from "./MixAboutCoals";
import MixAboutBowl from "./MixAboutBowl";
import MixAboutComments from "./MixAboutComments";

//assets
import carbonDiagram from '../../assets/carbon_diagram.svg';
import coals from '../../assets/coals.svg';
import bowl from '../../assets/bowl.svg';
import comments from '../../assets/comments.svg';


const MixAbout = () => {
  return (
    <div className={styles.MixAbout}>
      <MixAboutTobbaco btnLabel='Соотношение тобаков' btnIcon={carbonDiagram} />
      <MixAboutCoals btnLabel='Угли' btnIcon={coals} />
      <MixAboutBowl btnLabel='Чаша' btnIcon={bowl} />
      <MixAboutComments btnLabel='Примичание' btnIcon={comments} />
    </div>
  );
};


export default MixAbout;