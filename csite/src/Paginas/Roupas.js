import React, {useState, useEffect} from "react";
import api from "../servicos/api";
import Produto from './Produto'
import { Link } from "react-router-dom";
import Styles from '../pagStyle/Produtos.module.css'

export default function Roupas(){

    const [produto, setProduto] = useState();

    useEffect(()=> {api.get("/Roupas/")
        .then((resposta) => setProduto(resposta.data) )
        .catch((err)=> {console.log("deu errado " + err)}); 
    }, []);

    const type = "Roupas";

    return(
        <section>   
            <ul className={Styles.ProduList}>
                {produto?.map((valor)=> (
                    <li key={valor.id}> <Link to={`/ProdutoG/${type}/${valor.id}`} ><Produto name={valor.name} id={valor.id} img={valor.img}/></Link> </li>
                    )) 
                }
            </ul> 
        </section>
    )
}