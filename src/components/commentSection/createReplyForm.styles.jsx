import styled from 'styled-components';

export const CreateReplyFormContainer = styled.div`
    transition: margin 1s ease-in-out;
    margin-left: 20px;

    .reply-form {
        display: flex;
        flex-flow: column nowrap;
        align-items: space-around;
        width: 450px;
        
        .reply-input {
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }

        .reply-buttons {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-content: stretch;
            margin-left: auto;

            .divider{
                width: 5px;
                height: auto;
                display: inline-block;
            }

            button {
                height: 40px;
                width: 80px;
                margin-top: 5px;
                outline: none;
                border: none;
                border-radius: 5px;
            }
    
            .reply-button {
                background: ${ props => props.theme.primary };
                color: white;
                
                &:focus {
                    background: ${ props => props.theme.secondary };
                    cursor: pointer;
                }
            }
    
            .cancel-button {
                background: inherit;
                color: ${ props => props.theme.primary }; 
            }
        }
    }
`