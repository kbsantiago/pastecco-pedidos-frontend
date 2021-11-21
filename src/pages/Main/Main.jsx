import React, { useEffect, useState, useContext } from 'react';
import './Main.css';
import StoreContext from 'components/Store/Context';
import Header from 'components/Header/Header';
import Wrapper from 'components/Wrapper/Wrapper';
import TopFiveTitle from 'components/TopFiveTitle/TopFiveTitle';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import { getTopFive } from 'services/api';

const PagesMain = () => {
    const [topFiveState, setTopFive] = useState([]);
    const { token } = useContext(StoreContext);

    useEffect(() => {
        getTopFive(token).then(response => {
            console.log(response.data)
            setTopFive(response.data)
        })
    }, [token]);

    return (
        <>
            <Header />
            <Wrapper />
            <TopFiveTitle/>
            <CardWrapper
                cards={topFiveState}
            />
        </>
    );
};

export default PagesMain;