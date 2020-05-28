import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: grid;
    padding: 15px;
    grid-gap: 20px;
    margin: 20px 250px 40px 25px;

    @media screen and (max-width: 767px) {
        margin: 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0;
    }

    .item-section {
        flex: 1;
        .header {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            padding: 15px 15px 0;
            text-align: start;
            
            .brand {
                width: 10%;
                font-weight: bold;
                text-align: center;
            }
        
        }
        .main {
            width: 100%;
            margin-top: 0;
            display: grid;
            grid-gap: 20px;
            grid-template-areas:
                'main-left main-right';
            padding: 15px;
            border-bottom: 1px solid #cccccc;

            @media screen and (max-width: 767px) {
                grid-template-areas:
                    'main-right' 
                    'main-left';
            }
    
            .main-left {
                grid-area: main-left;
                display: flex;
                flex-flow: column nowrap;
                padding: 15px;
                margin-top: 0;
    
                .prices {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around;
    
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
                grid-area: main-right;
                display: flex;
                flex-flow: column nowrap;
                justify-content: right;
                items-align: center;
    
                .image-container {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: right;
                    items-align: center;
                    padding: 0;
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
                }
            }
        
            .comment-section {
                margin-top: 20px;
                display: grid;
                padding: 15px;
            }
        }
    }
    
`