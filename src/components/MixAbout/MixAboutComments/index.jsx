import React from "react";

//styles
import styles from './MixAboutComments.module.scss';

//hoc
import withMixAboutItem from "../../../hoc/MixAboutItem";


const MixAboutComments = () => {
  return (
    <p className={styles.MixAboutComments}>
      Разнообразный и богатый опыт говорит нам, что убеждённость некоторых оппонентов способствует повышению качества
      приоритизации разума над эмоциями. Значимость этих проблем настолько очевидна, что семантический разбор внешних
      противодействий играет важную роль в формировании стандартных подходов. Противоположная точка зрения
      подразумевает, что тщательные исследования конкурентов лишь добавляют фракционных разногласий и обнародованы.
      Современные технологии достигли такого
    </p>
  );
};


export default withMixAboutItem(MixAboutComments);