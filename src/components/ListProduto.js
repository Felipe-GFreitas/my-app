import './ListUser.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function ListProduto() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate(); // Usa useNavigate

    async function listProduto() {
        const api = await fetch("http://localhost:8081/produto/list");
        const resposta = await api.json();

        if (api.ok) {
            setProdutos(resposta);
        } else {
            alert("Erro ao buscar produtos");
        }
    }

    useEffect(() => {
        listProduto();
    }, []);

    const handleUpdateClick = (id) => {
        // Redireciona para a página de atualização do usuário com o ID
        navigate(`/update-produto/${id}`); // Depois verificar a rota
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Usuário</th>
                        <th>Atualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.user.id}</td>
                            <td>
                                <input 
                                    type='button' 
                                    value="Atualizar" 
                                    onClick={() => handleUpdateClick(produto.id)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListProduto;
