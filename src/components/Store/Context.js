import { createContext } from "react";

const StoreContext = createContext({
    token: null,
    setToken: () => {},
    user: null,
    setUser: () => {},
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