import React, { useContext, useState } from 'react';
import CartTable from 'components/CartComponent/components/CartTable';
import UIButton from 'components/Button/Button';
import StoreContext from 'components/Store/Context';
import './CartComponent.css';
import PaymentType from '../PaymentType/PaymentType';

const CartComponent = (props) => {
    const [paymentType, setPaymentType] = useState('')

    const {
        cart,
        total,
        cartTotalItems,
        clearCart,
        token,
        username,
    } = useContext(StoreContext)

    const requestBody = {
        customerName: username,
        status: "criado",
        paymentType: paymentType,
        amount: total,
        items: cart.map((cartItem) => {
            const itemObject = {
                orderId: "",
                productId: cartItem.productId,
                quantity: `${cartItem.quantity}`,
                price: parseFloat(cartItem.price)
            }
            return itemObject
        }),
    }

    function onChangePaymentType(value) {
        props.setErrorMsg("")
        setPaymentType(value);
      }

    const productsArray = cart.map((cartItem) => (
        {
            title: cartItem.title,
            price: cartItem.price * cartItem.quantity,
            quantity: cartItem.quantity,
            imageUrl: cartItem.imgPath,
        }
    ));

    return (
        <div className="cardCart">
            <div className="rowCartMain">
                <div className="col-md-8Cart cartCart">
                    <CartTable
                        productsArray={productsArray}
                        cartTotalItems={cartTotalItems}
                    />
                    <div className="back-to-shopCart">
                        <UIButton
                            theme='contained-orange'
                            onClick={() => clearCart()}
                        >Limpar carrinho
                        </UIButton>
                    </div>
                    <PaymentType
                        onChangeValue={onChangePaymentType} />
                </div>
                <div className="col-md-4Cart summaryCart">
                    <div className="rowCart">
                        <div className="colCart">TOTAL</div>
                        <div className="colCart text-right">R$ {total.toFixed(2)}</div>
                    </div>
                    <div className="finalizar-pedido-button">
                        <UIButton
                            theme='contained-red-cart'
                            onClick={() => props.onClick(token, requestBody)}
                        >
                            FINALIZAR PEDIDO
                        </UIButton>
                    </div>
                    {props.errorMsg && (
                    <h4 className="error-message">{props.errorMsg}</h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartComponent;