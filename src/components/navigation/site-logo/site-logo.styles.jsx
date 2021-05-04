import styled from 'styled-components';

export const LogoContainer = styled.button`
    background: transparent;
    height: auto;
    width: 3.5vw;
    border: none;
    
    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
    }

    @media screen and (max-width: 768px) {
        width: 8vw;
    }

    @media screen and (max-width: 550px) {
        width: 6.5vw;
    }

    @media screen and (max-width: 480px) {
        width: 10vw;
    }
`;
