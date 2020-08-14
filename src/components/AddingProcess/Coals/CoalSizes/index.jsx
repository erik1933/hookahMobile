import React, {useState} from "react";

//styles
import styles from './CoalSizes.module.scss';

//components
import CoalSize from "./CoalSize";

const CoalSizes = () => {

  // const coalSizes = [22, 25, 28, 31];
  const [coalSizes, setCoalSizes] = useState([
    {
      value: 22,
      selected: false
    },
    {
      value: 25,
      selected: false
    },
    {
      value: 28,
      selected: false
    },
    {
      value: 31,
      selected: false
    },
  ]);

  const handleSizeSelect = (id) => {
    const newCoalSizes = coalSizes.map((elem) => {
      if (elem.value === id) {
        return {
          ...elem,
          selected: true
        }
      } else {
        return {
          ...elem,
          selected: false
        }
      }
    })

    setCoalSizes(newCoalSizes);

  }


  return (
    <div className={styles.CoalSizes}>
      <span className={styles.CoalSizes__text}>
        Размер (мм):
      </span>
      <div className={styles.CoalSizes__sizes}>

        {
          coalSizes.map((coalSize) => {
            return (
              <CoalSize
                label={coalSize.value}
                key={coalSize.value}
                id={coalSize.value}
                onSelect={handleSizeSelect}
                selected={coalSize.selected}
              />
            )
          })
        }

      </div>
    </div>
  )
};


export default CoalSizes