import styled, { css } from 'styled-components';

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

    h1 {
        font-weight: bold;
        margin: 4%;

        @media (max-width: 767px) {
            font-size: 3.5vh;
        }
    }

    h4 {
        @media (max-width: 767px) {
            font-size: 3vh;
        } 
    }
    
    .FormFields {
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
        
        .FormField {
            input {
                background-color: #eee;
                border: none;
                padding: 12px 15px;
                margin: 8px 0;
                width: 100%;
            }

            input:focus {
                outline: none;
            }
        }
            
        .ButtonField {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            padding: 10px;

            @media (max-width: 767px) {
                grid-template-columns: 1fr;
                padding: 8px;
            }

            .authLink {
                padding: 8px;
            }

            button {
                border-radius: 20px;
                border: 1px solid #FF4B2B;
                background-color: #FF4B2B;
                color: #FFFFFF;
                padding: 12px 45px;
                letter-spacing: 1px;
                transition: transform 80ms ease-in;
                margin-right: 5%;
            }

            button:active {
                transform: scale(0.95);
            }

            button:focus {
                outline: none;
            }

            button.ghost {
                background-color: transparent;
                border-color: #FFFFFF;
            }
        }
        .forgot-password {
            padding: 8px;
        }
    }

    .termsLink {
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
    }

`