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
        const currentCart = [...cart]
        const currentItemIndex = currentCart.findIndex((cartItem) => cartItem.title === itemObject.title);

        if (currentItemIndex < 0) {
            setCart([...cart, itemObject])
            setTotal(parseFloat(total) + parseFloat(itemObject.price))
        } else {
            currentCart[currentItemIndex].quantity++
            setCart([...cart])
            setTotal(parseFloat(total) + parseFloat(itemObject.price))
        }
    }

    function removeItemToCart(title) {
        const clickedCartItem = cart.find((cartItem) => cartItem.title === title);
        const filteredCart = cart.filter((cartItem) => cartItem !== clickedCartItem);
        setTotal(parseFloat(total) - parseFloat(clickedCartItem.price * clickedCartItem.quantity))
        setCart(filteredCart);
    }

    function clearCart() {
        setCart([])
        setTotal(0)
    }

    function addQuantityToCartItem(title, price) {
        const currentCart = [...cart]
        const currentItemIndex = currentCart.findIndex((cartItem) => cartItem.title === title);
        currentCart[currentItemIndex].quantity++
        setCart([...cart])
        setTotal(parseFloat(total) + parseFloat(price))
    }
    

    function removeQuantityToCartItem(title, price) {
        const currentCart = [...cart]
        const currentItemIndex = currentCart.findIndex((cartItem) => cartItem.title === title);
        currentCart[currentItemIndex].quantity--
        setCart([...cart])
        setTotal(parseFloat(total) - parseFloat(price))
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
                addQuantityToCartItem,
                removeQuantityToCartItem,
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default StoreProvider;