import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: grid;
    padding: 15px;
    grid-gap: 20px;
    margin: 20px 250px 40px 25px;

    @media screen and (max-width: 768px) {
        margin: 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0;
    }    
`;

export const ItemSection = styled.div`
    flex: 1;
`;

export const Header = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 15px 15px 0;
    text-align: start;
`;

export const BrandName = styled.div`
    width: 10%;
    font-weight: bold;
    text-align: center;
`;

export const Main = styled.div`
    width: 100%;
    margin-top: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
        'main-left main-right';
    padding: 15px;
    border-bottom: 1px solid #cccccc;

    @media screen and (max-width: 767px) {
        grid-template-areas:
            'main-right' 
            'main-left';
    }
`;

export const MainLeft = styled.div`
    grid-area: main-left;
    display: flex;
    flex-flow: column nowrap;
    padding: 15px;
    margin-top: 0;
`;

export const Prices = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`; 

export const Price = styled.div`
    margin-left: 5%;
    font-size: 5vh;
    font-weight: bold;
`;

export const OriginalPrice = styled.div`
    font-size: 4.5vh;
    text-decoration: line-through;
    color: red;
`;

export const Discount = styled.div`
    margin-right: 15%;
    font-size: 5vh;
    font-weight: bold;
`;

export const CommentsCount = styled.div`
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 15px 15px 0;

    p {
        margin-left: 80%;
    }
`;

export const Description = styled.div`
    padding: 15px;
    font-size: 2.5vh;
`;

export const MainRight = styled.div`
    grid-area: main-right;
    display: flex;
    flex-flow: column nowrap;
    justify-content: right;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: right;
    padding: 0;
    width: 100%;
    height: 80%;
`;

export const Image = styled.img`
    margin-top: 3%;
    margin-left: 8%;
    width: 80%;
    height: 80%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    border-width: thin;
`;

export const DealButton = styled.div`
    display:flex;
    margin-top: 0;
    margin-left: 8%;
    width: 80%;
    background: ${ props => props.theme.secondary };
    border-radius: 4px;
    color: white;
    height: 7vh;
    font-size: 3.5vh;
    outline: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:focus {
        opacity: 0.9;
        outline: none;
    }
`;

export const DealVote = styled.div`
    margin-left: 70%;
    margin-top: -3%;
    margin-bottom:0;
    height: 5%;
    overflow-Y: hidden;
`;

export const Votes = styled.div`
    height: 50px;
    width: 20%;
    overflow-Y: hidden;
    margin-top: -1%;
    margin-left: 70%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`;

