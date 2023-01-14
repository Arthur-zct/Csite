import React from "react";
import Styles from '../pagStyle/Produto.module.css'

export default function Produto(props){
    return(
        <div className={Styles.ProduCont}>
            <div className={Styles.imgCont}>
               <img src={props.img} alt={`Imagem do produto ${props.name}`}/> 
            </div>
            <p>{props.name}</p>
            <p>R${props.price}</p>
        </div>   
        
    )
}