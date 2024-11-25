import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormUser from './components/FormUser';
import ListUser from './components/ListUser';
import UpdateUser from './components/UpdateUser';
import FormProduto from './components/FormProduto';
import ListProduto from './components/ListProduto';
import UpdateProduto from './components/UpdateProduto';
import FormVendas from './components/FormVendas';
import ListVendas from './components/ListVendas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/usuario' element={<FormUser />} />
        <Route path='/usuario-lista' element={<ListUser />} /> 
        <Route path='/usuario-atualizar/:id' element={<UpdateUser />} />
        <Route path='/produto' element={<FormProduto />} />
        <Route path='/produto-listar' element={<ListProduto />} /> 
        <Route path='/produto-atualizar/:id' element={<UpdateProduto />} />
        <Route path='/vendas' element={<FormVendas />} />
        <Route path='/vendas-listar' element={<ListVendas />} /> 
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
