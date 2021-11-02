import React from "react";
import CartContext from './Context'
import useStorage from 'utils/useStorage.js';

const CartProvider = ({children}) => {
    const initialState = {
        productName: null,
        price: null,
        quantity: null,
    }
    const [cart, setCart] = useStorage(initialState);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;