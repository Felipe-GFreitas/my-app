import { useState } from 'react'
import './FormUser.css'

function FormProduto(){
    const [name, setNome] = useState('')
    const [preco, setPreco] = useState()
    const [quantidade, setQuantidade] = useState()
    const [user, setUser] = useState()

    async function cadastroProduto(){

        console.log({
            "nome": name,
            "preco": preco,
            "quantidade": quantidade,
            "user": user
        });
        
        if(name=== "" || preco <= 0 || quantidade <= 0 || user <=0){
            alert("Preencha todos os campos")
            return
        }
        
        // integrar com a  API

        let api = await fetch("http://localhost:8081/produto/save",{
            method:"POST",
            body:JSON.stringify({
                "nome":name,
                "preco":preco,
                "quantidade":quantidade,
                "user":user
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        let response = await api.json();
        console.log(response);  // Log da resposta da API

        if (api.ok) {
            alert("Cadastro realizado com sucesso!");
            return;
    }
    }

    return(

        <div>
            <form>
                <h2>Cadastra-se</h2>
                <label htmlFor='Nome'>Nome:</label>
                <input 
                type='text' 
                id='Nome'
                name='nome'
                onChange={(e)=> setNome(e.target.value)}
                /><br/>

                <label htmlFor='Preco'>Preco:</label>
                <input 
                type='number'
                id='Preco' 
                name='preco'
                onChange={(e) => setPreco(e.target.value)}
                /><br/>

                <label htmlFor='Quantidade'>Quantidade:</label>
                <input 
                type='number' 
                id='Quantidade' 
                name='quantidade'
                onChange={(e)=> setQuantidade(e.target.value)}
                /><br/>

                <label htmlFor='User'>Usuário:</label>
                <input 
                type='number'
                id='User' 
                name='user'
                onChange={(e) => setUser(e.target.value)}
                /><br/>

                        
                <input type='button' value="Cadastra-se" onClick={cadastroProduto}/>
            </form>
        </div>
    )
}

export default FormProduto