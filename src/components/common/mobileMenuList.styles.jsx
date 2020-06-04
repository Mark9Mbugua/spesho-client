import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContainer = styled.div`
    padding: 15px;
    min-height: 100vh;
`;

export const MobileMenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const MobileMenuListItem = styled.li`
    line-height: 2.5em;
    align-self: center;
    text-align: center;
    border-bottom: 1px solid #ccc;
`;

export const ListLink = styled(Link)`
    font-size: 2.5vh;
`;