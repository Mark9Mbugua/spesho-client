import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 15px;
    margin: 30px 250px 40px 25px;

    .header {
        display: flex;
        flex-flow: row nowrap;
        border: 1px solid red;
        justify-content: space-around;
        padding: 15px;
        text-align: center;

        .menu {
            width: 65%;
            float: left;
            border: 1px solid red;
          }
        
        .brand {
            float: right;
            width: 10%;
            font-weight: bold;
            border: 1px solid red;
            text-align: center;
        }
    
    }
    .main {
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-flow: row nowrap;
        padding: 15px;
        border: 1px solid red;

        .main-left {
            display: flex;
            flex-flow: column nowrap;
            border: 1px solid red;
            justify-content: space-between;
            padding: 15px;
            float-left;
            width:55%;
            margin-top: 0;

            .prices {
                display: flex;
                flex-flow: row nowrap;
                border: 1px solid red;
                justify-content: space-around;
                align-items: left;

                .price {
                    margin-left: 5%;
                    font-size: 5vh;
                    font-weight: bold;
                }
                .original-price {
                    font-size: 4.5vh;
                    text-decoration: line-through;
                    color: red;
                }
                
                .discount {
                    margin-right: 15%;
                    font-size: 5vh;
                    font-weight: bold;
                }
            }

            .description {
                margin-bottom: 50%;
                font-size: 3vh;
                line-spacing; 1.5em;
            }
        }
    
        .main-right {
            display: flex;
            flex-flow: column nowrap;
            padding: 15px;
            justify-content: right;
            items-align: center;
            border: 1px solid red;
            width: 45%;

            .image-container {
                display: flex;
                flex-flow: column nowrap;
                justify-content: right;
                items-align: center;
                padding: 0;
                border: 1px solid red;
                width: 100%;
                height: 80%;
                
                .image {
                    margin-top: 3%;
                    margin-left: 8%;
                    width: 80%;
                    height: 80%;
                    border: 1px solid #cccccc;
                    border-radius: 5px;
                    border-width: thin;
                }
                
                .deal-button {
                    margin-top: 0;
                    margin-left: 8%;
                    width: 80%;
                    background: ${ props => props.theme.secondary };
                    border-radius: 4px;
                    color: white;
                    height: 7vh;
                    font-size: 3.5vh;
                    outline-none;

                        &:focus {
                            opacity: 0.9;
                            outline: none;
                        }  
                }
            }
            .good-deal {
                margin-left: 70%;
                margin-bottom:0;
                border: 1px solid red;
                height: 5%;
                overflow-Y: hidden;  
            }
            .votes {
                height: 50px;
                width: 20%;
                overflow-Y: hidden;
                margin-top: -1%;
                margin-left: 70%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                items-align: center;
                border: 1px solid red;
            }
        }
      }
`