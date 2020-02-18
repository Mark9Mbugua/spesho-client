import styled from 'styled-components';

export const MobileNavbarContainer = styled.nav`
    width: 40vw;
    background: ${ props => props.theme.primary };
    align-self: flex-end;

    transition: transform 1s;
    transform: translateX( ${ props => props.displayMobileNavbar ? ("0%"): ("100%") });
    
    position: ${ props => props.displayMobileNavbar ? ("relative"): ("absolute") };

    .nav-links {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;

        height: 50vh;
        
        list-style: none;
        margin-bottom: 0;
        font-size: 20px;
    }

    .auth-buttons {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;

        height: 50vh;
        margin-top: 0;

    }

    .auth-buttons SignIn {
        color: white; 
    }
    
    .link {
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }

`