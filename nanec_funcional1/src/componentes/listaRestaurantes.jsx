import React, { useState} from "react";
import Restaurante from "./restaurante"; // importamos el componente Restaurante
import {Link, useNavigate } from "react-router-dom";
const ListaRestaurantes = ({ restaurantes, eliminarRestaurante, actualizarRestaurante}) => {
    const [likesTotales, setLikesTotales] = useState(0);
    const [mensajeErrorLikes] = useState(""); // Estado para manejar el mensaje de error de likes

    const handlerLikeTotales = () => {
        setLikesTotales((prevState) => prevState + 1); // Incrementa el contador de likes totales
    };
    

    const handlerDislikeTotales = () => {
        setLikesTotales((prevState) => prevState - 1); // Decrementa el contador de likes totales
    };

    const navigate = useNavigate(); // inicializamos useNavigate para redireccionar

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
     navigate("/ActualizarRestaurante", { state: { actRestaurante: restaurante } }); // redirecciona a la página de actualización del restaurante
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
                    <button onClick={() => eliminarRestaurante(idx)}>Eliminar Restaurante</button>
                    <br />
                    <button onClick={() => actualizarRestaurante(rest)}>Actualizar Restaurante</button>
                </div>
            ))}
            <h2>Total Likes: {likesTotales}</h2>
            <h4>{mensajeErrorLikes}</h4>
            <Link to="/Inicio">Inicio</Link>
            <br />
            <Link to="/CrearRestaurante">CrearRestaurante</Link>
            <br />
            <Link to="/ListaRestaurante">ListaRestaurante</Link>
            <br />
            <button onClick={HandleCrearRestaurante}> Go to CrearRestaurante</button>
            <br />
            <button onClick={HandleListaRestaurante}> Go to ListaRestaurante</button>
            <br />
            <button onClick={HandleInicio}> Go to Inicio</button>
        </div>
    );
};

export default ListaRestaurantes; // exportamos el componente ListaRestaurantes