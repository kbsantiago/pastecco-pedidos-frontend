import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import './Header.css'
import {
    HEADER_ROUTES,
    HEADER_NAMES,
    IMAGE_SOURCE,
    HEADER_CSS_CONSTS
} from './HeaderConstants';

const Header = () => {
    const { setToken, cartTotalItems } = useContext(StoreContext);

    function Logout() {
        setToken(null);
    
        sessionStorage.removeItem('token');
      }

    return (
        <header class={HEADER_CSS_CONSTS.HEADER}>
            <div class={HEADER_CSS_CONSTS.LOGO}>
                <a href={HEADER_ROUTES.MAIN}>{HEADER_NAMES.MAIN}</a>
                <img id={HEADER_CSS_CONSTS.IMAGE_ID} src={IMAGE_SOURCE}
                    alt=""/>
            </div>
            <div class={HEADER_CSS_CONSTS.LINKS}>
                <a href={HEADER_ROUTES.MENU}>{HEADER_NAMES.MENU}</a>
            </div>
            <div class={HEADER_CSS_CONSTS.LINKS}>
                <a href={HEADER_ROUTES.CART}>{HEADER_NAMES.CART}({cartTotalItems})</a>
            </div>
            <div class={HEADER_CSS_CONSTS.LINKS}>
                <a href={HEADER_ROUTES.ORDERS}>{HEADER_NAMES.ORDERS}</a>
            </div>
            <div class={HEADER_CSS_CONSTS.LINKS}>
                <button onClick={Logout}>{HEADER_NAMES.LOGOUT}</button>
            </div>
        </header>
    );
}

export default Header;