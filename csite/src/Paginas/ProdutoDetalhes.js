import React from "react";
import api from "../servicos/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Styles from '../pagStyle/ProdutoDetalhes.module.css'

export default function Produto(){
    const {id} = useParams();
    const {catego} = useParams();

    const [produto, setProduto] = useState();

    useEffect(()=> {api.get(`/${catego}/${id}`)
        .then((resposta) => setProduto(resposta.data) )
        .catch((err)=> {console.log("deu errado " + err)}); 
    }, []);

    return(
        <section>
            <div className={Styles.DetalhesPro}>
                <img src={produto?.img} />
                <div className={Styles.info}>
                    <h1>{produto?.name}</h1>
                    <p>{produto?.descricao}</p>
                    <h3>R${produto?.price}</h3>
                    <button>Comprar</button>
                </div>
                

            </div>  
            
            
        </section>
    )
}