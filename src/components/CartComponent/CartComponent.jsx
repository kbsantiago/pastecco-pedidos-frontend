import React, { useContext, useState } from 'react';
import CartTable from 'components/CartComponent/components/CartTable';
import UIButton from 'components/Button/Button';
import StoreContext from 'components/Store/Context';
import './CartComponent.css';
import PaymentType from '../PaymentType/PaymentType';
import {
    STATUS_DEFAULT,
    BUTTONS_NAMES,
    CSS_CLASSNAMES_AND_CONSTS,
    BUTTON_THEMES,
    TOTAL_CONSTS
} from './CartComponentConstants'

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
        status: STATUS_DEFAULT,
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
        <div className={CSS_CLASSNAMES_AND_CONSTS.CARD_CART}>
            <div className={CSS_CLASSNAMES_AND_CONSTS.ROW_CART_MAIN}>
                <div className={CSS_CLASSNAMES_AND_CONSTS.CARD_CART_COL}>
                    <CartTable
                        productsArray={productsArray}
                        cartTotalItems={cartTotalItems}
                    />
                    <div className={CSS_CLASSNAMES_AND_CONSTS.CLEAR_CART}>
                        <UIButton
                            theme={BUTTON_THEMES.CLEAR_CART}
                            onClick={() => clearCart()}
                        >{BUTTONS_NAMES.CLEAR_CART}
                        </UIButton>
                    </div>
                    <PaymentType
                        onChangeValue={onChangePaymentType} />
                </div>
                <div className={CSS_CLASSNAMES_AND_CONSTS.CART_SUMARY}>
                    <div className={CSS_CLASSNAMES_AND_CONSTS.ROW_CART}>
                        <div className={CSS_CLASSNAMES_AND_CONSTS.COL_CART}>{TOTAL_CONSTS.NAME}</div>
                        <div className={CSS_CLASSNAMES_AND_CONSTS.TEXT_RIGHT}>{TOTAL_CONSTS.CURRENCY}$ {total.toFixed(2)}</div>
                    </div>
                    <div className={CSS_CLASSNAMES_AND_CONSTS.FINALIZAR_PEDIDO_BUTTON}>
                        <UIButton
                            theme={BUTTON_THEMES.ORDER_BUTTON}
                            onClick={() => props.onClick(token, requestBody)}
                        >
                            {BUTTONS_NAMES.ORDER_BUTTON}
                        </UIButton>
                    </div>
                    {props.errorMsg && (
                    <h4 className={CSS_CLASSNAMES_AND_CONSTS.ERROR_MESSAGE}>{props.errorMsg}</h4>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartComponent;