import React from "react"
import { Link } from "react-router-dom"
import Styles from '../pagStyle/Header.module.css'

export default function Header(){
    return(
        <header className={Styles.header}>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li><Link to='/' className={Styles.link}>Home</Link></li>
                    <li><Link to='/Adproduto' className={Styles.link}>Adicionar produto</Link></li>
                </ul>               
            </nav>
        </header>
    )
}