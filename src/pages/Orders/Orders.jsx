import React, { useEffect, useContext } from 'react';
import StoreContext from 'components/Store/Context';
import Header from 'components/Header/Header';
import OrdersComponent from 'components/OrdersComponent/OrdersComponent';
import { getOrders } from 'services/api';

const PagesOrders = () => {
    const { token, user, setOrders } = useContext(StoreContext);

    useEffect(() => {
        getOrders(token).then(response => {
            setOrders(response.data)
        })
    }, [token, setOrders]);

    return (
        <>
            <Header />
            <OrdersComponent
                user={user}
            />
        </>
    );
};

export default PagesOrders;