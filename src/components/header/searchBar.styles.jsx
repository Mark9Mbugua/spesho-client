import styled from 'styled-components';

export const SearchBarForm = styled.form`
    margin-bottom: 3px;
    flex-flow: row nowrap;
    justify-content: left;
    display: flex;
    
    .search-icon {
        padding: 0 5px;
        height: 30px;
        cursor: pointer;
        margin-right: 10%;
    }
`
export const SearchBarInput = styled.input`
    padding: 4px;
    height: 30px;
    width: 350px;
    border-radius: 3px;
    border: none;

    &:focus {
        opacity: 0.9;
        outline: none;
    }
` 