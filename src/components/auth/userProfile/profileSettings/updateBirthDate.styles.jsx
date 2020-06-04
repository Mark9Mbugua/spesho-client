import styled from 'styled-components';

export const DateForm = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`;

export const SetDate = styled.div`
    padding-right: 8px;
`;

export const DateButton = styled.button`
    background-color: ${ props => props.theme.primary };
    color: white;
    border: none;
    border-radius: 2px;
    padding: 0 10px;
    height: 28px;
    transition: transform 80ms ease-in;

    &:hover {
        opacity: 0.9;
        outline: none;
    }

    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }
`;