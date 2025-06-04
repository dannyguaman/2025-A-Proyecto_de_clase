import Restaurante from './restaurante';
import Form from './form';
import React, { useState } from 'react';

const ListaRestaurantes = () => {
    const [_, setLikesTot] = useState(0);
    const [__, setMensajeErrorLikes] = useState("");
    const [state, setState] = React.useState({
        nombre: "",
        direccion: "",
        tipo: "",
        reputacion: 0,
    });
    const handlerTotalLikes = () => {
        setLikesTot(prevState => {
            setMensajeErrorLikes("");
            return prevState + 1;
        });
    }
    const handlerTotalDislikes = () => {
        setLikesTot(prevState => {
            if (prevState > 0) {

                return prevState - 1;
            } else {
                setMensajeErrorLikes("Los likes no pueden ser negativos");
                return prevState;
            }
        });
    }
    const restaurantes = [
        { nombre: "Restaurante El Buen Sabor", direccion: "Av. 10 de Agosto", tipo: "Ecuatoriana", onlike: handlerTotalLikes, ondislike: handlerTotalDislikes },
        { nombre: "Cafetería La Unión", direccion: "10 de Agosto", tipo: "Cafetería", onlike: handlerTotalLikes, ondislike: handlerTotalDislikes },
        { nombre: "La Mexicana", direccion: "La Prensa y La Católica", tipo: "Mexicana", onlike: handlerTotalLikes, ondislike: handlerTotalDislikes }
    ]
    const [restaurantesList, setRestaurantesList] = useState(restaurantes);
    const handleFormSubmit = (nuevoRestaurante) => {
        // Agregar los handlers de like/dislike al nuevo restaurante
        const restauranteConHandlers = {
            ...nuevoRestaurante,
            onlike: handlerTotalLikes,
            ondislike: handlerTotalDislikes
        };
        setRestaurantesList([
            ...restaurantesList,
            restauranteConHandlers
        ]);
        setState({
            nombre: "",
            direccion: "",
            tipo: "",
            reputacion: 0,
        });
        // Mostrar información del nuevo restaurante registrado
        alert(
            `Nuevo restaurante registrado:\n` +
            `Nombre: ${restauranteConHandlers.nombre}\n` +
            `Dirección: ${restauranteConHandlers.direccion}\n` +
            `Tipo: ${restauranteConHandlers.tipo}\n` +
            `Reputación: ${restauranteConHandlers.reputacion}`
        );
    }
    return (
        <div class="App">
            {restaurantesList.map((restaurante, index) => (
                <Restaurante
                    key={index}
                    {...restaurante}
                />
            ))}
            <Form state={state} setState={setState} onSubmit={handleFormSubmit} />
        </div>
    );
};
export default ListaRestaurantes;