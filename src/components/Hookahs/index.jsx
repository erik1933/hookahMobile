import React from "react";

//styles
import styles from './Hookahs.module.scss';

//components
import Hookah from "./Hookah";

// constants
import hookahs from "../../constants/Hookahs";


const Hookahs = () => {

  return (
    <div className={styles.Hookahs}>

      {
        hookahs.map((hookah) => {
          return (
            <Hookah
              key={hookah.id}
              img={hookah.img}
              name={hookah.name}
              rating={hookah.rating}
              creatorImg={hookah.creatorImg}
              creatorName={hookah.creatorName}
              icon={hookah.icon}
              keywords={hookah.keywords}
              isNew={hookah.isNew}
            />
          );
        })
      }


    </div>
  )
}

export default Hookahs;