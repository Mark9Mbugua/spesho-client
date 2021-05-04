import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const Search = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`;

export const SearchGlass = styled(SearchIcon)`
    margin: 0 2rem 0 0;
    cursor: pointer;
    position: absolute;
    color: grey;
    height: 1.8rem;
`;

export const SearchBarInput = styled.input`
    height: 1.8rem;
    width: ${props => (props.showResultsModal ? '70rem' : '18rem')};
    border-radius: 3px;
    border: none;
    outline: none;

    &::placeholder {
        padding-left: 1.5rem;
    }

    &:focus {
        opacity: 0.9;
        outline: none;
        padding-left: 1.5rem;
         
        &::placeholder {
            padding-left: 0.3rem;
        }
    }

    @media screen and (max-width: 1024px) {
        width: ${props => (props.showResultsModal ? '43rem' : '15rem')};
    }

    @media screen and (max-width: 768px) {
        width: ${props => (props.showResultsModal ? '32rem' : '20rem')};
    }

    @media screen and (max-width: 600px) {
        width: ${props => (props.showResultsModal ? '25rem' : '15rem')};
    }

    @media screen and (max-width: 550px) {
        width: ${props => (props.showResultsModal ? '23rem' : '15rem')};
    }


    @media screen and (max-width: 480px) {
        width: ${props => (props.showResultsModal ? '18rem' : '15rem')};
    }

    @media screen and (max-width: 320px) {
        width: ${props => (props.showResultsModal ? '15rem' : '12rem')};
    }
`;
