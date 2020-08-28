import React from "react";

//styles
import styles from './Note.module.scss';


const Note = () => {
  return (
    <div className={styles.Note}>
      <h3 className={styles.Note__heading}>
        Примичание
      </h3>
      <textarea
        name="note"
        className={styles.Note__field}
        placeholder="Если необходимо, добавьте примечание для своего микса"
      />
    </div>
  );
};


export default Note;