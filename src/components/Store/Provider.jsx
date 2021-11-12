import React from "react";
import Context from './Context'
import useStorage from 'utils/useStorage.js';
import { useLocalStorage } from "react-use-storage";

const StoreProvider = ({children}) => {
    const [token, setToken] = useStorage('token');
    const [cart, setCart] = useLocalStorage('cart', []);
    const [total, setTotal] = useLocalStorage('total', 0);
    const cartTotalItems = cart.length;

    function addItemToCart(title, price, quantity, imgPath) {
        const itemObject = {title, price, quantity, imgPath}
        setCart([...cart, itemObject])
        let totalValue = parseFloat(total) + parseFloat(itemObject.price)
        setTotal(totalValue)
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
                total,
                setTotal,
                cartTotalItems,
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default StoreProvider;