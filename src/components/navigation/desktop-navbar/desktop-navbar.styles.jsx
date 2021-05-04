import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DesktopNavbarContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    background: ${ props => props.theme.primary };
    color: white;
    height: 8vh;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }

    @media screen and (max-width: 320px) {
        height: 10vh;
    }
`;

export const CloseIcon = styled.img`
    height: 1rem;
    width: 1rem;
    margin: 1rem 0.5rem;
    cursor: pointer;
`;

export const Logo = styled.div`

    @media screen and (max-width: 768px) {
        margin-left: 1.5rem;
    }

    @media screen and (max-width: 600px) {
        margin-left: 1rem;
    }

    @media screen and (max-width: 480px) {
        margin-left: 0.5rem;
    }
`;

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    /* padding: 1rem; */
      
    
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

    @media screen and (max-width: 1280px) {
        padding: 0;
    }
`;

export const CompanyName = styled.h1`
    font-size: 2.85rem;
    font-weight: bold;
    text-shadow: 3px 3px 3px ${ props => props.theme.accent };
    color: white;
    margin: 0.2rem;

    @media screen and (max-width: 1280px) {
        font-size: 2.3rem;
        margin: 0.1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.2rem;
    }

    @media screen and (max-width: 550px) {
        font-size: 1.8rem;
        margin: 0.05rem;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const RightNav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin-left: ${props => (props.showResultsModal ? '-15%' : '25%')};

    @media screen and (max-width: 480px) {
        margin-left: 0;
    }
`;

export const AuthButtons = styled.div`
    display: ${props => (props.showResultsModal ? 'none' : 'flex')};
    flex-flow: row nowrap;
    justify-content: space-evenly;
    min-width: 13%;

    @media screen and (max-width: 1366px) {
        min-width: 15%;
    }

    @media screen and (max-width: 1024px) {
        min-width: 19%;
    }
    
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
    font-size: 1.3rem;
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
    display: ${props => (props.showResultsModal ? 'none' : 'flex')};
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: left;
    margin-top: 0.8rem;
    min-width: 18%;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MyMobileNavButton = styled.button`
    background: transparent;
    height: 6vh;
    width: 6vh;
    border: none;
    display: none;
    transition: transform 1s ease-in-out;
    transform: rotate(${ props => props.displayMobileNavbar ? ("180deg"):("0deg") });
    
    &:focus {
        outline: none;
    }

    @media screen and (max-width: 768px) {
        display: ${props => (props.showResultsModal ? 'none' : 'block')};
    }
`;