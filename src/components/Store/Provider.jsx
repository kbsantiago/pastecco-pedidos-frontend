import React, { useState } from "react";
import Context from './Context'
import useStorage, { useCartStorage } from 'utils/useStorage.js';
import { useLocalStorage } from "react-use-storage";

const StoreProvider = ({children}) => {
    const [token, setToken] = useStorage('token');

    const [cart, setCart] = useLocalStorage('cart', []);

    function addItemToCart(productTitle, price, quantity) {
        const itemObject = {productTitle, price, quantity};
        setCart([...cart, itemObject]);
        console.log(cart)
    }

    function removeItemToCart(clickedItemIndex) {
        const filteredCart = cart.filter(
            (cartItem) => cart.IndexOf(cartItem) !== clickedItemIndex
        );
        setCart(filteredCart);
    }

    function clearCart() {
        setCart([])
    }

    return (
        <Context.Provider
            value={{
                token,
                setToken,
                cart,
                addItemToCart,
                removeItemToCart,
                clearCart,
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default StoreProvider;