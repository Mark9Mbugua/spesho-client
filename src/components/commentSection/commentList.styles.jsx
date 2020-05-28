import styled from 'styled-components';

export const CommentsListContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    padding: 15px 15px 15px 30px;

    .main-section {
        display: grid;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 15px;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-areas:
            'user-details comment-details more-icon';

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                'more-icon'
                'user-details' 
                'comment-details';
        }

        .user-details {
            grid-area: user-details;
            display: flex;
            flex-flow: row wrap;
            item-align:left;           

            .user-icon { 
                margin-bottom: auto;
                width: 70px;
                height: 70px;
                justify-content: center; 
                img {
                    width:90%;
                    height: 90%;
                }
            }
            
            .user-info {
                display: flex;
                flex-flow: column wrap;
                .username {font-weight: bold}
                .date-joined {color: grey;}
            }
        }

        .comment-details {
            grid-area: comment-details;
            display: flex;
            margin-right: auto;
            flex: 2;
            flex-flow: column wrap;

            .date-created {color: grey;}

            .edit-comment-form {
                width: 450px;
            }
            
            .comment-reaction {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;

                .votes {
                    p {
                        color: grey;
                        padding: 0 5px 0 20px;
                    }

                    span {
                        color: grey;
                        padding: 0 5px;
                        margin: 0;
                    }
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around;

                    .vl {
                        border-left: 1px solid #cccccc;
                        margin-bottom: 5%;
                    }
                }
            }

            .view-replies {
                text-decoration: none;
                                
                &:focus {
                    cursor: pointer;
                }
            }
        }
        
        .more-icon {
            grid-area: more-icon;
            margin-left: auto;
            padding-top: 35px;

            @media (max-width: 767px) {
                padding-top: 0;
            }
        }
    }

`