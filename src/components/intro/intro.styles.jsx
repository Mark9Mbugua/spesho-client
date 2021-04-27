import styled from 'styled-components';

import { 
    Section,
    Description
} from '../about-us/about-us.styles';

import img from '../../images/sale.png';

export const IntroSection = styled(Section)`
    background-image: url(${img});
    background-size: contain;
    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 92vh;

    @media screen and (max-width: 768px) {
        background-image: none;
        min-height: 50vh;
    } 
`;

export const Introduction = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    padding: 15px;
    background: ${ props => props.theme.accent };
    z-index: 1;
    opacity: 0.98;

    @media screen and (max-width: 768px) {
        z-index: -1;
        height: 100%;  
    }
`;

export const IntroTitle = styled.h1`
    text-align: center;
    font-size: 9vh;
    color: #fff;
`;

export const IntroDescription = styled(Description)`
    color: #fff;
    font-size: 3vh;
`;