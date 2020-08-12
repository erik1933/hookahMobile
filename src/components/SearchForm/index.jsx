import React, {useState} from "react";

//styles
import styles from './SearchForm.module.scss';

//components
import FoundResults from "./FoundResults";

//assets
import filerIcon from '../../assets/filter-icon.svg';
import searchIcon from '../../assets/search-icon.svg';


const SearchForm = () => {

  const [searching, setSearching] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const handleSearch = (e) => {
    e.target.value ? setSearching(true) : setSearching(false);
    !e.target.value ? setCollapse(true) : setCollapse(false);
  }

  return (
    <div className={styles.SearchForm}>
      <div className={styles.SearchForm__field}>
        <div className={styles.SearchForm__field_input}>
          <input type="text" name="search"
                 placeholder="Поиск"
                 onChange={handleSearch}
          />
        </div>
        <FoundResults collapsed={collapse}/>
        <img className={styles.SearchForm__field_icon} src={searchIcon} alt=""/>
      </div>
      <button className={styles.SearchForm__filter}>
        <img src={filerIcon} alt=""/>
      </button>
    </div>
  )
};


export default SearchForm;