import styled from 'styled-components';

export const DesktopNavbarContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    align-items: center;
    overflow: hidden;

    background: ${ props => props.theme.primary };
    color: white;

    height: 8vh;

    .logo {
        font-size: 5vh;
        font-weight: bold;
        text-shadow: 3px 3px 3px ${ props => props.theme.accent };
        margin-left: 0;

        @media screen and (max-width: 768px) {
            display: none;
        }
        
        .logo-link {
            color: white;
            text-decoration: None;
            padding: 0 1rem;
            
             
            &:focus {
                background: rgba(0, 0, 0, 0.1);
                outline: none;
            }
        }
    }

    .right-navbar {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        margin-left: 25%;

        @media screen and (max-width: 768px) {
            margin-left: 0;
        }
    }

    .auth-buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        
        width: 12vw;
        
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .nav-links {
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
    }
    
    .link {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        height: 12vh;

        color: white;

        padding: 0 1rem;

        font-size: 2.5vh;
        text-decoration: none;
        border-radius: 10px;

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
    }

`

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
`