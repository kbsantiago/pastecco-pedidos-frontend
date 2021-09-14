import React from 'react'
import './index.css'
import chefImg from '../../assets/home/chef.png'
import pastelDesenho from '../../assets/home/desenhoPastel.png'
import pastel1 from '../../assets/pasteis/pastel1.png'
import pastel2 from '../../assets/pasteis/pastel2.png'
import pastel3 from '../../assets/pasteis/pastel3.png'
import pastel4 from '../../assets/pasteis/pastel4.png'
import pastel5 from '../../assets/pasteis/pastel5.png'

const Home = () => {
  return (
    <div id="page-home">
        <header>
            <div class="logo">
                <h1 href='/'>Pastecco</h1>
                <img id="pastel" src={pastelDesenho} alt="pastel Desenho" />
            </div>
            <div class="links">
                <a href="/">Sobre</a>
                <a href="/Cardapio">Cardápio</a>
            </div>

        </header>

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

      <section class="cards">

        <div class="card">
            <div class="card__image-container">
                <img src={pastel2} alt="pastel2" />
            </div>
            <div class="card__content">
                <h3>Chocolate com Morango</h3>
            </div>
            <div class="card__info">
                <p>Brigadeiro e morango.</p>
                <p class="card__price">R$10,50</p>
            </div>
        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel1} alt="pastel1" />
            </div>
            <div class="card__content">
                <h3>Camarão Cremoso</h3>
            </div>
            <div class="card__info">
                <p>Camarão, palmito e requeijão.</p>
                <p class="card__price">R$15,50</p>
            </div>
        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel3} alt="pastel3" />
            </div>
            <div class="card__content">
                <h3>Frango Mineiro</h3>
            </div>
            <div class="card__info">
                <p>Peito de frango desfiado, milho e requeijão.</p>
                <p class="card__price">R$10,50</p>
            </div>

        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel4} alt="pastel4" />

            </div>
            <div class="card__content">
                <h3>Pastel de Carne</h3>
            </div>
            <div class="card__info">
                <p>Pastel de carne com ovos e azeitona</p>
                <p class="card__price">R$7,50</p>
            </div>

        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel5} alt="pastel5" />

            </div>
            <div class="card__content">
                <h3>Pastel Romeu e Julieta</h3>
            </div>
            <div class="card__info">
                <p>Pastel de Goiabada com Queijo Minas.</p>
                <p class="card__price">R$17,00</p>
            </div>

        </div>


        </section>
    </div>
  )
}

export default Home