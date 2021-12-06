import styled from 'styled-components';

export const CardsWrapper = styled.section`
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding: 14px;

    @media(max-width: 768px){
        grid-template-columns: auto auto;
    }
`;