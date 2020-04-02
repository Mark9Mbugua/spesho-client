import styled from 'styled-components';

export const ProfileSettingsContainer = styled.div`
    padding: 30px;

    .modal-container {
        width: 70%;
        margin-left: 9%;
    
        .page-title {
            text-align: center;
            margin-left: -38%;
            margin-bottom: 30px;
        }

        hr {margin-left: 45px}
    }

    .modal-body {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-content: stretch;
        overflow: hidden;
        padding: 5px;
        margin-left: 200px;

        .edit {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            margin-top: 18px;
            width: 85%;

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
        margin-left: 200px;
        
        .edit-date {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            margin-top: 18px;
            width: 85%;
        }
    }
`