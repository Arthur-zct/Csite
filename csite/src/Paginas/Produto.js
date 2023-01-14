import React from "react";
import Styles from '../pagStyle/Produto.module.css'

export default function Produto(props){
    return(
        <section>
            <div className={Styles.ProduCont}>
                <p>{props.name}</p>
                <p>{props.id}</p>
                <img src={props.img} alt=""/>
            </div>  
            
            
        </section>
    )
}