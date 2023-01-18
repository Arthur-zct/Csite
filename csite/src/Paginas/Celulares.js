import React, { useEffect, useState }from "react";
import api from "../servicos/api";
import { Link } from "react-router-dom";
import Produto from './Produto'
import Styles from '../pagStyle/Produtos.module.css'

export default function Celulares(){
    
    const [produto, setProduto] = useState();

    useEffect(()=> {api.get("/Celulares/")
        .then((resposta) => setProduto(resposta.data) )
        .catch((err)=> {console.log("deu errado " + err)}); 
    }, []);

    const type = "Celulares";
    
    return(
        <section className={Styles.Fundo}>   
            <ul className={Styles.ProduList}>
                {produto?.map((valor)=> (
                    <li key={valor.id}> <Link className={Styles.produLink} to={`/ProdutoDetalhes/${type}/${valor.id}`} ><Produto name={valor.name} price={valor.price} img={valor.img}/></Link> </li>
                    )) 
                }
            </ul>       
            
            
        </section>
    )
}