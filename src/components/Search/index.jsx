import React from 'react';
import styles from './Search.module.scss';

import { SearchContext } from '../../App';

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск пиццы"
        className={styles.input}
      />
    </div>
  );
}
