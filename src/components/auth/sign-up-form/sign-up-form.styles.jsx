import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpFormContainer = styled.div`
    box-sizing: border-box;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    @media (max-width: 768px) {
        min-height: 70vh;
    }

    @media (max-width: 600px) {
        min-height: 90vh;
    }
    
    @media (max-width: 480px) {
        margin: 0;
        padding: 1.5rem;
        justify-content: flex-start;
        background: #FFFFFF;
    }

    @media (max-width: 320px) {
        padding: 1.25rem;
    }
`;

export const FormFields = styled.form`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 0.5em 3.1em;
    text-align: center;
    width: 30%;
    border-radius: 2%;

    @media (max-width: 1366px) {
        width: 35%;
    }

    @media (max-width: 1280px) {
        width: 40%;
    }

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 600px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0.31em 0.62em;
    }
`;

export const MainHeader = styled.h1`
    font-weight: bold;
    margin: 4%;
    
    @media (max-width: 480px) {
        font-size: 2.2rem;
    }
`;

export const SubHeader = styled.h5`
    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const FormButton = styled.button`
    border-radius: 1.25rem;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    padding: 0.75rem 2.5rem;
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
    padding: 0.75rem 0.94rem;
    margin: 0.5rem 0;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

export const ButtonFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0.6rem;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0.5rem;
    }
`;

export const AuthLink = styled(Link)`
    padding: 0.5rem;
`;

export const PasswordReset = styled.div`
    padding: 0.5rem;
`;

export const Terms = styled.div`
    padding-top: 1.56rem;
    overflow: hidden;

    p {
        font-size: 0.75rem;
    }

    @media (max-width: 480px) {
        padding: 0;
        margin-left: 0.31rem;
    }
`;
