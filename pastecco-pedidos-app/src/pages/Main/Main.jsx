import React from 'react';
import './Main.css';
import Header from 'components/UI/Header/Header';
import Wrapper from 'components/UI/Wrapper/Wrapper';
import Orders from 'components/UI/Orders/Orders';
import CardWrapper from 'components/UI/CardWrapper/CardWrapper';

const PagesMain = () => {
    return (
        <>
            <Header />
            <Wrapper />
            <Orders/>
            <CardWrapper/>
        </>
    );
};

export default PagesMain;