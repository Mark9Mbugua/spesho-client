import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { 
SearchBarForm, 
SearchBarInput 
} from './searchBar.styles';

const SearchBar = () => {

  return (
    <SearchBarForm>
        <SearchBarInput type="search" placeholder="Search.." aria-label="Search" />
        <div className="search-icon">
          <SearchIcon />
        </div>
    </SearchBarForm>
  );
}

export default SearchBar
