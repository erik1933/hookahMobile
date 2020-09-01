import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";


//styles
import styles from './Navbar1Item.module.scss';


const Navbar1Item = ({href, icon, alt}) => {
  return (
    <Link to={href}>
      <img
        className={styles.Navbar1Item}
        src={icon}
        alt={alt}/>
    </Link>
  );
};

Navbar1Item.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string
};

export default Navbar1Item