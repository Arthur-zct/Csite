import React from "react"
import { Link } from "react-router-dom"
import Roupa from '../imgs/Categorias-icons/Roupas.png'
import Styles from '../pagStyle/Categorias.module.css'
import Computadores from '../imgs/Categorias-icons/computador.png'
import Moveis from '../imgs/Categorias-icons/moveis.png'
import Joias from '../imgs/Categorias-icons/Joias.png'
import Automoveis from '../imgs/Categorias-icons/automoveis.png'
import Celulares from '../imgs/Categorias-icons/celular.png'
import Ferrament_constru from '../imgs/Categorias-icons/ferramentas.png'
import Pets from '../imgs/Categorias-icons/pets.png'
import Eletronicos from '../imgs/Categorias-icons/radio.png'

export default function Categorias(){
    return(
        <section className={Styles.categorias_container}>
            <ul className={Styles.categorias}>
                <li className={Styles.categoIcon}><Link to='/Roupas'><abbr title='Roupas'><img src={Roupa}/></abbr><p>Roupas</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Computadores'><abbr title='Computadores'><img src={Computadores}/></abbr><p>Computadores</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Moveis'><abbr title='Moveis'><img src={Moveis}/></abbr><p>Moveis</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Joias'><abbr title='Joias'><img src={Joias}/></abbr><p>Joias</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Automoveis'><abbr title='Automoveis'><img src={Automoveis}/></abbr><p>Automoveis</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Celulares'><abbr title='Celulares'><img src={Celulares}/></abbr><p>Celulares</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Pets'><abbr title='Seção pets'><img src={Pets}/></abbr><p>Pets</p></Link></li>
                <li className={Styles.categoIcon}><Link to='/Eletronicos'><abbr title='Eletronicos'><img src={Eletronicos}/></abbr><p>Eletronicos</p></Link></li>
                <li className={`${Styles.categoIcon} ${Styles.FinalIcon}`}><Link to='/Ferrament_constru'><abbr title='Ferramentas e materias de construção'><img src={Ferrament_constru}/></abbr><p>Construção</p></Link></li>
            </ul>
        </section>
    )
}