import styled from 'styled-components';

export const ListContainer = styled.div`
    padding: 15px;
    
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        
        li {
            line-height: 2.5em;
            align-self: center;
            text-align: center;
            border-bottom: 1px solid #ccc;

            .list-link {
                font-size: 2.5vh;
            }
        }
    }
`