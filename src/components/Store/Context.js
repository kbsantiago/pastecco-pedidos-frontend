import { createContext } from "react";

const StoreContext = createContext({
    token: null,
    setToken: () => {},
    username: null,
    setUsername: () => {},
    cart: [],
    setCart: () => {},
    total: null,
    setTotal: () => {},
    paymentType: null,
    setPaymentType: () => {},
    orders: null,
    setOrders: () => {},
})

export default StoreContext;