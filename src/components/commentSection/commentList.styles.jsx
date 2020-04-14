import styled from 'styled-components';

export const CommentsListContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 15px 15px 15px 30px;
    border-bottom: 1px solid #cccccc;

    .main {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        border-bottom: 1px solid #cccccc;

        .user-details {
            margin-right: auto;
            display: flex;
            flex-flow: row nowrap;
            item-align:center;
            

            .user-icon { 
                margin-bottom: auto; 
                flex: 1;
                img {
                    width:75%;
                    height: 75%;
                }
            }
            
            .user-info {
                margin-left: -4%;
                display: flex;
                flex: 2;
                flex-flow: column nowrap;

                .username {font-weight: bold}
                .date-joined {color: grey;}
            }
        }

        .comment-details {
            margin-right: auto;
            margin-left: 8%;
            display: flex;
            flex: 2;
            flex-flow: column nowrap;

            .date-created {color: grey;}
            
            .comment-reaction {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;

                .add-reply {

                }

                .votes {
                    p {
                        color: grey;
                        padding: 0 5px 0 20px;
                    }
                    display: flex;
                    flex-flow: row nowrap;
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
            padding-top: 35px;
            .edit-modal {
            }
        }
    }

`