import React from 'react';
import Card from 'components/UI/Card/Card'
import { CardsWrapper } from './CardWrapperStyles'

const CardWrapper = (props) => {
    const cardsArray = props.cards.map((card) => {
        return (
            <Card
                imgPath={card.image_url}
                title={card.name}
                description={card.description}
                price={card.price}
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