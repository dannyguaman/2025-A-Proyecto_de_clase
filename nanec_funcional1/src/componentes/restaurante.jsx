// React solo es una librería de JavaScript para construir interfaces de usuario, 
// no es un framework completo como Angular o Vue.js. 
// Por lo tanto, no tiene un concepto de "módulos" como tal,
//  pero puedes organizar tu código en componentes y archivos para mantenerlo modular y reutilizable.
import React, {useState} from "react";
import "./restaurante.css";


function Restaurante(props) {
    const { nombre, direccion, tipo } = props;

    const [preferencia, setPreferencia] = useState(
        {
        likes: 0,
        dislikes: 0,
        }
    );

    /*const handlerLike = () => {
        //setLikes(likes + 1);
        setLikes(prevState => {
            return (prevState + 1);
        })
    };

    const handlerDislike = () => {
        setDislikes(prevState => {
            return (prevState - 1);
        })
    }*/
   const handlerPreferencia = (tipo) => {
        if (tipo === "like") {
            setPreferencia(prevState => ({
                ...prevState,
                likes: prevState.likes + 1
            }));
        } else if (tipo === "dislike") {
            setPreferencia(prevState => ({
                ...prevState,
                dislikes: prevState.dislikes - 1
            }));
        }
    }
    return (
        <div>
            <h1>{nombre}</h1>
            <h2>{direccion}</h2>
            <h3>{tipo}</h3>
            <h4>{preferencia.likes}  {preferencia.dislikes}</h4>
            <button onClick={() => handlerPreferencia("like")}>Like</button> <button onClick={() => handlerPreferencia("dislike")}>Dislike</button>
        </div>
    );
}
export default Restaurante;


