import React from "react";

//styles
import styles from './MainpageSearchForm.module.scss';


const MainpageSearchForm = () => {
  return (
    <div className={styles.MainpageSearchForm}>
      <div className={styles.MainpageSearchForm__field}>
        <div className={styles.MainpageSearchForm__field_icon}>

        </div>
        <input
          className={styles.MainpageSearchForm__field_input}
          type="text"
          placeholder="Поиск микса..."
        />
      </div>
      <div className={styles.MainpageSearchForm__icon}>

      </div>
    </div>
  );
};


export default MainpageSearchForm;