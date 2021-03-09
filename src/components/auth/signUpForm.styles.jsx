import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpFormContainer = styled.div`
    box-sizing: border-box;
    background: #DDDDDD;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: -35px 0 0;

    @media (max-width: 767px) {
        margin: 0;
        padding: 25px 0;
        justify-content: flex-start;
        background: #FFFFFF;
    }
`;

export const FormFields = styled.form`
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 8px 50px;
    text-align: center;
    width: 30%;
    border-radius: 2%;

    @media (max-width: 767px) {
        width: 100%;
        padding: 5px 10px;
    }
`;

export const MainHeader = styled.h1`
    font-weight: bold;
    margin: 4%;
    
    @media (max-width: 767px) {
        font-size: 3.5vh;
    }
`;

export const SubHeader = styled.h5`
    @media (max-width: 767px) {
        font-size: 3vh;
    }
`;

export const FormButton = styled.button`
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    padding: 12px 45px;
    letter-spacing: 1px;
    transition: transform 80ms ease-in;
    margin-right: 5%;
    
    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const FormInput = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

export const ButtonFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 8px;
    }
`;

export const AuthLink = styled(Link)`
    padding: 8px;
`;

export const PasswordReset = styled.div`
    padding: 8px;
`;

export const Terms = styled.div`
    padding-top: 25px;
    overflow: hidden;
    p {
        font-size: 12px;
    }

    @media (max-width: 767px) {
        padding: 0;
        margin-left: 5px;
        
        p {
            font-size: 13px;
        }
    }
`;
