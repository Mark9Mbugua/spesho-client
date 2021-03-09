import styled from 'styled-components';

export const AuthNavbarContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    padding-right: 4%;
    background: ${ props => props.theme.primary };
    color: white;
    height: 8vh;
`