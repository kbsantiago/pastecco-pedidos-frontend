import { createContext } from "react";

const CartContext = createContext({
    productName: null,
    price: null,
    quantity: null,
    addQuantity: () => {},
})

export default CartContext;