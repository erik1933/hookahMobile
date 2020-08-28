import React from "react";
import PropTypes from "prop-types";
import {nanoid} from 'nanoid';

//styles
import styles from './Hookah.module.scss';

//common components
import HookahImg from "../../../common/HookahElements/HookahImg";
import HookahName from "../../../common/HookahElements/HookahName";
import HookahRating from "../../../common/HookahElements/HookahRating";
import HookahBadge from "../../../common/HookahElements/HookahBadge";
import HookahCreatorImg from "../../../common/HookahElements/HookahCreatorImg";
import HookahCreatorName from "../../../common/HookahElements/HookahCreatorName";
import HookahIcon from "../../../common/HookahElements/HookahIcon";
import HookahKeyword from "../../../common/HookahElements/HookahKeyword";


const Hookah = ({
                  img,
                  name,
                  rating,
                  creatorImg,
                  creatorName,
                  icon,
                  keywords,
                  isNew
                }) => {
  return (
    <div className={styles.Hookah}>
      <div className={styles.Hookah__img}>
        <HookahImg imgSrc={img} />
      </div>
      <div className={styles.Hookah__details}>
        <div className={styles.Hookah__details_nameAndRating}>
          <HookahName label={name} />
          {
            isNew ? <HookahBadge /> : <HookahRating label={rating}/>
          }
        </div>
        <div className={styles.Hookah__details_creator}>
          <p className={styles.creator__about}>
            <HookahCreatorImg imgSrc={creatorImg} imgAlt={creatorName} />
            <HookahCreatorName label={creatorName} />
          </p>
          <div className={styles.creator__icon}>
            <HookahIcon imgSrc={icon} imgAlt="icon" />
          </div>
        </div>
        <div className={styles.Hookah__details_keywords}>
          {
            keywords.map((keyword) => {
              return (
                <HookahKeyword key={nanoid()} label={keyword} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

Hookah.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.string,
  creatorImg: PropTypes.string,
  creatorImgAlt: PropTypes.string,
  creatorName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  keywords: PropTypes.array, // <-- Array
  isNew: PropTypes.bool // <-- Boolean
}


export default Hookah;