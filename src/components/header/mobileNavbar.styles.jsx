import styled from 'styled-components';

export const MobileNavbarContainer = styled.nav`
    top: 50px;
    width: 100vw;
    height: calc(100vh - 50px);
    background: ${ props => props.theme.primary };
    transition: transform 0.5s;
    transform: translateX( ${ props => props.displayMobileNavbar ? ("0%"): ("100%") });
    position: absolute;

    .nav-links {
        display: block;
        text-align: center;
        list-style: none;

        li {
            border-bottom: 1px solid #6F6B5D;
            height: 70px;
            line-height: 70px;
        }
    }

    .auth-buttons {
        margin: 0;
        padding: 0;
    }

    .auth, .item-link {
        display:block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #6F6B5D;
        height: 70px;
        line-height: 70px;
    }
        
    .link, .item-link {
        color: white;
        font-size: 2.5vh;
        text-decoration: none;
    }

`