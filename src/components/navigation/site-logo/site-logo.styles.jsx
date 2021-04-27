import styled from 'styled-components';

export const LogoContainer = styled.button`
    background: transparent;
    height: 8vh;
    width: 7vh;
    border: none;
    margin-left: 4%;
    
    &:focus {
        background: rgba(0, 0, 0, 0.1);
        outline: none;
    }

    @media screen and (max-width: 768px) {
        margin-right: 3%;
    }
`
