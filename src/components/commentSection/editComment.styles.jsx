import styled from 'styled-components';

export const EditContainer = styled.div`
    p {
        .edit-icon {
            color: #ccc;
        }

        &:hover {
            color: grey;
            cursor: pointer;
            
            .edit-icon {
                color: grey;
            }
        }
    }
`