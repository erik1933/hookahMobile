import React, {useState} from "react";

//styles
import styles from './MixAboutItem.module.scss';

//assets
import chevronDown from '../../assets/arrow-angle-down.svg';

//components
import MixAboutItemDetails from "./MixAboutItemDetails";


const withMixAboutItem = (Wrap) => {

  return ({btnLabel, btnIcon}) => {
    const [close, setClose] = useState(false);

    const handleDetailsToggle = () => {
      setClose(!close);
    }

    return (
      <div className={styles.MixAboutItem}>
        <button
          className={styles.MixAboutItem__toggleBtn}
          onClick={handleDetailsToggle}
        >
        <span className={styles.MixAboutItem__toggleBtn_text}>
          <span><img src={btnIcon} alt=""/></span> {btnLabel}
        </span>
          <img
            src={chevronDown}
            alt="Arrow down"
            className={`${styles.MixAboutItem__toggleBtn_arrow} ${close ? styles.close : ''}`}
          />
        </button>
        <MixAboutItemDetails close={close}>
          <Wrap props={{btnLabel, btnIcon}} />
        </MixAboutItemDetails>
      </div>
    );
  };
};


export default withMixAboutItem;