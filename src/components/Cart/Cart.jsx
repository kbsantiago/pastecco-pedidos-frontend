import React, { useContext, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import StoreContext from 'components/Store/Context';
import './Cart.css';
import UIButton from '../Button/Button';
import PaymentType from '../PaymentType/PaymentType';

const Cart = (props) => {
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
        status: "created",
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

    return (
        <div className="cardCart">
            <div className="rowCartMain">
                <div className="col-md-8Cart cartCart">
                    <div className="titleCart">
                        <div className="rowCart">
                            <div className="colCart">
                                <h4><b>Carrinho</b></h4>
                            </div>
                            <div className="items-quantity">{cartTotalItems} items</div>
                        </div>
                    </div>
                    {cart.map((cartItem) => (
                        <CartItem
                            title={cartItem.title}
                            price={cartItem.price}
                            quantity={cartItem.quantity}
                            imgPath={cartItem.imgPath} />
                    ))}
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
                        <div className="colCart text-right">R$ {total}</div>
                    </div>
                    <UIButton
                        theme='contained-red-cart'
                        onClick={() => props.onClick(token, requestBody)}
                    >
                        FINALIZAR PEDIDO
                    </UIButton>
                    {props.errorMsg && (
                    <h4 className="error-message">{props.errorMsg}</h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;