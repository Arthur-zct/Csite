import React from "react"
import api from "../servicos/api"
import { useState } from "react"
import { Link } from "react-router-dom"
import Style from '../pagStyle/AdProduto.module.css'

export default function Adproduto(){

    const [Name, setName] = useState()
    const [descricao, setDescri] = useState()
    const [preco, setPreco] = useState()
    const [img, setImg] = useState()

    function criarProduto(e) {
        e.preventDefault();

        const post = {Name,img, descricao, preco}

        api.post("Roupas", post)
    }

    return(
        <div>
            <h2>Inserir produto.</h2>
            <form onSubmit={(e) => criarProduto(e)}>
                <div>
                    <label htmlFor="Nome">Nome do produto:</label>
                    <input type="text" required="required" name="Nome" placeholder="Digite o Nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="conteudo">Descrição:</label>
                    <input type="text" required="required" name="conteudo" placeholder="Digite a descrição" onChange={(e) => setDescri(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="preco">Preço:</label>
                    <input type="text" required="required" name="preco" placeholder="Digite o preço" onChange={(e) => setPreco(e.target.value)}/>
                </div>
                <div className={Style.ADimg}>
                    <label htmlFor="imagem" >Adicionar imagem</label>
                    <input type="file" required="required" name="imagem" id="imagem" onChange={(e) => setImg(e.target.value)}/>
                </div>
                <div>
                    Escolha a categoria do produto: 
                    <br/>
                    <select name="categorias" required="required">
                        <option value="Roupas">Roupas</option>
                        <option value="Computadores">Computadores</option>
                        <option value="Moveis">Moveis</option>
                        <option value="Joias">Joias</option>
                    </select>
                </div>          
                <input type="submit" name="conteudo" placeholder="Digite a descrição" />        
            </form>
        </div>
    )
}