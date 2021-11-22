import React, { useState } from 'react';
import Header from 'components/Header/Header';
import CartComponent from 'components/CartComponent/CartComponent';
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
            <CartComponent
                onClick={handleCreateOrder}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
            />
        </>
    );
};

export default PagesCart;