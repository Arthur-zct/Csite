import React from "react";
import Style from '../pagStyle/Container.module.css'

export default function Container(props){
    return(
        <div className={Style.tamanho}>
            {props.children}
        </div>
    )
}