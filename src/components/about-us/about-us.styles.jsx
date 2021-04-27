import styled, { css } from 'styled-components';

export const AboutUsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    align-items: center;
`;

export const Section = styled.section`
    min-height: 100vh;
    border-bottom: 1px solid #ccc;
`;

export const SubSection = styled(Section)`
    min-height: 30vh;
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