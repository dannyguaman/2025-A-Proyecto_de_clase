import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
    const navegador = useNavigate();
    const handleLogin =() => {
        navegador("/restaurantes");
    }
  return (
    <div>
    <h1> PÁGINA DE INICIO </h1>
    <button onClick={handleLogin}>Ir a la lista de restaurantes</button>
    </div>
  );
};

export default Inicio;
