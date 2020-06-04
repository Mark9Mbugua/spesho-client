import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileNavbarContainer = styled.nav`
    top: 50px;
    width: 100vw;
    height: calc(100vh - 50px);
    background: ${ props => props.theme.primary };
    transition: transform 0.5s;
    transform: translateX( ${ props => props.displayMobileNavbar ? ("0%"): ("100%") });
    position: absolute;
`;

export const NavLinks = styled.ul`
    display: block;
    text-align: center;
    list-style: none;
`;

export const MenuLinks = styled.li`
    border-bottom: 1px solid #6F6B5D;
    height: 70px;
    line-height: 70px;
`;

export const MenuLink = styled(Link)`
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
        text-decoration: none;
        color: white;
    }
`;