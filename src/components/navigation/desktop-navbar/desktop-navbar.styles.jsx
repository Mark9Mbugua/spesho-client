import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DesktopNavbarContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    background: ${ props => props.theme.primary };
    color: white;
    height: 8vh;
`;

export const CloseIcon = styled.img`
    height: 15px;
    width: 15px;
    margin-left: 10px;
    margin-top: 7px;
    cursor: pointer;
`;

export const Logo = styled.div`
    font-size: 5vh;
    font-weight: bold;
    text-shadow: 3px 3px 3px ${ props => props.theme.accent };
    margin-left: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const LogoLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0 1rem;  
    
    &:hover {
        outline: none;
        color: #ccc;
        text-decoration: none;
    }

    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
        text-decoration: none;
    }
`;

export const RightNav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin-left: ${props => (props.showResultsModal ? '-20px' : '25%')};

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const AuthButtons = styled.div`
    display: ${props => (props.showResultsModal ? 'none' : 'flex')};
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 12vw;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinkItem = styled(Link)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 12vh;
    color: white;
    padding: 0 1rem;
    font-size: 2.7vh;
    text-decoration: none;
    border-radius: 10px;

    &:hover {
        text-decoration: none;
        outline: none;
        color: white;
    }

    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
    }

    &::after {
        content: '';
        height: 2px;
        width: 0;
        background: white;
        display: block;
        transition: width 0.5s ease-in-out;
    }
    &:hover::after {
        transform: width;
        width: 125%;
    }
`;

export const NavbarLinks = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: left;
    margin-top: 13px;
    width: 20vw;
    list-style: none;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

export const MyMobileNavButton = styled.button`
    background: transparent;
    height: 6vh;
    width: 6vh;
    border: none;
    display: none;
    margin-right: 3%;

    transition: transform 1s ease-in-out;
    transform: rotate(${ props => props.displayMobileNavbar ? ("180deg"):("0deg") });
    
    &:focus {
        outline: none;
    }

    @media screen and (max-width: 768px) {
        display:block;
    }
`;