import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileNavbarContainer = styled.nav`
    top: 8vh;
    width: 100vw;
    height: calc(100vh - 8vh);
    background: ${ props => props.theme.primary };
    transition: transform 0.5s;
    transform: translateX( ${ props => props.displayMobileNavbar ? ("0%"): ("100%") });
    position: absolute;
    z-index: 5;

    @media screen and (max-width: 320px) {
        top: 10vh;
    }
`;

export const NavLinks = styled.ul`
    display: block;
    text-align: center;
    list-style: none;
    margin: 0;
`;

export const MenuLinks = styled.li`
    border-bottom: 1px solid #6F6B5D;
    height: 4.4rem;
`;

export const AuthLinks = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
`;

export const MenuLink = styled(Link)`
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
        text-decoration: none;
    }
`;