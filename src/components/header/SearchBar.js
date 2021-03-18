import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { 
Search,
SearchGlass, 
SearchBarInput 
} from './searchBar.styles';

const SearchBar = ({ openResultsModal, showResultsModal, input, setInput }) => {

  return (
    <Search>
      <SearchGlass />
      <SearchBarInput 
        type="search" 
        placeholder="Search.." 
        aria-label="Search"
        onClick={openResultsModal} 
        showResultsModal={showResultsModal}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Search>
  );
}

export default SearchBar
