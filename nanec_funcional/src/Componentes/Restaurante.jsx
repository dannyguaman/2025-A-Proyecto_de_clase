import React, { useState } from "react";
import "./Restaurante.css";

function Restaurante(props) {
  // Estado local para likes usando hook useState

  // sin objetos
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setdisLikes] = useState(0);
  //  const handlerlike = () => {
  //     setLikes((prevState) => {
  //       return prevState + 1;
  //     });
  //   };

  //   const Dislike = () => {
  //     setdisLikes((prevState) => {
  //       return prevState - 1;
  //     });
  //   };
  // con objetos

  const [preferencias, setpreferencias] = useState({
    likes: 0,
    dislikes: 0,
  }); // Estado para likes

  // Handler para aumentar likes

  // no se deb hacer
  // const handlerlike = () => {
  //   setLikes(likes + 1);
  // };

  // una foma de hacer
  // const handlerlike = () => {
  //   setpreferencias((prevState) => ({
  //     likes: prevState.likes + 1,
  //     dislikes: prevState.dislikes, // Mantiene el valor de dislikes
  //   }));
  // };

  const handlerlike = () => {
    // Llamar a la función del padre para incrementar el total de likes
    props.onlike();
    setpreferencias((prevState) => {
      // ...copia directa del objeto
      return {
        ...prevState,
        likes: prevState.likes + 1, // Incrementa likes
      };
    });
  };
  const Dislike = () => {
    props.ondislike();
    setpreferencias((prevState) => {
      // ...copia directa del objeto
      return {
        ...prevState,
        dislikeslikes: prevState.likes - 1, // Incrementa likes
      };
    });
  };

  const resaltarTexto = (texto, buscar) => {
    if (!buscar) return texto;

    const minusTexto = texto.toLowerCase();
    const minusBuscar = buscar.toLowerCase();
    const start = minusTexto.indexOf(minusBuscar);

    if (start === -1) return texto;

    const end = start + buscar.length;

    return (
      <>
        {texto.substring(0, start)}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {texto.substring(start, end)}
        </span>
        {texto.substring(end)}
      </>
    );
  };

  return (
    <div className="restaurante">
      <h1>{resaltarTexto(props.nombre, props.buscar)}</h1>
      <h2>{props.direccion}</h2>
      <h3>{resaltarTexto(props.tipo, props.buscar)}</h3>
      <h4>{preferencias.likes}</h4>
      <h4>{preferencias.dislikes}</h4>
      <button onClick={handlerlike}>like</button>
      <button onClick={Dislike}>dislike</button>
      {props.imagen && (
        <img
          src={props.imagen}
          alt="Imagen del restaurante"
          className="imagen-restaurante"
        />
      )}
    </div>
  );
}

export default Restaurante;
