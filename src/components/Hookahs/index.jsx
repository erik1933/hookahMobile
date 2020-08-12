import React from "react";

//styles
import styles from './Hookahs.module.scss';

//components
import Hookah from "./Hookah";

//assets
import hookahImg from '../../assets/kinowell.png';
import hookahImg2 from '../../assets/s-beach.png';
import hookahImg3 from '../../assets/o-beach.png';
import hookahImg4 from '../../assets/bb45.png';

import hookahCreatorImg from '../../assets/greyson.png';

import hookahIcon from '../../assets/hoocah-icon-green.svg';
import hookahIcon2 from '../../assets/hoocah-icon-orange.svg';
import hookahIcon3 from '../../assets/hoocah-icon-red.svg';
import hookahIcon4 from '../../assets/hoocah-icon-black.svg';


const Hookahs = () => {

  return (
    <div className={styles.Hookahs}>
      <Hookah
        img={hookahImg}
        alt="alt"
        name="KINOWELL"
        rating="5.0"
        creatorImg={hookahCreatorImg}
        creatorName="Radamel Falcao"
        icon={hookahIcon}
        iconAlt="alt"
        keywords={['Яблоко', 'Манго', 'Космос']}
        isNew={true}
      />

      <Hookah
        img={hookahImg2}
        alt="alt"
        name="Название микса"
        rating="2.8"
        creatorImg={hookahCreatorImg}
        creatorName="Автор Микса"
        icon={hookahIcon2}
        iconAlt="alt"
        keywords={['Яблоко']}
        isNew={false}
      />

      <Hookah
        img={hookahImg3}
        alt="alt"
        name="Название микса"
        rating="3.6"
        creatorImg={hookahCreatorImg}
        creatorName="Автор Микса"
        icon={hookahIcon3}
        iconAlt="alt"
        keywords={['Яблоко']}
        isNew={false}
      />

      <Hookah
        img={hookahImg4}
        alt="alt"
        name="Название микса"
        rating="5.0"
        creatorImg={hookahCreatorImg}
        creatorName="Автор Микса"
        icon={hookahIcon4}
        iconAlt="alt"
        keywords={['Яблоко']}
        isNew={false}
      />


    </div>
  )
}

export default Hookahs;