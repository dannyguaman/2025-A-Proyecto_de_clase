import './App.css';
import React from 'react';
import ListaRestaurantes from './componentes/listaRestaurantes';
import Form from './componentes/form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Inicio />}/>
      <Route path={"/restaurantes"} element={<ListaRestaurantes />}/>
      <Route path={"/formulario"} element={<Form />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
