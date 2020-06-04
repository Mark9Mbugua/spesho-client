import styled from 'styled-components';

export const MenuList = styled.ul`
    display: flex;
`;

export const MenuItem = styled.li`
    ul {
        display: none;
    }

    &:hover ul {
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
`;