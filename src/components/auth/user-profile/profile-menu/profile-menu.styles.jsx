import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


export const ProfileItemsList = styled.ul`
    display: flex;
    width: 100%;

    .menu-item ul {
        display: none;
    }

    .menu-item:hover ul {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: -1%;
        min-width: 13rem;
        right: 5rem;
        background: #ccc;
        z-index: 1;
        border-radius: 0.8rem; 
    }

    @media screen and (max-width: 1366px) {
        .menu-item:hover ul {
            margin-top: -1.2%;
        }
    }

    @media screen and (max-width: 1280px) {
        .menu-item:hover ul {
            margin-top: -1.5%;
            min-width: 14rem;
            right: 4rem;
            border-radius: 0.8rem; 
        }
    }
`;

export const ItemLink = styled(Link)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 8vh;
    color: ${ props => props.theme.primary };
    padding: 0 1rem;
    font-size: 1.3rem;
    text-decoration: none;
    border-radius: 0.5rem;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
        text-decoration: none;
        color: #000;
    }

    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
    }

    &::after {
        content: '';
        height: 2px;
        width: 0;
        background: ${ props => props.theme.primary };
        display: block;
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        transform: width;
        width: 125%;
    }

    @media screen and (max-width: 768px) {
        display:block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #6F6B5D;
        height: 100%;
        line-height: 70px;
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }
`;