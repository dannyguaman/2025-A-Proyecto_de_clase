import React from 'react';
import { useState } from 'react';

const Restaurante = (props) => {
const { nombre, direccion, tipo, imagen } = props;
const [likes, setLikes] = useState(0);
const [variables, setVariables] = useState(100);

   const handlerLike = () => {
        setLikes(
           likes + 1
        );
    }
        return (
            <div>
                <h1>{nombre}</h1>
                <h2>{direccion}</h2>
                <h3>{tipo}</h3>              
                <h4>{likes}</h4>
                <button onClick={handlerLike}>like</button>
            </div>);
}

export default Restaurante;