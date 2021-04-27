import styled from 'styled-components';
import { 
    Section,
} from '../about-us/about-us.styles';

export const CategoriesSection = styled(Section)`
    min-height: 70vh;
    display: grid;
    align-items: center;
    justify-items: center;
`;

export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ProductContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
`;

export const ProductImg = styled.img`
    height: 8vh;
    width: 8vw;    
`;

export const ProductName = styled.p`
    font-size: 3vh;
    padding-top: 5px;
`;