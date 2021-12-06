import styled from 'styled-components';

export const CardsWrapper = styled.section`
    max-width: 800px;
    min-width: 320px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 14px;
`;

export const CardImageContainer = styled.div`
    img {
        width: 100%;
        height: 150px;
        border-radius: 15px ;
    }
`;

export const CardContent = styled.div`
    padding: 5px;
`;

export const CardDiv = styled.div``;

export const CardImg = styled.img`
    width: 100%;
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    opacity: 0.75;
    color: rgb(206, 82, 82);
`;

export const CardDescription = styled.div`
    font-size: 16px;
    position: relative;
    padding: 5px;
    display: flex;
    flex-direction: column
`;

export const ButtonDiv = styled.div`
    position: relative;
    padding: 5px;
    display: flex;
    justify-content: center;
`;