import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import StoreContext from 'components/Store/Context';
import './Cart.css';

const Cart = () => {
    const { cart, total, cartTotalItems } = useContext(StoreContext)

    return (
        <div className="cardCart">
            <div className="rowCartMain">
                <div className="col-md-8Cart cartCart">
                    <div className="titleCart">
                        <div className="rowCart">
                            <div className="colCart">
                                <h4><b>Carrinho</b></h4>
                            </div>
                            <div className="colCart align-self-center text-right text-muted">{cartTotalItems} items</div>
                        </div>
                    </div>
                    {cart.map((cartItem) => (
                        <CartItem
                            title={cartItem.title}
                            price={cartItem.price}
                            quantity={cartItem.quantity}
                            imgPath={cartItem.imgPath}
                        />
                    ))}
                    <div className="back-to-shopCart"><a href="/"> - Voltar ao Inicio</a></div>
                </div>
                <div className="col-md-4Cart summaryCart">
                <div className="rowCart" >
                    <div className="colCart">TOTAL</div>
                    <div className="colCart text-right">R$ {total}</div>
                </div> <button className="btnCart">FINALIZAR PEDIDO</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;