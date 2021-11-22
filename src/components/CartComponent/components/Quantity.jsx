import React, { useContext } from 'react';
import UIButton from 'components/Button/Button';
import StoreContext from 'components/Store/Context';
import '../CartComponent.css';

const Quantity = (props) => {
    const {
        addQuantityToCartItem,
        removeQuantityToCartItem
    } = useContext(StoreContext)

    return (
        <>
        <UIButton onClick={() => removeQuantityToCartItem(props.title, props.price)}>-</UIButton>
        <div className="quantity">{props.quantity}</div>
        <UIButton onClick={() => addQuantityToCartItem(props.title, props.price)}>+</UIButton>
        </>
    );
};

export default Quantity;