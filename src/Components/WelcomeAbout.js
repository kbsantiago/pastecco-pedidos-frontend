import React from 'react'
import chefImg from '../assets/home/chef.png'

const WelcomeAbout = () => {
    return (
        <section>
            <div id="wrapper">
            <div id="apt">
                <h1>O verdadeiro sabor do Pastel</h1>
                <p>Experimente os recheios mais simples (carne, queijo minas, palmito) ou, que tal conhecer os recheios mais
                    elaborados (palmito com camarão, bacalhau, carne com ovo), passando também pelos mais exóticos
                    (japonês)? </p>
            </div>
            <div id="chef">
                <img src={chefImg} alt="Chef"/>
            </div>
        </div>
        <div id="orders">
            <h2>Top 5 mais pedidos</h2>
        </div>

        </section>
    )
} 
export default WelcomeAbout