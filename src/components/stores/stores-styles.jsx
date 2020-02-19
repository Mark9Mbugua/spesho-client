import styled from 'styled-components';

export const StoresList = styled.ul`
    display: flex;

    .menu-item ul {
        display: none;
    }

    .menu-item:hover ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: -1%;
        max-width:380px;
        background: ${ props => props.theme.primary };
        z-index: 1;
    }
`