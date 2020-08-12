import React from "react";
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
                  alt,
                  name,
                  rating,
                  creatorImg,
                  creatorImgAlt,
                  creatorName,
                  icon,
                  iconAlt,
                  keywords,
                  isNew
                }) => {
  return (
    <div className={styles.Hookah}>
      <div className={styles.Hookah__img}>
        <HookahImg imgAlt={alt} imgSrc={img} />
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
            <HookahCreatorImg imgSrc={creatorImg} imgAlt={creatorImgAlt} />
            <HookahCreatorName label={creatorName} />
          </p>
          <div className={styles.creator__icon}>
            <HookahIcon imgSrc={icon} imgAlt={iconAlt} />
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


export default Hookah;