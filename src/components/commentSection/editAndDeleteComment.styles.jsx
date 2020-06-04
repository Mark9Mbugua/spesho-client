import styled from 'styled-components';

export const EditAndDeleteContainer = styled.div`
    background: ${ props => props.theme.primary };
    width: 100px;
    height: 90px;
    color: white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    padding-left: 14px;
    padding-top: 8px;
    padding-bottom: 0;
    margin-bottom: -10px;
    position: absolute;
    border-radius: 5px;

    transition: margin 1s ease-in-out;
    margin: 5px 150px 0 0;
    
`;