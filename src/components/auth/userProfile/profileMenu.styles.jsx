import styled, { css } from 'styled-components';

export const ProfileItemsList = styled.ul`
    display: flex;

    .menu-item ul {
        display: none;
    }

    .menu-item:hover ul {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin-top: -1.8%;
        width: 200px;
        background: #ccc;
        z-index: 1; 
        
        .link-body {
            .item-link {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
        
                height: 8vh;
        
                color: ${ props => props.theme.primary };
        
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
                    background: ${ props => props.theme.primary };
                    display: block;
                    transition: width 0.5s ease-in-out;
                }
    
                &:hover::after {
                    transform: width;
                    width: 125%;
                }
            }
        }

    }
`