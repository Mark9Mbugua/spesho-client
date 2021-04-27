import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
    margin: 3% 0 -2% 15%;
    h1 {
        font-size: 3.5vh;
        font-weight: bold;
        text-align: left;  
    }

    @media screen and (max-width: 768px) {
        margin: 3% 0 -7% 3.8%;
    }
`;