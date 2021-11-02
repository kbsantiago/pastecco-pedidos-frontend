import React, { useEffect, useState, useContext } from 'react';
import './Main.css';
import StoreContext from 'components/Store/Context';
import Header from 'components/UI/Header/Header';
import Wrapper from 'components/UI/Wrapper/Wrapper';
import Orders from 'components/UI/Orders/Orders';
import CardWrapper from 'components/UI/CardWrapper/CardWrapper';
import { getTopFive } from 'services/api';

const PagesMain = () => {
    const [topFiveState, setTopFive] = useState([]);
    const { token } = useContext(StoreContext);

    useEffect(() => {
        getTopFive(token).then(response => {
            setTopFive(response.data)
        })
    }, [token]);

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