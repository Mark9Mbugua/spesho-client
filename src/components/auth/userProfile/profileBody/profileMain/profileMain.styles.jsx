import styled from 'styled-components';

export const ProfileMainContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    overflow: hidden;
    padding: 20px;
`;

export const UpperSection = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
    justify-items: center;

    @media (max-width: 767px) {
        grid-gap: 30px;
        width: 100%;
        justify-items: start;
    }
`;

export const PageTitle = styled.h1`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-bottom: 25px;
    padding-left: 50px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        font-size: 3.8vh;
        justify-items: start;
        padding-left: 0;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 2.7vh;
    font-weight: bold;
    margin-bottom: 25px;
`;

export const UserStats = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;  
`;

export const StatsSection = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-content: center;
`;

export const Stats = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-content: center;
    padding: 0 25px 0 0;
`;

export const StatsCount = styled.div`
    padding: 0 5px;
    font-size: 4vh;
`;

export const Line = styled.div`
    border-left: 1px solid #cccccc;
    padding-left: 35px;
`;