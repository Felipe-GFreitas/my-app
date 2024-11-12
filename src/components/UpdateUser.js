import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FormUser.css';

function UpdateUser() {
    const { id } = useParams(); // Obtém o ID da URL
    const [user, setUser] = useState(); // Estado para armazenar os dados do usuário
    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf_cnpj, setCpfCnpj] = useState('');

    useEffect(() => {
        // Função para buscar os dados do usuário
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8081/user/${id}`); 
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                    setNome(userData.name);
                    setEmail(userData.email);
                    setPassword(userData.password);
                    setCpfCnpj(userData.cpf_cnpj);
                } else {
                    alert("Erro ao buscar usuário");
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("Erro na requisição");
            }
        };

        fetchUser(); // Chama a função para buscar os dados
    }, [id]); 

    const updateUser = async () => {
        if (name === "" || email === "" || password === "" || cpf_cnpj === "") {
            alert("Preencha todos os campos");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8081/user/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    cpf_cnpj,
                }),
            });

            if (response.ok) {
                alert("Usuário atualizado com sucesso!");

            } else {
                const errorData = await response.json();
                alert("Erro ao atualizar usuário: " + errorData.message);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição");
        }
    };

    return (
        <div>
            <form>
                <h2>Atualizar Usuário</h2>
                <label htmlFor='name'>Nome:</label>
                <input 
                    type='text' 
                    id='name'
                    value={name}
                    onChange={(e) => setNome(e.target.value)}
                /><br/>

                <label htmlFor='email'>Email:</label>
                <input 
                    type='email' 
                    id='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>

                <label htmlFor='senha'>Senha:</label>
                <input 
                    type='password'
                    id='senha' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>

                <label htmlFor='cpf_cnpj'>CPF / CNPJ:</label>
                <input 
                    type='text' 
                    id='cpf_cnpj' 
                    value={cpf_cnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                /><br/>
                        
                <input type='button' value="Atualizar" onClick={updateUser} />
            </form>
        </div>
    );
}

export default UpdateUser;
