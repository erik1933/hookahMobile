import React from "react";

//styles
import styles from './Navbar1.module.scss';

//constants
import navlinks from '../../constants/navlinks';

//components
import Navbar1Item from "./Navbar1Item";

const Navbar1 = () => {
  return (
    <nav className={styles.Navbar1}>
      <ul className={styles.Navbar1__links}>
        {
          navlinks.map((link) => {
            return (
              <li key={link.id}>
                <Navbar1Item alt={link.alt} icon={link.src} href={link.href}/>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar1;