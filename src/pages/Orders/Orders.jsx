import React, { useEffect, useContext } from 'react';
import StoreContext from 'components/Store/Context';
import Header from 'components/Header/Header';
import OrdersComponent from 'components/OrdersComponent/OrdersComponent';
import { getOrders } from 'services/api';

const PagesOrders = () => {
    const { setOrders } = useContext(StoreContext);
    const { token } = useContext(StoreContext);

    useEffect(() => {
        getOrders(token).then(response => {
            setOrders(response.data)
        })
    }, [token, setOrders]);

    return (
        <>
            <Header />
            <OrdersComponent/>
        </>
    );
};

export default PagesOrders;