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

})

export default StoreContext;