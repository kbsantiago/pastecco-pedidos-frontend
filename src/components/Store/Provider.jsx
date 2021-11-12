import React from "react";
import Context from './Context'
import useStorage from 'utils/useStorage.js';
import { useLocalStorage } from "react-use-storage";

const StoreProvider = ({children}) => {
    const [token, setToken] = useStorage('token');

    const [cart, setCart] = useLocalStorage('cart', []);

    function addItemToCart(productTitle, description, price, quantity, img) {
        const itemObject = {productTitle, description, price, quantity, img};
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