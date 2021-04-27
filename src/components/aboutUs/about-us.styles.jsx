import styled, { css } from 'styled-components';
import img from '../../images/sale.png';

export const AboutUsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
`;

const Section = styled.section`
    min-height: 100vh;
    border-bottom: 1px solid #ccc;
`;

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

export const SubSection = styled(Section)`
    min-height: 30vh;
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

export const Summary = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background: #ccc;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;

export const SummarySection = styled(Section)`
    min-height: 85vh;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const StepsSection = styled(SummarySection)`
    min-height: 60vh;
`;

export const SummaryBody = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 70%;

    @media screen and (max-width: 768px) {
        width: 85%;
    }   
`;

export const SummaryDetails = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: 1fr;
    }
`;

export const SummaryImg = styled.img`
    height: 20vh;
    width: 20vw;    
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 6vh;
`;

export const IntroTitle = styled.h1`
    text-align: center;
    font-size: 9vh;
    color: #fff;
`;

export const SubTitle = styled.h3`
    text-align: center;
    font-size: 4vh;
    padding-bottom: 10px;
`;

export const Description = styled.p`
    text-align: center;
    font-size: 2.7vh;
    line-height: 2em;
`;

export const IntroDescription = styled(Description)`
    color: #fff;
    font-size: 3vh;
`;

export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ProductContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
`;

export const ProductImg = styled.img`
    height: 8vh;
    width: 8vw;    
`;

export const ProductName = styled.p`
    font-size: 3vh;
    padding-top: 5px;
`;

export const ImageContainer = styled.div`
    height: 15vh;
    width: 8vw;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
    background: #cccccc;
    opacity: 0.7;

    @media screen and (max-width: 768px) {
        height: 10vh;
        width: 20vw;  
    } 
`;

export const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 0 10px;
`;

export const ImgContainer = styled.div`
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        padding-bottom: 5px;  
    }
`;

export const CategoriesSection = styled(Section)`
    min-height: 70vh;
    display: grid;
    align-items: center;
    justify-items: center;
`;