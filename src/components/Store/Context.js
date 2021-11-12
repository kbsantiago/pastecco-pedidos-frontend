import { createContext } from "react";

export const CartContext = createContext({})

const StoreContext = createContext({
    token: null,
    setToken: () => {},
})

export default StoreContext;