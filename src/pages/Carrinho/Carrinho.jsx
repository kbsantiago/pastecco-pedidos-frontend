import React from 'react';
import Header from 'components/UI/Header/Header';
import Cart from 'components/UI/Cart/Cart';
import { createOrderPost } from '../../services/api'

function createOrder(token, body) {
    createOrderPost(token, body)
}

const PagesCarrinho = () => {

    return (
        <>
            <Header />
            <Cart
                onClick={createOrder}
            />
        </>
    );
};

export default PagesCarrinho;