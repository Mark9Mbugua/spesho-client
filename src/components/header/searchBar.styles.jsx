import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const Search = styled.div`
    margin-bottom: 5px;
    flex-flow: row nowrap;
    justify-content: right;
    display: flex;
    position: relative;
    align-items: center;
`;

export const SearchGlass = styled(SearchIcon)`
    padding: 0 2px;
    cursor: pointer;
    position: absolute;
    color: grey;
    height: 30px;
    z-index: 10;
`;

export const SearchBarInput = styled.input`
    padding: 4px;
    height: 30px;
    width: 350px;
    border-radius: 3px;
    border: none;
    outline: none;
    &::placeholder {
        padding-left: 25px;
    }

    &:focus {
        opacity: 0.9;
        outline: none;
        padding-left: 25px; 
        &::placeholder {
            padding-left: 5px;
        }
    }
`;
