import React from 'react'
import './index.css'

import WelcomeAbout from '../../Components/WelcomeAbout'
import HeaderPage from '../../Components/HeaderPage'
import CreatePastel from '../../Components/CreatePastel'

import pastel1 from '../../assets/pasteis/pastel1.png'
import pastel2 from '../../assets/pasteis/pastel2.png'
import pastel3 from '../../assets/pasteis/pastel3.png'
import pastel4 from '../../assets/pasteis/pastel4.png'
import pastel5 from '../../assets/pasteis/pastel5.png'


const Home = () => {
  return (
    <div id="page-home">
        
        <HeaderPage />
        <WelcomeAbout />

        <section class="cards">
            <CreatePastel image={pastel1} name='Chocolate com Morango' info='Brigadeiro e morango' price='R$10,50' />
            <CreatePastel image={pastel2} name='Camarão Cremoso' info='Camarão, palmito e requeijão' price='R$15,50' />
            <CreatePastel image={pastel3} name='Frango Mineiro' info='Peito de frango desfiado, milho e requeijão' price='R$10,50' />
            <CreatePastel image={pastel4} name='Pastel de Carne' info='Pastel de carne com ovos e azeitona' price='R$7,50' />
            <CreatePastel image={pastel5} name='Pastel Romeu e Julieta' info='Pastel de Goiabada com Queijo Minas' price='R$17,00' />
        </section>
    </div>
  )
}

export default Home