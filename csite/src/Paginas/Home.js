import React from "react";
import Categorias from './categorias';
import Styles from '../pagStyle/Home.module.css'
import Produtos from "./Produtos";

export default function Home(){
    return(
        <main>
           <div className={Styles.ProduCont}>
                <Categorias/> 
                <Produtos/>   
            </div>   
        </main>
    )
}