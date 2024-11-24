import { useState } from 'react';
import './FormUser';

function FormSale() {
    const [userId, setUserId] = useState('');
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    async function realizarVenda() {
        if (userId === "" || productId === "" || quantity === "") {
            alert("Preencha todos os campos");
            return;
        }

        try {
            let response = await fetch("http://localhost:8081/vendas", {
                method: "POST",
                body: JSON.stringify({
                    "userId": userId,
                    "productId": productId,
                    "quantity": parseInt(quantity)
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert("Venda realizada com sucesso!");
            } else {
                alert("Erro ao realizar a venda!");
            }
        } catch (error) {
            alert("Erro na conexão com o servidor!");
        }
    }

    return (
        <div>
            <form>
                <h2>Realizar Venda</h2>

                <label htmlFor='userId'>ID do Usuário:</label>
                <input
                    type='text'
                    id='userId'
                    name='userId'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                /><br/>

                <label htmlFor='productId'>ID do Produto:</label>
                <input
                    type='text'
                    id='productId'
                    name='productId'
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                /><br/>

                <label htmlFor='quantity'>Quantidade:</label>
                <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                /><br/>

                <input type='button' value="Realizar Venda" onClick={realizarVenda} />
            </form>
        </div>
    );
}

export default FormSale;
