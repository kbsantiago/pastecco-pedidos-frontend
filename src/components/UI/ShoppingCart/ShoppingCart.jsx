import React, { useContext } from 'react';
import { ShoppingCartWrapper } from './ShoppingCartStyles'
import './ShoppingCart.css'
import { SHOPPING_CART_CONSTANTS } from './ShoppingCartConstants';
import UIButton from '../Button/Button';
import CartProvider from 'components/Store/CartProvider'
import CartContext from 'components/Store/CartContext';

const ShoppingCart = () => {
    const { cart, setCart } = useContext(CartContext)

    const addItemToCart = (productName, price, quantity) => {
        const item = {
            productName,
            price,
            quantity,
        }
        setCart([...cart, item]);
    }


    return (
        <CartProvider>
            <ShoppingCartWrapper>
                <div class="v3_2209">
                    <div class="v3_2210">
                        <div class="v3_2212">
                        <div class="v3_2213">
                        <div class="v3_2214"></div>
                        <div class="v3_2215"></div>
                        <div class="v3_2216"></div>
                        </div>
                        </div>
                        <div class="v3_2217"></div>
                        <div class="v3_2218"></div>
                        <div class="v3_2219"></div>
                        <div class="v3_2220">
                            <UIButton
                                theme="contained-orange"
                            >
                                {SHOPPING_CART_CONSTANTS.SHOPPING_CART}
                            </UIButton>
                        </div>
                        <div class="v3_2223"></div>
                        <div class="v3_2224"></div>
                        {/* Fazer um cart .map aqui para renderizar os items */}
                        <span class="v3_2225">-         1        +</span><span class="v3_2226">-         5        +</span><span class="v3_2227">Chocolate com morango</span><span class="v3_2228">Queijo</span><span class="v3_2229">R$10,50</span><span class="v3_2230">R$35,00</span>
                        <div class="v3_2232"></div>
                        <div class="v3_2234"></div>
                        <div class="v3_2235">
                            <div class="v3_2236"></div>
                        </div>
                        <div class="v3_2237"></div>
                        <div class="v3_2238">
                            <div class="v3_2239"></div>
                        </div>
                        <div class="v3_2240"></div>
                        <span class="v3_2241">{SHOPPING_CART_CONSTANTS.INSERT_HERE}</span>
                        <div class="name"></div>
                        <div class="v3_2243">
                            <div class="v3_2244">
                            <span class="v3_2245">{SHOPPING_CART_CONSTANTS.KEEP_BUYING}</span>
                            </div>
                        </div>
                        <span class="v3_2247"> {SHOPPING_CART_CONSTANTS.SUB_TOTAL}             R$45,50
                        {SHOPPING_CART_CONSTANTS.VOUCHER}                    
                        {SHOPPING_CART_CONSTANTS.TOTAL}    R$45,50
                        </span><span class="v140_5">      Seu pedido  #2355</span>
                    </div>
                </div>
            </ShoppingCartWrapper>
        </CartProvider>
    );
}

export default ShoppingCart;
