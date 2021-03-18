import styled from 'styled-components';

export const ResultsContainer = styled.div`
    position: absolute;
    background: ${ props => props.theme.primary };
    height: 100vh;
    width: 80%;
    left: 10%;
    top: 8%;
    z-index: 2;
    
    p {
        color: white;
        text-align: center;
        margin-top: 5%;
    }
`;