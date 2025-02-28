'use client'
import { Layout } from "@/src/components/layout/layout";
import { useState } from "react";
import { useProdutoService } from "@/src/services";
import { Produto } from "@/src/models/produtos";

export default function CadastroProdutos() {

    const service = useProdutoService();
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    const submit = () => {
        const produto : Produto = {
            nome: nome,
            preco: parseFloat(preco),
            descricao: descricao
        };
        service
            .salvar(produto)
            .then(respostaProd => console.log(respostaProd));
    };


    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="columns">
                <div className="field is-half column">
                    <label className="label" htmlFor="nome">Nome:</label>
                    <div className="control">
                        <input className="input" 
                            type="text" 
                            id="nome"
                            onChange={event => setNome(event.target.value)}
                            placeholder="Digite o nome do produto"/>
                    </div>
                </div>
                <div className="field is-half column">
                    <label className="label" htmlFor="preco">Preço:</label>
                    <div className="control">
                        <input className="input" 
                            type="number" 
                            id="preco"
                            onChange={event => setPreco(event.target.value)}
                            step={0.01}
                            placeholder="Digite o preço do produto"/>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="field column is full">
                    <label className="label" htmlFor="descricao">Descrição:</label>
                    <div className="control">
                        <textarea className="textarea" 
                                  id="descricao" 
                                  onChange={event => setDescricao(event.target.value)}
                                  placeholder="Digite a descrição do produto">
                        </textarea>
                    </div>            
                </div>
            </div>
                <div className="field is-grouped">
                    <div className="control is-link">
                        <button className="button is-link"
                                onClick={submit}>
                                    Cadastrar
                        </button>
                    </div>
                    <div className="control is-link">
                        <button className="button is-primary">
                                Salvar alteração
                        </button>
                    </div>
                    <div className="control is-link">
                        <button className="button is-danger is-light">
                                Cancelar
                        </button>
                    </div>
                </div>
        </Layout>
    );
}
