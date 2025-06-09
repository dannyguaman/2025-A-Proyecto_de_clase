import { useState } from "react";
import Restaurante from "./Restaurante";
const Form = (props) => {
  const handleNombreChange = (e) => {
    props.setState((prev) => {
      return { ...prev, nombre: e.target.value };
    });
  };
  const handleDireccionChange = (e) => {
    props.setState((prev) => {
      return { ...prev, direccion: e.target.value };
    });
  };
  const handleTipoChange = (e) => {
    props.setState((prev) => {
      return { ...prev, tipo: e.target.value };
    });
  };

  const onClickRegister = (e) => {
    if (!props.state.nombre || !props.state.direccion || !props.state.tipo) {
      alert("Por favor, llena todos los campos");
      return;
    }

    e.preventDefault();
    const newRestaurante = {
      nombre: props.state.nombre,
      direccion: props.state.direccion,
      tipo: props.state.tipo,
    };

    props.setRestaurantes((prev) => [...prev, newRestaurante]);

    props.setState({
      nombre: "",
      direccion: "",
      tipo: "",
    });
  };

  return (
    <form onSubmit={onClickRegister}>
      <div>
        <labe htmlFor="nombre">nombre</labe>
        <input
          name="nombre"
          type="text"
          onChange={handleNombreChange}
          value={props.state.nombre}
        />
      </div>

      <div>
        <labe htmlFor="direccion">direccion</labe>
        <input
          name="direccion"
          type="text"
          onChange={handleDireccionChange}
          value={props.state.direccion}
        />
      </div>

      <div>
        <labe htmlFor="tipo">tipo</labe>
        <input
          name="tipo"
          type="text"
          onChange={handleTipoChange}
          value={props.state.tipo}
        />
      </div>

      <button type="submit"> register </button>
    </form>
  );
};

export default Form;
