import React, { useState } from 'react';
import Header from 'components/UI/Header/Header';
import Cart from 'components/UI/Cart/Cart';
import { createOrderPost } from '../../services/api'

const PagesCart = () => {
    const [errorMsg, setErrorMsg] = useState('')

    function handleCreateOrder(token, body) {
        if (body.amount === 0) {
            setErrorMsg('Adicione itens ao carrinho antes de finalizar o pedido')
        } 
        else if (body.paymentType === "") {
            setErrorMsg('Selecione a forma de pagamento antes de finalizar o pedido')
        } else {
            createOrderPost(token, body)
        }
    }

    return (
        <>
            <Header />
            <Cart
                onClick={handleCreateOrder}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
            />
        </>
    );
};

export default PagesCart;