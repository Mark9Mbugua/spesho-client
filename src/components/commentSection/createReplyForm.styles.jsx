import styled from 'styled-components';

export const CreateReplyFormContainer = styled.div`
    transition: margin 1s ease-in-out;
    margin-left: 20px;
`;

export const ReplyForm = styled.form`
    display: grid;
    grid-template-columns: 450px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const ReplyInput = styled.textarea`
    border: none;
    outline: none;
    border-bottom: 1px solid black;
`;

export const ReplyButtons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: stretch;
    margin-left: auto;
`;

export const Divider = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: stretch;
    margin-left: auto;
`;

export const FormButton = styled.button`
    height: 40px;
    width: 80px;
    margin-top: 5px;
    outline: none;
    border: none;
    border-radius: 5px;
`;

export const ReplyButton = styled(FormButton)`
    background: ${ props => props.theme.primary };
    color: white;
    &:focus {
        background: ${ props => props.theme.secondary };
        cursor: pointer;
    }
`;

export const CancelButton = styled(FormButton)`
    background: inherit;
    color: ${ props => props.theme.primary }; 
`;