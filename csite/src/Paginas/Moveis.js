import React, { useEffect, useState }from "react";
import api from "../servicos/api";
import { Link } from "react-router-dom";
import Produto from './Produto'
import Styles from '../pagStyle/Produtos.module.css'

export default function Moveis(){
    
    const [produto, setProduto] = useState();

    useEffect(()=> {api.get("/Moveis/")
        .then((resposta) => setProduto(resposta.data) )
        .catch((err)=> {console.log("deu errado " + err)}); 
    }, []);

    const type = "Moveis";
    
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