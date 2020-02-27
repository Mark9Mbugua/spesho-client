import styled from 'styled-components';

export const AuthNavbarContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: left;
    overflow: hidden;
    padding-right: 4%;

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
`