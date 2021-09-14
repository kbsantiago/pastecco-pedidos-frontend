import React from 'react'
import './index.css'
import HeaderPage from '../../Components/HeaderPage'
import pastel1 from '../../assets/pasteis/pastel1.png'
import pastel2 from '../../assets/pasteis/pastel2.png'
import pastel3 from '../../assets/pasteis/pastel3.png'
import pastel4 from '../../assets/pasteis/pastel4.png'
import pastel5 from '../../assets/pasteis/pastel5.png'
import pastel6 from '../../assets/pasteis/pastel6.png'
import pastel7 from '../../assets/pasteis/pastel7.png'
import pastel8 from '../../assets/pasteis/pastel8.png'
import pastel9 from '../../assets/pasteis/pastel9.png'


const Cardapio = () => {
  return (
    <div id="page-home">
       
    <HeaderPage />
    <section class="cards">

        <div class="card">
            <div class="card__image-container">
                <img src={pastel2} alt="pastel" />
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
                <img src={pastel1} alt="pastel" />
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
                <img src={pastel3} alt="pastel" />

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
                <img src={pastel4} alt="pastel" />

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
                <img src={pastel5} alt="pastel" />

            </div>
            <div class="card__content">
                <h3>Pastel Romeu e Julieta</h3>
            </div>
            <div class="card__info">
                <p>Pastel de Goiabada com Queijo Minas.</p>
                <p class="card__price">R$17,00</p>
            </div>

        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel6} alt="pastel" />

            </div>
            <div class="card__content">
                <h3>Pastel de Atum</h3>
            </div>
            <div class="card__info">
                <p>Pastel de Atum</p>
                <p class="card__price">R$17,00</p>
            </div>

        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel7} alt="pastel" />

            </div>
            <div class="card__content">
                <h3>Pastel de linguiça toscana e queijo coalho</h3>
            </div>
            <div class="card__info">
                <p>Pastéis de linguiça toscana em tigela.</p>
                <p class="card__price">R$27,00</p>
            </div>

        </div>

        <div class="card">
            <div class="card__image-container">
                <img src={pastel8} alt="pastel" />

            </div>
            <div class="card__content">
                <h3>Pastel de paçoca</h3>
            </div>
            <div class="card__info">
                <p>Pastel de paçoca com doce de leite</p>
                <p class="card__price">R$15,00</p>
            </div>

        </div>
        <div class="card">
            <div class="card__image-container">
                <img src={pastel9} alt="pastel" />

            </div>
            <div class="card__content">
                <h3>Pastel de nozes</h3>
            </div>
            <div class="card__info">
                <p>Pastel de brigadeiro com damasco e nozes</p>
                <p class="card__price">R$35,00</p>
            </div>

        </div>


    </section>
    </div>
  )
}

export default Cardapio