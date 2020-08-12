import React from "react";
import PropTypes from 'prop-types';

//styles
import styles from './HookahCreatorImg.module.scss';


const HookahCreatorImg = ({imgSrc, imgAlt}) => {
  return (
    <img src={imgSrc} alt={imgAlt} />
  );
}

HookahCreatorImg.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string
};

export default HookahCreatorImg;