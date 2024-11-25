import './ListUser.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function ListSale() {
    const [sales, setSales] = useState([]);
    const navigate = useNavigate(); // Usa useNavigate

    async function listSales() {
        const api = await fetch("http://localhost:8081/vendas/list");
        const resposta = await api.json();

        if (api.ok) {
            setSales(resposta);
        } else {
            alert("Erro ao buscar vendas");
        }
    }

    useEffect(() => {
        listSales();
    }, []);

    const handleUpdateClick = (id) => {
        // Redireciona para a página de atualização da venda com o ID
        navigate(`/update-sale/${id}`); // Usa navigate em vez de history.push
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID do Usuário</th>
                        <th>ID do Produto</th>
                        <th>Quantidade</th>
                        <th>Valor Total</th>
                        <th>Atualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.userId + '-' + sale.productId}>
                            <td>{sale.userId}</td>
                            <td>{sale.productId}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.totalValue}</td>
                            <td>
                                <input 
                                    type='button' 
                                    value="Atualizar" 
                                    onClick={() => handleUpdateClick(sale.userId)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSale;
