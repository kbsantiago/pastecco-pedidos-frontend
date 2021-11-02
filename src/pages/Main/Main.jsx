import React from 'react';
import './Main.css';
import Header from 'components/UI/Header/Header';
import Wrapper from 'components/UI/Wrapper/Wrapper';
import Orders from 'components/UI/Orders/Orders';
import CardWrapper from 'components/UI/CardWrapper/CardWrapper';
import { useEffect, useState } from 'react';
import { getTopFive } from 'services/api';

const PagesMain = () => {
    const [topFiveState, setTopFive] = useState([]);

    useEffect(() => {
        getTopFive().then(response => {
            setTopFive(response.data)
        })
    }, []);

    return (
        <>
            <Header />
            <Wrapper />
            <Orders/>
            <CardWrapper
                cards={topFiveState}
            />
        </>
    );
};

export default PagesMain;