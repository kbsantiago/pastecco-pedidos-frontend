import React from 'react';
import Card from 'components/UI/Card/Card'
import { CardsWrapper } from './CardWrapperStyles'
import { CARDS } from './CardConstants'

const CardWrapper = () => {
    const cardsArray = []
    CARDS.forEach((card) => {
        cardsArray.push(
            <Card
                imgPath={card.CARD_IMAGE_PATH}
                title={card.CARD_TITLE}
                description={card.CARD_DESCRIPTION}
                price={card.CARD_PRICE}
            />
        );
    })
    return (
        <CardsWrapper>
            {cardsArray}
        </CardsWrapper>
    )
}

export default CardWrapper;