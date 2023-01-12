import React from "react";
import Styles from '../pagStyle/Produto.module.css'

export default function Home(props){
    return(
        <main>
            <div className={Styles.ProduCont}>
                <p>{props.name}</p>
            </div>  
            
            
        </main>
    )
}