import React from "react";
import PropTypes from 'prop-types';

const HookahImg = ({imgSrc, imgAlt}) => {
  return <img src={imgSrc} alt={imgAlt} />
}

HookahImg.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}

export default HookahImg;