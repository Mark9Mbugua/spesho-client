import styled from 'styled-components';

export const ProfileSettingsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: stretch;
    overflow: hidden;
    padding: 20px;

    .page-title {
        text-align: center;
        margin-left: -45%;
        margin-bottom: 25px;
    }

    .modal-container {
        width: 70%;
        margin-left: 9%;
    }

    .modal-body {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-content: stretch;
        overflow: hidden;
        padding: 20px;

        .edit {
            display: flex;
            flex-flow: row nowrap;
            
            .icon {
                padding-left:10px;
            }

            .verify-button {
                padding-left:10px;
            }
        }
    }

    .date-body {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        overflow: hidden;
        padding: 20px;        
    }
`