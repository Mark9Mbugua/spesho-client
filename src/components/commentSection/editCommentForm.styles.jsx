import styled from 'styled-components';

export const EditCommentFormContainer = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 450px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }

    .edit-form {
        display: grid;
        align-items: grid-start;
        
        .edit-input {
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }

        .edit-buttons {
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
    
            .edit-button {
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