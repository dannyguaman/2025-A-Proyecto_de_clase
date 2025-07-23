// React solo es una librería de JavaScript para construir interfaces de usuario, 
// no es un framework completo como Angular o Vue.js. 
// Por lo tanto, no tiene un concepto de "módulos" como tal,
//  pero puedes organizar tu código en componentes y archivos para mantenerlo modular y reutilizable.
import React, {useState} from "react";
import "./restaurante.css";

function Restaurante(props) {
  const {_id, nombre, direccion, tipo, horario, reputacion} = props;
  const [preferencia, setPreferencia] = useState({
    likes: reputacion,
    dislikes: 0,
  });

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
    <div className="restaurante-container">
      <h1>{nombre}</h1>
      <h2>Dirección: {direccion}</h2>
      <h3>Tipo: {tipo}</h3>
      <h3>Horario de atención: {horario}</h3>
      <h4>{preferencia.likes} {preferencia.dislikes}</h4>
      <div className="preferencia-botones">
        <button 
          className="btn-like"
          onClick={() => handlerPreferencia("like")}
        >
          Like
        </button>
        <button 
          className="btn-dislike"
          onClick={() => handlerPreferencia("dislike")}
        >
          Dislike
        </button>
      </div>
    </div>
  );
}

export default Restaurante;


