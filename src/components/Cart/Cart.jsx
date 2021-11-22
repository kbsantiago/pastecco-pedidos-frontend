import React, { useContext, useState } from 'react';
import CartTable from 'components/CartTable/CartTable';
import UIButton from '../Button/Button';
import { FaRegTrashAlt } from 'react-icons/fa';
import StoreContext from 'components/Store/Context';
import './Cart.css';
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
        removeItemToCart,
        addQuantityToCartItem,
        removeQuantityToCartItem
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
            quantityComponent: 
               <>
               <UIButton onClick={() => removeQuantityToCartItem(cartItem.title, cartItem.price)}>-</UIButton>
               <div className="quantity">{cartItem.quantity}</div>
               <UIButton onClick={() => addQuantityToCartItem(cartItem.title, cartItem.price)}>+</UIButton>
               </>,
            imageUrl: cartItem.imgPath,
            removeComponent: <UIButton
                        onClick={() => removeItemToCart(cartItem.title)}
                    className="close">
                        <FaRegTrashAlt />
                    </UIButton>,
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

export default CartComponent;