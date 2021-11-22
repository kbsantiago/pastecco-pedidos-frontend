import React, { useState } from 'react';
import Header from 'components/Header/Header';
import CartComponent from 'components/CartComponent/CartComponent';
import { createOrderPost } from '../../services/api'
import { Redirect } from 'react-router'

const PagesCart = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [redirectToOrders, setredirectToOrders] = useState(false)

    function handleCreateOrder(token, body) {
        if (body.amount === 0) {
            setErrorMsg('Adicione itens ao carrinho antes de finalizar o pedido')
        } 
        else if (body.paymentType === "") {
            setErrorMsg('Selecione a forma de pagamento antes de finalizar o pedido')
        } else {
            createOrderPost(token, body).then((res) => {
                alert(
                `O seu pedido foi criado com sucesso! \nO número do pedido é o ${res.data}`
                )
                return setredirectToOrders(true)
            });
        }
    }

    return (
        <>
        {redirectToOrders &&
            <Redirect to='/orders'/>
        }
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