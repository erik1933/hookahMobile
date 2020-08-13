import React, {useState} from "react";


//styles
import styles from './SearchForm.module.scss';

//components
import FoundResults from "./FoundResults";
import SearchKeyword from "../../common/SearchKeyword";
import HookahKeywordChip from "../../common/HookahKeywordСhip";

//assets
import filterIcon from '../../assets/filter-icon.svg';
import searchIcon from '../../assets/search-icon.svg';
import deleteItemIcon from '../../assets/delete-cross.svg';



//constants
import keywrods from "../../constants/keywords";
import FoundResult from "./FoundResults/FoundResult";


const SearchForm = () => {

  const [searching, setSearching] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [foundResults, setFoundResults] = useState([]);
  const [foundResultsArr, setFoundResultsArr] = useState([]);

  const handleSearch = (e) => {
    e.target.value ? setSearching(true) : setSearching(false);
    !e.target.value ? setCollapse(true) : setCollapse(false);

    const results = keywrods.filter((keyword) => {
      if (e.target.value) {
        return keyword.toLowerCase().startsWith(e.target.value.toLowerCase());
      }
    });

    setFoundResults(results);
  }


  const handleKeywordSelect = (keyword, keywords, setKeywords) => {

    const newKeywords = keywords.filter((elem) => elem !== keyword);
    setKeywords(newKeywords);

    setFoundResultsArr((prevArr) => [...prevArr, keyword]);
  }

  const handleKeywordDelete = (keyword) => {
    const newArr = foundResultsArr.filter((elem) => elem !== keyword);

    setFoundResultsArr(newArr);


    setFoundResults((prevState) => [...prevState])
  }



  return (
    <div className={styles.SearchForm}>
      <div className={styles.SearchForm__field}>
        <div className={`${styles.SearchForm__field_input} ${searching ? styles.active : ''}`}>
          <div className={styles.SearchForm__field_input_chips}>
            {
              foundResultsArr.map((elem) => {
                return (
                  <SearchKeyword
                    label={elem}
                  >
                    <button onClick={() => handleKeywordDelete(elem)}>
                      <img src={deleteItemIcon} alt="cross"/>
                    </button>
                  </SearchKeyword>
                );
              })
            }
            <input type="text" name="search"
                   placeholder="Поиск"
                   onChange={handleSearch}
            />
          </div>

        </div>
        <FoundResults collapsed={collapse}
                      results={foundResults}
                      onKeywordSelect={handleKeywordSelect}
        />
        <img className={styles.SearchForm__field_icon} src={searchIcon} alt=""/>
      </div>
      <button className={styles.SearchForm__filter}>
        <img src={filterIcon} alt=""/>
      </button>
    </div>
  )


};


export default SearchForm;