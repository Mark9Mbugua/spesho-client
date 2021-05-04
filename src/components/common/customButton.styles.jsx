import styled, { css } from 'styled-components';

const signUpStyles = css`
    background: ${ props => props.theme.secondary };
    color: white;
`;

const signInStyles = css`
    background: white;
    color: ${ props => props.theme.secondary };

    @media screen and (max-width: 768px) {
        color: white;
    }
`;

const getButtonStyles = props => {
    if (props.isSignIn) {
      return signInStyles;
    }
  
    return props.isSignUp ? signUpStyles: signInStyles;
};

export const ButtonContainer = styled.button`
    height: 38px;
    border:0;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 3px;
    
    ${getButtonStyles}

    &:focus {
        opacity: 0.9;
        outline: none;
    }

    @media screen and (max-width: 768px) {
        background: inherit;
        margin-top: 0;
        font-size: 2.5vh;
        width: 100%;
        padding: 0;
        height: 4.4rem;
        border: 1px solid #6F6B5D;
    }    
`;