import React, { useState } from "react";
import Restaurante from "./restaurante"; // importamos el componente Restaurante
import { Link, useNavigate } from "react-router-dom";
import "./listaRestaurantes.css"; // importamos el CSS para estilos

const ListaRestaurantes = ({ restaurantes, eliminarRestaurante, actualizarRestaurante }) => {
  const [likesTotales, setLikesTotales] = useState(0);
  const [mensajeErrorLikes] = useState("");
  
  const handlerLikeTotales = () => {
    setLikesTotales((prevState) => prevState + 1);
  };
  
  const handlerDislikeTotales = () => {
    setLikesTotales((prevState) => prevState - 1);
  };
  
  const navigate = useNavigate();
  
  const HandleCrearRestaurante = () => {
    navigate("/CrearRestaurante");
  }
  
  const HandleListaRestaurante = () => {
    navigate("/ListaRestaurante");
  }
  
  const HandleInicio = () => {
    navigate("/Inicio");
  };
  
  actualizarRestaurante = (restaurante) => {
    navigate("/ActualizarRestaurante", {
      state: { actRestaurante: restaurante }
    });
  };
  
  return (
    <div className="lista-restaurantes">
      <h2>Lista de Restaurantes</h2>
      {restaurantes.map((rest, idx) => (
        <div key={idx}>
          <Restaurante
            {...rest}
            handlerLikeTotales={handlerLikeTotales}
            handlerDislikeTotales={handlerDislikeTotales}
          />
          <div className="acciones-restaurante">
            <button onClick={() => eliminarRestaurante(idx)}>Eliminar Restaurante</button>
            <button onClick={() => actualizarRestaurante(rest)}>Actualizar Restaurante</button>
          </div>
        </div>
      ))}
      <h2>Total Likes: {likesTotales}</h2>
      <h4>{mensajeErrorLikes}</h4>
      <div className="navegacion">
        <Link to="/Inicio">Inicio</Link>
        <Link to="/CrearRestaurante">CrearRestaurante</Link>
        <Link to="/ListaRestaurante">ListaRestaurante</Link>
        <button onClick={HandleCrearRestaurante}> Go to CrearRestaurante</button>
        <button onClick={HandleListaRestaurante}> Go to ListaRestaurante</button>
        <button onClick={HandleInicio}> Go to Inicio</button>
      </div>
    </div>
  );
};

export default ListaRestaurantes; // exportamos el componente ListaRestaurantes