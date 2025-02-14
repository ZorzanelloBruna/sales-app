"use client";
import { useState } from "react";
import { Layout } from "@/src/components/layout/layout";
import { TabelaProdutos } from "@/src/components/tabela/tabelaprodutos";

export default function ConfigProdutos() {

        const [dados] = useState([
           { id: 1, produto: "celular", preco: 10.00, descricao:"sansung 20", dataCriacao: new Date("2025-03-19") },
           { id: 2, produto: "nootebok", preco: 1000.00, descricao:"AIO", dataCriacao: new Date("2025-03-10") },
           { id: 3, produto: "TV", preco: 2000.00, descricao:"LG", dataCriacao: new Date("2025-03-10") }
        ]);

        const handlerEdit = (id:number): void => {
            alert(`Editar produto com ID: ${id}`);
        }

        const handlerDelete = (id:number): void => {
            alert(`Editar produto com ID: ${id}`);
        }

        const [filtro, setFiltro] = useState("");
        const [tipoFiltro, setTipoFiltro] = useState("produto");
        const [ dataInicio, setDataInicio] = useState("");
        const [ dataFim, setDataFim] = useState("");

        const dadosFiltrados = dados.filter((item) => {
            if(tipoFiltro === 'dataCriacao' && dataInicio && dataFim){
                const dataItem = new Date(item.dataCriacao).getTime();
                const inicio = new Date(dataInicio).getTime();
                const fim = new Date(dataFim).getTime();
                return dataItem >= inicio && dataItem<= fim;
            } else if (tipoFiltro === 'produto') {
                return item.produto.toLowerCase().includes(filtro.toLowerCase());
            } else if (tipoFiltro === 'descricao') {
                return item.descricao.toLowerCase().includes(filtro.toLowerCase());
            } else if (tipoFiltro === 'preco') {
                return item.preco.toString().includes(filtro);
            }
            return true;
        });
      

    return (
        <Layout titulo="Configurações">
            <div className="columns">
                <div className="field column is-3">
                    <label className="label">Filtrar por:</label>
                        <div className="select is-fullwidth">
                            <select value={tipoFiltro} onChange={(e) => setTipoFiltro(e.target.value)}>
                                <option value="produto">Produto</option>
                                <option value="descricao">Descrição</option>
                                <option value="preco">Preço</option>
                                <option value="dataCriacao">Data</option>
                            </select>
                        </div>
                </div>
                {tipoFiltro !== 'dataCriacao' &&(
                    <div className="field column is-6">
                        <label className="label" htmlFor="pesquisa">Pesquisar:</label>
                        <input
                            className="input"
                            type="text"
                            id="pesquisa"
                            placeholder={`Digite ${tipoFiltro}...`}
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                        />
                    </div>
                )}
                {tipoFiltro === 'dataCriacao' && (                
                    <>
                    <div className="field column is-3">
                        <label className="label">Data Inicio:</label>
                            <div className="select is-fullwidth">
                                <input id="datainicio" 
                                    className="input" 
                                    type="date"
                                    value={dataInicio}
                                    onChange={(e) => setDataInicio(e.target.value)}/>
                            </div>
                    </div>
                    <div className="field column is-3">
                        <label className="label">Data Fim:</label>
                            <div className="select is-fullwidth">
                            <input id="datafim"
                                className="input"
                                type="date"
                                value={dataFim}
                                onChange={(e) => setDataFim(e.target.value)}
                            />
                            </div>
                    </div>
                    </>
                )}
                    <div className="field column is-3 btn-custom">
                        <button className="button is-link is-align-self-end">Pesquisar</button>
                    </div>
            </div>
            <TabelaProdutos dados={dadosFiltrados} 
                            onEdit={handlerEdit} 
                            onDelete={handlerDelete}/>
        </Layout>
    );
}