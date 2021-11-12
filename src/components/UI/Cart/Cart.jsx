import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import StoreContext from 'components/Store/Context';
import './Cart.css';

const Cart = () => {
    const { cart } = useContext(StoreContext)

    return (
        <div className="cardCart">
            <div className="rowCartMain">
                <div className="col-md-8Cart cartCart">
                    <div className="titleCart">
                        <div className="rowCart">
                            <div className="colCart">
                                <h4><b>Carrinho</b></h4>
                            </div>
                            <div className="colCart align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>
                    {cart.map((cartItem) => (
                        <CartItem
                            title={cartItem.productTitle}
                            description={cartItem.description}
                            price={cartItem.price}
                            quantity={cartItem.quantity}
                            imgPath={cartItem.img}
                        />
                    ))}
                    <div className="back-to-shopCart"><a href="/"> - Voltar ao Inicio</a></div>
                </div>
                <div className="col-md-4Cart summaryCart">
                <div className="rowCart" >
                    <div className="colCart">TOTAL</div>
                    <div className="colCart text-right">R$ 132.00</div>
                </div> <button className="btnCart">FINALIZAR PEDIDO</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;