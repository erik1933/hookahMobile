import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


//styles
import styles from './StrongnessScale.module.scss';

const useStyles = makeStyles({
  rail: {
    borderRadius: '4px',
    height: '4px',
    backgroundColor: '#ffffff',
    opacity: '1'
  },
  track: {
    height: '4px',
    backgroundColor: '#ffffff'
  },
  thumb: {
    width: '21px',
    height: '21px',
    borderRadius: '6px',
    marginTop: '-8px',
    backgroundColor: '#A3A2A2'
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
    color: '#A3A2A2',
  },

});

const StrongnessScale = () => {

  const [value, setValue] = React.useState([1, 3]);


  const handleChange = (event, newValue) => {

    newValue[1] = newValue[0] + 2;

    if(newValue[1] > 10) {
      newValue[0] = 8;
    }
    setValue(newValue);
  };

  console.log(value[0], value[1]);

  const customClasses = useStyles();

  return (
    <div className={styles.StrongnessScale}>
      <span className={styles.StrongnessScale__text}>
        Крепость микса:
      </span>
      <div className={styles.StrongnessScale__ranges}>

        <Slider
          classes={customClasses}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // getAriaValueText={valuetext}
          min={1}
          max={10}
          step={1}
        />
      </div>
    </div>
  )
};

export default StrongnessScale;