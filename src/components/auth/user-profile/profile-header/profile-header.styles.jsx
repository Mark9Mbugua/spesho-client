import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileHeaderContainer = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    background: #ccc;
    color: black;
    min-height: 15vh;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        padding-bottom: 5px;
    }
`;

export const UserDetails = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    @media (max-width: 767px) {
        flex-flow: column nowrap;
        align-items: center;
    }
`;

export const ProfileIcon = styled.div`
    width: 25%;
    
    @media (max-width: 767px) {
        width: 50%;
        padding: 5px;
    } 

    img {
        width: 95%;
    }
`;

export const Username = styled.div`
    font-size: 3.5vh;
    padding-top: 20px;

    @media (max-width: 767px) {
        font-size: 2.7vh;
        padding-top: 5px;
    }
`;

export const ProfileItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;

    @media (max-width: 767px) {
        grid-gap: 15px;
        justify-items: start;
        align-items: center;

    }
`;

export const ItemGroup = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const ItemIcon = styled.div`
    width: 25px;
    padding-right: 2px;
    
    @media (max-width: 767px) {
        width: 20px;
    }

    img {
        width: 100%;
    }
`;

export const ItemTitle = styled.div`
    font-size: 2.5vh;
`;

export const ProfileLink = styled(Link)`
    text-decoration: none;
    color: black;
    
    &:hover {
        outline: none;
        text-decoration: none;
        color: white;
    }

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
`;