import React from "react";
import Styles from '../pagStyle/Produtos.module.css'
import Produto from './Produto'

export default function Produtos(){
    return(
        <section className={Styles.produtosContainer}>
          <ul className={Styles.ProduList}>
            <li> 
              <Produto name=''/> 
            </li>
           
          </ul>
            
            
        </section>
    )
}