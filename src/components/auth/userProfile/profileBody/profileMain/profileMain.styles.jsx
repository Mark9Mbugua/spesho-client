import styled from 'styled-components';

export const ProfileMainContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-content: stretch;
    overflow: hidden;
    padding: 20px;

    .page-title {
        text-align: center;
        margin-left: -38%;
        margin-bottom: 25px;
    }

    .section-title {
        font-size: 2.7vh;
        font-weight: bold;
        margin-bottom: 25px;
    }

    .upper-section {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-content: stretch;

        .my-stats {
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            padding: 0 0 0 150px;

            .stats-section {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                align-content: center;

                .stat {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-around;
                    align-content: center;
                    padding: 0 25px 0 0;

                    .count {
                        padding: 0 5px;
                        font-size: 4vh;
                    }
                }

                .profile-vl {
                    border-left: 1px solid #cccccc;
                    padding-left: 35px;
                }
            }
        }

    }

    .lower-section {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-content: stretch;
        margin-left: -21%;
        padding-top: 15px;
`