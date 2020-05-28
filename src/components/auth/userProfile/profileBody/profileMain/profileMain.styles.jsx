import styled from 'styled-components';

export const ProfileMainContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    overflow: hidden;
    padding: 20px;

    .page-title {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        margin-bottom: 25px;
        padding-left: 50px;

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
            font-size: 3.8vh;
            justify-items: start;
            padding-left: 0;
        }
    }

    .section-title {
        font-size: 2.7vh;
        font-weight: bold;
        margin-bottom: 25px;
    }

    .upper-section {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 15px;
        justify-items: center;

        @media (max-width: 767px) {
            grid-gap: 30px;
            width: 100%;
            justify-items: start;
        }

        .my-stats {
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;

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
`