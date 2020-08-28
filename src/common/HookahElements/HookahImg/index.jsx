import React from "react";
import PropTypes from 'prop-types';

const HookahImg = ({imgSrc}) => {
  return <img src={imgSrc} alt="hookah" />
}

HookahImg.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}

export default HookahImg;