import React from 'react';
import Header from 'components/UI/Header/Header';
import CardWrapper from 'components/UI/CardWrapper/CardWrapper';
import { MENU_CARDS } from './MenuCardsConstants'


const PagesMain = () => {
    return (
        <>
            <Header />
            <CardWrapper
                cards={MENU_CARDS}
            />
        </>
    );
};

export default PagesMain;