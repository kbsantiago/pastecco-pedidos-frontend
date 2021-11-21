import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import './Header.css'

const Header = () => {
    const { setToken, cartTotalItems } = useContext(StoreContext);

    function Logout() {
        setToken(null);
    
        sessionStorage.removeItem('token');
      }

    return (
        <header>
            <div class="logo">
                <a href='/'>Pastecco</a>
                <img id="pastel" src="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Pastel-PNG.png"
                    alt=""/>
            </div>
            <div class="links">
                <a href="/menu">Cardápio</a>
                <a href="/cart">Carrinho({cartTotalItems})</a>
                <a href="/orders">Pedidos</a>
                <button onClick={Logout}>Sair</button>
            </div>
        </header>
    );
}

export default Header;