import './ListUser.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function ListUser() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Usa useNavigate

    async function listUser() {
        const api = await fetch("http://localhost:8081/user/list");
        const resposta = await api.json();

        if (api.ok) {
            setUsers(resposta);
        } else {
            alert("Erro ao buscar usuários");
        }
    }

    useEffect(() => {
        listUser();
    }, []);

    const handleUpdateClick = (id) => {
        // Redireciona para a página de atualização do usuário com o ID
        navigate(`/update-user/${id}`); // Usa navigate em vez de history.push
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Atualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.cpf_cnpj}</td>
                            <td>
                                <input 
                                    type='button' 
                                    value="Atualizar" 
                                    onClick={() => handleUpdateClick(user.id)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;
