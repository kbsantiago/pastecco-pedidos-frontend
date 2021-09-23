import React from 'react';
import Card from 'components/UI/Card/Card'
import { CardsWrapper } from 'components/SharedStyles'
import {
    CARD_IMAGES_PATH,
    CARD_TITLES,
    CARD_DESCRIPTIONS,
    CARD_PRICES,
} from './CardConstants'

const CardWrapper = () => {
    return (
        <CardsWrapper>
            <Card
                imgPath={CARD_IMAGES_PATH.CHOCOLATE_COM_MORAGO}
                title={CARD_TITLES.CHOCOLATE_COM_MORAGO}
                description={CARD_DESCRIPTIONS.CHOCOLATE_COM_MORAGO}
                price={CARD_PRICES.CHOCOLATE_COM_MORAGO}
            />
            <Card
                imgPath={CARD_IMAGES_PATH.CAMARAO_CREMOSO}
                title={CARD_TITLES.CAMARAO_CREMOSO}
                description={CARD_DESCRIPTIONS.CHOCOLATE_COM_MORAGO}
                price={CARD_PRICES.CHOCOLATE_COM_MORAGO}
            />
            <Card
                imgPath={CARD_IMAGES_PATH.FRANGO_MINEIRO}
                title={CARD_TITLES.FRANGO_MINEIRO}
                description={CARD_DESCRIPTIONS.CHOCOLATE_COM_MORAGO}
                price={CARD_PRICES.CHOCOLATE_COM_MORAGO}
            />
            <Card
                imgPath={CARD_IMAGES_PATH.CARNE}
                title={CARD_TITLES.CARNE}
                description={CARD_DESCRIPTIONS.CHOCOLATE_COM_MORAGO}
                price={CARD_PRICES.CHOCOLATE_COM_MORAGO}
            />
            <Card
                imgPath={CARD_IMAGES_PATH.ROMEU_JULIETA}
                title={CARD_TITLES.ROMEU_JULIETA}
                description={CARD_DESCRIPTIONS.CHOCOLATE_COM_MORAGO}
                price={CARD_PRICES.CHOCOLATE_COM_MORAGO}
            />
        </CardsWrapper>
    );
}

export default CardWrapper;