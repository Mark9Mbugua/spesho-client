import styled from 'styled-components';

export const DateForm = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    .date-picker {
        padding-right: 8px;
    }

    .date-button {
        background-color: ${ props => props.theme.primary };
        color: white;
        border: none;
        border-radius: 2px;
        padding: 0 10px;
        height: 28px;
        transition: transform 80ms ease-in;
    }

    .date-button:active {
        transform: scale(0.95);
    }

    .date-button:focus {
        outline: none;
    }

    .date-button:hover {
        opacity: 0.9;
    }
`