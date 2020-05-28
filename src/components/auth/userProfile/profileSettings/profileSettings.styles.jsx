import styled from 'styled-components';

export const ProfileSettingsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: center;
    padding: 30px;
    margin: 0 auto;
    width: 50%;

    @media (max-width: 767px) {
        width: 100%;
    }

    .page-title {
        text-align: start;
        margin-bottom: 30px;

        @media (max-width: 767px) {
            font-size: 4vh;
        }
    }

    .modal-heading h3 {
        @media (max-width: 767px) {
            font-size: 3.5vh;
        }
    }

    .modal-body {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-content: stretch;
        overflow: hidden;
        padding: 5px;

        .edit {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            margin-top: 18px;

            .user-details {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                width: 100%;
            }

            .phone-icon-button {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                
                .phone-icon {
                    padding: 5px 20px 0 0;

                }
            }

        }
    }

    .date-body {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-content: stretch;
        overflow: hidden;
        padding: 5px;
        
        .edit-date {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: stretch;
            overflow: hidden;
            margin-top: 18px;

            @media (max-width: 767px) {
                flex-flow: column wrap;
                justify-content: center;
                align-items: start;
                margin-top: 5px;
            }
        }
    }
`