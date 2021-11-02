import React from 'react';
import './Cart.css';

const Cart = () => {
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
                    <div className="rowCart border-top border-bottom">
                        <div className="rowCart mainCart align-items-center">
                            <div className="col-2Cart"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" alt='/' /></div>
                            <div className="colCart">
                                <div className="rowCart text-muted">Shirt</div>
                                <div className="rowCart">Cotton T-shirt</div>
                            </div>
                            <div className="colCart"> <a href="/">-</a><a href="/" className="border">1</a><a href="/">+</a> </div>
                            <div className="colCart">R$ 44.00 <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div className="rowCart">
                        <div className="rowCart mainCart align-items-center">
                            <div className="col-2Cart"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" alt='/' /></div>
                            <div className="colCart">
                                <div className="rowCart text-muted">Shirt</div>
                                <div className="rowCart">Cotton T-shirt</div>
                            </div>
                            <div className="colCart"> <a href="/">-</a><a href="/" className="borderCart">1</a><a href="/">+</a> </div>
                            <div className="colCart">R$ 44.00 <span className="closeCart">&#10005;</span></div>
                        </div>
                    </div>
                    <div className="rowCart border-top border-bottom">
                        <div className="rowCart mainCart align-items-center">
                            <div className="col-2Cart"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" alt='/' /></div>
                            <div className="colCart">
                                <div className="rowCart text-muted">Shirt</div>
                                <div className="rowCart">Cotton T-shirt</div>
                            </div>
                            <div className="col"> <a href="/">-</a><a href="/" className="border">1</a><a href="/">+</a> </div>
                            <div className="col">R$ 44.00 <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div className="back-to-shopCart"><a href="/"> - Voltar ao Inicio</a></div>
                </div>
                <div className="col-md-4Cart summaryCart">
                    <form>
                        <p>Código de Desconto</p> <input id="codeCart" placeholder="Insira o Código Aqui" />
                    </form>
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