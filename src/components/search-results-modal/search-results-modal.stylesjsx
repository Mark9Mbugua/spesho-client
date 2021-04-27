import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: ${props => (props.filteredItems.length > 0 ? 'repeat(4, 1fr)' : '1fr')};
    position: absolute;
    background: ${ props => props.theme.primary };
    height: 100vh;
    width: 80%;
    left: 10%;
    top: 8%;
    z-index: 2;
`;

export const EmptySearch = styled.p`
    color: white;
    text-align: center;
    margin-top: 5%;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffff;
    height: 300px;
    width: 200px;
`;

export const ResultsImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const ImageContainer = styled.div`
    height: 130px;
    width: 130px;
`;

export const ResultDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        line-height: 13px;
        font-size: 12px;
        text-decoration: none;
    }
`;

export const SearchItemLink  = styled(Link)`
    text-decoration: none;
`;


