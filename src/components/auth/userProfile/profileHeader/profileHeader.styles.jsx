import styled from 'styled-components';

export const ProfileHeaderContainer = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    background: #ccc;
    color: black;
    min-height: 15vh;

    @media (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        padding-bottom: 5px;
    }

    .user-details {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;

        @media (max-width: 767px) {
            flex-flow: column nowrap;
            align-items: center;
        }

        .profile-icon {
            width: 25%;
            
            @media (max-width: 767px) {
                width: 50%;
                padding: 5px;
            } 

            img {
                width: 95%;
            }
        }

        .username {
            font-size: 3.5vh;
            padding-top: 20px;

            @media (max-width: 767px) {
                font-size: 2.7vh;
                padding-top: 5px;
            }
        }
    }

    .profile-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-items: center;

        @media (max-width: 767px) {
            grid-gap: 15px;
            justify-items: start;
            align-items: center;

        }

        .item-group {
            display: flex;
            flex-flow: row wrap;

            .item-icon {
                width: 25px;
                padding-right: 2px;
                
                @media (max-width: 767px) {
                    width: 20px;
                }

                img {
                    width: 100%;
                }
            }
    
            .item-title {
                font-size: 2.5vh;
                
                .profile-link {
                    text-decoration: none;
                    color: black;
                    
                    &:focus {
                        background: rgba(0, 0, 0, 0.1);
                        outline: none;
                    }
            
                    &::after {
                        content: '';
                        height: 2px;
                        width: 0;
                        background: black;
                        display: block;
                        transition: width 0.5s ease-in-out;
                    }
                    &:hover::after {
                        transform: width;
                        width: 125%;
                    }
                }
            }
        }     
    }
`