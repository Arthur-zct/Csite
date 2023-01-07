import React from "react"
import { Link } from "react-router-dom"
import Styles from '../pagStyle/Header.module.css'
import Foto from '../imgs/carrinho-de-compras.png'

export default function Header(){
    return(
        <header className={Styles.header}>
            
            <Link to='/' className={Styles.logo}><img src={Foto}/></Link> 
            
            <nav>
                <ul>
                    <li><Link to='/' className={Styles.link}>Home</Link></li>
                    <li><Link to='/Adproduto' className={Styles.link}>Adicionar produto</Link></li>
                </ul>               
            </nav>
        </header>
    )
}