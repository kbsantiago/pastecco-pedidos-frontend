import styled from 'styled-components';

export const CardsWrapper = styled.section`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 14px;
`;

export const CardImageContainer = styled.div`
    img {
        width: 250px;
        height: 150px;
        border-radius: 15px ;
    }
`;

export const CardContent = styled.div`
    padding: 5px;
`;

export const CardInfo = styled.div`
    font-size: 14px;
    position: relative;
    padding: 5px;
`;

export const CardDiv = styled.div``;

export const CardImg = styled.img``;

export const CardTitle = styled.h3`
    font-size: 18px;
    opacity: 0.75;
    color: rgb(206, 82, 82);
`;

export const CardDescription = styled.div`
    font-size: 16px;
    padding: 8px
    margin: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
`;

export const CardPrice = styled.div`
    font-size: 16px;
    background-color: red;
    text-align: center;
    color: white;
    font-weight: bold;
    padding: 4px;
    border-radius: 8px;
    margin: 12px;
`;
