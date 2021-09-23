import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="logo">
                <a href='/main'>Pastecco</a>
                <img id="pastel" src="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Pastel-PNG.png"
                    alt=""/>
            </div>
            <div class="links">
                <a href="index.html">Sobre</a>
                <a href="cardapio.html">Cardápio</a>
            </div>
        </header>
    );
}

export default Header;