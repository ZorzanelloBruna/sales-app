
interface Produto {
    id: number;
    produto: string;
    preco: number;
    descricao: string;
    dataCriacao: Date;
}

interface ColunaProps {
    dados: Produto [];
    onDelete : (id: number) => void;
    onEdit : (id: number) => void;

}

export const TabelaProdutos : React.FC<ColunaProps> = ({dados, onEdit, onDelete}) => {
    return (
        <div className="table-container">
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Data Criação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.produto}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.dataCriacao.toLocaleDateString()}</td>
                            <td>
                                <div className="control is-link">
                                    <button className="button is-primary" onClick={() => onEdit(produto.id)}>Editar</button>
                                    
                                    <button className="button is-danger" onClick={() => onDelete(produto.id)}>Deletar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
