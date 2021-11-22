import React, { useEffect, useState, useContext } from 'react';
import StoreContext from 'components/Store/Context';
import Header from 'components/Header/Header';
import OrdersComponent from 'components/OrdersComponent/OrdersComponent';
import { getOrders } from 'services/api';

const PagesOrders = () => {
    const [ordersState, setOrdersState] = useState([]);
    const { token } = useContext(StoreContext);

    useEffect(() => {
        getOrders(token).then(response => {
            setOrdersState(response.data)
        })
    }, [token]);

    return (
        <>
            <Header />
            <OrdersComponent
                orders={ordersState}
            />
        </>
    );
};

export default PagesOrders;