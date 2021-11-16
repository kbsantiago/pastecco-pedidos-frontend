import React, { useContext } from 'react'
import StoreContext from 'components/Store/Context';
import UIButton from '../Button/Button';
import { FaRegTrashAlt } from 'react-icons/fa';

const CartItem = (props) => {
    const {
        addQuantityToCartItem,
        removeQuantityToCartItem,
        removeItemToCart,
    } = useContext(StoreContext)

    return (
        <div className="rowCart border-top border-bottom">
            <div className="rowCart mainCart align-items-center">
                <div className="col-2Cart"><img className="img-fluid" src={props.imgPath} alt='/' /></div>
                <div className="colCart">
                    <div className="rowCart text-muted">{props.title}</div>
                </div>
                <div className="colCart"> 
                    <UIButton onClick={() => removeQuantityToCartItem(props.title, props.price)}>-</UIButton>
                    <div className="quantity">{props.quantity}</div>
                    <UIButton onClick={() => addQuantityToCartItem(props.title, props.price)}>+</UIButton>
                </div>
                <div className="colCart">
                    <div className="itemprice">{props.price * props.quantity}</div>
                    <UIButton
                        onClick={() => removeItemToCart(props.title)}
                        className="close">
                            <FaRegTrashAlt />
                    </UIButton>
                </div>
            </div>
        </div>
    )
}

export default CartItem