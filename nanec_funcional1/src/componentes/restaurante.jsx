// React solo es una librería de JavaScript para construir interfaces de usuario, 
// no es un framework completo como Angular o Vue.js. 
// Por lo tanto, no tiene un concepto de "módulos" como tal,
//  pero puedes organizar tu código en componentes y archivos para mantenerlo modular y reutilizable.
import React, {useState} from "react";
import "./restaurante.css";


function Restaurante(props) {
    const [likes, setLikes] = useState(0);
    const { nombre, direccion, tipo } = props;

    function handlerLike(){
        setLikes(likes + 1);
    };

    return (
        <div>
            <h1>{nombre}</h1>
            <h2>{direccion}</h2>
            <h3>{tipo}</h3>
            <h4>{likes}</h4>
            <button onClick={handlerLike}>Like</button>
        </div>
    );
}
export default Restaurante;


