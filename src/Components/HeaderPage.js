import React from 'react'
import pastelDesenho from '../assets/home/desenhoPastel.png'
import { Link } from 'react-router-dom';

const HeaderPage = () => {
    return (
        <header>
            <div class="logo">
                <h1>Pastecco</h1>
                <img id="pastel" src={pastelDesenho} alt="" />
            </div>
            <div class="links">
                <Link className='Sobre' to='/'> Sobre </Link>
                <Link className='Cardapio' to='/Cardapio'> Cardápio </Link>
            </div>

        </header>
    )
} 
export default HeaderPage