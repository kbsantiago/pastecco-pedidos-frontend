import React, { useState } from "react";
import Context from './Context'
import useStorage from 'utils/useStorage.js';

const StoreProvider = ({children}) => {
    const [token, setToken] = useStorage('token');

    const [cart, setCart] = useState([]);

    function addItemToCart(productTitle, price, quantity) {
        const itemObject = {productTitle, price, quantity};
        setCart([...cart, itemObject]);
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