import React from "react";
import api from "../servicos/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
            <div>
                {produto?.name}
            </div>  
            
            
        </section>
    )
}