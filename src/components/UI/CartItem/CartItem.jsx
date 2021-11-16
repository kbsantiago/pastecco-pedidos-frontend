import React, { useContext } from 'react'
import StoreContext from 'components/Store/Context';

const CartItem = (props) => {
    const {
        addQuantityToCartItem,
        removeQuantityToCartItem,
    } = useContext(StoreContext)

    return (
        <div className="rowCart border-top border-bottom">
            <div className="rowCart mainCart align-items-center">
                <div className="col-2Cart"><img className="img-fluid" src={props.imgPath} alt='/' /></div>
                <div className="colCart">
                    <div className="rowCart text-muted">{props.title}</div>
                </div>
                <div className="colCart"> <button onClick={() => removeQuantityToCartItem(props.title, props.price)}>-</button><a href="/" className="border">{props.quantity}</a><button onClick={() => addQuantityToCartItem(props.title, props.price)}>+</button> </div>
                <div className="colCart">{props.price * props.quantity} <span className="close">&#10005;</span></div>
            </div>
        </div>
    )
}

export default CartItem