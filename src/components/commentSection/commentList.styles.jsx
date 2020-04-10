import styled from 'styled-components';

export const CommentsListContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 15px;
    border-bottom: 1px solid #cccccc;

    .main {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        border-bottom: 1px solid #cccccc;

        .user-details {
            margin-right: auto;
            display: flex;
            flex-flow: row nowrap;
            item-align:center;
            

            .user-icon {
                margin-right: auto;  
                flex: 1;
                img {
                    width:75%;
                    height: 75%;
                }
            }
            
            .user-info {
                margin-left: -5%;
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
                > p {color: grey;}
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                width: 40%;

                .dot {
                    color: #cccccc;
                }

                .vl {
                    border-left: 1px solid #cccccc;
                    margin-bottom: 5%;
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