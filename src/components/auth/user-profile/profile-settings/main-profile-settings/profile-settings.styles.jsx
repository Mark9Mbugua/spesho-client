import styled from 'styled-components';

export const ProfileSettingsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: center;
    padding: 30px;
    margin: 0 auto;
    width: 50%;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const PageTitle = styled.h1`
    text-align: start;
    margin-bottom: 30px;

    @media (max-width: 767px) {
        font-size: 4vh;
    }
`;

export const Attribute = styled.div`
    @media (max-width: 767px) {
        h3 {
            font-size: 3.5vh;
        }
    }
`;

export const AttributeBody = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: stretch;
    overflow: hidden;
    padding: 5px;
`;

export const EditAttribute = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    margin-top: 18px;
`;

export const DateBody = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: stretch;
    overflow: hidden;
    padding: 5px;
`;

export const UserDetails = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
`;

export const EditDate = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    overflow: hidden;
    margin-top: 18px;

    @media (max-width: 767px) {
        flex-flow: column wrap;
        justify-content: center;
        align-items: start;
        margin-top: 5px;
    }
`;

export const PhoneButtons = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const PhoneIcon = styled.div`
    padding: 5px 20px 0 0;
`;