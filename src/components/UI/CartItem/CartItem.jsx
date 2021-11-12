import React from 'react'

const CartItem = (props) => {
    return (
        <div className="rowCart border-top border-bottom">
            <div className="rowCart mainCart align-items-center">
                <div className="col-2Cart"><img className="img-fluid" src={props.imgPath} alt='/' /></div>
                <div className="colCart">
                    <div className="rowCart text-muted">{props.title}</div>
                </div>
                <div className="colCart"> <a href="/">-</a><a href="/" className="border">{props.quantity}</a><a href="/">+</a> </div>
                <div className="colCart">{props.price * props.quantity} <span className="close">&#10005;</span></div>
            </div>
        </div>
    )
}

export default CartItem