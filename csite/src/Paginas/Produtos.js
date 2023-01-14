import React, { useEffect, useState } from "react";
import Styles from '../pagStyle/Produtos.module.css'
import api from "../servicos/api";
import Produto from './Produto'
import { Link } from "react-router-dom";

export default function Produtos(){
  const [produto, setProduto] = useState();

  useEffect(()=> {api.get("/Destaques/")
    .then((resposta) => setProduto(resposta.data) )
    .catch((err)=> {console.log("deu errado " + err)}); 
  }, []);

  const type = "Destaques";

  return(
    <section className={Styles.produtosContainer}>
      <h1>Destaques</h1>
      <ul className={Styles.ProduList}>
        {produto?.map((valor)=> (
          <li  key={valor.id}> <Link className={Styles.produLink} to={`/ProdutoDetalhes/${type}/${valor.id}`} ><Produto name={valor.name} price={valor.price} img={valor.img}/></Link> </li>
        ))}
      </ul>  
    </section>
  )
}