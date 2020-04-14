import styled from 'styled-components';

export const RepliesListContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 5px;
    border-bottom: 1px solid #cccccc;

    .reply-main {
        margin: 10px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        border-bottom: 1px solid #cccccc;

        .reply-user-details {
            margin-right: auto;
            display: flex;
            flex-flow: row nowrap;
            item-align: center;
            

            .reply-user-icon {
                margin-right: auto;  
                flex: 1;
                img {
                    width: 50%;
                    height: 50%;
                }
            }
            
            .reply-user-info {
                margin-left: -5%;
                display: flex;
                flex: 2;
                flex-flow: column nowrap;

                .reply-username {font-weight: bold}
                .reply-date-joined {color: grey;}
            }
        }

        .reply-comment-details {
            margin-right: auto;
            margin-left: 8%;
            display: flex;
            flex: 2;
            flex-flow: column nowrap;

            .reply-date-created {color: grey;}
            
            .reply-comment-reaction {
                > p {color: grey;}
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                width: 40%;

                .reply-dot {
                    color: #cccccc;
                }

                .reply-vl {
                    border-left: 1px solid #cccccc;
                    margin-bottom: 5%;
                }
            }
        }

        .reply-more-icon {
            padding-top: 35px;
            .reply-edit-modal {
            }
        }
    }

`