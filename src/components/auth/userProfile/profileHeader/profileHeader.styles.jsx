import styled from 'styled-components';

export const ProfileHeaderContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding: 50px;

    background: #ccc;
    color: black;

    height: 15vh;

    .user-details {
        display: flex;
        flex-flow: row nowrap;
        item-align:center;
        margin-top: 34px;

        .profile-icon {
            padding-right: 0;
            margin-top: 4px;  
            flex: 1;
            img {
                width:72%;
                height: 72%;
            }
        }

        .username {
            font-size: 3.5vh;
            margin-top: 34px;
            margin-left: -15%;
        }
    }

    .profile-items {
        display: flex;
        flex-flow: row nowrap;
        padding-left: 120px;
        padding-right: 0;
        justify-content: space-around;
        width: 60%;

        .item-group {
            display: flex;
            flex-flow: row nowrap;
            item-align:center;
            margin-top: 30px;
            padding: 0;
            width: 20%;

    
            .item-icon {
                padding-right: 0;  
                img {
                    width: 30%;
                    height: 30%;
                }
            }
    
            .item-title {
                font-size: 2.5vh;
                margin-left: -75%;
            }
        }     
    }
`