import React from "react"
import { Link } from "react-router-dom"
import Styles from '../pagStyle/Navbar.module.css'

export default function Navbar(){
    return(
        <header className={Styles.header}>
            <h1>Navbar</h1>
            <div>
                <Link to='/Home' className={Styles.link}>Home</Link>
                <Link to='/Adproduto' className={Styles.link}>Adicionar produto</Link>
            </div>
        </header>
    )
}