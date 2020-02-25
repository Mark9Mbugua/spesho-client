import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 15px;
    margin: 20px 250px 40px 25px;
    border: 1px solid #cccccc;

    .header {
        display: flex;
        flex-flow: row nowrap;
        border-bottom: 1px solid #cccccc;
        justify-content: space-around;
        padding: 15px 15px 0;
        text-align: center;

        .menu {
            width: 65%;
            float: left;
            border-bottom: 1px solid #cccccc;
          }
        
        .brand {
            float: right;
            width: 10%;
            font-weight: bold;
            border-bottom: 1px solid #cccccc;
            text-align: center;
        }
    
    }
    .main {
        width: 100%;
        margin-top: 0;
        display: flex;
        flex-flow: row nowrap;
        padding: 15px;
        border-bottom: 1px solid #cccccc;

        .main-left {
            display: flex;
            flex-flow: column nowrap;
            border-bottom: 1px solid #cccccc;
            padding: 15px;
            float-left;
            width:55%;
            margin-top: 0;

            .prices {
                display: flex;
                flex-flow: row nowrap;
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

            .comments-count {
                border-top: 1px solid #cccccc;
                border-bottom: 1px solid #cccccc;
                padding: 15px 15px 0;

                p {
                    margin-left: 80%;
                }
            }

            .description {
                padding: 15px;
                font-size: 2.5vh;
                line-spacing; 1.5em;
            }
        }
    
        .main-right {
            display: flex;
            flex-flow: column nowrap;
            justify-content: right;
            items-align: center;
            border-bottom: 1px solid #cccccc;
            width: 45%;

            .image-container {
                display: flex;
                flex-flow: column nowrap;
                justify-content: right;
                items-align: center;
                padding: 0;
                border-bottom: 1px solid #cccccc;
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
                margin-top: -3%;
                margin-bottom:0;
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
                border-bottom: 1px solid #cccccc;
            }
        }
    
        .comment-section {
            width: 100%;
            margin-top: 0;
            display: flex;
            flex-flow: row nowrap;
            padding: 15px;
            border-bottom: 1px solid #cccccc;
        }
      }
`