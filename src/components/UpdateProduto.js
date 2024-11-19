// UpdateProduto.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FormUser.css';

function UpdateProduto() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [user, setUser] = useState('');

    const updateProduto = async () => {
        if (nome === "" || preco <= 0 || quantidade <= 0 || user <= 0) {
            alert("Preencha todos os campos corretamente");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8081/produto/update/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    preco,
                    quantidade,
                    user,
                }),
            });

            if (response.ok) {
                alert("Produto atualizado com sucesso!");
            } else {
                const errorData = await response.json();
                alert("Erro ao atualizar produto: " + errorData.message);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro na requisição");
        }
    };

    return (
        <div>
            <form>
                <h2>Atualizar Produto</h2>
                <label htmlFor='nome'>Nome:</label>
                <input 
                    type='text' 
                    id='nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                /><br/>

                <label htmlFor='preco'>Preço:</label>
                <input 
                    type='number' 
                    id='preco' 
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                /><br/>

                <label htmlFor='quantidade'>Quantidade:</label>
                <input 
                    type='number'
                    id='quantidade' 
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                /><br/>

                <label htmlFor='user'>Usuário:</label>
                <input 
                    type='number' 
                    id='user' 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                /><br/>
                        
                <input type='button' value="Atualizar" onClick={updateProduto} />
            </form>
        </div>
    );
}

export default UpdateProduto;
