import React, {useState, useEffect} from "react";

//styles
import styles from './FoundResults.module.scss';

//components

import FoundResult from "./FoundResult";

//assets




const FoundResults = ({collapsed, results, onKeywordSelect}) => {
  const [keywords, setKeywords] = useState([])


  useEffect(()=> {
    setKeywords(results);
  },[results]);



  return (
    <div className={`${styles.FoundResults} ${collapsed ? styles.collapsed : ''}`}>
      {
        keywords.length ? (
          keywords.map((result) => {
            return (
              <FoundResult
                label={result}
                onSelect={() => onKeywordSelect(result, keywords, setKeywords)}
              />

            );
          })
        ) : (
          <span>Ничего не найдено</span>
        )
      }
    </div>
  )
};

export default FoundResults;