import React from 'react';
import Card from 'components/UI/Card/Card'
import { CardsWrapper } from './CardWrapperStyles'

const CardWrapper = (props) => {
    const cardsArray = props.cards.map((card) => {
        return (
            <Card
                imgPath={card.CARD_IMAGE_PATH}
                title={card.CARD_TITLE}
                description={card.CARD_DESCRIPTION}
                price={card.CARD_PRICE}
            />
        )
    });

    return (
        <CardsWrapper>
            {cardsArray}
        </CardsWrapper>
    )
}

export default CardWrapper;