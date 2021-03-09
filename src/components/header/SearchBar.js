import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { 
Search,
SearchGlass, 
SearchBarInput 
} from './searchBar.styles';

const SearchBar = () => {

  return (
    <Search>
      <SearchGlass />
      <SearchBarInput type="search" placeholder="Search.." aria-label="Search" />
    </Search>
  );
}

export default SearchBar
