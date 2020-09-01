import React from "react";

//styles
import styles from './Mainpage.module.scss';

//components
import MainpageSearchForm from "../../components/MainpageSearchForm";
import FamousCompilations from "../../components/FamousCompilations";
import DaysMix from "../../components/DaysMix";
import DaysMixDetails from "../../components/DaysMix/DaysMixDetails";
import RatingsBy from "../../components/RatingsBy";
import Navbar1 from "../../common/Navbar1";

const Mainpage = () => {
  return (
    <div className={styles.Mainpage}>
      <MainpageSearchForm />
      <FamousCompilations />
      <DaysMix>
        <DaysMixDetails />
      </DaysMix>
      <RatingsBy />
      <button className={styles.Mainpage__addBtn}>
        Собери свой микс!
      </button>
      <Navbar1 />
    </div>
  );
};

export default Mainpage;