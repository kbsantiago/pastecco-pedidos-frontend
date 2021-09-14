import React from 'react'
import './index.css'

import HeaderPage from '../../Components/HeaderPage'
import CreatePastel from '../../Components/CreatePastel'

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
            <CreatePastel image={pastel1} name='Chocolate com Morango' info='Brigadeiro e morango' price='R$10,50' />
            <CreatePastel image={pastel2} name='Camarão Cremoso' info='Camarão, palmito e requeijão' price='R$15,50' />
            <CreatePastel image={pastel3} name='Frango Mineiro' info='Peito de frango desfiado, milho e requeijão' price='R$10,50' />
            <CreatePastel image={pastel4} name='Pastel de Carne' info='Pastel de carne com ovos e azeitona' price='R$7,50' />
            <CreatePastel image={pastel5} name='Pastel Romeu e Julieta' info='Pastel de Goiabada com Queijo Minas' price='R$17,00' />
            <CreatePastel image={pastel6} name='Pastel de Atum' info='Pastel de Atum' price='R$17,00' />
            <CreatePastel image={pastel7} name='Pastel de linguiça toscana e queijo coalho' info='Pastéis de linguiça toscana em tigela' price='R$27,00' />
            <CreatePastel image={pastel8} name='Pastel de paçoca' info='Pastel de paçoca com doce de leite' price='R$15,00' />
            <CreatePastel image={pastel9} name='Pastel de nozes' info='Pastel de brigadeiro com damasco e nozes' price='R$35,00' />
        </section>
    </div>
  )
}

export default Cardapio